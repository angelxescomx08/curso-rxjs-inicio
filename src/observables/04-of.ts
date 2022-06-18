import {of} from 'rxjs';

/**
 * Convierte la secuencia de valores de argumentos en valores que fluyen a traves del observable
 */
const obs$ = of(1,2,3,4,5,6,7,8,9,10);

obs$.subscribe({
    next: (valor)=> console.log(valor),
    complete: ()=>console.log('Terminado') 
})
