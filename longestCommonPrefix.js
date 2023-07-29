var longestCommonPrefix = function (strs) {
    let prefixChars = []

    let i = 0;
    let r = 0;

    let currentString = strs[r]
    let currentChar = currentString[i]
    let prefixSymbol = currentChar
    while (currentChar !== undefined) {

        currentString = strs[r]
        currentChar = currentString[i]

        if (r === 0) {
            prefixSymbol = currentChar
        }

        if (prefixSymbol !== currentChar) break

        if (r < strs.length - 1) {
            r++
        } else {
            i++
            r = 0
            prefixChars.push(prefixSymbol)
        }
    }

    return prefixChars.join('')
};

module.exports = longestCommonPrefix