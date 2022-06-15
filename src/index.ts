import { Observable } from "rxjs";

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
 * @params next {funcion}
 */
obs$.subscribe(console.log);


