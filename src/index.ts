import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: (valor)=> console.log('next: ',valor),
    error: (error)=> console.warn('error: ',error),
    complete: ()=> console.info('completado')
}

const intervalo$ = new Observable<number>(subs=>{
    const interval = setInterval(()=>{
        subs.next(Math.random())
    },1000);

    return ()=> {
        clearTimeout(interval);
        console.log('Intervalo destruido');
    }
});

//const subs1 = intervalo$.subscribe(rnd=>console.log('subs1: ',rnd));
//const subs2 = intervalo$.subscribe(rnd=>console.log('subs2: ',rnd));

/**
 * Caracteristicas del subject
 * 1. Casteo multiple para el mismo valor a varios subscribers
 * 2. Tambien es un observer 
 * 3. Next, error y complete
 */

const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

/**
 * Cuando la data es producida por el observable en si mismo, es considerado un 'cold observable',
 * pero cuando es producida fuera del observable es considerado 'hot observable'
 */

const timeout = setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
},3500);