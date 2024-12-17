import {fromEvent, takeWhile} from "rxjs";
import {map} from "rxjs/operators";


const click$ = fromEvent<MouseEvent>( document, 'click' );


click$.pipe(
    map( ({ x, y }) => ({ x, y})),
    // takeWhile( ({ y }) => y <= 150 )
    // al agregar el true, me incluye el valor q rompe el while
    takeWhile( ({ y }) => y <= 150, true )
)
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete'),
    });