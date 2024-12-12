const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Conexión a la base de datos establecida");
    })
    .catch((error) => {
      console.error("Error al conectar a la base de datos:", error);
      process.exit(1);
    });
};

module.exports = connectDatabase;
