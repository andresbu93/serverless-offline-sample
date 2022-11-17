import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const lambda = new AWS.Lambda({
  endpoint: process.env.LAMBDA_ENDPOINT,
});

const handler = async () => {
  const params = {
    FunctionName: process.env.LAMBDA_FUNCTION_NAME,
  };

  const result = await lambda.invoke(params).promise();
  return {
    body: JSON.stringify(result),
    statusCode: 200,
  };
};

export default handler;
