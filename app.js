const express = require("express");
 
//aqui inicializamos express
var app = express();
 
//cada vez que se ingrese a cualquier sitios se ejecutará
//lo que está dentro de la función anónima que está como parámetro
app.use('/', function(req, res){
 
  //envía un mensaje
  res.send('Hola Mundo');
});
 
//el puerto 3000 se usa mucho en aplicaciones node.
//esta es la forma de darle vida a la aplicación de express
app.listen(3000);
console.log('La aplicación está escuchando en http:localhost:3000/')