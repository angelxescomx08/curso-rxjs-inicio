import { interval, Observer, timer } from 'rxjs';

const observer: Observer<number> = {
    next: val=> console.log('next: ',val),
    error: null,
    complete: ()=> console.log('complete')
}

/**
 * Emite un valor numerico cada cierto tiempo
 * @params period: number
 */
const interval$ = interval(1000);

/**
 * Emite un valor despues de un tiempo especifico, con el inteval duration actua similar a interval
 * con la diferencia de que se dispara después como un setTimeout
 * @params due: number | Date
 * @params intervalDuration: number
 */
const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);

//const timer$ = timer(3000);
//const timer$ = timer(3000,1000);
const timer$ = timer(hoyEn5);

console.log('Inicio');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');