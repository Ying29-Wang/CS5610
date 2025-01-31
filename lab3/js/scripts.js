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

