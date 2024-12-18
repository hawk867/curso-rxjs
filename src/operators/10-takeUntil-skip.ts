import {fromEvent, interval, skip, takeUntil, tap} from "rxjs";


const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';
document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap( ()=> console.log('tap antes del skip')),
    // para este caso se va a saltar el primer valor,
    // si se le pone un 2 no va a emitir los primeros dos valores del evento
    skip(1),
    tap( ()=> console.log('tap despues del skip')),
);

counter$.pipe(
    // takeUntil nos permite emitir valores hasta que otro observable emita un valor
    takeUntil( clickBtn$ )
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
})