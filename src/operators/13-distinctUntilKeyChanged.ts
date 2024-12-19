import {distinctUntilKeyChanged, from} from "rxjs";


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
    distinctUntilKeyChanged( 'name' )
).subscribe( console.log.bind( this ) );