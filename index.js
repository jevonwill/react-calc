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

let lastInput = 0;
let displayNum = 0;

let setDisplay = function(x){
	displayNum = x;
};


let operation = function(){
	lastInput = displayNum;
	
console.log(displayNum);
