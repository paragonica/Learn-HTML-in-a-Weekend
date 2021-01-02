// var numOne = 10;
// numTwo = 20;
/*
function printNums() {
    console.log(numOne);
    console.log(numTwo);
}

printNums();
*/

var pizza = 20.00;
var sauce = 1.50;
var cheese = .90;
var meat = 1.25;

var calculatePrice = function() {
    var price = pizza + sauce + cheese + meat;
    console.log("price before tax: ", price);

    var tax = calculateTax(price);
    var finalPrice = (price + tax).toFixed(2);
    console.log("price after tax: ", finalPrice);
}

function calculateTax(pizzaPrice) {
    return pizzaPrice * .1;
}

calculatePrice();