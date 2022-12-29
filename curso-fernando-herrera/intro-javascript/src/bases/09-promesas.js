import { getHeroById } from "./bases/08-imp-exp";

// const _promise = new Promise((resolve,reject) => { 

//     setTimeout(() => {
//         const hero = getHeroById(1);
//        resolve(hero);
//     }, 2000);
// });

// _promise.then((data) => {
//     console.log('then de la promesa');
//     console.log({data})
// }).catch( err => console.warn(err));



const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if (hero) {
                resolve(hero);
            } else {
                reject('No se puede encontrar el heroe')
            }
        }, 2000);
    });
}

getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.warn);