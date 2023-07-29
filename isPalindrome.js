var isPalindrome = function (x) {
    const s = x.toString()
    const isEven = (s.length % 2) === 0
    const maxSteps = isEven ? s.length / 2 : Math.ceil(s.length / 2)
    for (let i = 0; i < maxSteps; i++) {
        const l = s[i]
        const r = s[s.length - 1 - i]
        if (l !== r) return false
    }
    return true
};

module.exports = isPalindrome