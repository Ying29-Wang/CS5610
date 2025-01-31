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

// Function to calculate the price based on selected flavor, size, and toppings
function calculatePrice(flavor, size, toppings = []) {
    if (!Array.isArray(toppings)) {
        toppings = []; // If toppings is not an array, set it to an empty array
    }
    let flavorPrice = prices.flavors[flavor] || 0;
    let sizePrice = prices.sizes[size] || 0;

    // Calculate the total price for the toppings
    let toppingsPrice = 0;
    for (let i = 0; i < toppings.length; i++) {
        toppingsPrice += prices.toppings[toppings[i]] || 0;
    }

    const totalPrice = sizePrice * (flavorPrice + toppingsPrice);
    return totalPrice.toFixed(2);  // Return the price with 2 decimal places
}

// Function to display the order summary
function displayOrderSummary(order) {
    console.log(`You have ordered:`);
    console.log(`flavor: "${order.flavor}"`);
    console.log(`size: "${order.size}"`);
    console.log(`toppings: [${order.toppings.length > 0 ? order.toppings.join(", ") : "None"}]`);
    console.log(`Total Price: $${order.finalPrice}`);
}

function placeOrder(flavor, size, toppings = []) {

    let order = {
        flavor:flavor, 
        size:size, 
        toppings:toppings, 
        finalPrice:calculatePrice(flavor, size, toppings)
    }
    displayOrderSummary(order)
}

placeOrder("original", "small", ["boba", "jelly"]);
placeOrder("mango", "medium", ["pudding"]);