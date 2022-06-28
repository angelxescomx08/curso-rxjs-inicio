import { range, fromEvent } from 'rxjs';
import { map, pluck } from "rxjs/operators";

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

/**
 * DEPRECIADO, Devuelve una propiedad de un objeto (Se puede usar map en vez de este)
 * @params propiedades (anidadas de tipo string)
 */
const keyupPluck$ = keyup$.pipe(
    pluck('key')
);

const keyupPluckAnidado$ = keyup$.pipe(
    pluck('target','baseURI')
);

keyupCode$.subscribe(code=>console.log('map',code));
keyupPluck$.subscribe(code=>console.log('pluck',code));
keyupPluckAnidado$.subscribe(code=>console.log('pluck anidado',code));