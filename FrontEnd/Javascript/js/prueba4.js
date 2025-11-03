const calificaciones= [9, 10, 11, 12, 20];
const nota_minima=[9];

function analizar(notas){
    let sumatotal=0;
    let aprobados=0;
    let reprobados =0;
    
    for(let i=0; i<notas.length; i++){
        const notactual = notas[i];

        sumatotal += notactual;

        if(notactual>nota_minima){
            aprobados++
        }else{
            reprobados++
        }
    }
    const promedio = sumatotal/ notas.length;

    return{
        totalsuma: sumatotal,
        promedio: promedio.toFixed(2),
        total_aprobados: aprobados,
        total_reprobados: reprobados
    };
}

const resultados = analizar(calificaciones);
console.log("--- REPORTE DE CALIFICACIONES ---");
console.log(`Notas Procesadas: ${calificaciones.join(', ')}`);
console.log(`Suma Total de Notas: ${resultados.totalsuma}`);
console.log(`Promedio del Grupo: ${resultados.promedio}`);
console.log(`\nESTADO:`);
console.log(`✅ Aprobados: ${resultados.total_aprobados}`);
console.log(`❌ Reprobados: ${resultados.total_reprobados}`);