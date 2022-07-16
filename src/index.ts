import { debounceTime, fromEvent, map, mergeAll } from 'rxjs';
import { ajax } from 'rxjs/ajax';
const body = document.querySelector('body');
const textInput = document.createElement('input');
const ol = document.createElement('ol');

body.append(textInput,ol);

const input$ = fromEvent<KeyboardEvent>(textInput,'keyup');


/**
 * mergeAll - ******Se subscribe a un observable emitido por el operador anterior, aplana el observable*******
 * Convierte un Observable de orden superior en un Observable de primer orden que entrega simultáneamente 
 * todos los valores que se emiten en los Observables internos.
 */
input$.pipe(
    debounceTime(500),
    map(event=> event.target as HTMLInputElement),
    map(target=>target.value),
    map((text)=>ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    mergeAll(),
    map((res:any)=>res.items)
).subscribe(res=>{
    console.log(res);
})