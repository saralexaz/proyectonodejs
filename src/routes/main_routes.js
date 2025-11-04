const path = require("path");

/**
 * Registra las rutas públicas que devuelven los HTML presentes en src/public
 * Delega la lógica de respuesta al controlador `main_controller`
 * @param {import('express').Express} app
 */
module.exports = function (app) {
  const publicDir = path.join(__dirname, "..", "public");
  const controller = require("../controllers/main_controller");

  // Servir assets estáticos (CSS, JS, Imagenes, etc.) desde /public
  app.use("/public", require("express").static(publicDir));

  // Rutas amigables delegadas al controller
  app.get("/", controller.index);
  app.get("/roles", controller.roles);

  // Persona
  app.get("/persona", controller.persona);
  app.get("/persona/agregar", controller.personaAgregar);
  app.get("/persona/listar", controller.personaListar);
  app.get("/persona/editar", controller.personaEditar);

  // Solicitud
  app.get("/solicitud", controller.solicitud);
  app.get("/solicitud/agregar", controller.solicitudAgregar);
  app.get("/solicitud/listar", controller.solicitudListar);
  app.get("/solicitud/editar", controller.solicitudEditar);

  // Publicacion
  app.get("/publicacion", controller.publicacion);
  app.get("/publicacion/agregar", controller.publicacionAgregar);
  app.get("/publicacion/listar", controller.publicacionListar);
  app.get("/publicacion/editar", controller.publicacionEditar);

  // Multimedia
  app.get("/multimedia", controller.multimedia);
  app.get("/multimedia/agregar", controller.multimediaAgregar);
  app.get("/multimedia/listar", controller.multimediaListar);
  app.get("/multimedia/editar", controller.multimediaEditar);

  // Contacto
  app.get("/contacto", controller.contacto);
  app.get("/contacto/agregar", controller.contactoAgregar);
  app.get("/contacto/listar", controller.contactoListar);
  app.get("/contacto/editar", controller.contactoEditar);

  // Ruta comodín para servir cualquier HTML existente dentro de src/public por nombre
  app.get("/page/:name", controller.page);
};
