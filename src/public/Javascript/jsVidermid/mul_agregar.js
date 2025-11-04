/*const elemento_cod = document.querySelector("[name=cod_mul]")
// codigo
const Validacod=(evento)=>{
    const Campocod=evento.target;
    const valorCampocod=evento.target.value.trim();
    let regExp=/^\d+$/
    let esInvalido =!regExp.test(valorCampocod);

    if (valorCampocod.length === 0 || esInvalido) {
        Campocod.classList.add("invalida");
        Campocod.nextElementSibling.classList.add("error");
        Campocod.nextElementSibling.innerText = `${Campocod.name} no puede estar vacío y debe ser numérico.`;
    }else{
        Campocod.classList.remove("invalida");
        Campocod.nextElementSibling.classList.remove("error");
        Campocod.nextElementSibling.innerText="";   
    }
}
elemento_cod.addEventListener("blur", Validacod);*/

//URL multimedia
const elemento_url = document.querySelector("[name=url_mul]")
const Validaurl=(evento)=>{
    const Campourl=evento.target;
    const valorCampourl=evento.target.value;
    let regExp= /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
    let esInvalido =!regExp.test(valorCampourl);

    if(valorCampourl.length===0){
        Campourl.classList.add("invalida");
        Campourl.nextElementSibling.classList.add("error");
        Campourl.nextElementSibling.innerText=`ERROR no puede estar vacio`;
    }else if(esInvalido){
        Campourl.classList.add("invalida");
        Campourl.nextElementSibling.classList.add("error");
        Campourl.nextElementSibling.innerText=`ERROR debe ser URL https://`;
    }
    else{
        Campourl.classList.remove("invalida");
        Campourl.nextElementSibling.classList.remove("error");
        Campourl.nextElementSibling.innerText="";
    }
}
elemento_url.addEventListener("blur", Validaurl);

//estatus
const elemento_est = document.querySelector("[name=est_mul]")
const Validaest=(evento)=>{
    const Campoest=evento.target;
    const valorCampoest= evento.target.value;
    const esInvalido =valorCampoest==="";

    if(esInvalido){
        Campoest.classList.add("invalida");
        Campoest.nextElementSibling.classList.add("error");
        Campoest.nextElementSibling.innerText=`Seleccione un estatus`;
    }else{
        Campoest.classList.remove("invalida");
        Campoest.nextElementSibling.classList.remove("error");
        Campoest.nextElementSibling.innerText="";
    }
}
elemento_est.addEventListener("blur", Validaest);

// envio del formulario
/*const formu = document.querySelector('#formulario');
const input_url = document.getElementById('url_mul');
const input_est = document.getElementById('est_mul');
const comunicaformulario = (evento) => {
    evento.preventDefault();
    const url_mul =input_url.value;
    const est_mul =input_est.value;

    const dat_fal = ( url_mul.length === 0 || est_mul.length === 0);

    if(!dat_fal){
        console.log('Datos Recopilados:');
        
        console.log(`- Url multimedia: ${url_mul}`);
        console.log(`- Estatus: ${est_mul}`);
        formu.reset(); 
        
    } else {
        console.error('Hay campos vacíos. Por favor, complete la información.');
    }
};

// Conectar la función al evento submit del formulario
if (formu) {
    formu.addEventListener("submit", comunicaformulario);
}*/
