var removeOuterParentheses = function (S) {
    let openCount = 0;
    let closeCount = 0;
    let start = 0;
    let string = '';

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            openCount += 1;
        }
        if (S[i] === ')') {
            closeCount += 1;
        }
        if (openCount === closeCount && openCount > 0) {
            let ele = S.slice(start + 1, i);
            string += ele;
            start = i + 1;
        }
    }

    return string;
};