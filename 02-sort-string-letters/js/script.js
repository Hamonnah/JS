let str = 'Akademia108';

function sortString(txt) {
    let newStr = txt
    .split('')
    .sort()
    .join('');
    return newStr;
}

console.log(sortString(str));
