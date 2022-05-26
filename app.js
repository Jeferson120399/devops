const express = require("express");
const router = express.Router();
//aqui inicializamos express
var app = express();
app.use(router);


/*Indica a 'express' que en la carpeta 'public' se
existen los archivos estáticos cuando solicita '/app' (Ej: localhost:3000/app) */
app.use('/devops', express.static('public'));
 
//cada vez que se ingrese a cualquier sitios se ejecutará
//lo que está dentro de la función anónima que está como parámetro
app.use('/', function(req, res){
 
    //envía un mensaje
    res.send('Hola Mundo Prueba 1 ');
  });

//el puerto 3000 se usa mucho en aplicaciones node.
//esta es la forma de darle vida a la aplicación de express
app.listen(process.env.PORT ||3000);
console.log('La aplicación está escuchando en http:localhost:3000/')