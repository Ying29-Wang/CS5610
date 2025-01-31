document.getElementById('placeOrderButton').addEventListener('click', placeOrder);

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
function calculatePrice(flavor, size, toppings) {
    // Get the price for the flavor and size
    let flavorPrice = prices.flavors[flavor] || 0;
    let sizePrice = prices.sizes[size] || 0;
    
    // Calculate the total price for the toppings
    let toppingsPrice = 0;
    toppings.forEach(topping => {
        toppingsPrice += prices.toppings[topping] || 0;
    });
    
    // Calculate the final price
    const totalPrice = sizePrice * (flavorPrice + toppingsPrice);
    return totalPrice.toFixed(2);  // Return the price with 2 decimal places
}

// Function to display the order summary
function displayOrderSummary(order) {
    console.log(`Order Summary:`);
    console.log(`Flavor: "${order.flavor}"`);
    console.log(`Size: "${order.size}"`);
    console.log(`Toppings: [${order.toppings.length > 0 ? order.toppings.join(", ") : "None"}]`);
    console.log(`Total Price: $${order.finalPrice}`);
}
