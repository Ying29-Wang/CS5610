/*const radiusP = document.querySelector('#radius');
const resultP = document.querySelector('#result');*/

/*function getNumber() {
    let radius = prompt('Enter the radius of the circle: ');
    radiusP.innerText += radius;
    return radius;
}

function calculateArea() {
    const number = getNumber();
    if (isNaN(number)) {
        return 'Error: it is not a number';
    }
    else {
        const area = Math.PI * Math.pow(number, 2).toFixed(2);
        return area;
    }
}*/

// const result = calculateArea();
// console.log(result);
// resultP.innerText += result;

// let shoppingItems = ["bread", "cheese", "green pepper"];
// const shoppingList = document.querySelector('.shopping');
// console.log(shoppingList);
// function displayShoppingList() {
//     for (let i = 0; i < shoppingItems.length; i++) {
//         //console.log(shoppingItems[i]);
//         const item = document.createElement('li');
//         item.innerText = shoppingItems[i];
//         shoppingList.appendChild(item);
//     }
// }
// displayShoppingList();

// function changeListMarker() {
//     shoppingList.setAttribute('style', 'list-style-type: square');
//     shoppingList.classList.add('shoppingList');
// }
// changeListMarker();


const btn = document.querySelector('#updateImage');
btnText = localStorage.getItem('buttonText');
if (btnText) {
    btn.innerText = btnText;
}

function changeButtonText() {
    if (btn.innerText === 'clicked') {
        btn.innerText = 'click me';
    }
    else {
        btn.innerText = 'clicked';
    }
    localStorage.setItem('buttonText', btn.innerText);
}
btn.addEventListener('click', changeButtonText);
btn.addEventListener('click', changeButtonText, {once: true});


const buttonContainer = document.querySelector('.buttonContainer');

function changeButtonBGColor(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    console.log(event.target.innerText);
    event.target.style.backgroundColor = 'red';
}

buttonContainer.addEventListener('mouseover', changeButtonBGColor);