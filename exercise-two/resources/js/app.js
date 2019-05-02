// String

const name1 = "Jelle";
const name2 = new String('Jelle');

// name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);


if(name2 === 'Jelle'){
    console.log('Yes');
}else{
    console.log('No');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2);

// Function
const getSum1 = function(x, y){
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const jelle = {name: "Jelle"};
const jelle2 = new Object({name: "Jelle"});
console.log(jelle2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expressions
const rel1 = /\w+/;
const rel2 = new RegExp('\\w+');