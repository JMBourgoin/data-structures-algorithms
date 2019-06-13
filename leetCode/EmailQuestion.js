var numUniqueEmails = function (emails) {
    let simplifiedAddresses = {};

    emails.forEach(email => {
        let split = email.split('@');
        let str = '';
        for (let i = 0; i < split[0].length; i++) {
            if (split[0][i] === '.') {
                continue
            } else if (split[0][i] === '+') {
                break
            } else {
                str += split[0][i];
            }
        }

        let dotCount = 0;
        let str2 = '';

        for (let i = split[1].length - 1; i >= 0; i--) {
            if (split[1][i] === '.' && dotCount > 0) {
                continue
            } else if (split[1][i] === '.' && dotCount === 0) {
                dotCount += 1;
                str2 = split[1][i] + str2;

            } else {
                str2 = split[1][i] + str2;
            }
        }
        let address = str + '@' + str2;
        simplifiedAddresses[address] = true;
    });
    return Object.keys(simplifiedAddresses).length;
};

numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]);