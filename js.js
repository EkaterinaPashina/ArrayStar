getLastWordLength = (str) => {
    const strArr = str.trim().split(' ');
    const lastSymbol = strArr.at(-1);
    return lastSymbol.length;
};

//export default getLastWordLength;

console.log(getLastWordLength(''));
console.log(getLastWordLength('man in BlacK'));
console.log(getLastWordLength('hello, world!  '));