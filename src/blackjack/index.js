import _ from 'underscore';
import { crearBaraja, pedirCarta, turnoComputadora, acumularPuntos, crearCarta, determinarGanador } from './usecases';


/** 2C son 2 de treboles (Clubs) 
 * 2D son 2 de diamantes (Diamonds)
 * 2H son 2 de corazones (Hearts)
 * 2S son 2 de espadas (Spades)
*/

// PATRON MODULO

const miModulo = (() => {    // funcion anonima autoinvocada: sera llamada despues de ser creada 
    'use strict';      // comprueba el codigo para evitar algunos errores

    let baraja = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    //Referencias HTML
    const puntosHTML = document.querySelectorAll('small'),
        divCartas = document.querySelectorAll('.divCartas');

    // Referencias botones
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');


    const inicializarJuego = (numJugadores = 2) => {

        console.clear();

        btnDetener.disabled = false;
        btnPedir.disabled = false;

        puntosJugadores = [];       // reinicializa puntos

        baraja = crearBaraja(tipos, especiales);
        for (let i = 0; i < numJugadores; i++) {
            puntosHTML[i].innerText = 0;     // reinicializa texto puntos
            divCartas[i].innerHTML = '';     // reinicializa imagenes
            puntosJugadores.push(0);        // inicializa en 0 los puntos de cada jugador
        }
    }

    inicializarJuego();


     // EVENTO PULSAR BOTON PEDIR CARTA 
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta(baraja);
        const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

        crearCarta(carta, 0, divCartas);    // inserta la imagen de la carta

        if (puntosJugador >= 21) {
            btnDetener.disabled = true;
            btnPedir.disabled = true;
            puntosJugadores = turnoComputadora(baraja, puntosJugadores, puntosHTML, divCartas);
            determinarGanador(puntosJugadores);
        }

    });

    // EVENTO PULSAR BOTON DETENER
    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        puntosJugadores = turnoComputadora(baraja, puntosJugadores, puntosHTML, divCartas);
        determinarGanador(puntosJugadores);
    });


    // EVENTO PULSAR BOTON NUEVO
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    })

    // solo lo q retornos justo antes del final del modulo sera lo publico, lo demas sera privado
    return {
        nuevoJuego: inicializarJuego     // etiqueta q señala a una funcion
    };

})();



