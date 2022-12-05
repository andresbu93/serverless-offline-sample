import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const handler = async () => {
  const db = new AWS.DynamoDB.DocumentClient(
    JSON.parse(process.env.DYNAMO_OPTIONS ?? "{}")
  );

  const param = {
    TableName: process.env.TABLE_NAME,
  };

  const output = await db.scan(param).promise();
  return {
    body: JSON.stringify(output.Items),
    statusCode: 200,
  };
};

export default handler;
