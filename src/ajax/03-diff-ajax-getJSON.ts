import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.orgXXX/delay/1';

const manejaError = (res: AjaxError) =>{
    console.warn('error: ', res.message);
    return of({
        ok: false,
        usuarios: []
    })
}

/*const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);*/

const obs$ = ajax.getJSON(url)
const obs2$ = ajax(url)

//obs$.subscribe(data => console.log('getJSON: ',data));
//obs2$.subscribe(data => console.log('ajax: ',data));

obs$.pipe(
    catchError(manejaError)
).subscribe({
    next: val => console.log('next: ',val),
    error: err => console.warn('error en subs: ',err),
    complete: () => console.log('complete')
});