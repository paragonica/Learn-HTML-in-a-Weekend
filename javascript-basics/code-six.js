var fruits = ["apple", "orange", "banana"];

function printFruits() {
    console.log("Ready to print fruits!");
    for (var x = 0; x < fruits.length; x++) {
        console.log(fruits[x]);
    }
    console.log("Done printing fruits!");
}

printFruits();