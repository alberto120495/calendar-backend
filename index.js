const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

//!Crear el servidor de express
const app = express();

//!Base de datos
dbConnection();

//!CORS
app.use(cors());

//!Lectura y parseo del body
app.use(express.json());

//!Directorio Publico
app.use(express.static("public"));

//!Rutas
app.use("/api/auth", require("./routes/auth"));

//!Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
