import { of } from "rxjs";
import { take, tap } from 'rxjs/operators';

const numeros$ = of(1,2,3,4,5);

/**
 * take - emite la cantidad de valores espeficicada,
 * se puede usar para cancelar la subscripción en una petición http
 * @param count: number
 */
numeros$
.pipe(
    tap(v => console.log('tap: ',v)),
    take(3)
)
.subscribe({
    next: val => console.log('Valor: ',val),
    complete: () => console.log('complete')

});