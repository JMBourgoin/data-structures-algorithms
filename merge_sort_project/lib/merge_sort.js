function merge(array1, array2) {
let newArr = [];
    while(array1.length > 0 && array2.length > 0){
        if(array1[0] < array2[0]){
            let ele = array1.shift();
            newArr.push(ele);
        } else {
            let ele = array2.shift();
            newArr.push(ele);
        }
    }
    return newArr.concat(array1).concat(array2);
}

function mergeSort(array) {
    if(array === undefined) return [];
    if(array.length <= 1) return array;

    const pivot = Math.floor(array.length / 2);
    const left = array.slice(0, pivot);
    const right = array.slice(pivot);
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
    merge(leftSorted, rightSorted);
}

module.exports = {
    merge,
    mergeSort
};