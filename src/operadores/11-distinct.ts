import { distinct, from, of } from "rxjs";

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

/**
 * distinct - Deja pasa solo los valores no repetidos anteriormente
 * @param un atributo a comparar
 */
numeros$.pipe(
    distinct()
).subscribe(console.log);

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

from(personajes).pipe(
    distinct(personaje => personaje.nombre)
).subscribe(console.log);