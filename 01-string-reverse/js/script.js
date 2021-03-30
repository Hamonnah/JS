let str = 'Akademia108';

function reverseString() {
    let newStr = str
    .split('')
    .reverse()
    .join('');
    return newStr;
}

console.log(reverseString(str));


