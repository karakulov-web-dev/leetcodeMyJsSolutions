function isMatch(s, p, si = 0, pi = 0) {
    if (s.length === 0 || p.length === 0) return true
    if (s.length === si && p.length === pi) return true
    if (p.length === pi) return false
    const isZeroOnMore = p[pi + 1] === '*'
    const isMathesAnySingle = p[pi] === '.'
    const isSimpleCheckChar = !isZeroOnMore && !isMathesAnySingle
    let delegateSi = si
    let delegatepi = pi

    let result = false
    if (isZeroOnMore) {
        result = true
        delegatepi = delegatepi + 2
    } else if (isMathesAnySingle) {
        result = typeof s[si] === 'string'
        delegateSi++
        delegatepi++
    } else if (isSimpleCheckChar) {
        result = s[si] === p[pi]
        delegateSi++
        delegatepi++
    }

    let delegateResult = false

    if (isSimpleCheckChar || isMathesAnySingle) {
        delegateResult = isMatch(s, p, delegateSi, delegatepi)
    }
    if (isZeroOnMore) {
        const queue = [{ si: delegateSi, pi: delegatepi }]
        while (queue.length && delegateSi <= s.length) {
            const cursors = queue.pop()
            delegateResult = isMatch(s, p, cursors.si, cursors.pi)
            if (!delegateResult) {
                if (s[delegateSi] === p[pi] || (p[pi] === '.' && typeof s[delegateSi] === 'string')) {
                    delegateSi++
                    queue.push({ si: delegateSi, pi: delegatepi })
                }
            }
        }
    }

    return result && delegateResult

};


module.exports = isMatch