import { catchError, map, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'

const url = 'https://api.github.com/users?per_page=5';

const fetchPromesa = fetch(url);

/*fetchPromesa
    .then(res => res.json())
    .then(data => console.log('data: ',data))
    .catch(err => console.warn('Error en usuarios',err));
*/

const manejaErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response;
}

/*fetchPromesa
    .then(manejaErrores)
    .then(res => res.json())
    .then(data => console.log('data: ',data))
    .catch(err => console.warn('Error en usuarios',err));*/

const atrapaError = (err: AjaxError) => {
    console.warn('Error: ', err.message)
    return of([]);
}


/**
 * catchError - Captura errores en el observable que se va a manejar devolviendo 
 * un nuevo observable o lanzando un error.
 * @param una función que toma como argumentos err, que es el error, y caught, 
 * que es la fuente observable, en caso de que desee "volver a intentar" ese observable 
 * devolviéndolo nuevamente. Cualquier cosa observable devuelta por el selector se utilizará 
 * para continuar la cadena observable.
 */
ajax(url).pipe(
    map(res => res.response),
    catchError(atrapaError)
).subscribe(users => console.log('usuarios: ', users))