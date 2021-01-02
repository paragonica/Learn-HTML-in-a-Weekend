var order = {
    apple: 10,
    orange: 5,
    banana: 7
};

order.apple = 30;
order["orange"] = 1;

console.log(order.apple);
console.log(order.orange);
console.log(order.banana);