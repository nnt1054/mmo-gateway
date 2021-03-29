import express from 'express';

async function generateGateway() {
  var app = express();
  await require('./loaders').default(app);
  return app;
}

module.exports = generateGateway