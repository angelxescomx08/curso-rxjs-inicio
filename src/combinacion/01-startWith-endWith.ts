import { endWith, of, startWith } from "rxjs";

const numeros$ = of(1,2,3);

/**
 * startWith - cuando se subscribe a un observable emite el valor al instante 
 * (antes de la emisión del observable)
 * @param valores valores que se emitirán antes
*/

/**
 * endWith - cuando se subscribe a un observable emite el valor al instante que acabe
 * @param valores valores que se emitirán después
 */
numeros$.pipe(
    startWith('a','b','c'),
    endWith('x','y','z')
).subscribe(console.log)