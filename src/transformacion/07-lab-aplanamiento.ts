import {catchError, exhaustMap, fromEvent, mergeMap, of, switchMap, tap} from "rxjs";
import {map, pluck} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

// helper
const peticionHttpLogin = ( userPass ) => {
    return ajax.post( 'https://reqres.in/api/login?delay=1', userPass ).pipe(
        pluck('response', 'token'),
        catchError( err => of('XXX'))
    )
}


// creando formulario
const form = document.createElement( 'form' );
const inputEmail = document.createElement( 'input' );
const inputPass = document.createElement( 'input' );
const submitBtn = document.createElement( 'button' );

// configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append( inputEmail, inputPass, submitBtn );
document.querySelector('body').append( form );

// Streams
const submitForm$ = fromEvent( form, 'submit' ).pipe(
    tap( ev => ev.preventDefault()),
    map( ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value,
    })),
    // mergeMap( userPass => peticionHttpLogin( userPass ) )
    exhaustMap( peticionHttpLogin )
);

submitForm$.subscribe( token => {
    console.log( token );
})