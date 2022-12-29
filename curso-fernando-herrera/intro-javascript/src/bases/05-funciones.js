//Funciones js


// function saludar(name){
//     return `Hola, ${name}`;
// }

const saludar = (name) => {
    return `Hola, ${name}`;
}

const saludar4 = () => `Hola mundo`;
// saludar = 30

console.log(saludar('goku'));
console.log(saludar4());
// console.log(saludar)

const getUser = () =>  ({
        uid:'ABC093',
        username:'test'
    }
);

const user = getUser()
console.log(user);


//homework
//1.-transformar a una función de flecha
//2.- tiene que retornar un objeto implicito
//3.- pruebas

// function getUserActive(name){
//     return {
//         uid:'ABC093',
//         username:name
//     }
// }

// const userActive = getUserActive('test1');
// console.log(userActive);

const getUserActive = (name) => ({
    uid:'ABC093',
    username:name
})

const userActive1 = getUserActive('test1');
console.log(userActive1);