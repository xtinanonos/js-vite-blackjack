/**
 * Método que analiza los puntos y determina el ganador
 * @param {Array<Number>} puntosJugadores 
 */
export const determinarGanador = (puntosJugadores) => {

    const [puntosJugador, puntosComputadora] = puntosJugadores;     // puntosMinimos = puntosJugadores[0] y puntosComputadora = puntosJugadores [2]
    
    setTimeout(() => {
        if (puntosComputadora === puntosJugador) {
            alert('Empate')
        } else if (puntosJugador > 21) {
            alert('Vaya... perdiste...')
        } else if (puntosJugador > puntosComputadora || puntosComputadora > 21) {
            alert('Enhorabuena, has ganado!!!');
        } else {
            alert('Vaya... perdiste...');
        }
    }, 100);
}