const apiUrl = "http://localhost:3000/api/multimedia";

//para la pagina listar
function cargarContacto() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.querySelector("#cuerpo-tabla");
      tbody.innerHTML = "";
      data.forEach((multimedia) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${multimedia.cod_mul}</td>
            <td>${multimedia.url_mul}</td>
            <td>${multimedia.est_mul}</td>
            <td class="acciones-tabla">
                <a href="6.1-mul_agregar.html?id=${multimedia.cod_mul}" class="boton-accion-tabla" title="Editar">✎</a>
                <a href="#" onclick = 'eliminarMultimedia(${multimedia.cod_mul})' class="boton-accion-tabla" title="Eliminar">🗑️</a> 
            </td>`;
        tbody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error al cargar la multimedia: ", error));
}

//funcion para agregar nueva publicacion
function agregarNuevoCon() {
  document.getElementById("formulario").reset();
  document.getElementById("id").value = "";
}
//guncion editar solicitud
function editarContacto(id) {
  fetch(`${apiUrl}/${id}`)
    .then((response) => response.json())
    .then((multimedia) => {
      document.getElementById("url_mul").value = multimedia.url_mul;
      /*document.getElementById('fky_pub').value = multimedia.fky_per;*/
      document.getElementById("est_mul").value = multimedia.des_mul;
      /*document.getElementById('fky_ciu').value = publicacion.fky_ciu;
        document.getElementById('fky_per').value = publicacion.fky_per;
        document.getElementById('fky_tip_aco').value = publicacion.fky_tip_aco;
        document.getElementById('fky_tip_pri').value = publicacion.fky_tip_pri;*/ //por esto da error
      document.getElementById("id").value = multimedia.cod_mul;
    })
    .catch((error) => console.error("Error al obtener la multimedia", error));
}

// Bloque para detectar si la página se cargó para EDICIÓN y cargar los datos
if (window.location.href.includes("6.1-mul_agregar.html")) {
  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get("id");

  if (id) {
    editarContacto(id);
  }
}

//funcion eliminar
function eliminarContacto(id) {
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
        alert("Multimedia eliminada");
        cargarContacto(); //recargar la tabla
      })
      .catch((error) =>
        console.error("Error al eliminar la multimedia", error)
      );
  }
}

if (document.querySelector("#cuerpo-tabla")) {
  cargarContacto(); // Esta línea es fundamental
}

//Función para manejar el formulario de agregar/modificar
const formulario = document.getElementById("formulario");
if (formulario) {
  // Si el formulario existe (estamos en la página de agregar/editar), adjuntamos el listener.
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const url_mul = document.getElementById("url_mul").value;
    const est_mul = document.getElementById("est_mul").value;
    /*const fky_per = document.getElementById('fky_per').value;
        const est_mul = document.getElementById('est_mul').value;
        /*const fky_ciu = document.getElementById('fky_ciu').value;
        const fky_per = document.getElementById('fky_per').value;
        const fky_tip_aco = document.getElementById('fky_tip_aco').value;
        const fky_tip_pri = document.getElementById('fky_tip_pri').value;*/

    const fky_pub = 4; // Asegúrate de que existe un registro con cod_ciu=1

    const multimedia = { url_mul, fky_pub, est_mul };

    if (id) {
      // Modificar (PUT)
      fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(multimedia),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Multimedia actualizada");
          // SOLUCIÓN: Redirigir al listado
          window.location.href = "6.1-mul_agregar.html";
        })
        .catch((error) =>
          console.error("Error al actualizar multimedia", error)
        );
    } else {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(multimedia),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Multimedia agregada");
          window.location.href = "6.1-mul_agregar.html";
        })
        .catch((error) => console.error("Error al agregar multimedia", error));
    }

    // Limpiar formulario (se usa 'formulario' en lugar de document.getElementById)
    formulario.reset();
  });
}
