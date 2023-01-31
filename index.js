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
numButtons.forEach((button) =>{
	button.addEventListener('click', intFunction)
});


//Functions to take input from buttons
function goBack(){
	if (!int1Done) {
		int1 = int1.slice(0, int1.length - 1);
		result.textContent = int1;
	}
	else {
		int2 = int2.slice(0, int2.length - 1);
		result.textContent = int2;

	}
}

function addDecimal() {
	if (!decimal) {
		if (!int1Done) {
				int1 += this.textContent;
				result.textContent = int1;
				decimal = true;
		}
		else {
				int2 += this.textContent;
				result.textContent = int2;
				decimal = true;
		}
	}
	else (return; )
}

function intFunction() {
	if(!int1Done) {
		if (omt1.length > 11) {return; }
		else
		 {
			int1 += this.textContent;
			result.textContent = int1;
		 }
	}
	else {
		if (int2.length > 11) {return; }
		else {
			int2 += this.textContent;
			result.textContent = int2;
		}
	}
};

function opFunction() {
	if (!int1Done) {
		op = this.textContent;
		int1Done = true;
		decimal = false;
	}
	else {
		operate();
		op = this.textContent;
		int1 = total;
		int2 = "";	
	}
};
