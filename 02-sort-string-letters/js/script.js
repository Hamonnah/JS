let str = 'Akademia108';

function sortString() {
    let newStr = str
    .split('')
    .sort()
    .join('');
    return newStr;
}

console.log(sortString(str));
