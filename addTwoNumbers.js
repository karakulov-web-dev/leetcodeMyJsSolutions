const addTwoNumbers = function (l1, l2, extra) {
    if (!l1 && !l2 && !extra) return null
    let val = (l1?.val ?? 0) + (l2?.val ?? 0) + (extra ?? 0)
    let e = 0
    if (val >= 10) {
        val = val - 10
        e = 1
    }
    return { val, next: addTwoNumbers(l1?.next, l2?.next, e) }
};


module.exports = addTwoNumbers
