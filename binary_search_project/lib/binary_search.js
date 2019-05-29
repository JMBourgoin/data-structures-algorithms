function binarySearch(array, target) {
    if(array.length === 0) return false;
    let midIndx = Math.floor(array.length / 2);
    let mid = array[midIndx];
    if(mid === target) return true;

    const leftSide = array.slice(0, midIndx);
    const rightSide = array.slice(midIndx + 1);
    if(target < mid){
       return binarySearch(leftSide, target);
    } else {
       return binarySearch(rightSide, target);
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;
    let midIndx = Math.floor(array.length / 2);
    let mid = array[midIndx];
    if (mid === target) return midIndx;

    const leftSide = array.slice(0, midIndx);
    const rightSide = array.slice(midIndx + 1);
    if (target < mid) {
        return binarySearchIndex(leftSide, target);
    } else {
        let temp = binarySearchIndex(rightSide, target);
        return temp === -1 ? -1 : (temp + midIndx + 1);
    }
}




module.exports = {
    binarySearch,
    binarySearchIndex
};