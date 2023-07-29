const set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])

var myAtoi = function (s) {
    let char = s[0]
    let index = 0
    let isNegative = false
    while (char === ' ') {
        index++
        char = s[index]
    }
    if (s[index] === '+') {
        index++
    } else if (s[index] === '-') {
        isNegative = true
        index++
    }

    const result = []
    char = s[index]
    while (set.has(char)) {
        result.push(char)
        index++
        char = s[index]
    }
    const str = result.join('')
    let n = +str
    if (n >= 2147483648) {
        n = 2147483648
        if (!isNegative) n--
    }
    return isNegative ? n * -1 : n
};

module.exports = myAtoi