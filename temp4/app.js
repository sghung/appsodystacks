const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! geh");
});
 
module.exports.app = app;
