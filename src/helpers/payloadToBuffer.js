const payloadToBuffer = (msg) => {
  if (msg === null) {
    return null;
  }

  return Buffer.from(JSON.stringify(msg));
}

export default payloadToBuffer;
