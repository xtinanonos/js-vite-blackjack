import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tipos Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} especiales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna una nueva baraja de cartas
 */
 export const crearBaraja = (tipos, especiales) => {

    // en typescript estas validaciones no son necesarias, pero en Javascript si xq pueden llamar 
    // a la funcion sin meterle los parametros correctos y que no dé error
    if (!tipos || tipos.length===0){
        throw new Error ('tipos tiene que ser un array de strings');
    }

    if (!especiales || especiales.length===0){
        throw new Error ('especiales tiene que ser un array de strings');
    }

    let baraja = [];        // la inicializa en 0 para crearla de nuevo
    for (let i = 2; i <= 10; i++) {             // hasta 10 num de cartas
        for (let tipo of tipos) {            // recorremos los palos
            baraja.push(i + tipo);              // añadimos cada carta de cada palo
        }
    }

    for (let tipo of tipos) {                // de cada palo habra un as, un caballo, un rey y una reina
        for (let especial of especiales) {
            baraja.push(especial + tipo);
        }
    }

    return _.shuffle(baraja);         // para hacer random (la libreria esta importada en underscore-min.js)
}

// export default crearBaraja;