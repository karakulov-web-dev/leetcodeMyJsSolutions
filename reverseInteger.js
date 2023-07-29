var reverse = function (x) {
    let n = null
    let isNegative = false
    if (x >= 0) {
        n = x
    } else {
        n = x * -1
        isNegative = true
    }
    x = x >= 0 ? x : x * -1

    const str = x.toString()
    const reversed = []

    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i])
    }

    const reverse = reversed.join('')

    if (reverse >= 2147483651) {
        return 0
    }

    return `${isNegative ? '-' : ''}${reverse}`
};

module.exports = reverse