// config/db.js
const mongoose = require("mongoose");
//mongodb://localhost:27017
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mintrabajoapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
    process.exit(1);
  }
};

module.exports = connectDB;
