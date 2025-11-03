const apiUrl='http://localhost:3000/publicacion';

//para la pagina listar
function cargarContacto(){
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tbody =document.querySelector('#cuerpo-tabla'); // Usamos '#cuerpo-tabla'
        tbody.innerHTML = '';
        data.forEach(publicacion => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${publicacion.cod_pub}</td>
            <td>${publicacion.fec_pub}</td>
            <td>${publicacion.tit_pub}</td>
            <td>${publicacion.des_pub}</td>
            <td>${publicacion.est_pub}</td>
            <td class="acciones-tabla">
                <a href="5.1-pub_agregar.html?id=${publicacion.cod_pub}" class="boton-accion-tabla" title="Editar">✎</a>
                <a href="#" onclick = 'eliminarPublicacion(${publicacion.cod_pub})' class="boton-accion-tabla" title="Eliminar">🗑️</a> 
            </td>`;
            tbody.appendChild(row);
        });
        
    })
    .catch(error => console.error('Error al cargar la publicacion: ', error));
}

//funcion para agregar nueva publicacion
function agregarNuevaPub(){
    document.getElementById('formulario').reset();
    document.getElementById('id').value='';
}
//guncion editar solicitud
function editarContacto(id){
    fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(publicacion=>{
        document.getElementById('fec_pub').value = publicacion.fec_pub;
        document.getElementById('tit_pub').value = publicacion.tit_pub;
        document.getElementById('des_pub').value = publicacion.des_pub;
        /*document.getElementById('fky_ciu').value = publicacion.fky_ciu;
        document.getElementById('fky_per').value = publicacion.fky_per;
        document.getElementById('fky_tip_aco').value = publicacion.fky_tip_aco;
        document.getElementById('fky_tip_pri').value = publicacion.fky_tip_pri;*/ //por esto da error
        document.getElementById('est_pub').value = publicacion.est_pub;
        document.getElementById('id').value = publicacion.cod_pub;
    })
    .catch(error => console.error('Error al obtener la publicacion', error));
}

// Bloque para detectar si la página se cargó para EDICIÓN y cargar los datos
if (window.location.href.includes('5.1-pub_agregar.html')) {
    
    const urlParams = new URLSearchParams(window.location.search);
    
    const id = urlParams.get('id'); 
    
    if (id) {
        editarContacto(id); 
    }
}

//funcion eliminar
function eliminarContacto(id){
    // Usamos confirm() para que aparezca el aviso
    if (confirm('¿Estás seguro de que quieres eliminar este registro? Esta acción no se puede deshacer.')) {
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json()) 
        .then(()=>{ 
            alert('Publicacion eliminada');
            cargarContacto();//recargar la tabla
        })
        .catch(error => console.error('Error al eliminar la publicacion', error));
    }

} 

if (document.querySelector('#cuerpo-tabla')) {
    cargarContacto(); // Esta línea es fundamental
}

//Función para manejar el formulario de agregar/modificar
const formulario = document.getElementById('formulario');
if (formulario) {
    // Si el formulario existe (estamos en la página de agregar/editar), adjuntamos el listener.
    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const id = document.getElementById('id').value;
        const fec_pub = document.getElementById('fec_pub').value;
        const tit_pub = document.getElementById('tit_pub').value;
        const des_pub = document.getElementById('des_pub').value;
        /*const fky_ciu = document.getElementById('fky_ciu').value;
        const fky_per = document.getElementById('fky_per').value;
        const fky_tip_aco = document.getElementById('fky_tip_aco').value;
        const fky_tip_pri = document.getElementById('fky_tip_pri').value;*/
        const est_pub = document.getElementById('est_pub').value;

        const fky_ciu = 1;     // Asegúrate de que existe un registro con cod_ciu=1
        const fky_per = 3;    // <--- **DEBE EXISTIR en perfil_personal.persona**
        const fky_tip_aco = 1; // Asegúrate de que existe un registro con cod_tip_aco=1
        const fky_tip_pri = 1;

        /*const id = document.getElementById('id')?.value || ' ';
        const fec_pub = document.getElementById('fec_pub')?.value || ' ';
        const tit_pub = document.getElementById('tit_pub')?.value || ' ';
        const des_pub = document.getElementById('des_pub')?.value || ' ';*/
        /*const fky_ciu = document.getElementById('fky_ciu')?.value || 0;
        const fky_per = document.getElementById('fky_per')?.value || 0;
        const fky_tip_aco = document.getElementById('fky_tip_aco')?.value || 0;
        const fky_tip_pri = document.getElementById('fky_tip_pri')?.value || 0;*/
        /*const est_pub = document.getElementById('est_pub')?.value || ' ';

        const fky_ciu = 1;  // O el valor que corresponda
        const fky_per = 1;  // O el valor que corresponda  
        const fky_tip_aco = 1;  // O el valor que corresponda
        const fky_tip_pri = 1;  // O el valor que corresponda*/

        const publicacion={fec_pub,tit_pub, des_pub, fky_ciu, fky_per, fky_tip_aco, fky_tip_pri, est_pub};

        if(id){
            // Modificar (PUT)
            fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(publicacion)
            })
            .then(response =>response.json())
            .then(() => {
                alert('Publicacion actualizada');
                // SOLUCIÓN: Redirigir al listado
                window.location.href = '5.1-pub_agregar.html'; 
            })
            .catch(error => console.error('Error al actualizar publicacion', error));
        }else {
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(publicacion)
            })
            .then(response => response.json())
            .then(()=>{
                alert('Publicacion agregada');
                window.location.href = '5.1-pub_agregar.html'; 
            })
            .catch(error => console.error('Error al agregar publicacion', error));
        }
        
        // Limpiar formulario (se usa 'formulario' en lugar de document.getElementById)
        formulario.reset();
    });
}