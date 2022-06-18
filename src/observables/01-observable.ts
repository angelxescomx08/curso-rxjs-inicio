import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: (valor)=> console.log('next: ',valor),
    error: (error)=> console.warn('error: ',error),
    complete: ()=> console.info('completado')
}

/**
 * Observable
 * crea un observable
 * @params subscriber {funcion}
 */
const obs$ = new Observable<string>(subscriber =>{
    subscriber.next('Hola');
    subscriber.next('mundo');

    subscriber.next('Hola');
    subscriber.next('mundo');

    subscriber.complete();

    subscriber.next('Hola');
    subscriber.next('mundo');
});

/**
 * subscribe
 * @params next {callback}
 */
/*obs$.subscribe({
    next: (valor)=> console.log('next: ',valor),
    error: (error)=> console.warn('error: ',error),
    complete: ()=> console.info('completado')
});*/

obs$.subscribe(observer);
