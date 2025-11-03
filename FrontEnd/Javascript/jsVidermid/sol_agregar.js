/*const elemento_cod = document.querySelector("[name=cod_sol]")
// codigo
const Validacod=(evento)=>{
    const Campocod=evento.target;
    const valorCampocod=evento.target.value.trim();
    let regExp=/^\d+$/
    let esInvalido =!regExp.test(valorCampocod);

    if (valorCampocod.length === 0) {
        Campocod.classList.add("invalida");
        Campocod.nextElementSibling.classList.add("error");
        Campocod.nextElementSibling.innerText = `${Campocod.name} no puede estar vacío`;
    }else if(esInvalido){
        Campocod.classList.add("invalida");
        Campocod.nextElementSibling.classList.add("error");
        Campocod.nextElementSibling.innerText = `${Campocod.name} debe ser numérico.`;
    }
    else{
        Campocod.classList.remove("invalida");
        Campocod.nextElementSibling.classList.remove("error");
        Campocod.nextElementSibling.innerText="";   
    }
}
elemento_cod.addEventListener("blur", Validacod);*/

//solicitud
/*const elemento_act = document.querySelector("[name=act_sol]")
const Validaact=(evento)=>{
    const Campoact=evento.target;
    const valorCampoact=evento.target.value;
    let regExp= /((([0][1-9]|[12][\d])|[3][01])[-/]([0][13578]|[1][02])[-/][1-9]\d\d\d)|((([0][1-9]|[12][\d])|[3][0])[-/]([0][13456789]|[1][012])[-/][1-9]\d\d\d)|(([0][1-9]|[12][\d])[-/][0][2][-/][1-9]\d([02468][048]|[13579][26]))|(([0][1-9]|[12][0-8])[-/][0][2][-/][1-9]\d\d\d)/gm
    let esInvalido =regExp.test(valorCampoact);

    if(valorCampoact.length===0 || !esInvalido){
        Campoact.classList.add("invalida");
        Campoact.nextElementSibling.classList.add("error");
        Campoact.nextElementSibling.innerText=`${Campoact.name} no puede estar vacio, debe ser fecha dd-mm-aaaa`;
    }else{
        Campoact.classList.remove("invalida");
        Campoact.nextElementSibling.classList.remove("error");
        Campoact.nextElementSibling.innerText="";
    }
}
elemento_act.addEventListener("blur", Validafec);*/

const elemento_fec = document.querySelector("[name=act_sol]")
const Validafec=(evento)=>{
    const Campofec=evento.target;
    const valorCampoest= evento.target.value;
    const esInvalido =valorCampoest==="";

    if(esInvalido){
        Campofec.classList.add("invalida");
        Campofec.nextElementSibling.classList.add("error");
        Campofec.nextElementSibling.innerText=`Seleccione una fecha dd/mm/aaaa`;
    }else{
        Campofec.classList.remove("invalida");
        Campofec.nextElementSibling.classList.remove("error");
        Campofec.nextElementSibling.innerText="";
    }
}
elemento_fec.addEventListener("blur", Validafec);

//estatus
const elemento_est = document.querySelector("[name=est_sol]")
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
const input_act = document.getElementById('act_sol');
const input_est = document.getElementById('est_sol');
const comunicaformulario = (evento) => {
    evento.preventDefault();
    const act_sol =input_act.value;
    const est_sol =input_est.value;

    const dat_fal = ( act_sol.length === 0 || est_sol.length === 0);

    if(!dat_fal){
        console.log('Datos Recopilados:');
        
        console.log(`- Fecha de solicitud: ${act_sol}`);
        console.log(`- Estatus: ${est_sol}`);
        formu.reset(); 
        
    } else {
        console.error('Hay campos vacíos. Por favor, complete la información.');
    }
};

// Conectar la función al evento submit del formulario
if (formu) {
    formu.addEventListener("submit", comunicaformulario);
}*/
