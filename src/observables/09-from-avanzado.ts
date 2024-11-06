import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise. iterable, observable
 */

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
};

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('Daniel');

// el fetch trabaja en base a promesas
const source$ = from( fetch('https://api.github.com/users/klerith'));

// source$.subscribe( observer );

source$.subscribe( async(resp) => {
    // console.log(resp);
    const dataResp = await resp.json();
    console.log( dataResp );
});

// funciones generadoras o iterables
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();

// para obtener los datos puedo usar un ciclo for
// for (let id of miIterable) {
//     console.log(id);
// }

// se puede hacer con un from
from( miIterable ).subscribe( observer );