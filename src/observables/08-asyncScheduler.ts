// esto es mas una subscription que un observable

import {asyncScheduler} from "rxjs";

// esto equivale a setTimeout funcion de javascript
const saludar = () => console.log('Hola mundo');
const saludar2 = nombre => console.log(`Hola ${ nombre }`);

asyncScheduler.schedule( saludar, 2000 );
asyncScheduler.schedule( saludar2, 2000, 'Daniel' );

// asyncScheduler como setInterval
const subs = asyncScheduler.schedule( function (state) {
    console.log('state', state);
    this.schedule( state + 1, 1000 );
}, 3000, 0);

// setTimeout( () => {
//     subs.unsubscribe();
// }, 7000);

asyncScheduler.schedule( () => subs.unsubscribe(), 7000);