import foods from './food';
import {choice, remove} from './helpers';

//randomly draw food from the array
let junk = choice(foods);

console.log(`I'd like one ${junk}, please.`);

setTimeout(() => {
    console.log(`Here you go ${junk}`);
}, 500);

setTimeout(() => {
    console.log('Delicious may I have another?');
}, 1800);

let remaining = remove(foods, junk);

setTimeout(() => {
    console.log(`I'm sorry, were all out. We have ${remaining.length} other Junks left.`);
}, 2000);