import { interval, mergeMap, of, fromEvent, takeUntil } from 'rxjs';
import { map, take } from 'rxjs/operators';

const letras$ = of('a','b','c');

/**
 * mergeMap - Proyecta cada valor de origen a un Observable que se fusiona en el Observable de salida.
 * Aplana un observable (Se subscribe a el y emite la subscripción),
 * Se subscribe a todos los observables y no se completa hasta que todos los otros observables se completen
 * @params callback, callback que retorna un observable
 */
letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i=>letra+i),
        take(3)
    ))
)
/*.subscribe({
    next: val => console.log('next: ',val),
    complete: () => console.log('Complete')
})*/

const mouseDown$ = fromEvent(document,'mousedown');
const mouseUp$ = fromEvent(document,'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(()=>interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log);