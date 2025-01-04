import { catchError, map, of, pluck } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';

const url = 'https://api.github.com/usexxxrs?per_page=5';

const manejoError = ( response: Response ) => {
    if ( !response.ok ) {
        throw new Error( response.statusText );
    }
    return response;
}

const atrapaError = ( err: AjaxError) => {
    console.warn('error en: ', err.message)
    return of({});
}

// const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(response => response.json())
//     .then( data => console.log('data', data) );
//     .catch();

// fetchPromesa
//     .then( manejoError )
//     .then(response => response.json())
//     .then( data => console.log('data', data) )
//     .catch( error => console.warn( 'error en usuarios', error ) );

ajax( url ).pipe(
    pluck('response'),
    catchError( atrapaError )
).subscribe( users => console.log('usuarios: ', users) )