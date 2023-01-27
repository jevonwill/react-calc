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

console.log(operate(divide, 2, 2));
