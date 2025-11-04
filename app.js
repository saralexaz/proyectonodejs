const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Usamos un helper para conectar a Postgres (lib/db.js)
const db = require("./lib/db");
const path = require("path");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Servir archivos estáticos (HTML/CSS/JS/Imagenes) desde src/public
app.use(express.static(path.join(__dirname, "src", "public")));

// Rutas y páginas públicas (HTML, CSS, JS, Imagenes)
require("./src/routes/main_routes")(app);


// Load API routes (these use db.query; if DB isn't ready they will return errors)
require("./src/routes/app_routes")(app, db);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
