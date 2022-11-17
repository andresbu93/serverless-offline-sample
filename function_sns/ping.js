const AWS = require("aws-sdk");
require("dotenv").config();

const ping = (event, context, callback) => {
  console.log("ping");

  var sns = new AWS.SNS(JSON.parse(process.env.SNS_CONFIG ?? "{}"));
  sns
    .publish({
      Message: '{"default": "Hello World!"}',
      MessageStructure: "json",
      TopicArn: process.env.SNS_TOPIC,
    })
    .promise();
  callback(null, {});
};

exports.ping = ping;
