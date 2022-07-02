import {from, fromEvent, range} from 'rxjs';
import {filter, map} from 'rxjs/operators';

/**
 * Similar al filter de js
 * @params callback de comparación
 */
/*range(1,10).pipe(
    filter(val=>val%2===1)
).subscribe(console.log);*/

interface Personaje{
    tipo: string;
    nombre: string;
};

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Spider-man'
    },
    {
        tipo: ' villano',
        nombre: 'Joker'
    }
];

const obs$ = from(personajes);

obs$.pipe(
    filter(personaje=>personaje.tipo === 'heroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map(event => event.code),
    filter(tecla => tecla === 'Enter')
);

keyup$.subscribe(console.log);