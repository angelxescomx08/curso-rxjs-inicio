import { debounceTime, fromEvent, map, mergeAll, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user-interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';
const body = document.querySelector('body');
const textInput = document.createElement('input');
const ol = document.createElement('ol');

body.append(textInput,ol);

const input$ = fromEvent<KeyboardEvent>(textInput,'keyup');

const mostrarUsuarios = (users: GithubUser[]) =>{
    console.log(users);
    ol.innerHTML = '';
    users.forEach(user=>{
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = user.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login+' ');
        li.append(anchor);

        ol.append(li);
    })
}


/**
 * mergeAll - ******Se subscribe a un observable emitido por el operador anterior, aplana el observable*******
 * Convierte un Observable de orden superior en un Observable de primer orden que entrega simultáneamente 
 * todos los valores que se emiten en los Observables internos.
 */
input$.pipe(
    debounceTime(500),
    map(event=> event.target as HTMLInputElement),
    map(target=>target.value),
    map<string,Observable<GithubUsersResp>>((text)=>ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    mergeAll(),
    map<GithubUsersResp,GithubUser[]>((res)=>res.items)
).subscribe(mostrarUsuarios)