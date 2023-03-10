import amqp from "amqplib";

/**
 * It connects to RabbitMQ and creates a channel
 * @returns An object with two properties: connection and channel.
 */
const connect = async ({ url, connectionOptions }) => {
  try {
    const connection = await amqp.connect(url, connectionOptions);
    const channel = await connection.createChannel();
    return { connection, channel };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default connect;
