function calculatePrice(quantity, promotionalCode) {
    var price = 10.00;

    if (quantity >= 20 && quantity < 100) {
        price = 9.90;
    }
    if (quantity >= 100 || promotionalCode) {
        price = 9.75;
    }

    return price;
}

console.log(calculatePrice(1));
console.log(calculatePrice(5));
console.log(calculatePrice(20));
console.log(calculatePrice(100));
console.log(calculatePrice(50));
console.log(calculatePrice(500));
console.log(calculatePrice(1, "BARGAIN"));