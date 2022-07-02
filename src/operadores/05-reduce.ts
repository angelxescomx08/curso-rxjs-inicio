import { interval } from "rxjs";
import { reduce, take, tap } from 'rxjs/operators';

const numbers = [1,2,3,4,5];

const totalReducer = (acumulador:number,valorActual:number)=>{
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer,0);
console.log('Total: ',total);

/**
 * reduce - Similar al reduce de js, acumula valores pero solo 
 * emite el valor final
 * @param calback,función acumuladora (acumulado,valorActual)
 * @param valor inicial
 */
interval(1000)
.pipe(
    take(3),
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val=> console.log('next: ',val),
    complete:  ()=> console.log('completado')
})