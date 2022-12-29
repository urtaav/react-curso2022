const personajes = ['goku','vegeta','trunks'];
const [ , ,p3] = personajes;

console.log(p3);


const returnArr = () => {
    return ['ABC',123];
}

const [letras,nums] = returnArr();

console.log(letras,nums);

const use_state = (value) => {
    return [value,() => console.log('hola mundo')]
};


const arr = use_state('Goku');
arr[1]();
console.log(arr);

const  [name,setName] = use_state('vegeta')

console.log(name);
setName()


