const input = document.querySelector('.input');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
const sub = document.querySelector('.sub');
const add = document.querySelector('.add');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const clear = document.querySelector('.clear');
const openBracket = document.querySelector('.openbracket');
const closeBracket = document.querySelector('.closebracket');

//feature 1:
var mode = true; //default mode

function check() { //checks if equal was pressed just before this click
    if(mode == false) {
        return true;
    }else {
        return false;
    }
}

function emptyTheInputBox() { //empty's the input box
    input.value = '';
    mode = true;
}

openBracket.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();

    input.value = input.value + '(';
});

closeBracket.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();

    input.value = input.value + ')';
});

clear.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();

    input.value = '';
})

multiply.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();

    input.value = input.value + '*';
});

divide.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + '/';
});

add.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + '+';
});

dot.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + '.';
});

sub.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + '-';
});

one.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + "1";
});

two.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + "2";
});

three.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + "3";
});

four.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + "4";
});

five.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + "5";
});

six.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + "6";
});

seven.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + "7";
});

eight.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + "8";
});

nine.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + "9";
});

zero.addEventListener('click', function run() {

    if(check()) emptyTheInputBox();


    input.value = input.value + "0";
});

equal.addEventListener('click', function solutionAlgo() {

    if(check()) emptyTheInputBox();


    input.value = eval(input.value);

    mode = false;
    
});