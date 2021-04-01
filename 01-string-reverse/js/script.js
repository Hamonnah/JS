let str = 'Akademia108';

function reverseString(txt) {
    let newStr = txt
    .split('')
    .reverse()
    .join('');
    return newStr;
}

console.log(reverseString(str));


