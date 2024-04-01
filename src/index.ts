import Dog from './Dog';
import ShelterDog from './ShelterDog';
import { add, multiply, divide  } from './utils';

const elton = new Dog('Elton', 'Aussie', 0.5);
elton.bark();

console.log(add(1,2)); 

const buffy = new ShelterDog('Buffy', 'Pitbull', 5, 'Desert Springs Shelter');