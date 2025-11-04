const apiUrl = "http://localhost:3000/api/solicitud";

//para la pagina listar
function cargarSolicitudd() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.querySelector("#cuerpo-tabla"); // Usamos '#cuerpo-tabla'
      tbody.innerHTML = "";
      data.forEach((solicitud) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${solicitud.cod_sol}</td>
            <td>${solicitud.act_sol}</td>
            <td>${solicitud.est_sol}</td>
            <td class="acciones-tabla">
                <a href="4.1-sol_agregar.html?id=${solicitud.cod_sol}" class="boton-accion-tabla" title="Editar">✎</a>
                <a href="#" onclick = 'eliminarSolicitud(${solicitud.cod_sol})' class="boton-accion-tabla" title="Eliminar">🗑️</a> 
            </td>`;
        tbody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error al cargar la solicitud: ", error));
}

//funcion para agregar nueva solicitud
function agregarNuevaSol() {
  document.getElementById("formulario").reset();
  document.getElementById("id").value = "";
}
//guncion editar solicitud
function editarSolicitud(id) {
  fetch(`${apiUrl}/${id}`)
    .then((response) => response.json())
    .then((solicitud) => {
      document.getElementById("fk1_per").value = solicitud.fk1_per;
      document.getElementById("fk2_per").value = solicitud.fk2_per;
      document.getElementById("act_sol").value = solicitud.act_sol;
      document.getElementById("est_sol").value = solicitud.est_sol;
      document.getElementById("id").value = solicitud.cod_sol;
    })
    .catch((error) => console.error("Error al obtener la solicitud", error));
}

// Bloque para detectar si la página se cargó para EDICIÓN y cargar los datos
if (window.location.href.includes("4.1-sol_agregar.html")) {
  // Crea un objeto para leer los parámetros de la URL
  const urlParams = new URLSearchParams(window.location.search);
  // Obtiene el valor del parámetro 'id'
  const id = urlParams.get("id");

  // Si se encuentra un ID en la URL, llamamos a la función editarPersona
  if (id) {
    editarSolicitud(id);
  }
}

//funcion eliminar
function eliminarSolicitud(id) {
  // Usamos confirm() para que aparezca el aviso
  if (
    confirm(
      "¿Estás seguro de que quieres eliminar este registro? Esta acción no se puede deshacer."
    )
  ) {
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        alert("Solicitud eliminada");
        cargarSolicitudd(); //recargar la tabla
      })
      .catch((error) => console.error("Error al eliminar la solicitud", error));
  }
}

if (document.querySelector("#cuerpo-tabla")) {
  cargarSolicitudd(); // Esta línea es fundamental
}

//Función para manejar el formulario de agregar/modificar

const formulario = document.getElementById("formulario");
if (formulario) {
  // Si el formulario existe (estamos en la página de agregar/editar), adjuntamos el listener.
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const fk1_per = document.getElementById("fk1_per").value;
    const fk2_per = document.getElementById("fk2_per").value;
    const act_sol = document.getElementById("act_sol").value;
    const est_sol = document.getElementById("est_sol").value;

    const solicitud = { fk1_per, fk2_per, act_sol, est_sol };

    if (id) {
      // Modificar (PUT)
      fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(solicitud),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Solicitud actualizada");
          // SOLUCIÓN: Redirigir al listado
          window.location.href = "4.1-sol_agregar.html";
        })
        .catch((error) =>
          console.error("Error al actualizar solicitud", error)
        );
    } else {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(solicitud),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Solicitud agregado");
          // SOLUCIÓN: Redirigir al listado
          window.location.href = "4.1-sol_agregar.html";
        })
        .catch((error) => console.error("Error al agregar solicitud", error));
    }

    // Limpiar formulario (se usa 'formulario' en lugar de document.getElementById)
    formulario.reset();
  });
}
