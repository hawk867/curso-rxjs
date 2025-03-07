import {interval, timer} from "rxjs";

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
}
const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

const interval$ = interval(1000);

// emite un valor a los 2 seg y se completa, si no se le pone nada emite el valor a penas pueda
// const timer$ = timer(2000);

// emite un valor a los 2 seg, y luego cada segundo
// const timer$ = timer(2000, 1000);

// es util para programar una tarea si se sabe en que momento se tiene q ejecutar
const timer$ = timer( hoyEn5 );

console.log('inicio');
interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('fin');