/**
 * función para pedir una carta
 * @param {Array<String>} baraja 
 * @returns {String} último elemento de la baraja
 */
  export const pedirCarta = (baraja) => {

    if (!baraja || baraja.length === 0) {
        throw 'No hay cartas en la baraja';
    }
    return baraja.pop();
}