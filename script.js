let uppercaseCheckbox = document.querySelector('#uppercase');
let lowercaseCheckbox = document.querySelector('#lowercase');
let numberCheckbox = document.querySelector('#number');
let symbolCheckbox = document.querySelector('#symbol');
let lengthInput = document.querySelector('#length');
let resultInput = document.querySelector('#result');
let checkboxes = [uppercaseCheckbox, lowercaseCheckbox, numberCheckbox, symbolCheckbox];

let lowercases = 'abcdefghijklmnopqrstuvwxyz';
let uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789';
let symbols = '_$.-';
let elements = [uppercases, lowercases, numbers, symbols];

let generateBtn = document.querySelector('#btn-generate');
let copyBtn = document.querySelector('#btn-copy');

generateBtn.addEventListener('click', function () {
    resultPassword = '';
    let elementsForPassword = '';
    for (let i = 0; i < 4; i++) {
        if (checkboxes[i].checked) {
            elementsForPassword += elements[i];
        }
    }

    if (elementsForPassword.length == 0 || (lengthInput.value > 30) || (lengthInput.value < 4)) {
        resultPassword = '';
        resultInput.value = '';
        alert('Input right parameters');
    } else {
        for (let index = 0; index < lengthInput.value; index++) {
            resultPassword += elementsForPassword[getRandomInt(elementsForPassword.length)];
        }
    }

    resultInput.value = resultPassword;
});

copyBtn.addEventListener('click', function () {
    console.log('asd');
    let copyText = document.querySelector("#result");
    copyText.select();
    document.execCommand("copy");
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}