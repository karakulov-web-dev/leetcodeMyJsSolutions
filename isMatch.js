var isMatch = function (s, p) {
    let f = getPatternList(p)
    let charArr = s.split('')
    const queue = [patternList]
    let char = charArr.shift()


    return true
};

const getPatternList = (p) => {
    let patternList = null
    let currentPutternNode = null
    for (let i = 0; i < p.length; i++) {
        let pattern = { value: p[i], matches: [] }
        if (p[i + +1] === '*') {
            pattern.flag = true
            i++
        }

        if (currentPutternNode) {
            currentPutternNode.next = pattern
            pattern.prev = currentPutternNode
        }
        if (!patternList) {
            patternList = pattern
        }
        currentPutternNode = pattern
    }
    return patternList
}


module.exports = isMatch