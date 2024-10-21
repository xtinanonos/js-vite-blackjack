import { valorCarta } from "./valor-carta";

/**
 * acumular los puntos según turno y carta obtenida
 * @param {String} carta 
 * @param {Number} turno 
 * @returns {Number} devuelve los puntos actualizados del jugador
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    if (!puntosHTML) {
        throw new Error('Los puntos HTML son necesarios');
    }

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}