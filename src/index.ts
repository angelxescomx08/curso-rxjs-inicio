import { range, fromEvent } from 'rxjs';
import { map } from "rxjs/operators";

/*range(1,5)
    .pipe(
        map<number,number>(val=>val*10)
    )
    .subscribe( console.log )*/

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

/**
 * Map aplica una función dada a cada valor emitido por un observable y emite los valores 
 * obtenidos como un observable
 * @params funcion
 * @return Observable<any>
 */
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

keyupCode$.subscribe(console.log);