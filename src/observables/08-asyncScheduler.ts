import { asyncScheduler } from "rxjs";

//setTimeout(()=>{},3000)
//setInterval(()=>{},3000)

const saludar = ()=>console.log('Hola mundo');
const saludar2 = (nombre)=>console.log(`Hola ${nombre}`);

/**
 * COMO Timeout
 * Ejecuta una función después de cierto tiempo similar al setTimeout o al setInterval
 * @params callback: ()=>void
 * @params delay: number
 * @params state: any, solo un valor
 * @return subscription: Subscription
 */
//asyncScheduler.schedule(saludar,2000);
//asyncScheduler.schedule(saludar2,2000,'Angel');


/**
 * COMO Inteval
 * Ejecuta una función cada cierto intervalo
 * @params callback: no puede ser una función flecha
 * @params delay: number
 * @params state: any, solo un valor
 * @return subscription: Subscription
 */
const subs = asyncScheduler.schedule(function(state){
    console.log('state: ',state);
    this.schedule(state+1,1000);
},3000,0);

//setTimeout(()=> subs.unsubscribe(),6000);
asyncScheduler.schedule(()=>subs.unsubscribe(),6000);