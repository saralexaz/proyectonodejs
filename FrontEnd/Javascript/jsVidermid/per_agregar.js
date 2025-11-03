/*const elemento_cod = document.querySelector("[name=cod_per]")
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

// primer nombre
const elemento_nm1 = document.querySelector("[name=nm1_per]")
const Validanm1=(evento)=>{
    const Camponm1=evento.target;
    const valorCamponm1=evento.target.value;
    let regExp= /^[\p{L}0-9\s]+$/u;
    let Validanm1 =regExp.test(valorCamponm1);

    if(valorCamponm1.length===0){
        Camponm1.classList.add("invalida");
        Camponm1.nextElementSibling.classList.add("error");
        Camponm1.nextElementSibling.innerText=`ERROR no puede estar vacio`;
    }else if(!Validanm1){
        Camponm1.classList.add("invalida");
        Camponm1.nextElementSibling.classList.add("error");
        Camponm1.nextElementSibling.innerText=`ERROR no puede usar simbolos`;
    }
    else{
        Camponm1.classList.remove("invalida");
        Camponm1.nextElementSibling.classList.remove("error");
        Camponm1.nextElementSibling.innerText="";
    }
}
elemento_nm1.addEventListener("blur", Validanm1);

//segundo nombre
const elemento_nm2 = document.querySelector("[name=nm2_per]")
const Validanm2=(evento)=>{
    const Camponm2=evento.target;
    const valorCamponm2=evento.target.value;
    let regExp= /^[\p{L}0-9\s]+$/u;
    let Validanm2 =regExp.test(valorCamponm2);

    if(valorCamponm2.length===0){
        Camponm2.classList.add("invalida");
        Camponm2.nextElementSibling.classList.add("error");
        Camponm2.nextElementSibling.innerText=`ERROR no puede estar vacio`;
    }else if(!Validanm2){
        Camponm2.classList.add("invalida");
        Camponm2.nextElementSibling.classList.add("error");
        Camponm2.nextElementSibling.innerText=`ERROR no puede usar simbolos`;
    }
    else{
        Camponm2.classList.remove("invalida");
        Camponm2.nextElementSibling.classList.remove("error");
        Camponm2.nextElementSibling.innerText="";
    }
}
elemento_nm2.addEventListener("blur", Validanm2);

// primer apellido
const elemento_ap1 = document.querySelector("[name=ap1_per]")
const Validaap1=(evento)=>{
    const Campoap1=evento.target;
    const valorCampoap1=evento.target.value;
    let regExp= /^[\p{L}0-9\s]+$/u;
    let Validaap1 =regExp.test(valorCampoap1);

    if(valorCampoap1.length===0){
        Campoap1.classList.add("invalida");
        Campoap1.nextElementSibling.classList.add("error");
        Campoap1.nextElementSibling.innerText=`ERROR no puede estar vacio`;
    }else if(!Validaap1){
        Campoap1.classList.add("invalida");
        Campoap1.nextElementSibling.classList.add("error");
        Campoap1.nextElementSibling.innerText=`ERROR no puede usar simbolos`;

    }
    else{
        Campoap1.classList.remove("invalida");
        Campoap1.nextElementSibling.classList.remove("error");
        Campoap1.nextElementSibling.innerText="";
    }
}
elemento_ap1.addEventListener("blur", Validaap1);

//segundo apellido
const elemento_ap2 = document.querySelector("[name=ap2_per]")
const Validaap2=(evento)=>{
    const Campoap2=evento.target;
    const valorCampoap2=evento.target.value;
    let regExp= /^[\p{L}0-9\s]+$/u;
    let Validaap2 =regExp.test(valorCampoap2);

    if(valorCampoap2.length===0){
        Campoap2.classList.add("invalida");
        Campoap2.nextElementSibling.classList.add("error");
        Campoap2.nextElementSibling.innerText=`ERROR no puede estar vacio`;
    }else if(!Validaap2){
        Campoap2.classList.add("invalida");
        Campoap2.nextElementSibling.classList.add("error");
        Campoap2.nextElementSibling.innerText=`ERROR no puede usar simbolos`;
    }
    else{
        Campoap2.classList.remove("invalida");
        Campoap2.nextElementSibling.classList.remove("error");
        Campoap2.nextElementSibling.innerText="";
    }
}
elemento_ap2.addEventListener("blur", Validaap2);

//foto de perfil
//foto de portada

//sexo
const elemento_sex = document.querySelector("[name=sex_per]")
const Validasex=(evento)=>{
    const Camposex=evento.target;
    const valorCamposex= evento.target.value;
    const esInvalido =valorCamposex==="";

    if(esInvalido){
        Camposex.classList.add("invalida");
        Camposex.nextElementSibling.classList.add("error");
        Camposex.nextElementSibling.innerText=`Seleccione un genero`;
    }else{
        Camposex.classList.remove("invalida");
        Camposex.nextElementSibling.classList.remove("error");
        Camposex.nextElementSibling.innerText="";
    }
}
elemento_sex.addEventListener("blur", Validasex);


//estatus
const elemento_est = document.querySelector("[name=est_per]")
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
const input_nm1 = document.getElementById('nm1_per');
const input_nm2 = document.getElementById('nm2_per');
const input_ap1 = document.getElementById('ap1_per');
const input_ap2 = document.getElementById('ap2_per');
const input_per = document.getElementById('per_per');
const input_por = document.getElementById('por_per');
const input_sex = document.getElementById('sex_per');
const input_est = document.getElementById('est_per');
const comunicaformulario = (evento) => {
    evento.preventDefault();
    const nm1_per =input_nm1.value;
    const nm2_per =input_nm2.value;
    const ap1_per =input_ap1.value;
    const ap2_per =input_ap2.value;
    const per_per =input_per.value;
    const por_per =input_por.value;
    const sex_per =input_sex.value;
    const est_per =input_est.value;

    const dat_fal = ( nm1_per.length === 0 || nm2_per.length === 0 || ap1_per.length === 0 || ap2_per.length === 0 || per_per.length === 0 || por_per.length === 0 || sex_per.length === 0 || est_per.length === 0);

    if(!dat_fal){
        console.log('Datos Recopilados:');
        
        console.log(`- Primer nombre: ${nm1_per}`);
        console.log(`- Segundo nombre: ${nm2_per}`);
        console.log(`- Primer apellido: ${ap1_per}`);
        console.log(`- Segundo apellido: ${ap2_per}`);
        console.log(`- Foto de perfil: ${per_per}`);
        console.log(`- Foto de portada: ${por_per}`);
        console.log(`- Sexo: ${sex_per}`);
        console.log(`- Estatus: ${est_per}`);
        formu.reset(); 
        
    } else {
        console.error('Hay campos vacíos. Por favor, complete la información.');
    }
};

// Conectar la función al evento submit del formulario
if (formu) {
    formu.addEventListener("submit", comunicaformulario);
}*/
