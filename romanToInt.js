const decrements = {
    I: {
        value: 1,
        targets: new Set(['V', 'X'])
    },
    X: {
        value: 10,
        targets: new Set(['L', 'C'])
    },
    C: {
        value: 100,
        targets: new Set(['D', 'M'])
    }
}

const increments = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var romanToInt = function (s) {
    let result = 0
    let dv = 0
    for (let i = 0; i < s.length; i++) {
        if (dv) {
            result = result - dv
            dv = 0
        }
        const decrement = decrements[s[i]]
        if (decrement && decrement.targets.has(s[i + 1])) {
            dv = decrement.value
        } else {
            const incr = increments[s[i]]
            result = result + incr
        }
    }
    return result
};
module.exports = romanToInt