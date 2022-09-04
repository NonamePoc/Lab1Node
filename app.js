const http = require('http');
const  Module = require("./module")



const server = http.createServer((req, res) => {
   const  _module = new Module.Module("Pasha");

   res.write(_module.getMessage());
   res.end();

});

server.listen(5000);