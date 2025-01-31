const prices = {
    flavors: {
        original: 2.5,
        mango: 3.0,
        strawberry: 3.5
    },
    sizes: {
        small: 1.0,
        medium: 1.5,
        large: 2.0
    },
    toppings: {
        boba: 0.5,
        jelly: 0.75,
        pudding: 1.0
    }
};

// Function to calculate the price of a bubble tea
function calculatePrice(flavor, size, toppings) {
    let basePrice = prices.flavors[flavor];
    let toppingsPrice = toppings.reduce((sum, topping) => sum + prices.toppings[topping], 0);
    return prices.sizes[size] * (basePrice + toppingsPrice);
}

function getOrderDetails() {
    let flavor = document.getElementById("flavor").value;
    let size = document.getElementById("size").value;
    let toppings = Array.from(document.getElementById("topping").selectedOptions).map(option => option.value);
    
    console.log("Flavor:", flavor);
    console.log("Size:", size);
    console.log("Toppings:", toppings);
}

// Function to display the order summary
function displayOrderSummary(order) {
    console.log(`Order Summary:`);
    console.log(`Flavor: "${order.flavor}"`);
    console.log(`Size: "${order.size}"`);
    console.log(`Toppings: [${order.toppings.length > 0 ? order.toppings.join(", ") : "None"}]`);
    console.log(`Total Price: $${order.finalPrice.toFixed(2)}`);
}
