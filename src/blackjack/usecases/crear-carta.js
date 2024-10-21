/**
 * Crea una imagen de la carta y la situa en el jugador correspondiente
 * @param {String} carta 
 * @param {Number} turno 
 * @param {HTMLElement} divCartas elemento HTML para mostrar la imagen de la carta
 */
export const crearCarta = (carta, turno, divCartas) => {
    const imgCarta = document.createElement('img'); // 3H, JD...
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta');            // se añade el estilo
    divCartas[turno].append(imgCarta);      // introduce esta imagen en el div
}