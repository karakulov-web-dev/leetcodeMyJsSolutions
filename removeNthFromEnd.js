var removeNthFromEnd = function (head, n) {
    const nodes = []

    let current = head
    while (current) {
        nodes.push(current)
        current = current.next
    }
    const parentTarget = nodes[nodes.length - n - 1]
    const targetNode = nodes[nodes.length - n]
    const nextNode = targetNode.next

    if (nodes.length = 0) return head
    if (nodes.length = 1) return null

    if (parentTarget) {
        parentTarget.next = nextNode !== targetNode ? nextNode : null
        return head
    } else {
        return nextNode
    }

};

module.exports = removeNthFromEnd
