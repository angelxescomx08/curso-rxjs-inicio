import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, map, throttleTime } from "rxjs";

const click$ = fromEvent(document,'click');

/**
 * throttleTime - Emite un valor del Observable de origen, luego ignora los valores de origen 
 * posteriores durante durationmilisegundos y luego repite este proceso. Lo opuesto a debounceTime
 * @param tiempo
 */
click$.pipe(
    throttleTime(1000)
)//.subscribe((val)=>console.log('Después de un segundo: ',val));


const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input,'keyup');
input$.pipe(
    throttleTime(300, asyncScheduler,{
        leading: true,
        trailing: true
    }),
    map(event => event.target as HTMLInputElement),
    map( input => input.value ),
    distinctUntilChanged()
).subscribe(console.log);