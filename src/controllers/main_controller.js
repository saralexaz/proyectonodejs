const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

function sendStatic(filename) {
  return (req, res) => {
    const file = path.join(publicDir, filename);
    res.sendFile(file);
  };
}

// Index y páginas principales
// El archivo está en src/public/1-index.html — usar path relativo dentro de publicDir
const index = sendStatic("1-index.html");
const roles = sendStatic("2-roles.html");

// Persona
const persona = sendStatic("3-persona.html");
const personaAgregar = sendStatic("3.1-per_agregar.html");
const personaListar = sendStatic("3.2-per_listar.html");
const personaEditar = sendStatic("3.3-per_editar.html");

// Solicitud
const solicitud = sendStatic("4-solicitud.html");
const solicitudAgregar = sendStatic("4.1-sol_agregar.html");
const solicitudListar = sendStatic("4.2-sol_listar.html");
const solicitudEditar = sendStatic("4.3-sol_editar.html");

// Publicacion
const publicacion = sendStatic("5-publicacion.html");
const publicacionAgregar = sendStatic("5.1-pub_agregar.html");
const publicacionListar = sendStatic("5.2-pub_listar.html");
const publicacionEditar = sendStatic("5.3-pub_editar.html");

// Multimedia
const multimedia = sendStatic("6-multimedia.html");
const multimediaAgregar = sendStatic("6.1-mul_agregar.html");
const multimediaListar = sendStatic("6.2-mul_listar.html");
const multimediaEditar = sendStatic("6.3-mul_editar.html");

// Contacto
const contacto = sendStatic("7-contacto.html");
const contactoAgregar = sendStatic("7.1-con_agregar.html");
const contactoListar = sendStatic("7.2-con_listar.html");
const contactoEditar = sendStatic("7.3-con_editar.html");

// Ruta comodín
function page(req, res) {
  const file = req.params.name;
  res.sendFile(path.join(publicDir, file));
}

module.exports = {
  index,
  roles,
  persona,
  personaAgregar,
  personaListar,
  personaEditar,
  solicitud,
  solicitudAgregar,
  solicitudListar,
  solicitudEditar,
  publicacion,
  publicacionAgregar,
  publicacionListar,
  publicacionEditar,
  multimedia,
  multimediaAgregar,
  multimediaListar,
  multimediaEditar,
  contacto,
  contactoAgregar,
  contactoListar,
  contactoEditar,
  page,
};
