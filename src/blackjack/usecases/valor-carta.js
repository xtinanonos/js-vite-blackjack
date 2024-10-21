/**
 * obtiene el valor numerico de la carta
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */
export const valorCarta = (carta) => {       
    let puntos = 0;

    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        ((valor === 'A') ? 11 : 10)
        : valor * 1;                  // se multipla x1 para pasarlo de string ('2') a number

}