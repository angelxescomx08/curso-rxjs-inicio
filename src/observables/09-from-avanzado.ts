import { of, from, Observer } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable emite los valores dentro
 */

const observer: Observer<any> = {
    next: val => console.log('Next: ',val),
    error: null,
    complete: ()=>console.log('Complete')
}

//const source$ = from([1,2,3,4,5]);
//const source$ = of([1,2,3,4,5]);
//const source$ = from('Angel');
//const source$ = from( fetch('https://api.github.com/users/angelxescomx08') );

/*source$.subscribe(async (res)=>{
    const data = await res.json();
    console.log(data);
});*/
//source$.subscribe(observer);

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

/*for(let i of miIterable){
    console.log(i);
}*/

from( miIterable ).subscribe(observer);