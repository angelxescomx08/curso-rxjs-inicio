import { fromEvent, map, merge } from 'rxjs';

const keyup$ = fromEvent(document,'keyup');
const click$ = fromEvent(document,'click');

/**
 * merge - función que combina observables,
 * se completa cuando todos los observables se completan
 */
merge(
    keyup$.pipe(
        map(e=>e.type)
    ),
    click$.pipe(
        map(e=>e.type)
    )
).subscribe(console.log);