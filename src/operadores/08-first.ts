import { fromEvent } from "rxjs";
import { first, take, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

/**
 * first - Emite el primer valor o el prier valor que cumple
 * una condición
 * @param condición
 */
click$.pipe(
    tap(console.log),
    first<MouseEvent>(event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});