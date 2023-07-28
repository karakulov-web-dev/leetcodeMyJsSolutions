const longestPalindrome = function (s) {
    if (s.length === 1) return s
    let middleLeft = 0
    let middleRight = 0
    let max = 0
    let resultStartIndex = 0
    let middleChar = s[0]

    while (middleLeft < s.length) {
        if (s[middleRight] === middleChar) {
            middleRight++
        } else {
            const ml = middleLeft
            const mr = middleRight - 1

            const lengthMiddle = mr - ml + 1

            let sidesLength = 0
            let indexLeftChar = ml - sidesLength - 1
            let indexRightChar = mr + sidesLength + 1
            let charL = s[indexLeftChar]
            let charR = s[indexRightChar]
            while (charL === charR && charL !== undefined && charR !== undefined) {
                sidesLength++
                indexLeftChar = ml - sidesLength - 1
                indexRightChar = mr + sidesLength + 1
                charL = s[indexLeftChar]
                charR = s[indexRightChar]
            }
            let lengthpalindrom = lengthMiddle + (sidesLength * 2)
            if (lengthpalindrom > max) {
                max = lengthpalindrom
                resultStartIndex = middleLeft - sidesLength
            }
            middleLeft++
            midlleRight = middleLeft
            middleChar = s[middleLeft]
        }
    }
    const result = []
    for (let i = resultStartIndex; i < resultStartIndex + max; i++) {
        result.push(s[i])
    }

    return result.join('')
}

module.exports = longestPalindrome