// DESESTRUCTURACIÓN DE OBJETOS 
//asignacion desestructurante
const person = {
    name: 'tony',
    age: 45,
    password: '12345'
};

const { name, age, password } = person;

// console.log(name);
// console.log(age);
// console.log(password);

const use_Context = ({ name, age, password, range = 'dev' }) => {
    // console.log(name,age,password,range);
    // const  { name,age,password } = user;
    return {
        nameKey: password,
        years: age,
        latlng: {
            lat: 112123.123,
            lng: 112123.123
        }
    }
}
const { nameKey, years, latlng: { lat, lng } } = use_Context(person);
console.log(nameKey, years);
console.log(lat);
console.log(lng);