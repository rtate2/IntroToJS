console.log('FUNctions');

const fancyFunction = (something) => {
    return something + 'fancy';
}

let output = fancyFunction('michael is  ');
console.log(output);

output = 'something else';

let firstName =  'George';
let lastName =  'Weasley';

console.log(`${firstName} ${lastName}`)

firstName =  'Bill';
lastName =  'Weasley';

console.log(`${firstName} ${lastName}`)

firstName =  'Ginny';
lastName =  'Weasley';

console.log(`${firstName} ${lastName}`)

// es6
const sayMyName = (first, last) => {
    // do something
    return `${first} ${last}`;
    // console.log(first + '' + last)
}

// es5
// const sayMyName = function (first, last) {
//    // do something
//   console.log('${first} ${last}')

console.log(sayMyName('Randy', 'Tate'))



// NUGGET TIME
const nuggetizer = (animal) => {
    return `nugget ${animal}`;
}

const humaneNuggetizer = (animal) => {
    return animal
}

const spamFactory = (literallyAnything) => {
    return 'spam (lunch)';
}

console.log(nuggetizer('chicken'));
console.log(nuggetizer('octopus'));
console.log(nuggetizer('john wark'));

console.log(humaneNuggetizer('octopus'));
console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('john wark'));

console.log(spamFactory('chicken'));
console.log(spamFactory('octopus'));
console.log(spamFactory('john wark'));

const printToDOM = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint;
}

// Take a Number Challenge
let bandNumber = 1;
const takeNumber = (bandName) => {
    printToDOM(`<h3>${bandNumber}) ${bandName}</h3>`);
    bandNumber++
};

takeNumber("Galactic Scum")
takeNumber("Underdogs")




// printToDOM('Randy');