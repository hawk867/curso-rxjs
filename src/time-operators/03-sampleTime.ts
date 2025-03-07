import {fromEvent, sampleTime} from "rxjs";
import {map} from "rxjs/operators";


const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    map( ({ x, y }) => ({ x, y })),
    sampleTime(2000),
).subscribe( console.log )