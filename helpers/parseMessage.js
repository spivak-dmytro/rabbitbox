const parseMessage = (msg) => {
  if (msg === null) {
    return null;
  }

  return JSON.parse(msg.content.toString());
}

export default parseMessage;
