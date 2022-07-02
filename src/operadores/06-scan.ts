import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numeros = [1,2,3,4,5];

const totalAcumulador = (valorAcumulado,actual)=>{
    return valorAcumulado + actual
}

//Reduce
from(numeros)
.pipe(
    reduce(totalAcumulador,0)
)
.subscribe(console.log);

/**
 * scan -Similar al reduce acumula los valores pero a diferencia
 * de reduce si emite todas las acumulaciones
 * @param callback, función acumuladora (acc,curr)
 * @param valor inicial
 */
from(numeros)
.pipe(
    scan(totalAcumulador,0)
)
.subscribe(console.log);

//Redux
interface Usuario{
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'ang', autenticado: false, token: null},
    {id: 'ang', autenticado: true, token: 'abc'},
    {id: 'ang', autenticado: true, token: 'abc123'},
];

const state$ = from(user).pipe(
    scan<Usuario>((acc,cur)=>{
        return {...acc,...cur}
    })
);

const id$ = state$.pipe(
    map(state=> state.id)
);

id$.subscribe(console.log);