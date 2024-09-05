import { Observable } from "rxjs";

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subscriber => {
    subscriber.next('Hola');
    subscriber.next('mundo');
    subscriber.next('Hola');
    subscriber.next('mundo');
    subscriber.complete();
});

obs$.subscribe( console.log );