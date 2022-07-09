import { distinctUntilKeyChanged, from } from "rxjs";


interface Personaje{
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Spiderman'
    },
    {
        nombre: 'Naruto'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Zelda'
    },
    {
        nombre: 'Spiderman'
    },
    {
        nombre: 'Spiderman'
    },
    {
        nombre: 'Spiderman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Zelda'
    },
]


/**
 * distinctUntilKeyChanged - Compara las propiedades
 * @param propiedad: string
 */
from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);