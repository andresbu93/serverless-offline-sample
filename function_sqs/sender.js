import AWS from "aws-sdk";

export default (event, context, callback) => {
  const sqs = new AWS.SQS({
    apiVersion: "2012-11-05",
    endpoint: "http://localhost:9324",
  });

  const params = {
    QueueUrl: "http://localhost:9324/queue/testQueue",
    MessageBody: "Hello world",
  };

  console.log("Sending message");
  sqs.sendMessage(params).promise();
  callback();
};
