import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";

const click$ = fromEvent(document,'click');

/**
 * debounceTime - Emite los valores después de un tiempo especificado (Solo el último valor)
 * @param tiempo
 */
click$.pipe(
    debounceTime(1000)
).subscribe((val)=>console.log('Después de un segundo: ',val));


const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input,'keyup');
input$.pipe(
    debounceTime(300),
    map(event => event.target as HTMLInputElement),
    map( input => input.value ),
    distinctUntilChanged()
).subscribe(console.log);