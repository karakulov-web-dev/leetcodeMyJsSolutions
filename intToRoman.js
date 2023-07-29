var intToRoman = function (num) {
    let totalSum = 0
    let chars = []

    while (num > totalSum) {
        const diff = num - totalSum
        if (diff >= 1000) {
            totalSum = totalSum + 1000
            chars.push('M')
        } else if (diff >= 900) {
            totalSum = totalSum + 900
            chars.push('CM')
        } else if (diff >= 500) {
            totalSum = totalSum + 500
            chars.push('D')
        } else if (diff >= 400) {
            totalSum = totalSum + 400
            chars.push('CD')
        } else if (diff >= 100) {
            totalSum = totalSum + 100
            chars.push('C')
        } else if (diff >= 90) {
            totalSum = totalSum + 90
            chars.push('XC')
        } else if (diff >= 50) {
            totalSum = totalSum + 50
            chars.push('L')
        } else if (diff >= 40) {
            totalSum = totalSum + 40
            chars.push('XL')
        } else if (diff >= 10) {
            totalSum = totalSum + 10
            chars.push('X')
        } else if (diff >= 9) {
            totalSum = totalSum + 9
            chars.push('IX')
        } else if (diff >= 5) {
            totalSum = totalSum + 5
            chars.push('V')
        } else if (diff >= 4) {
            totalSum = totalSum + 4
            chars.push('IV')
        } else if (diff >= 1) {
            totalSum = totalSum + 1
            chars.push('I')
        }
    }

    return chars.join('')
};

module.exports = intToRoman