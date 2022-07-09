import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');


/**
 * takeWhile - toma valores hasta que la condición no se cumpla
 * @param condicion
 * @param inclusive: boolean - emite el valor que rompe la condición
 */
click$
.pipe(
    map(({x,y})=>({x,y})),
    takeWhile(({y})=> y <= 150)
)
.subscribe({
    next: val => console.log('next: ',val),
    complete: () => console.log('complete')
})