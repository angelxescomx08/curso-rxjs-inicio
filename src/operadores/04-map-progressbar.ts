import { fromEvent } from "rxjs";
import { map,tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper turpis sed urna maximus sodales. Curabitur ligula ex, finibus in imperdiet vitae, vehicula ac lacus. Nunc tristique tortor odio, nec dapibus urna accumsan sit amet. Duis tristique orci id ipsum vehicula mollis. Maecenas tellus sem, ultricies quis viverra vel, elementum ultrices risus. Phasellus volutpat, nunc quis commodo consectetur, nisl leo ultrices neque, posuere facilisis sem felis sed nunc. Donec posuere mi non ligula malesuada euismod. Integer eu sem augue. Morbi nibh risus, luctus sit amet nisl a, suscipit ultrices elit. Sed congue risus convallis sapien porta, sollicitudin tempus ex scelerisque. Nullam dignissim volutpat tellus.<br/><br/>

Suspendisse eget mollis arcu. Sed id augue sed neque faucibus dictum. Vestibulum laoreet efficitur consectetur. Aliquam erat volutpat. Pellentesque at risus pretium, eleifend sapien ac, placerat felis. Sed vestibulum velit in mi ornare, sit amet viverra sapien interdum. Mauris ac metus ac sapien pulvinar malesuada. In euismod diam ipsum, vel dictum odio venenatis a. Nullam non ornare dolor. Ut ut tortor sit amet nulla lobortis tempus ut vel lorem. Donec aliquet nec lorem eu pharetra. Cras id massa eget lorem ullamcorper ullamcorper ac sed purus. Cras dapibus rhoncus porttitor.<br/><br/>

Morbi pulvinar tincidunt lacinia. Suspendisse sem lectus, faucibus porta tincidunt at, accumsan vitae eros. Maecenas imperdiet ipsum quis nunc lobortis, sit amet interdum libero posuere. Donec id nisl ac neque hendrerit pellentesque quis ac dui. Aliquam malesuada nisi et eros lobortis aliquet. Etiam iaculis velit ante, aliquet interdum orci euismod in. Duis ligula libero, tempor eleifend nulla vel, efficitur placerat dolor. Aliquam eget pharetra turpis.<br/><br/>

In sed purus eget orci finibus posuere. Phasellus finibus ut nibh sed suscipit. Aliquam semper aliquet risus, interdum sodales felis feugiat sed. Vivamus vulputate ligula sed odio faucibus, vitae sodales turpis dignissim. Suspendisse malesuada bibendum condimentum. Quisque ut porta justo. Morbi fringilla iaculis egestas. Sed vulputate mi in enim gravida sagittis. Sed justo tortor, porta a mauris non, malesuada placerat erat. Duis in mattis mi. Praesent vel ante sit amet diam egestas mattis vehicula non risus. Curabitur a velit arcu.<br/><br/>

Donec tincidunt dapibus quam eget elementum. Maecenas id semper ligula, sit amet blandit lacus. Curabitur ornare ex laoreet metus ultrices lacinia scelerisque quis nibh. Aenean vestibulum eget mi eu ornare. Fusce tellus leo, placerat ac lacus sit amet, ultrices rutrum ipsum. Donec et mattis mauris. Ut iaculis sed ipsum ac hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tincidunt vestibulum mi, quis scelerisque arcu. Pellentesque laoreet, velit quis faucibus iaculis, libero ex hendrerit nunc, quis consequat nibh mauris at orci. Cras placerat ligula ligula, a pulvinar augue accumsan vel. Duis risus diam, lobortis at libero eget, tristique scelerisque turpis.<br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper turpis sed urna maximus sodales. Curabitur ligula ex, finibus in imperdiet vitae, vehicula ac lacus. Nunc tristique tortor odio, nec dapibus urna accumsan sit amet. Duis tristique orci id ipsum vehicula mollis. Maecenas tellus sem, ultricies quis viverra vel, elementum ultrices risus. Phasellus volutpat, nunc quis commodo consectetur, nisl leo ultrices neque, posuere facilisis sem felis sed nunc. Donec posuere mi non ligula malesuada euismod. Integer eu sem augue. Morbi nibh risus, luctus sit amet nisl a, suscipit ultrices elit. Sed congue risus convallis sapien porta, sollicitudin tempus ex scelerisque. Nullam dignissim volutpat tellus.<br/><br/>

Suspendisse eget mollis arcu. Sed id augue sed neque faucibus dictum. Vestibulum laoreet efficitur consectetur. Aliquam erat volutpat. Pellentesque at risus pretium, eleifend sapien ac, placerat felis. Sed vestibulum velit in mi ornare, sit amet viverra sapien interdum. Mauris ac metus ac sapien pulvinar malesuada. In euismod diam ipsum, vel dictum odio venenatis a. Nullam non ornare dolor. Ut ut tortor sit amet nulla lobortis tempus ut vel lorem. Donec aliquet nec lorem eu pharetra. Cras id massa eget lorem ullamcorper ullamcorper ac sed purus. Cras dapibus rhoncus porttitor.<br/><br/>

Morbi pulvinar tincidunt lacinia. Suspendisse sem lectus, faucibus porta tincidunt at, accumsan vitae eros. Maecenas imperdiet ipsum quis nunc lobortis, sit amet interdum libero posuere. Donec id nisl ac neque hendrerit pellentesque quis ac dui. Aliquam malesuada nisi et eros lobortis aliquet. Etiam iaculis velit ante, aliquet interdum orci euismod in. Duis ligula libero, tempor eleifend nulla vel, efficitur placerat dolor. Aliquam eget pharetra turpis.<br/><br/>

In sed purus eget orci finibus posuere. Phasellus finibus ut nibh sed suscipit. Aliquam semper aliquet risus, interdum sodales felis feugiat sed. Vivamus vulputate ligula sed odio faucibus, vitae sodales turpis dignissim. Suspendisse malesuada bibendum condimentum. Quisque ut porta justo. Morbi fringilla iaculis egestas. Sed vulputate mi in enim gravida sagittis. Sed justo tortor, porta a mauris non, malesuada placerat erat. Duis in mattis mi. Praesent vel ante sit amet diam egestas mattis vehicula non risus. Curabitur a velit arcu.<br/><br/>

Donec tincidunt dapibus quam eget elementum. Maecenas id semper ligula, sit amet blandit lacus. Curabitur ornare ex laoreet metus ultrices lacinia scelerisque quis nibh. Aenean vestibulum eget mi eu ornare. Fusce tellus leo, placerat ac lacus sit amet, ultrices rutrum ipsum. Donec et mattis mauris. Ut iaculis sed ipsum ac hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tincidunt vestibulum mi, quis scelerisque arcu. Pellentesque laoreet, velit quis faucibus iaculis, libero ex hendrerit nunc, quis consequat nibh mauris at orci. Cras placerat ligula ligula, a pulvinar augue accumsan vel. Duis risus diam, lobortis at libero eget, tristique scelerisque turpis.<br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper turpis sed urna maximus sodales. Curabitur ligula ex, finibus in imperdiet vitae, vehicula ac lacus. Nunc tristique tortor odio, nec dapibus urna accumsan sit amet. Duis tristique orci id ipsum vehicula mollis. Maecenas tellus sem, ultricies quis viverra vel, elementum ultrices risus. Phasellus volutpat, nunc quis commodo consectetur, nisl leo ultrices neque, posuere facilisis sem felis sed nunc. Donec posuere mi non ligula malesuada euismod. Integer eu sem augue. Morbi nibh risus, luctus sit amet nisl a, suscipit ultrices elit. Sed congue risus convallis sapien porta, sollicitudin tempus ex scelerisque. Nullam dignissim volutpat tellus.<br/><br/>

Suspendisse eget mollis arcu. Sed id augue sed neque faucibus dictum. Vestibulum laoreet efficitur consectetur. Aliquam erat volutpat. Pellentesque at risus pretium, eleifend sapien ac, placerat felis. Sed vestibulum velit in mi ornare, sit amet viverra sapien interdum. Mauris ac metus ac sapien pulvinar malesuada. In euismod diam ipsum, vel dictum odio venenatis a. Nullam non ornare dolor. Ut ut tortor sit amet nulla lobortis tempus ut vel lorem. Donec aliquet nec lorem eu pharetra. Cras id massa eget lorem ullamcorper ullamcorper ac sed purus. Cras dapibus rhoncus porttitor.<br/><br/>

Morbi pulvinar tincidunt lacinia. Suspendisse sem lectus, faucibus porta tincidunt at, accumsan vitae eros. Maecenas imperdiet ipsum quis nunc lobortis, sit amet interdum libero posuere. Donec id nisl ac neque hendrerit pellentesque quis ac dui. Aliquam malesuada nisi et eros lobortis aliquet. Etiam iaculis velit ante, aliquet interdum orci euismod in. Duis ligula libero, tempor eleifend nulla vel, efficitur placerat dolor. Aliquam eget pharetra turpis.<br/><br/>

In sed purus eget orci finibus posuere. Phasellus finibus ut nibh sed suscipit. Aliquam semper aliquet risus, interdum sodales felis feugiat sed. Vivamus vulputate ligula sed odio faucibus, vitae sodales turpis dignissim. Suspendisse malesuada bibendum condimentum. Quisque ut porta justo. Morbi fringilla iaculis egestas. Sed vulputate mi in enim gravida sagittis. Sed justo tortor, porta a mauris non, malesuada placerat erat. Duis in mattis mi. Praesent vel ante sit amet diam egestas mattis vehicula non risus. Curabitur a velit arcu.<br/><br/>

Donec tincidunt dapibus quam eget elementum. Maecenas id semper ligula, sit amet blandit lacus. Curabitur ornare ex laoreet metus ultrices lacinia scelerisque quis nibh. Aenean vestibulum eget mi eu ornare. Fusce tellus leo, placerat ac lacus sit amet, ultrices rutrum ipsum. Donec et mattis mauris. Ut iaculis sed ipsum ac hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tincidunt vestibulum mi, quis scelerisque arcu. Pellentesque laoreet, velit quis faucibus iaculis, libero ex hendrerit nunc, quis consequat nibh mauris at orci. Cras placerat ligula ligula, a pulvinar augue accumsan vel. Duis risus diam, lobortis at libero eget, tristique scelerisque turpis.<br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper turpis sed urna maximus sodales. Curabitur ligula ex, finibus in imperdiet vitae, vehicula ac lacus. Nunc tristique tortor odio, nec dapibus urna accumsan sit amet. Duis tristique orci id ipsum vehicula mollis. Maecenas tellus sem, ultricies quis viverra vel, elementum ultrices risus. Phasellus volutpat, nunc quis commodo consectetur, nisl leo ultrices neque, posuere facilisis sem felis sed nunc. Donec posuere mi non ligula malesuada euismod. Integer eu sem augue. Morbi nibh risus, luctus sit amet nisl a, suscipit ultrices elit. Sed congue risus convallis sapien porta, sollicitudin tempus ex scelerisque. Nullam dignissim volutpat tellus.<br/><br/>

Suspendisse eget mollis arcu. Sed id augue sed neque faucibus dictum. Vestibulum laoreet efficitur consectetur. Aliquam erat volutpat. Pellentesque at risus pretium, eleifend sapien ac, placerat felis. Sed vestibulum velit in mi ornare, sit amet viverra sapien interdum. Mauris ac metus ac sapien pulvinar malesuada. In euismod diam ipsum, vel dictum odio venenatis a. Nullam non ornare dolor. Ut ut tortor sit amet nulla lobortis tempus ut vel lorem. Donec aliquet nec lorem eu pharetra. Cras id massa eget lorem ullamcorper ullamcorper ac sed purus. Cras dapibus rhoncus porttitor.<br/><br/>

Morbi pulvinar tincidunt lacinia. Suspendisse sem lectus, faucibus porta tincidunt at, accumsan vitae eros. Maecenas imperdiet ipsum quis nunc lobortis, sit amet interdum libero posuere. Donec id nisl ac neque hendrerit pellentesque quis ac dui. Aliquam malesuada nisi et eros lobortis aliquet. Etiam iaculis velit ante, aliquet interdum orci euismod in. Duis ligula libero, tempor eleifend nulla vel, efficitur placerat dolor. Aliquam eget pharetra turpis.<br/><br/>

In sed purus eget orci finibus posuere. Phasellus finibus ut nibh sed suscipit. Aliquam semper aliquet risus, interdum sodales felis feugiat sed. Vivamus vulputate ligula sed odio faucibus, vitae sodales turpis dignissim. Suspendisse malesuada bibendum condimentum. Quisque ut porta justo. Morbi fringilla iaculis egestas. Sed vulputate mi in enim gravida sagittis. Sed justo tortor, porta a mauris non, malesuada placerat erat. Duis in mattis mi. Praesent vel ante sit amet diam egestas mattis vehicula non risus. Curabitur a velit arcu.<br/><br/>

Donec tincidunt dapibus quam eget elementum. Maecenas id semper ligula, sit amet blandit lacus. Curabitur ornare ex laoreet metus ultrices lacinia scelerisque quis nibh. Aenean vestibulum eget mi eu ornare. Fusce tellus leo, placerat ac lacus sit amet, ultrices rutrum ipsum. Donec et mattis mauris. Ut iaculis sed ipsum ac hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tincidunt vestibulum mi, quis scelerisque arcu. Pellentesque laoreet, velit quis faucibus iaculis, libero ex hendrerit nunc, quis consequat nibh mauris at orci. Cras placerat ligula ligula, a pulvinar augue accumsan vel. Duis risus diam, lobortis at libero eget, tristique scelerisque turpis.<br/><br/>
`

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');

body.append(progressBar); 

const calcularPorcentajeScroll = (event) =>{
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop/(scrollHeight-clientHeight)*100);
}

const scroll$ = fromEvent(document,'scroll');

//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje=>{
    progressBar.style.width = `${porcentaje}%`;
})