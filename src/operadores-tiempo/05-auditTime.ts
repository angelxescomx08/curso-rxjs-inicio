import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document,'click');

/**
 * auditTime - Ignora los valores de origen durante durationmilisegundos, 
 * luego emite el valor más reciente del Observable de origen y luego repite este proceso.
 * @param tiempo
 */
click$.pipe(
    map(({x}) => ({x})),
    tap(val => console.log('tap: ',val)),
    auditTime(2000)
).subscribe(console.log)