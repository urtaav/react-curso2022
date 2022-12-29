// import {  heros } from './data/heros';
// import   heros,{ owners}  from './data/heros';
import    heros, { owners }  from '../data/heros';



export const getHeroById = (id) => heros.find((h) => h.id === id);
// console.log(getHeroById(3));

export const getHerosByOwner = (owner) => heros.filter((h) => h.owner === owner);

// console.log(getHerosByOwner('DC'));
// console.log(owners);