var uniqueMorseRepresentations = function (words) {
    let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    let alpha = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];

    let alphaHash = {};
    let returnArr = [];

    morse.forEach((ele, i) => {
        alphaHash[alpha[i]] = ele;
    })

    let splits = words.map(word => {
        return word.split('');
    })

    splits.forEach(arr => {
        let morse = "";
        arr.forEach(ele => {
            morse += alphaHash[ele];
        })
        returnArr.push(morse);
    })

    let ans = [...new Set(returnArr)];
    return ans.length;

};