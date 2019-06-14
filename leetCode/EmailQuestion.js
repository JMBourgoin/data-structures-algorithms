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

        
        let address = str + '@' + split[1];
        simplifiedAddresses[address] = true;
    });
    return Object.keys(simplifiedAddresses).length;
};

numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]);