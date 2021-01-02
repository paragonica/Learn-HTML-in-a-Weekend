var fruits = ["apple", "orange", "banana"];

function printFruits() {
    console.log("Ready to print fruits!");
    var x = 0;

    while (x <= fruits.length) {
        x++;
        if (x == 0) {
            continue;
        }
        if (x == 2) {
            break;
        }
        console.log(fruits[x]);
    }
    console.log("Done printing fruits!");
}

printFruits();