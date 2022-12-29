const person = {
    name:'Argentina',
    age: 25,
    direction: {
        city:'rosario',
        zip:12312.123,
        lat:12.23232,
        lng:244.12321323
    }
};

const person2 = {...person};
person2.name = 'Brazil'
console.log(person);
console.log(person2)