import {asyncScheduler, distinctUntilChanged, fromEvent, throttleTime} from "rxjs";
import {pluck} from "rxjs/operators";


const click$ = fromEvent( document, 'click' );

click$.pipe(
    // va a emitir el primer valor del observable y va a ignorar en este caso 3 segundos los valores
    // que se emitan en ese espacio de tiempo, es lo opuesto al debounceTime
    throttleTime(3000),
)// .subscribe( console.log );

// ejemplo 2
const input = document.createElement( 'input' );
document.querySelector( 'body' ).append( input );

const input$ = fromEvent( input, 'keyup' );
input$.pipe(
    throttleTime(1000, asyncScheduler, {
        // se le pueden agregar estos valores, el asyncScheduler
        // el leading y el trailing para que tome el primer valor y el ultimo en el espacio de tiempo
        leading: true,
        trailing: true,
    }),
    pluck('target', 'value'),
    distinctUntilChanged(),
).subscribe( console.log );