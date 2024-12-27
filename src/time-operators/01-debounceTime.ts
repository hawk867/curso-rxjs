import {debounceTime, distinctUntilChanged, fromEvent} from "rxjs";
import {pluck} from "rxjs/operators";


const click$ = fromEvent( document, 'click' );

click$.pipe(
    // va a emitir el ultimo valor del observable, en este caso 3 segundos despues
    // si continua haciendo click no va a emitir nada
    debounceTime(3000),
); // .subscribe( console.log );

// ejemplo 2
const input = document.createElement( 'input' );
document.querySelector( 'body' ).append( input );

const input$ = fromEvent( input, 'keyup' );
input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged(),
).subscribe( console.log );