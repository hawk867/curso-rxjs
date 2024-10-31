import {asyncScheduler, range} from "rxjs";


// en el range el primer valor indica donde empieza y el segundo la cantidad de emisiones
// el valor del start por defecto es 0
const src$ = range(1,5, asyncScheduler);

console.log('inicio');
src$.subscribe( console.log );
console.log('fin');