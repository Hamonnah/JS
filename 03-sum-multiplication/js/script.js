let table = [1, 2, 3, 4, 5, 6];

// nie nazywamy parametrow tak jak zmiennych
const sumAndMultiplication = (tab) => {
    let sum = 0;
    let multi = 1;

    for (const el of tab) {
        console.log(el);
        sum += el;
        multi *= el;
    }
    //console.log(tab);
    console.log([sum, multi]);
}

sumAndMultiplication(table);
