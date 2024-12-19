import {distinct, from, of} from "rxjs";


const numeros$ = of(1,'1',3,2,3,2,3,4,5,1);

numeros$.pipe(
    distinct() // === el distict valida el triple = u operador de equidad
).subscribe( console.log.bind( this ) );

interface Personaje {
    name: string;
}

const personajes: Personaje[] = [
    { name: 'Megaman' },
    { name: 'X' },
    { name: 'Megaman' },
    { name: 'Dr Willy' },
    { name: 'X' },
    { name: 'Zero' },
];

from( personajes ).pipe(
    distinct( p => p.name )
).subscribe( console.log.bind( this ) );