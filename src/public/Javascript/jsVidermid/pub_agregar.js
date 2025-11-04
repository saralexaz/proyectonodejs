/*const elemento_cod = document.querySelector("[name=cod_pub]")
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

//fecha publicación
const elemento_fec = document.querySelector("[name=fec_pub]")
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

//titulo
const elemento_tit = document.querySelector("[name=tit_pub]")
const Validatit=(evento)=>{
    const Campotit=evento.target;
    const valorCampotit=evento.target.value;
    let regExp= /^[\p{L}0-9\s]+$/u;
    let Validaap2 =regExp.test(valorCampotit);

    if(valorCampotit.length===0){
        Campotit.classList.add("invalida");
        Campotit.nextElementSibling.classList.add("error");
        Campotit.nextElementSibling.innerText=`ERROR no puede estar vacio`;
    }else if(!Validaap2){
        Campotit.classList.add("invalida");
        Campotit.nextElementSibling.classList.add("error");
        Campotit.nextElementSibling.innerText=`ERROR no puede usar simbolos`;
    }
    else{
        Campotit.classList.remove("invalida");
        Campotit.nextElementSibling.classList.remove("error");
        Campotit.nextElementSibling.innerText="";
    }
}
elemento_tit.addEventListener("blur", Validatit);

//descripcion
const elemento_des = document.querySelector("[name=des_pub]")
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

//estatus
const elemento_est = document.querySelector("[name=est_pub]")
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
const input_fec = document.getElementById('fec_pub');
const input_tit = document.getElementById('tit_pub');
const input_des = document.getElementById('des_pub');
const input_est = document.getElementById('est_pub');
const comunicaformulario = (evento) => {
    evento.preventDefault();
    const fec_pub =input_fec.value;
    const tit_pub =input_tit.value;
    const des_pub =input_des.value;
    const est_pub =input_est.value;

    const dat_fal = ( fec_pub.length === 0 || tit_pub.length === 0 || des_pub.length === 0 || est_pub.length === 0);

    if(!dat_fal){
        console.log('Datos Recopilados:');
        
        console.log(`- Fecha publicación: ${fec_pub}`);
        console.log(`- Titulo de publicación: ${tit_pub}`);
        console.log(`- Descripcion: ${des_pub}`);
        console.log(`- Estatus: ${est_pub}`);
        formu.reset(); 
        
    } else {
        console.error('Hay campos vacíos. Por favor, complete la información.');
    }
};

// Conectar la función al evento submit del formulario
if (formu) {
    formu.addEventListener("submit", comunicaformulario);
}*/
