import { asyncScheduler, of, range } from 'rxjs';

/**
 * Emite un numero de emisiones deterinado con un determinado inicio
 * @params inicio:  number
 * @params numero de emisiones: number
 */

const src$ = range(1,5);

src$.subscribe(console.log);