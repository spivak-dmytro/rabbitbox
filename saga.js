import connect from "./connetion";
import parseMessage from "./helpers/parseMessage";
import payloadToBuffer from "./helpers/payloadToBuffer";
import msgActionValidator from "./helpers/msgActionValidator";

let channel = null;

/**
 * It returns a RabbitMQ channel, creating one if necessary
 * @returns A promise that resolves to a channel.
 */
const getChannel = async () => {
  if (!channel) {
    const { channel: ch } = await connect();
    channel = ch;
  }

  if (!channel) {
    throw new Error("Could not connect to RabbitMQ");
  }

  return channel;
}

/**
 * It gets a channel, asserts a queue, and sends a message to the queue
 * @param queueName - The name of the queue to send the message to.
 * @param payload - The data you want to send to the queue.
 * @returns A promise that resolves to undefined.
 */
export const putToQueue = async (queueName, payload) => {
  try {
    await getChannel();
  } catch (error) {
    console.error(error);
    return;
  }

  channel.assertQueue(queueName, { durable: true });
  channel.sendToQueue(queueName, payloadToBuffer(payload));
}

/**
 * It takes a queue name, a callback function, and a validator function, and returns a promise that resolves with the first
 * message in the queue that passes the validator
 * @param queueName - The name of the queue to take from
 * @param [cb] - a callback function that will be called when a message is received.
 * @param [validator] - a function that takes the payload and returns true if the message is valid.
 * @returns A promise that resolves to the payload of the message.
 */
export const takeFromQueue = async (queueName, cb = () => null, validator = () => true) => {
  try {
    await getChannel();
  } catch (error) {
    console.error(error);
    return;
  }

  channel.assertQueue(queueName, { durable: true });

  return new Promise((resolve, reject) => {
    channel.consume(queueName, (msg) => {
      if (msg !== null) {
        try {
          const payload = parseMessage(msg);
          if (validator(payload)) {
            channel.ack(msg);
            resolve(payload);
          }
        } catch (error) {
          reject(error);
        }
      }
    });
  });
}

/**
 * It subscribes to a queue, and calls a subscriber function with the message payload when a message is received
 * @param queueName - The name of the queue to subscribe to.
 * @param [subscriber] - a function that will be called when a message is received.
 * @param [validator] - a function that takes the message payload and returns true if the message is valid and should be
 * processed, or false if the message is invalid and should be discarded.
 * @returns A function that takes a payload and passes it to the subscriber function.
 */
export const subscribeToQueue = async (queueName, subscriber = () => null, validator = () => true) => {
  try {
    await getChannel();
  } catch (error) {
    console.error(error);
    return;
  }

  channel.assertQueue(queueName, { durable: true });

  channel.consume(queueName, (msg) => {
    if (msg !== null) {
      try {
        const payload = parseMessage(msg);
        if (validator(payload)) {
          channel.ack(msg);
          subscriber(payload);
        }
      } catch (error) {
        console.error(error);
      }
    }
  });

  return subscriber;
}

const putActionBuilder = (queueName) => (action, payload) => putToQueue(queueName, { action, payload });

const takeActionBuilder = (queueName) => (action, cb, validator = () => true) =>
  takeFromQueue(queueName, cb, (msg) => msgActionValidator(msg) && validator(msg));

const subscribeActionBuilder = (queueName) => (action, cb, validator = () => true) =>
  subscribeToQueue(queueName, cb, (msg) => msgActionValidator(msg) && validator(msg));


export default {
  putToQueue,
  takeFromQueue,
  subscribeToQueue,
  putActionBuilder,
  takeActionBuilder,
  subscribeActionBuilder,
}
