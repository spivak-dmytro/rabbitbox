/**
 * If the message is an object, and it has an action property that matches the actionName parameter, then return true.
 * @param msg - The message that was sent to the bot.
 * @param actionName - The name of the action to validate against.
 */
const msgActionValidator = (msg, actionName) =>
  typeof msg === 'object' && msg !== null && msg.action === actionName;

export default msgActionValidator;
