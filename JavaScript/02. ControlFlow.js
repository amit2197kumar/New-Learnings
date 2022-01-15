alert('Hello Control Flow!!');

// for loop
for (let i=0; i<5; i++) {
    console.log(`value of i is ${i}`);
}

let array = ['amit', 'kumar', 'ashish', 'ranjan', 'patel'];
for (let i=0; i<array.length; i++) {
    console.log(array[i]);
}
for (let i=0; i<array.length; i++) {
    let html = `<div>${array[i]}</div>`;
    console.log(html);
}

// while loop
let j=0;
while (j < 3) {
    console.log(array[j]);
    j++;
}

// do while loop
let k=4;
do {
    console.log(array[k]);
    k--;
} while(k > 2);

// If statement
if (array[0] == 'raj') {
    console.log("1st If condition is TRUE");
} else if (array[0] == 'kumar') {
    console.log("2nd If condition is TRUE");
} else {
    console.log("Non of the If condition is TRUE");
}

// Logical Operators
let password = "@Mitkum@R"

if (password.length >= 12 && password.includes('@') || password.includes('#')) {
    console.log('Password is very strong');
} else if (password.length >= 8 && password.includes('@') && password.includes('R')) {
    console.log('Password is strong');
} else {
    console.log('password is weak');
}

// Logiacal NOT
if (!array.length < 2) {
    console.log('array length is more then 2, but NOT has swiched the expression value')
}
console.log(!true);
console.log(!false);

//Continue and break
const score = [49, 51, 33, 67, 98, 11, 82, 51];

for (let i=0; i<score.length; i++) {
    if (score[i] < 33) {
        console.log('Failed, No need to check score further!');
        break;
    }
    if (score[i] < 50) {
        continue;
    }
    console.log(score[i]);
}

//Switch Statement
const grade = 'D';

switch(grade) {
    case 'A': console.log('You got an A!'); break;
    case 'B': console.log('You got an B!'); break;
    case 'C': console.log('You got an C!'); break;
    case 'D': console.log('You got an D!'); break;
    case 'E': console.log('You got an E!'); break;
    case 'F': console.log('You got an F!'); break;
    default: console.log('Not a valid grade!');
// Switch case used strict equality (===)
}

// Variables and Block Scope
let age=30;
if (true) {
    let age=50;
    let name='Amit';
    console.log('Inside 1st code block: ', age, name);

    if (true) {
        console.log('Inside 2nd code block: ', age);
    }
}
console.log('Outside code block: ', age, name);

/**
************************************ Console Output *************************************** 

controlFlow.js:5 value of i is 0
controlFlow.js:5 value of i is 1
controlFlow.js:5 value of i is 2
controlFlow.js:5 value of i is 3
controlFlow.js:5 value of i is 4
controlFlow.js:10 amit
controlFlow.js:10 kumar
controlFlow.js:10 ashish
controlFlow.js:10 ranjan
controlFlow.js:10 patel
controlFlow.js:14 <div>amit</div>
controlFlow.js:14 <div>kumar</div>
controlFlow.js:14 <div>ashish</div>
controlFlow.js:14 <div>ranjan</div>
controlFlow.js:14 <div>patel</div>
controlFlow.js:20 amit
controlFlow.js:20 kumar
controlFlow.js:20 ashish
controlFlow.js:27 patel
controlFlow.js:27 ranjan
controlFlow.js:37 Non of the If condition is TRUE
controlFlow.js:46 Password is strong
controlFlow.js:53 array length is more then 2, but NOT has swiched the expression value
controlFlow.js:55 false
controlFlow.js:56 true
controlFlow.js:69 51
controlFlow.js:69 67
controlFlow.js:69 98
controlFlow.js:63 Failed, No need to check score further!
controlFlow.js:79 You got an D!
controlFlow.js:91 Inside 1st code block:  50 Amit
controlFlow.js:94 Inside 2nd code block:  50
controlFlow.js:97 Outside code block:  30 

 */
