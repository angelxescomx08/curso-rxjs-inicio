import { map, range, tap } from "rxjs";

const numeros$ = range(1,5);

/**
 * Sirve para disparar efectos alternos (Sus returns son ignorados),
 * un uso útil es depurar
 * @param Observer 
 * @param funcion
 */
numeros$.pipe(
    tap(val=>console.log('antes: ',val)),
    map(val=>val*10),
    tap({
        next: (val)=>console.log('después: ',val),
        complete: ()=>console.log('Se terminó todo')
    })
).subscribe(val=>console.log('subs: ',val));