let table = [0,1,2,3,4,5];

/*function squareSum(numbers) {
    let sum = 0
    numbers.forEach( number => {
        sum += (Math.pow(number, 2))
    })
    return sum
}

console.log(squareSum(table));*/


const squareSum = (numbers) => {
    let sum = 0;
    
    numbers.forEach (number => {
        sum += (Math.pow(number, 2))
    })
    
    console.log(sum);
}

squareSum(table);
