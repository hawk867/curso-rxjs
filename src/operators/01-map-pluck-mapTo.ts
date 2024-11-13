import {fromEvent, range} from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

range(1,5).pipe(
    // el map se tipa con el tipo de dato q entra, y luego el q sale
    map<number, string>( val => ( val*10 ).toString())
).subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );
const keyupCode$ = keyup$.pipe(
    map(e => e.code),
);
keyupCode$.subscribe( code => console.log('map', code) );

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

// alternativa al pluck deprecado
// const keyupPluck$ = keyup$.pipe(
//     // map(event => (event.target as HTMLElement).baseURI)
//     map( event => event.target['baseURI'])
// );

keyupPluck$.subscribe( code => console.log('pluck', code) );


const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);

keyupMapTo$.subscribe( code => console.log('mapTo', code) );