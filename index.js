//variable to select the html element h2 
let selectTxt = document.getElementById('counter-txt');

//variable to store the initial count value '0'
let count = 0;

//funtion that will increment by 1 each time the button is clicked
function counter() {
    count += 1;
    selectTxt.textContent = count;
}

function deCounter() {
    count -= 1;
    selectTxt.textContent = count;
}

//variable to select the html element p
let selectSaveEl = document.getElementById('save-txt');

function countSave() {

    let addSave = count + ' | ';
    selectSaveEl.textContent += addSave;
    count = 0;
    selectTxt.textContent = count;
}

