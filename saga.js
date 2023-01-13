import connect from "./connetion";
import parseMessage from "./helpers/parseMessage";
import payloadToBuffer from "./helpers/payloadToBuffer";
import msgActionValidator from "./helpers/msgActionValidator";

class Saga {
  constructor(channel, currentQueue, options) {
    const { pingPongLimit, responseTimeout } = options;

    this.channel = channel;
    this.pingPongLimit = pingPongLimit;
    this.responseTimeout = responseTimeout;
    this.currentQueue = currentQueue;
  }

  /**
   * It connects to RabbitMQ and returns a Saga object
   * @returns A Saga object
   */
  static async build(
    url,
    currentQueue,
    {
      connectionOptions,
      pingPongLimit = 10,
      responseTimeout = 1000,
    }
  ) {
    const { channel } = await connect({ url, connectionOptions });

    if (!channel) {
      throw new Error("Could not connect to RabbitMQ");
    }

    return new Saga(channel, currentQueue, { pingPongLimit, responseTimeout });
  }



  /**
   * It asserts that a queue exists, and then sends a message to that queue
   * @param queueName - The name of the queue to send the message to.
   * @param body - The data to be sent to the queue.
   * @returns The return value is a boolean indicating whether the message was sent to the queue.
   */
  async putToQueue (queueName, body) {
    await this.channel.assertQueue(queueName, { durable: true });

    return this.channel.sendToQueue(queueName, payloadToBuffer(body));
  }

  /**
   * It takes a queue name, a callback function, and a validator function, and returns a promise that resolves to the first
   * message that passes the validator
   * @param queueName - The name of the queue to take from
   * @param [cb] - a callback function that will be called when the message is received.
   * @param [validator] - a function that takes the payload and returns true if the message is valid.
   * @returns A promise that resolves to the payload of the message.
   */
  async takeFromQueue (queueName, cb = () => null, validator = () => true) {
    await this.channel.assertQueue(queueName, { durable: true });

    return new Promise((resolve, reject) => {
      this.channel.consume(queueName, (msg) => {
        if (msg !== null) {
          try {
            const payload = parseMessage(msg);
            if (validator(payload)) {
              this.channel.ack(msg);
              this.cancelSubscription(msg.fields.consumerTag).then(() => {
                cb(payload);
                resolve(payload);
              });
            }
          } catch (error) {
            reject(error);
          }
        }
      });
    });
  }

  /**
   * It subscribes to a queue, and when a message is received, it validates the message and if it's valid, it calls the
   * subscriber function with the message payload
   * @param queueName - The name of the queue to subscribe to.
   * @param [subscriber] - a function that will be called when a message is received.
   * @param [validator] - a function that takes the payload and returns true if the message is valid and should be
   * processed.
   * @returns A promise that resolves to a consumer tag.
   */
  async subscribeToQueue (queueName, subscriber = () => null, validator = () => true) {
    await this.channel.assertQueue(queueName, { durable: true });

    return this.channel.consume(queueName, (msg) => {
      if (msg !== null) {
        try {
          const payload = parseMessage(msg);
          if (validator(payload)) {
            channel.ack(msg);
            subscriber(payload, msg.fields.consumerTag);
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  }

  async cancelSubscription(consumerTag) {
    return this.channel.cancel(consumerTag);
  }

  /* It's a function that takes a queue name and returns a function that takes an action and a payload and returns a
  message. */
  putActionBuilder = (queueName) => (action) => this.putToQueue(queueName, action);

  /* It's a function that takes a queue name and returns a function that takes an action and a payload and returns a
  message. */
  takeActionBuilder = (queueName) => (actionName, cb, validator = () => true) =>
    this.takeFromQueue(queueName, cb, (msg) => msgActionValidator(msg, actionName) && validator(msg));

  /* It's a function that takes a queue name and returns a function that takes an action and a payload and returns a
  message. */
  subscribeActionBuilder = (queueName) => (actionName, cb, validator = () => true) =>
    this.subscribeToQueue(queueName, cb, (msg) => msgActionValidator(msg, actionName) && validator(msg));

  /* It's a function that takes an action name, a callback function, and a validator function, and returns a promise
  that resolves to the first message that passes the validator. */
  takeFromCurrentQueue = (actionName, cb, validator = () => true) =>
    this.takeActionBuilder(this.currentQueue)(actionName, cb, validator);

  /* It's a function that takes an action name, a callback function, and a validator function, and returns a promise
    that resolves to the first message that passes the validator. */
  subscribeToCurrentQueue = (actionName, cb, validator = () => true) =>
    this.subscribeActionBuilder(this.currentQueue)(actionName, cb, validator);
}

export default Saga;
