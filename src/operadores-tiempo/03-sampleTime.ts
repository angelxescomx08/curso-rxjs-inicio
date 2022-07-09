import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document,'click');

/**
 * sampleTime - Emite el valor emitido más recientemente desde la fuente 
 * Observable dentro de intervalos de tiempo periódicos.
 * @param periodo
 */
click$.pipe(
    sampleTime(1000),
    map(({x,y})=>({x,y}))
).subscribe(console.log)