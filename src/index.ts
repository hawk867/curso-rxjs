import {Observable, Observer} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("siguiente [next]: ", value),
    error: error => console.warn("error [obs]: ", error),
    complete: () => console.info("completado [obs]: "),
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subscriber => {
    subscriber.next('Hola');
    subscriber.next('mundo');
    subscriber.next('Hola');
    subscriber.next('mundo');

    // Forzando error
    // const a = undefined;
    // a.nombre = 'Daniel'

    subscriber.complete();

    subscriber.next('despues del complete no se emite ningun valor')
});

obs$.subscribe( observer );

// obs$.subscribe(
//     valor => console.log(valor),
//     error => console.warn(error),
//     () => console.info('Finished obs$')
// );