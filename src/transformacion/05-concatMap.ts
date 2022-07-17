import { interval, fromEvent } from 'rxjs';
import { concatMap, switchMap, take } from 'rxjs/operators';


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document,'click');

/**
 * concatMap - Aplana un observable (se susbcribe a el y emite su valor)
 * Cuando hay más subscripciones las encola y cuando se completa la anterior
 * emite los valores de las subcripciones encoladas.
 * Muy útil cuando importa el orden
 */
click$.pipe(
    concatMap(()=>interval$)
).subscribe(console.log);