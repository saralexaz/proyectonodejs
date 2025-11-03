let clientes;
let rif;
let nombre;
let edad;
let genero;
let cant_productos;
let preciounico;
let clientefem=0;
let cant_c49=0;
let cant_c50=0;
let montoneto=0;
let montogeneral;
let descuento=0;

do{
    clientes=parseInt(prompt('Ingrese la cantidad de clientes a registrar: '));
    if(isNaN(clientes) || clientes<=0){
        alert('Error: ingrese un numero mayor a 0: ')
    } else{
        alert(`Se han registrado ${clientes} clientes`);
    }
}while(isNaN(clientes) || clientes<=0);

for(let i = 1; i<=clientes; i++){
    rif=prompt('Ingrese el rif: ');
    nombre=prompt('Ingrese el nombre: ');
    edad = parseInt(prompt('Ingrese la edad: '));
    genero = prompt('Ingrese genero M/F: ');
    cant_productos = parseInt(prompt('Ingrese cantidad de productos: '));
    preciounico = parseFloat(prompt('Ingrese precio unico: '));

    if(cant_productos>=20){
        descuento = cant_productos*0.20;
        alert(`Tiene un descuento del 20% lo cual es: ${descuento}`);
    }else if(cant_productos == 1 && cant_productos==20){
        descuento = cant_productos * 0.15;
        alert(`Tiene un descuento del 20% lo cual es: ${descuento}`);
    }else{
        alert('No tiene descuento, sorry :(');
    }

    if(genero === 'F' || genero === 'f'){
        clientefem++
    }

    if(edad >=49){
        cant_c49++;
    } else if(edad<=50){
        cant_c50;
    }

    montoneto = (cant_productos * preciounico) - descuento
}

alert(`La cantidad de clientes femeninos son: ${clientefem}`);
alert(`La cantidad de clientes mayor de 49 años es: ${cant_c49}`);
alert(`La cantidad de clientes menor de 50 años es: ${cant_c50}`);
alert(`La cantidad general a cancelar por cada cliente: ${montoneto}`);
