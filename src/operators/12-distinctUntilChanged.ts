import {distinctUntilChanged, from, of} from "rxjs";


const numeros$ = of(1,'1',3,2,3,2,3,4,5,1);

numeros$.pipe(
    distinctUntilChanged() // lo compara con el valor anterior si es el mismo no lo deja pasar
).subscribe( console.log.bind( this ) );

interface Personaje {
    name: string;
}

const personajes: Personaje[] = [
    { name: 'Megaman' },
    { name: 'Megaman' },
    { name: 'Dr Willy' },
    { name: 'Dr Willy' },
    { name: 'X' },
    { name: 'Zero' },
];

from( personajes ).pipe(
    distinctUntilChanged( (ant, act) => ant.name === act.name )
).subscribe( console.log.bind( this ) );