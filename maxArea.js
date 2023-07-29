var maxArea = function (height) {
    let result = 0
    for (let li = 0, ri = height.length - 1; li !== ri;) {
        let w = ri - li
        let lh = height[li]
        let rh = height[ri]
        let mh = Math.min(lh, rh)

        let s = mh * w
        if (s > result) result = s
        if (lh <= rh) {
            li++
        } else {
            ri--
        }
    }
    return result
};

module.exports = maxArea