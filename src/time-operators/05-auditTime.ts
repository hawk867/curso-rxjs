import {auditTime, fromEvent, tap} from "rxjs";
import {map} from "rxjs/operators";

const click$ = fromEvent<PointerEvent>( document, 'click' );

click$.pipe(
    map( ({ x, y }) => ({ x, y })),
    tap( val => console.log('tap', val) ),
    auditTime(2000),
).subscribe( console.log );