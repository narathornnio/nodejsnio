

let app = require('express')();

let server = require('http').createServer(app);

const WebSocket = require("ws");
let msg = ''
app.get("/", (req, res) => {

  res.send(msg);
});


 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
   const url = 'ws://34.87.63.155:8080/feedService/productPrice'
  const connection = new WebSocket(url)
  connection.onmessage = e => {
      msg = e.data
    } 

});


