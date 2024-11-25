import {first, fromEvent, tap} from "rxjs";
import {map} from "rxjs/operators";


const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    tap<MouseEvent>( console.log ),
    // desestructuracion de objetos

    // map( event => ({
    //     clientX: event.clientX,
    //     clientY: event.clientY,
    // })),
    map( ({ clientX, clientY}) => ({clientX, clientY})),

    // podemos usar el first para que emita el primer valor que cumpla una condicion
    first( event => event.clientY >= 150),
)
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete'),
    });