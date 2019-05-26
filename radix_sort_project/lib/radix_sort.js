const getDigit = (num, pos) => {
   return Math.floor(Math.abs(num) / Math.pow(10, pos) % 10);
};
const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
const getMax = arr => {
    let maxDigits = 0;
    for(let i = 0; i < arr.length; i++){
        maxDigits = Math.max(maxDigits, getIntLength(arr[i]));
    }
    return maxDigits;
};

function radixSort(arr) {
    if(!Array.isArray(arr)) return null;
    let maxDigits = getMax(arr);
    for(let k = 0; k < maxDigits; k++){
        let buckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++){
            let digit = getDigit(arr[i], k);
            buckets[digit].push(arr[i]);
        }
        arr = [].concat(...buckets);
    }
    return arr;

}

module.exports = {
    radixSort
};