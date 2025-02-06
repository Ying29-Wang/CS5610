const radiusP = document.querySelector('#radius');
const resultP = document.querySelector('#result');

function getNumber() {
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
}

//const result = calculateArea();
//console.log(result);
//resultP.innerText += result;

let shoppingItems = ["bread", "cheese", "green pepper"];
const shoppingList = document.querySelector('.shopping');
console.log(shoppingList);
function displayShoppingList() {
    for (let i = 0; i < shoppingItems.length; i++) {
        //console.log(shoppingItems[i]);
        const item = document.createElement('li');
        item.innerText = shoppingItems[i];
        shoppingList.appendChild(item);
    }
}
displayShoppingList();