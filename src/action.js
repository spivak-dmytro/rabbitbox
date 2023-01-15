import { uuid } from 'uuidv4';
import { omit } from "lodash";
import actionStatuses from "./constants/actionStatuses";

class Action {
  constructor(saga, queue, name, payload, previousAction = null) {
    if (!saga || !saga.channel) {
      throw new Error("Don't use the constructor directly. Use [Saga instance].createAction() or [Action instance].nextAction() instead.");
    }

    this.id = uuid();
    this.saga = saga;
    this.queue = queue;
    this.name = name;
    this.payload = payload;
    this.previousAction = previousAction;
    this.status = actionStatuses.PENDING
    this.responseQueue = this.saga.currentQueue;
  }

  /**
   * It subscribes to the response queue, and waits for a response to the action with the given id. If the response is
   * successful, it calls the onSuccessfulResponse function, and if it's a failure, it calls the onFailedResponse function
   * @param actionName - The name of the action you're waiting for a response for.
   * @param onSuccessfulResponse - a function that will be called if the response is successful.
   * @param onFailedResponse - A function that will be called if the response action has a status of FAILURE.
   */
  async #waitForResponse(actionName, onSuccessfulResponse, onFailedResponse) {
    const subscribeAction = this.saga.subscribeActionBuilder(this.responseQueue);

    const consTag = await subscribeAction(actionName, async (action, consumerTag) => {
      if (action.previousAction.id === this.id) {
        if (action.status === actionStatuses.SUCCESS) {
          await onSuccessfulResponse(action);
        } else if (action.status === actionStatuses.FAILURE) {
          await onFailedResponse(action);
        }
        await this.saga.cancelSubscription(consumerTag);
      }
    });

    setTimeout(async () => {
      await this.saga.cancelSubscription(consTag);
    }, this.saga.responseTimeout);
  }

  /**
   * > It returns a new object that is a copy of the current object, but without the specified fields
   * @returns The omitFields() method returns an object that contains all the properties of the Action object except for
   * the id, name, payload, previousAction, status, and responseQueue properties.
   */
  #omitFields() {
    return omit(this, ['id, name, payload, previousAction, status, responseQueue']);
  }

  /**
   * It creates a new action (as new link), sends it to the queue, and returns the response
   * @param queueName - The name of the queue to send the action to.
   * @param actionName - The name of the action you want to send.
   * @param payload - The payload of the action.
   * @param [onSuccessfulResponse] - A callback function that will be called when the action is successfully processed.
   * @param [onFailedResponse] - A callback function that will be called if the response from the server is not successful.
   * @returns A promise.
   */
  async nextAction(queueName, actionName, payload, onSuccessfulResponse = () => null, onFailedResponse = () => null) {
    const newAction = new Action(this.saga, queueName, actionName, payload, this.#omitFields());

    return newAction.send(onSuccessfulResponse, onFailedResponse);
  }

  /**
   * > It sends the action to the queue, and then waits for a response
   * @param [onSuccessfulResponse] - a callback function that will be called when the response is received.
   * @param [onFailedResponse] - a callback function that will be called when the response is received and it's a failed
   * response.
   * @returns The instance of the class.
   */
  async send(onSuccessfulResponse = () => null, onFailedResponse = () => null) {
    const putAction = this.saga.putActionBuilder(this.queue);

    await putAction(this.#omitFields());

    // wait for response
    await this.#waitForResponse(this.name, onSuccessfulResponse, onFailedResponse);

    return this;
  }

  /**
   * It creates a new action, sets the status, and sends it to the response queue
   * @param payload - The payload to send to the response queue.
   * @param status - The status of the response.
   * @returns A promise that resolves to the response from the saga.
   */
  async #sendResponse(payload, status) {
    const newAction = new Action(this.saga, this.name, payload, this.#omitFields());
    newAction.status = status;

    return newAction.send(this.responseQueue);
  }

  /**
   * It returns a response object with the payload and status set to success
   * @param payload - The data you want to send back to the client.
   * @returns the result of the #sendResponse function.
   */
  async success(payload) {
    return this.#sendResponse(payload, actionStatuses.SUCCESS);
  }

  /**
   * It takes a payload and a status, and sends a response to the client
   * @param payload - The data you want to send back to the client.
   * @returns the result of the #sendResponse function.
   */
  async failure(payload) {
    return this.#sendResponse(payload, actionStatuses.FAILURE);
  }
}


export default Action;
