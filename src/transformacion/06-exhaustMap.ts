import { interval, fromEvent } from 'rxjs';
import { concatMap, exhaustMap, switchMap, take } from 'rxjs/operators';


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document,'click');

/**
 * exhaustMap - Aplana un observable (se susbcribe a el y emite su valor)
 * Cuando hay más subscripciones las ignora, cuando se completa la primera subscripción
 * ya puede volver a subscribirse a otro valor
 */
click$.pipe(
    exhaustMap(()=>interval$)
).subscribe(console.log);