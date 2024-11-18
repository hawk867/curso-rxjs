import {interval, reduce, take, tap} from "rxjs";

// el reduce emite un valor hasta q se completa
// en javascript

const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}

const total = numbers.reduce( totalReducer, 0 );
console.log( 'total arr', total );

interval(1000).pipe(
    take(6), // el take completa el observable con el valor q especifique
    tap( console.log ), // el tap me sirve para validar lo q esta sucediendo en ese momento
    reduce( totalReducer ) // si no se le pone un segundo argumento el valor por defecto es 0
)
    .subscribe({
        next: val => console.log( 'next: ', val ),
        complete: () => console.log( 'Complete')
    })