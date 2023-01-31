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

//Declaring vars
let int1 = "";
let int2 = "";
let total;
let int1Done = false;
let op = "";
let decimal = false;

const numButtons = document.querySelectorAll('numButton');
const opButtons = document.querySelectorAll('opButton');
const calculateButton = document.querySelectorAll('calculateButton');
const result = document.querySelectorAll('result-text');
const resetButton = document.querySelectorAll('resetButton');
const backButton = document.querySelectorAll('backButton')
const decimalButton = document.querySelectorAll('decimalButton');

//Loops through buttons, adding events listeners
