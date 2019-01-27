'use  strict'
const app = require("../server/server");
const ds = app.datasources.mysql;

const models = ["Prayer", "like"];

ds.autoupdate(models,(err) =>{
 if(err){
   throw err;
 }
 console.log("models updated!");
 ds.disconnect();
 process.exit();
});
