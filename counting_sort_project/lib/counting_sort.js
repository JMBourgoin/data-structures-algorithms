function countingSort(arr, max) {
    const countArr = new Array(max + 1).fill(0);
    for(let k = 0; k <= max; k ++){
        countArr[arr[k]] += 1;
    }
    const retArr = [];
    for(let i = 0; i <= arr.length; i ++){
        if(countArr[i] > 0){
            let numTimes = countArr[i];
            for(let j = numTimes; j > 0; j--){
                retArr.push(i);
            }
        }
    }
    return retArr;
}


module.exports = {
    countingSort
};