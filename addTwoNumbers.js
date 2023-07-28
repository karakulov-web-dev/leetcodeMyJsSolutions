var addTwoNumbers = function (l1, l2) {
    let extra = 0
    let result = []

    let node = null

    while (l1 !== null || l2 !== null || extra) {
        const n1 = l1?.val ?? 0
        const n2 = l2?.val ?? 0
        const sum = n1 + n2 + extra

        if (sum > 9) {
            extra = 1
            result.push(sum - 10)
        } else {
            extra = 0
            result.push(sum)
        }
        l1 = l1?.next ?? null
        l2 = l2?.next ?? null
    }

    for (let i = result.length; i > 0; i--) {
        node = new ListNode(result[i], node)
    }

    return result.reverse().reduce((acc, item) => {
        return new ListNode(item, acc)
    }, null)
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

module.exports = addTwoNumbers
