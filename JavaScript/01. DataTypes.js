alert('Hello World!!');

// Constant variable's value can't be updated
const point = 100;
console.log(point);

// const and let is used to define variables
// var was used in older version of JS
var score_a = 101;
let score_b = 202;

/*
Datatypes in JS:    Number, String, Boolean, Null, Undefine, 
                    Object(complex DS- arrays, dates, literals etc) , Symbol
*/

/********************************** String dataType **********************************/
let firstName = 'Amit';
let lastname = 'Kumar';

// String Concatenation
console.log(firstName + lastname);
console.log(firstName + ' ' + lastname);
let fullName = firstName + ' ' + lastname;

// String getting characters
console.log(firstName[3]); // JS array index start from 0
console.log(firstName[4]);

// String methods
console.log(firstName.length);
console.log(lastname.indexOf('a'));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let x = 'qdwqdw';
console.log(x.indexOf('q'));
console.log(firstName.toLocaleLowerCase());

// common string methords
let email = 'amit2197kumar@gmail.com';

console.log(email.lastIndexOf('a'));
console.log(email.slice(5, 15));
console.log(email.substr(5, 15)); // Check how substr is diffrent from slice
console.log(email.replace('a', 'x')); // replace ONLY the 1st occurence

//slice( ), splice( ), & split( ) methods in JavaScript: https://tinyurl.com/5n8mcmcs

/*********************************** Number dataType ***************************************/
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// Math Operations: +, -, *, /, **(powerOf), %
console.log(radius / pi);
console.log(radius % pi);
console.log(radius * pi);
console.log(radius ** pi);
console.log(radius * pi**2);

// Order of operations - B I D M A S
console.log(5 * (10-3)**2);

// radius++, radius--, +=, -= will work here as well ~ short-hand ways

// NaN - not a number
console.log(100 * 'hello');

// Concatination
let sentence = 'The radius is ' + radius + ' and the value of pi is taken as ' + pi;
console.log(sentence);

/************************************* Template Strings ************************************/
const title = 'Harry Potter and the Prisoner of Azkaban';
const author = 'J. K. Rowling';
const likes = 30;

// Concatenation way
let concat = 'The book called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(concat);

// template strings: The job of a template string is to allow us to inject variables
// directly into the string without coming out of it and having to concatenate with + sign
let template = `The book called ${title} by ${author} has ${likes} likes.`
console.log(template);

// Creating HTMP templates
let html = `
    <h2> ${title} </h2>
    <p> By ${author} </p>
    <span> This blog has ${likes} likes.</span>
`;
console.log(html);

/*********************************** Array(Object) dataType ********************************/
let friends = ['Amit', 'Ashish', 'Arjun'];
console.log(friends);
console.log(friends[1]);
friends[1] = 'Raj';
console.log(friends);

let friendsAge = ['Amit', 27, 'Ashish', 29, 'Arjun', 28];
console.log(friendsAge);

// Array Methods
console.log(friendsAge.length);

console.log(friendsAge.join('_'));
console.log(friendsAge.indexOf('Arjun'));

// Array concatenation
console.log(friendsAge.concat(['Raj', 'Maheshwari'])); 

// this methords returns the new updated length of array
console.log(friendsAge.push('Vivek')); 
// Pops the last element, and returns that removed element
console.log(friendsAge.pop()); 

/********************************** Null & Undefined dataType ******************************/
let value_a;
console.log(value_a, value_a + 10, `the value of A is ${value_a}`);

let value_b = null;
console.log(value_b, value_b + 10, `the value of A is ${value_b}`);

/******************************** Boolean & Comparison dataType ****************************/
console.log(true, false, 'true', "false");

// methods can return booleans
let mailId = 'amit2197kumar@gmail.com';

console.log(mailId.includes('@'));
console.log(mailId.includes('!'));

let arrayName = ['Amit', 'Ashish', 'Arjun'];
console.log(arrayName.includes('Arjun'));

// comparison operators
let ageValue = 26;

console.log(ageValue == 25);
console.log(ageValue != 25);
console.log(ageValue > 25);
console.log(ageValue <= 26);

let nameValue = 'Amit';

