import { fromEvent, interval, takeUntil } from "rxjs";
import { skip, tap } from "rxjs/operators";

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
//const clickBtn$ = fromEvent(boton,'click');
const clickBtn$ = fromEvent(boton,'click').pipe(
    tap(()=>console.log('Tap antes del skip')),
    skip(1),
    tap(()=>console.log('Tap después del skip')),
);

/**
 * skip - Se salta una cantida de valores especificada y luego emite 
 * normalmmente el resto de valores
 * @param cantidad
 */

/**
 * takeUntil - emite valores hasta que otro observable emite su primer valor
 * @param Observable<any>
 */
/*
counter$
.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next: ',val),
    complete: () => console.log('complete')
})
*/

counter$
.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next: ',val),
    complete: () => console.log('complete')
})