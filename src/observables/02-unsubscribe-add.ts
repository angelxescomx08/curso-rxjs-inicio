import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: (valor)=> console.log('next: ',valor),
    error: (error)=> console.warn('error: ',error),
    complete: ()=> console.info('completado')
}

const intervalo$ = new Observable<number>(subscriber=>{

    let count = 0;
    const interval = setInterval(()=>{
        count++;
        subscriber.next(count);
        console.log(count);
    },1000);

    return ()=>{
        clearInterval(interval);
        console.log('interval destruido: ', interval);
    }
});

const subscrition1 = intervalo$.subscribe(observer);
const subscrition2 = intervalo$.subscribe(observer);
const subscrition3 = intervalo$.subscribe(observer);

subscrition1.add(subscrition2)

const timeout = setTimeout(()=>{
    subscrition1.unsubscribe();
    //subscrition2.unsubscribe();
    //subscrition3.unsubscribe();
    console.log('compleatdo');
},3000);

clearTimeout(timeout);