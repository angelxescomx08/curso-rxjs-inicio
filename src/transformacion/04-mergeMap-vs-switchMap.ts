import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';

const click$ = fromEvent(document,'click');
const interval$ = interval(1000);

/**
 * switchMap - solo mantiene la última subscripción activa
 * mergeMap - mantiene todas las subscripciones activas
 */
click$.pipe(
    //mergeMap(()=>interval$),
    switchMap(()=>interval$),
).subscribe(console.log);