console.log(nameValue == 'Amit');
console.log(nameValue < 'Vikas');
console.log(nameValue < 'Aarohi');
console.log(nameValue < 'amit'); // Please note, smaller case are greater then capital letters

/******************************** Loose vs Strict Comparison *******************************/
 
let scoreValue = 100;

// Loose comparison (different types can still be equal)
console.log(scoreValue == 100);
console.log(scoreValue == '100'); 
// In backend JS convert '100' into a Number 100 before comparison

// Strict comparison (different types can't be equal)
console.log(scoreValue === 100);
console.log(scoreValue === '100');
console.log(scoreValue !== 100);
console.log(scoreValue !== '100');

/************************************** Type Conversion ************************************/

let score = '100';
console.log(score + 1); // This will do concatination

score = Number(score);
console.log(score + 1);

console.log(typeof score);
console.log(typeof nameValue);
console.log(typeof friendsAge);

let string = String(1000);
console.log(string, typeof string);

let bool_t = Boolean(1000);
console.log(bool_t, typeof bool_t);
let bool_f = Boolean(0);
console.log(bool_f, typeof bool_f);
let bool_s = Boolean('Amit');
console.log(bool_s, typeof bool_s);
let bool_S = Boolean('');
console.log(bool_S, typeof bool_S);


/**
 ************************************ Console Output ***************************************

datatypes.js:5 100
datatypes.js:22 AmitKumar
datatypes.js:23 Amit Kumar
datatypes.js:27 t
datatypes.js:28 undefined
datatypes.js:31 4
datatypes.js:32 3
datatypes.js:33 AMIT KUMAR
datatypes.js:34 amit kumar
datatypes.js:37 0
datatypes.js:38 amit
datatypes.js:43 16
datatypes.js:44 197kumar@g
datatypes.js:45 197kumar@gmail.
datatypes.js:46 xmit2197kumar@gmail.com
datatypes.js:54 10 3.14
datatypes.js:57 3.184713375796178
datatypes.js:58 0.5799999999999996
datatypes.js:59 31.400000000000002
datatypes.js:60 1380.3842646028852
datatypes.js:61 98.596
datatypes.js:64 245
datatypes.js:69 NaN
datatypes.js:73 The radius is 10 and the value of pi is taken as 3.14
datatypes.js:82 The book called Harry Potter and the Prisoner of Azkaban by J. K. Rowling has 30 likes.
datatypes.js:87 The book called Harry Potter and the Prisoner of Azkaban by J. K. Rowling has 30 likes.
datatypes.js:95 
    <h2> Harry Potter and the Prisoner of Azkaban </h2>
    <p> By J. K. Rowling </p>
    <span> This blog has 30 likes.</span>

datatypes.js:99 (3) ['Amit', 'Ashish', 'Arjun']
datatypes.js:100 Ashish
datatypes.js:102 (3) ['Amit', 'Raj', 'Arjun']
datatypes.js:105 (6) ['Amit', 27, 'Ashish', 29, 'Arjun', 28]
datatypes.js:108 6
datatypes.js:110 Amit_27_Ashish_29_Arjun_28
datatypes.js:111 4
datatypes.js:114 (8) ['Amit', 27, 'Ashish', 29, 'Arjun', 28, 'Raj', 'Maheshwari']
datatypes.js:117 7
datatypes.js:119 Vivek
datatypes.js:123 undefined NaN 'the value of A is undefined'
datatypes.js:126 null 10 'the value of A is null'
datatypes.js:129 true false 'true' 'false'
datatypes.js:134 true
datatypes.js:135 false
datatypes.js:138 true
datatypes.js:143 false
datatypes.js:144 true
datatypes.js:145 true
datatypes.js:146 true
datatypes.js:150 true
datatypes.js:151 true
datatypes.js:152 false
datatypes.js:153 true
datatypes.js:160 true
datatypes.js:161 true
datatypes.js:165 true
datatypes.js:166 false
datatypes.js:167 false
datatypes.js:168 true
datatypes.js:173 1001
datatypes.js:176 101
datatypes.js:178 number
datatypes.js:179 string
datatypes.js:180 object
datatypes.js:183 1000 string
datatypes.js:186 true 'boolean'
datatypes.js:188 false 'boolean'
datatypes.js:190 true 'boolean'
datatypes.js:192 false 'boolean'

 */
