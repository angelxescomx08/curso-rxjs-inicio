import { interval, mergeMap, of, fromEvent, takeUntil } from 'rxjs';
import { map, take } from 'rxjs/operators';

const letras$ = of('a','b','c');

/**
 * mergeMap - Proyecta cada valor de origen a un Observable que se fusiona en el Observable de salida.
 * Aplana un observable (Se subscribe a el y emite la subscripción)
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