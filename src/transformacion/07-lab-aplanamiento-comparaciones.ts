import { catchError, fromEvent, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { exhaustMap } from 'rxjs/operators';
//creado un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

//helper
const url = 'https://reqres.in/api/login?delay=1'
const peticionHttpLogin = (userPass)=> ajax.post(url,userPass)
    .pipe(
        map(res=>res.response['token']),
        catchError(err => of('xxx'))
    )

//configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail,inputPass,submitBtn);
document.querySelector('body').append(form);

//Streams
const submitForm$ = fromEvent<Event>(form,'submit').pipe(
    tap(ev=>ev.preventDefault()),
    map(ev=>({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    //mergeMap(peticionHttpLogin),
    //switchMap(peticionHttpLogin)
    exhaustMap(peticionHttpLogin)
)

submitForm$.subscribe(token=>{
    console.log(token);
});