 // TURNO DE LA COMPUTADORA
 
 import { pedirCarta } from "./pedir-carta";
 import { acumularPuntos } from "./acumular-puntos";
 import { crearCarta } from "./crear-carta";

 /**
  * Método que da el turno a la computadora 
  * @param {Number} puntosMinimos 
  * @param {Array<String>} baraja 
  * @param {Array<Number>} puntosJugadores 
  * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
  * @param {HTMLElement} divCartas elemento HTML para mostrar la imagen de la carta
  * @returns {Array<Number>} puntos actualizados de los jugadores
  */
 export const turnoComputadora = (baraja, puntosJugadores, puntosHTML, divCartas) => {

    const puntosMinimos = puntosJugadores[0];

    let puntosComputadora = 0;

    do {                // hacemos un do-while porque minimo se metera una vez al bucle
        const carta = pedirCarta(baraja);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);

        crearCarta(carta, puntosJugadores.length - 1, divCartas);

        if (puntosMinimos > 21) {
            break;      // si el jugador saca mas de 21, con q la computadora saque 1 carta gana
        }

    } while (puntosComputadora < puntosMinimos);

    return puntosJugadores;

}