function quickSort(array) {
if(array.length <= 1) return array;
let pivot = array[0];
let left = array.slice(1).filter(ele => {
    return ele <= pivot;
});
let right = array.slice(1).filter(ele => {
    return ele > pivot;
});

return quickSort(left).concat(pivot).concat(quickSort(right));
}

module.exports = {
    quickSort
};