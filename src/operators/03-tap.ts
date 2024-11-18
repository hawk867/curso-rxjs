import {range, tap, map} from "rxjs";

const numeros$ = range(1,5);

numeros$.pipe(
    tap( x => {
        console.log('antes del sub', x);
        return 100; // no altera el flujo de datos
    }),
    map( val => val * 10),
    tap({
        next: valor => console.log('despues', valor),
        complete: () => console.log('Se completo todo')
    })
)
    .subscribe( val => console.log('subscriprion', val));