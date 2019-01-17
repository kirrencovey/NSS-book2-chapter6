const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    getAllOrders: function () {
        return this.orders;
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "large"
}

const cheeseburgerComboMeal = {
    sandwichType: "cheeseburger",
    fries: false,
    drinkSize: "small"
}

const veggieburgerComboMeal = {
    sandwichType: "veggie",
    fries: true,
    drinkSize: "medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(cheeseburgerComboMeal);
restaurant.placeOrder(veggieburgerComboMeal);

const allOrders = restaurant.getAllOrders();
console.table(allOrders);

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()




