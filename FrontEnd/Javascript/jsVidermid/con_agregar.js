/*const elemento_cod = document.querySelector("[name=cod_con]")
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

//descripcion
const elemento_des = document.querySelector("[name=des_con]")
const Validades=(evento)=>{
    const Campodes=evento.target;
    const valorCampodes=evento.target.value;
    let esInvalido =valorCampodes==="";

    if(esInvalido){
        Campodes.classList.add("invalida");
        Campodes.nextElementSibling.classList.add("error");
        Campodes.nextElementSibling.innerText=`ERROR no puede estar vacio`;
    }else{
        Campodes.classList.remove("invalida");
        Campodes.nextElementSibling.classList.remove("error");
        Campodes.nextElementSibling.innerText="";
    }
}
elemento_des.addEventListener("blur", Validades);

//fecha contacto
const elemento_fec = document.querySelector("[name=fec_con]")
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
const elemento_est = document.querySelector("[name=est_con]")
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
const formu = document.querySelector('#formulario');
const input_des = document.getElementById('des_con');
const input_fec = document.getElementById('fec_con');
const input_est = document.getElementById('est_con');
const comunicaformulario = (evento) => {
    evento.preventDefault();
    const des_con =input_des.value;
    const fec_con =input_fec.value;
    const est_con =input_est.value;

    const dat_fal = ( des_con.length === 0 || fec_con.length === 0 || est_con.length === 0);

    if(!dat_fal){
        console.log('Datos Recopilados:');
        
        console.log(`- Descripción: ${des_con}`);
        console.log(`- Fecha contacto: ${fec_con}`);
        console.log(`- Estatus: ${est_con}`);
        formu.reset(); 
        
    } else {
        console.error('Hay campos vacíos. Por favor, complete la información.');
    }
};

// Conectar la función al evento submit del formulario
if (formu) {
    formu.addEventListener("submit", comunicaformulario);
}
