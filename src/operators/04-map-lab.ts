import {fromEvent} from "rxjs";
import {map, tap} from "rxjs/operators";


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, nunc scelerisque rhoncus bibendum, enim nunc mattis tellus, et tempor sapien elit eu mi. In placerat, metus et scelerisque porta, mi sapien mattis enim, sit amet consectetur sapien lacus in dui. Ut non ligula fringilla, venenatis dui in, malesuada erat. Proin ac tristique ipsum, non pretium risus. Proin condimentum magna gravida lacinia feugiat. Integer vestibulum nunc non tellus rutrum, in ullamcorper ipsum finibus. Curabitur convallis mi vel quam tempus, eu blandit mi egestas. Duis nec porta eros. In malesuada, dolor vel consectetur pellentesque, diam odio accumsan libero, quis scelerisque massa sem id turpis.
<br /><br />
Vestibulum luctus tempor leo, non convallis justo tristique viverra. Etiam id sem pellentesque, accumsan magna quis, rhoncus orci. Quisque ante mi, vulputate in nisl non, imperdiet venenatis nisl. Pellentesque ullamcorper sem vitae elit interdum auctor ut eu tellus. Phasellus elementum urna et elit mattis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse semper hendrerit malesuada. Praesent sapien massa, consequat nec lacus a, hendrerit imperdiet risus. Proin molestie vulputate ultricies. Mauris ligula ipsum, blandit eu arcu in, lobortis tincidunt metus. Proin faucibus nibh magna, et euismod tellus iaculis non. Aliquam ultricies molestie massa, eget ultricies ligula rhoncus sed. Fusce eget sem sodales, dignissim orci eu, accumsan dolor. Sed blandit lorem magna, eu pulvinar ex pretium eget. Vivamus pharetra id augue quis semper. Pellentesque posuere iaculis nisi vitae dignissim.
<br /><br />
Cras interdum porttitor pellentesque. Vestibulum nec ullamcorper ipsum. Etiam commodo, nisi id hendrerit ornare, tellus urna dapibus orci, vel facilisis nunc libero a nunc. Fusce enim justo, vehicula vehicula leo vel, pulvinar porttitor turpis. Nam mollis velit sem, sit amet suscipit libero tempus ut. Nam posuere risus lorem, id varius tortor porttitor vitae. Sed in blandit massa, ac tincidunt ex. Vivamus metus nibh, ultricies vel sagittis vitae, fringilla id odio. Curabitur posuere finibus elit, in ultrices quam eleifend nec. Praesent auctor eget ex sit amet ullamcorper. Proin rutrum condimentum risus non semper. Vivamus nec suscipit est, facilisis pellentesque metus.
<br /><br />
Etiam faucibus faucibus purus, quis ullamcorper nunc consequat eu. Nunc eget semper augue, id dignissim justo. Phasellus aliquet est vitae augue euismod vulputate. Donec eget ullamcorper mauris. Mauris pulvinar elit eget orci aliquam faucibus. Cras sodales ex magna, sed tristique magna sollicitudin id. Quisque ultricies aliquet pretium. Integer eu lacinia mi. Maecenas tincidunt eros eu gravida consequat. Donec vitae pretium nisi, nec iaculis dui.
<br /><br />
Aliquam dictum orci dolor, vehicula condimentum leo eleifend vel. Integer et vehicula enim. Vivamus consequat efficitur ornare. Maecenas mi nisl, pretium vel hendrerit sed, ultricies ac nulla. Etiam turpis mi, scelerisque in dui et, finibus sagittis enim. Nullam condimentum ut diam sed varius. Curabitur sodales quam sed leo rutrum rhoncus eget maximus nibh. Duis quis lacinia mi, non fermentum orci. Praesent convallis eros non orci semper feugiat. Aenean sagittis, tortor id porta pharetra, libero elit mollis eros, vel efficitur lorem purus eget sapien. Nulla semper massa eget justo tempus interdum. Fusce in ante sagittis, euismod elit non, egestas felis. Duis vestibulum ex nisl, et fringilla ligula elementum ut. Vestibulum rutrum dui nec justo malesuada tristique. Cras et luctus nisl. Ut facilisis tortor sit amet gravida faucibus.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append( progressBar );

// funcion que haga el calculo
const calcularPorcentajeScroll = ( event ) => {
    // console.log( event );
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    // console.log( clientHeight, scrollHeight, scrollTop );
    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
}
// Streams
const scroll$ = fromEvent( document, 'scroll' );

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll( event ) )
    map( calcularPorcentajeScroll ),
    tap( console.log )
);


progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
});