const express = require('express');
const app = new express();
const spawn = require('child_process');

app.get('/', function(request, response){
  response.sendFile("/Users/john/Documents/Archangel-Server/Assets/Ascii_angel.html")
  Ping();
}).listen(25444);
console.log("Server running on Port 25444");

function Ping() {
console.log("Request Detected: Activating Centurion.");
spawn.exec('wakeonlan -i 100.98.47.255 2C:F0:5D:07:CD:40');
}
