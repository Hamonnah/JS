var fibonacci = function (result, lenght) {
    var num1 = result[0],
        num2 = result[1],
        next,
        count = 2;

        while (count < lenght) {
            next = num1 + num2;
            num1 = num2;
            num2 = next;
            result.push(next);
            count++;
        }

    return result;
}; 

console.log(fibonacci([0, 1, 1], 15));  