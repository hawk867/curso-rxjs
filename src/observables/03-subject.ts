import {Observable, Observer, Subject} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn("error: ", error),
    complete: () => console.info("completado: ")
};

const intervalo$ = new Observable<number>( subs => {

    const intervalId = setInterval(
        () => subs.next( Math.random()), 1000
    );
    return () => {
        clearInterval(intervalId);
        console.log("intervalo destruido!!");
    }
});

// Caracteristicas del subject
// 1. casteo multiple: varios subs van a estar sujetos al mismo subject o observable
// 2. es un observer
// 3. tambn maneja next, error y complete
const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );

// const subs1 = intervalo$.subscribe( rdn => console.log('subs1', rdn) );
// const subs2 = intervalo$.subscribe( rdn => console.log('subs2', rdn) );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
    subject$.next( 10 );
    subject$.complete();
    subscription.unsubscribe();
}, 3500);