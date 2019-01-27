'use strict'

const app = require('../server/server');
const ds = app.datasources.mysql;

const models = ['Prayer'];

ds.automigrate(models, (err) => {
  if (err) {
    throw err;
  }
  console.log('models created!');
  ds.disconnect();
  process.exit();
});
