const apiUrl = "http://localhost:3000/api/perfil_personal";

//para la pagina listar
function cargarSolicitud() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.querySelector("#cuerpo-tabla");
      tbody.innerHTML = "";
      data.forEach((persona) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${persona.cod_per}</td>
            <td>${persona.nm1_per}</td>
            <td>${persona.nm2_per}</td>
            <td>${persona.ap1_per}</td>
            <td>${persona.ap2_per}</td>
            <td>${persona.sex_per}</td>
            <td>${persona.per_per}</td>
            <td>${persona.por_per}</td>
            <td>${persona.est_per}</td>
            <td class="acciones-tabla">
                <a href="3.1-per_agregar.html?id=${persona.cod_per}" class="boton-accion-tabla" title="Editar">✎</a>
                <a href="#" onclick = 'eliminarPersona(${persona.cod_per})' class="boton-accion-tabla" title="Eliminar">🗑️</a> 
            </td>`;
        tbody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error al cargar la persona: ", error));
}

//funcion para agregar nuevo continente
function agregarNuevo() {
  document.getElementById("formulario").reset();
  document.getElementById("id").value = "";
}
//guncion editar continente
function editarPersona(id) {
  fetch(`${apiUrl}/${id}`)
    .then((response) => response.json())
    .then((persona) => {
      document.getElementById("nm1_per").value = persona.nm1_per;
      document.getElementById("nm2_per").value = persona.nm2_per;
      document.getElementById("ap1_per").value = persona.ap1_per;
      document.getElementById("ap2_per").value = persona.ap2_per;
      document.getElementById("sex_per").value = persona.sex_per;
      document.getElementById("per_per").value = persona.per_per;
      document.getElementById("por_per").value = persona.por_per;
      document.getElementById("fky_usu").value = persona.fky_usu;
      document.getElementById("est_per").value = persona.est_per;
      document.getElementById("id").value = persona.cod_per;
    })
    .catch((error) => console.error("Error al obtener la persona", error));
}

// esto detecta si cargo la edición y carga los datos
if (window.location.href.includes("3.1-per_agregar.html")) {
  // Crea un objeto para leer los parámetros de la URL
  const urlParams = new URLSearchParams(window.location.search);
  // Obtiene el valor del parámetro 'id'
  const id = urlParams.get("id");

  // Si se encuentra un ID en la URL, llamamos a la función editarPersona
  if (id) {
    editarPersona(id);
  }
}

//funcion eliminar
function eliminarPersona(id) {
  // Usamos confirm() para que aparezca el aviso
  if (
    confirm(
      "¿Estás seguro de que quieres eliminar este registro? Esta acción no se puede deshacer."
    )
  ) {
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json()) // 1er then: Procesar la respuesta
      .then(() => {
        // 2do then: Manejar el éxito
        alert("Persona eliminada");
        cargarSolicitud(); //recargar la tabla
      })
      .catch((error) => console.error("Error al eliminar la persona", error));
  }
  // Si el usuario cancela, no se ejecuta nada.
}

if (document.querySelector("#cuerpo-tabla")) {
  cargarSolicitud(); // Esta línea es fundamental
}

//Función para manejar el formulario de agregar/modificar

const formulario = document.getElementById("formulario");
if (formulario) {
  // Si el formulario existe (estamos en la página de agregar/editar), adjuntamos el listener.
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const nm1_per = document.getElementById("nm1_per").value;
    const nm2_per = document.getElementById("nm2_per").value;
    const ap1_per = document.getElementById("ap1_per").value;
    const ap2_per = document.getElementById("ap2_per").value;
    const sex_per = document.getElementById("sex_per").value;
    const per_per = document.getElementById("per_per").value;
    const por_per = document.getElementById("por_per").value;
    const fky_usu = document.getElementById("fky_usu").value;
    const est_per = document.getElementById("est_per").value;

    const persona = {
      nm1_per,
      nm2_per,
      ap1_per,
      ap2_per,
      sex_per,
      per_per,
      por_per,
      fky_usu,
      est_per,
    };

    if (id) {
      // Modificar (PUT)
      fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(persona),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Persona actualizada");
          // SOLUCIÓN: Redirigir al listado
          window.location.href = "3.1-per_agregar.html";
        })
        .catch((error) => console.error("Error al actualizar persona", error));
    } else {
      // Agregar (POST)
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(persona),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Persona agregado");
          // SOLUCIÓN: Redirigir al listado
          window.location.href = "3.1-per_agregar.html";
        })
        .catch((error) => console.error("Error al agregar persona", error));
    }

    // Limpiar formulario (se usa 'formulario' en lugar de document.getElementById)
    formulario.reset();
  });
}
