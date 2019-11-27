const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! Let's go");
});
 
module.exports.app = app;
