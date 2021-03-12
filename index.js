

let app = require('express')();

let server = require('http').createServer(app);
let io = require('socket.io')(server);
 
app.get("/", (req, res) => {
  
    res.send('kl;lk;l;');
 
});
 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});


