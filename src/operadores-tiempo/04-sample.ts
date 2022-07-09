import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent(document,'click');

/**
 * Emite el valor emitido más recientemente desde el Observable 
 * de origen cada vez que otro Observable, el notifier, emite.
 * @param segundo observable
 */
interval$.pipe(
    sample(click$)
).subscribe(console.log)