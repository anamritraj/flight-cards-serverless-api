'use strict';
const Alexa = require('alexa-sdk');

module.exports.handler = (event, context, callback) => {
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Go Serverless v1.0! Your function executed successfully!',
  //     input: event,
  //   }),
  // };

  console.log('main: Alexa.handler');
  var alexa = Alexa.handler(event, context);
  alexa.appId = "amzn1.ask.skill.114521e9-995f-440f-ac0c-983cdce4733e";

  console.log('main: alexa.registerHandlers');
  alexa.registerHandlers(
      require("./handlers/defaultHandler"),
      require("./handlers/mainHandler")
  );
  console.log('main: before alexa.execute');
  alexa.execute();
  console.log('main: after alexa.execute');

  // callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
