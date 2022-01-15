// function declaration
function helloFn() {
    console.log('Hello guys! This is a function declaration example!!');
}

// function expression
const speak = function() {
    console.log('Hello guys! This is a function expression example!!');
}; // In case of function expression it ends with ;

helloFn();
speak();
// What is diffrence between function declaration & function expression?
// What is Hoisting?
// https://youtu.be/VAYIPSNXHhw
// function declaration vs. a function expression: https://tinyurl.com/2p94h2tc


// Argument & Parameter
const print = function(name = 'Raj', rollNo = '000') { // default values
    console.log(`Good day ${name}, your roll number is ${rollNo}`);
}

print('Amit', 636);
print();

// Function returning values
const getCircleAreaFn = function(radius) {
    return 3.14 * radius ** 2;
};

let area = getCircleAreaFn(5);
console.log(`Area of circle is ${area}`);

// Arrow function
const function1 = () => {
    return 'Example of Arrow function'
}

const function2 = (a, b) => {
    return a + b;
}

const function3 = (a, b) => a + b;

console.log(function1());
console.log(function2(99, 1));
console.log(function2(999, 1));

const getCircleArea = (radius) => {
    return 3.14 * radius ** 2;
};

area = getCircleArea(10);
console.log(`Area of circle is ${area}`);

// Functions vs Methods
// Diffrence is the way we invoke them ~ call them

// ~ Function
const say = () => 'This is an example of function()';
let value1 = say();
console.log(value1);

// ~ Methods
let myValue = 'This is an example of methods()';
let value2 = myValue.toUpperCase();
console.log(value2);

// Foreach Methods and Callbacks
// Callback function - Passing function as an argument

const myFunc = (callBackFunction) => {
    // do something
    let value = 50;
    callBackFunction(value);
};

myFunc(function(value) {
    // do something
    console.log(value);
});

/*
myFunc(value => {
    // do something
    console.log(value);
});
*/

let people = ['Amit', 'Ashish', 'Arjun', 'Raj'];

people.forEach(function(){
    console.log('Example of callback fn()');
});

people.forEach(person => {
    console.log(person);
});

people.forEach((person, index) => {
    console.log(index, person);
});

const logPerson = (person, index) => {
    console.log(`At index ${index} we have ${person}`);
};

people.forEach(logPerson);

//call back function in action
// https://youtu.be/cNjIUSDnb9k
// https://youtu.be/btj35dh3_U8

/**
************************************ Console Output *************************************** 

functionAndMethords.js:3 Hello guys! This is a function declaration example!!
functionAndMethords.js:8 Hello guys! This is a function expression example!!
functionAndMethords.js:21 Good day Amit, your roll number is 636
functionAndMethords.js:21 Good day Raj, your roll number is 000
functionAndMethords.js:33 Area of circle is 78.5
functionAndMethords.js:46 Example of Arrow function
functionAndMethords.js:47 100
functionAndMethords.js:48 1000
functionAndMethords.js:55 Area of circle is 314
functionAndMethords.js:63 This is an example of function()
functionAndMethords.js:68 THIS IS AN EXAMPLE OF METHODS()
functionAndMethords.js:81 50
4functionAndMethords.js:94 Example of callback fn()
functionAndMethords.js:98 Amit
functionAndMethords.js:98 Ashish
functionAndMethords.js:98 Arjun
functionAndMethords.js:98 Raj
functionAndMethords.js:102 0 'Amit'
functionAndMethords.js:102 1 'Ashish'
functionAndMethords.js:102 2 'Arjun'
functionAndMethords.js:102 3 'Raj'
functionAndMethords.js:106 At index 0 we have Amit
functionAndMethords.js:106 At index 1 we have Ashish
functionAndMethords.js:106 At index 2 we have Arjun
functionAndMethords.js:106 At index 3 we have Raj

*/
