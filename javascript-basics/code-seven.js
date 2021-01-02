var fruits = ["apple", "orange", "banana"];

function printFruits() {
    console.log("Ready to print fruits!");
    var x = 0;

    while (x < fruits.length) {
        console.log(fruits[x]);
        x++;
    }
    console.log("Done printing fruits!");
}

printFruits();