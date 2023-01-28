// Math Functions
const add = function(a, b){
	let sum = a + b
	return sum;
};

const subtract = function(a, b){
	let total = a - b
	return total;
};

const multiply = function(a, b){
	let total = a * b
	return total;
};

const divide = function(a, b){
	let total = a / b
	return total;
};

const operate = function(operator, a, b){
	let result = operator(a, b);
	return result;
};

//Selectors for buttons
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const plus = document.querySelector('#plus');


//Settings input & displays vars to 0
let lastInput = 0;
let displayNum = 0;

//Func to set display as the value pressed.
let setDisplay = function(x){
	displayNum = x;
};


//Events Listeners
one.addEventListener('click', () => {
	setDisplay(1);
});

two.addEventListener('click', () => {
	setDisplay(2);
});


plus.addEventListener('click', () => {
	operation(add);
});

//Click the plus sign should return 2 if you click the 'One' button, more than once

let operation = function(x){
	lastInput = displayNum;
	let operator = x;
	console.log(operator(lastInput,displayNum));
};

	
console.log(displayNum);
