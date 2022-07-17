import { of, interval,take, delay, forkJoin } from 'rxjs';

const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(
    take(3)
)
const letras$ = of('a','b','c').pipe(
    delay(3500)
)

/* forkJoin([
    numeros$,
    intervalo$,
    letras$
]).subscribe(console.log) */

/**
 * forkJoin -Espera a que los Observables se completen y 
 * luego combina los últimos valores que se emitieron; 
 * completa inmediatamente si se pasa una matriz vacía.
 */
forkJoin({
    numeros$,
    intervalo$,
    letras$
}).subscribe(res=>{
    console.log(res)
})