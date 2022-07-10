const url = 'https://api.github.com/useXXXrs?per_page=5';

const fetchPromesa = fetch(url);

/*fetchPromesa
    .then(res => res.json())
    .then(data => console.log('data: ',data))
    .catch(err => console.warn('Error en usuarios',err));
*/

const manejaErrores = (response: Response) =>{
    if( !response.ok ){
        throw new Error(response.statusText);
    }

    return response;
}

fetchPromesa
    .then(manejaErrores)
    .then(res => res.json())
    .then(data => console.log('data: ',data))
    .catch(err => console.warn('Error en usuarios',err));