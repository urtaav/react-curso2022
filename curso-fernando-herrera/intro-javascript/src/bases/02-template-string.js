//template string

const team = 'Argentina';
const team2 = 'Brazil';

const teams = team + ' y ' + team2;
const teamsTmplSrting = `${team} y ${team2}`;
console.log(teams);
console.log(teamsTmplSrting);


function getSaludo(name){
    return `Hola ${name}`;
}

console.log(getSaludo('argentina'));