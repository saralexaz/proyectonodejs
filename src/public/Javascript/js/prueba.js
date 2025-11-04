let id_pedido;
let nombre;
let tipo_producto;
let cant_platos;
let precio_unitario;
let descuento=0;
let montobruto=0;
let pedidomayor=0;
let total_almuerzo=0;
let montoneto=0;

let clientes = parseInt(prompt("HOLA: "));

do{
    
    id_pedido=parseInt(prompt('Ingrese la cantidad de pedidos que desea hacer: '));

    if(isNaN(id_pedido) || id_pedido<=0){
        alert("ERROR: La cantidad debe ser un número entero mayor a 0.");
    }
}while(isNaN(id_pedido) || id_pedido<=0)

for(let i=1; i<=id_pedido; i++){
    
    nombre=(prompt('Ingrese su nombre: '));
    tipo_producto=(prompt('Ingrese tipo producto debe ser "A" para almuerzo y "C" para cena'));
    cant_platos=parseInt(prompt('Ingrese la cantidad platos: '));
    precio_unitario=parseFloat(prompt('Ingrese precio unitario '));

    montobruto= cant_platos * precio_unitario;
    montoneto = montobruto - descuento;

    if((tipo_producto == 'A' || tipo_producto == 'a') && (cant_platos>=10)){
        descuento = montobruto * 0.20
        alert(`Tiene un descuento del 20%:${descuento} `)
    }else if((tipo_producto == 'C' || tipo_producto == 'c') && (cant_platos>=5 && cant_platos<=10)){
        descuento = montobruto * 0.10
        alert(`Tiene un descuento del 10%:${descuento} `)

    }else{
        alert('No tiene descuento');
    }

    if(montobruto>=150){
        pedidomayor++;
    }

    if (tipo_producto === 'A') {
        total_almuerzo += montoneto; // Acumulador (Suma el monto neto)
    }
}

alert(`Cantidad de pedidos que superaron los 150 ${pedidomayor}`);
alert(`Monto total que ingreso la empresa por todos los pedidos de A ${total_almuerzo}`);
alert(`Monto total ${montoneto}`);
    

