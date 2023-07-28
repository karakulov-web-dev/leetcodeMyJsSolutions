const lengthOfLongestSubstring = (s) => {
    let windowStart = 0
    let windowEnd = 0
    let set = new Set()
    let maxLength = 0

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    while (windowEnd < s.length) {
        if (set.has(s[windowEnd])) {
            set.delete(s[windowStart])
            windowStart++
        } else {
            set.add(s[windowEnd])
            if (set.size > maxLength) maxLength = set.size
            windowEnd++
        }
    }
    return maxLength
}

module.exports = lengthOfLongestSubstring