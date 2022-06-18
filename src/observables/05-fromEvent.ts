import { fromEvent } from "rxjs";

/**
 * Crea un observable para eventos
 * @params target: html taget
 * @params tipo de evento: string
 */
const scr1$ = fromEvent<PointerEvent>(document,'click');
const scr2$ = fromEvent<KeyboardEvent>(document,'keyup');

const observer = {
    next: (valor) => console.log(valor)
}

scr1$.subscribe(ev=>{
    console.log(ev.x,ev.y)
});
scr2$.subscribe(evento=>{
    console.log(evento.key);
});