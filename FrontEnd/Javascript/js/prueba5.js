const promedioestudiante = [18.5, 10.1, 15.2, 14.4, 19.9, 17.4];


function clasificarRendimiento(promedios){
    let reprobado=0
    let regular=0;
    let bueno=0;


    for(let i=0; i<promedios.length; i++){
        const promedioactual = promedios[i];

        if(promedioactual<11){
            console.log('reprobado');
            reprobado++
        }else if(promedioactual<15){
            console.log('regular');
            regular++;
        }else if(promedioactual >=16){
            console.log('buen estudiante');
            bueno++;
        }
    }
    return{
        reprobado: reprobado,
        regular: regular,
        bueno: bueno

    };
}
const resultados= clasificarRendimiento(promedioestudiante);

console.log("--- REPORTE DE PROMEDIOS ---");
console.log(`Promedios Procesados: ${promedioestudiante.join(', ')}`);
console.log(`\nESTADO:`);
console.log(`❌ Reprobados: ${resultados.reprobado}`);
console.log(`= regular: ${resultados.regular}`);
console.log(`= bueno: ${resultados.bueno}`);