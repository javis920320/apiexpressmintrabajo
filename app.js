// app.js
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')

// Crear una instancia de la aplicación Express
const app = express();

// Conectar a la base de datos
connectDB();

// Resto de la configuración y rutas de tu aplicación Express
const funcionariosRouter=require("./routes/funcionarios")
app.use(bodyParser.json()) 
// ...
app.use("/api/funcionarios",funcionariosRouter)


// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});