

let app = require('express')();

let server = require('http').createServer(app);

const WebSocket = require("ws");

app.get("/", (req, res) => {

   const url = "ws://34.87.63.155:8080/feedService/productPrice";
  const connection = new WebSocket(url);


});
 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});


