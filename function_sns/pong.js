const pong = (event, context, callback) => {
  console.log(`pong: ${event.Records[0].Sns.Message}`);
  callback(null, {});
};

exports.pong = pong;
