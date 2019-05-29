function countingSort(arr, max) {
    const countArr = new Array(max + 1).fill(0);
    const retArr = [];

    for(let k = 0; k < arr.length; k ++){
        countArr[arr[k]] += 1;
    }

    for(let i = 0; i < countArr.length; i++){
        const numTimes = countArr[i];
         for(let j = numTimes; j > 0; j--){
            retArr.push(i);
            }
        }
        return retArr;
    }



module.exports = {
    countingSort
};