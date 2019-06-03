var anagramMappings = function (A, B) {
    mapArr = new Array(A.length);
    let i = 0;

    A.forEach(ele => {
        let j = B.indexOf(ele);
        mapArr[i] = j;
        i++;
    });

    return mapArr;
};