const express = require ("express");
const app = express ();
const path = require ("path");
const publicPath = path.resolve(__dirname, "./public") ;
app.use (express.static (publicPath)); //le decimos a express que queremos tener la carpeta public 
//como un recurso de archivos estáticos para que siempre los podamos consumir de manera sencilla. 
//La carpeta views tendrá como objetivo guardar todas las vistas de nuestra aplicación.
//Ahí guardaremos todos los archivos html.

app.listen (3000, () => {console.log ("Bienvenidos a mi primera página")})
//Abrimos el servidor. Mostraremos el mensaje "Bienvenidos a mi primera página" al abrirlo.
