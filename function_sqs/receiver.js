export default (event, context, callback) => {
  console.log(event.Records[0].body);
  callback(null, {});
};
