const apiUrl = "http://localhost:3000/api/contacto";

//para la pagina listar
function cargarContacto() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.querySelector("#cuerpo-tabla");
      tbody.innerHTML = "";
      data.forEach((contacto) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${contacto.cod_con}</td>
            <td>${contacto.des_con}</td>
            <td>${contacto.act_con}</td>
            <td>${contacto.est_con}</td>
            <td class="acciones-tabla">
                <a href="7.1-con_agregar.html?id=${contacto.cod_con}" class="boton-accion-tabla" title="Editar">✎</a>
                <a href="#" onclick = 'eliminarContacto(${contacto.cod_con})' class="boton-accion-tabla" title="Eliminar">🗑️</a> 
            </td>`;
        tbody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error al cargar contacto: ", error));
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
    .then((contacto) => {
      document.getElementById("des_con").value = contacto.des_con;
      document.getElementById("act_con").value = contacto.act_con;
      /*document.getElementById('fky_pub').value = multimedia.fky_per;*/
      document.getElementById("est_con").value = contacto.des_con;
      /*document.getElementById('fky_ciu').value = publicacion.fky_ciu;
        document.getElementById('fky_per').value = publicacion.fky_per;
        document.getElementById('fky_tip_aco').value = publicacion.fky_tip_aco;
        document.getElementById('fky_tip_pri').value = publicacion.fky_tip_pri;*/ //por esto da error
      document.getElementById("id").value = contacto.cod_con;
    })
    .catch((error) => console.error("Error al obtener contacto", error));
}

// Bloque para detectar si la página se cargó para EDICIÓN y cargar los datos
if (window.location.href.includes("7.1-con_agregar.html")) {
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
        alert("Contacto eliminado");
        cargarContacto(); //recargar la tabla
      })
      .catch((error) => console.error("Error al eliminar contacto", error));
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
    const des_con = document.getElementById("des_con").value;
    const act_con = document.getElementById("act_con").value;
    const est_con = document.getElementById("est_con").value;
    /*const fky_per = document.getElementById('fky_per').value;
        const est_mul = document.getElementById('est_mul').value;
        /*const fky_ciu = document.getElementById('fky_ciu').value;
        const fky_per = document.getElementById('fky_per').value;
        const fky_tip_aco = document.getElementById('fky_tip_aco').value;
        const fky_tip_pri = document.getElementById('fky_tip_pri').value;*/

    const fky_per = 3;
    const fky_tip_con = 1;
    const fky_tip_pri = 1;

    const contacto = {
      des_con,
      act_con,
      fky_per,
      fky_tip_con,
      fky_tip_pri,
      est_con,
    };

    if (id) {
      // Modificar (PUT)
      fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contacto),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Contacto actualizado");
          window.location.href = "7.1-con_agregar.html";
        })
        .catch((error) => console.error("Error al actualizar contacto", error));
    } else {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contacto),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Contacto agregada");
          window.location.href = "7.1-con_agregar.html";
        })
        .catch((error) => console.error("Error al agregar contacto", error));
    }

    // Limpiar formulario (se usa 'formulario' en lugar de document.getElementById)
    formulario.reset();
  });
}
