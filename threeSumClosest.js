var threeSumClosest = function (nums, target) {
    const sorted = nums.sort((v1, v2) => v1 - v2)

    let diff = Infinity
    let result = 0

    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length; j++) {
            if (i !== j) {
                const pairSum = sorted[i] + sorted[j]
                const d = target - pairSum
                let k = findClosest(sorted, d, 0, sorted.length - 1)

                if (k === i || k === j) {
                    let l = k, r = k
                    while (l === i || l === j || r === i || r === j) {
                        if (l === i || l === j) l--
                        if (r === i || r === j) r++
                    }
                    if (sorted[l] !== undefined && sorted[r] !== undefined) {
                        const diffL = sorted[l] > d ? sorted[l] - d : d - sorted[l]
                        const difR = sorted[r] > d ? sorted[r] - d : d - sorted[r]
                        if (diffL <= difR) {
                            k = l
                        } else {
                            k = r
                        }
                    } else if (sorted[l] !== undefined) {
                        k = l
                    } else if (sorted[r] !== undefined) {
                        k = r
                    }
                }

                const tripleSum = pairSum + sorted[k]

                const tripleDiff = tripleSum > target ? tripleSum - target : target - tripleSum
                if (tripleDiff < diff) {
                    diff = tripleDiff
                    result = tripleSum
                }
            }
        }
    }
    return result
};

function findClosest(nums, target, from, to) {
    if (from >= to) {
        return from
    }
    const length = (to - from) + 1
    const checkIndex = from + (((length % 2) === 0) ? length / 2 - 1 : Math.floor(length / 2))
    const diffLeft = target >= nums[checkIndex] ? target - nums[checkIndex] : nums[checkIndex] - target
    const diffRight = target >= nums[checkIndex + 1] ? target - nums[checkIndex + 1] : nums[checkIndex + 1] - target

    let nextFrom = from, nextTo = to

    if (diffLeft < diffRight) {
        nextTo = checkIndex - 1
    } else if (diffRight < diffLeft) {
        nextFrom = checkIndex + 1
    } else {
        let l = checkIndex, r = checkIndex + 1
        while (nums[l] !== nums[r]) {
            l--
            r++
        }
        if (nums[l] !== undefined && nums[r] !== undefined) {
            const diffL = nums[l] > target ? nums[l] - target : target - nums[l]
            const difR = nums[r] > target ? nums[r] - target : target - nums[r]
            if (diffL < diffRight) {
                nextTo = checkIndex - 1
            } else {
                nextFrom = checkIndex + 1
            }
        } else if (nums[l]) {
            nextFrom = checkIndex + 1
        } else if (nums[r]) {
            nextTo = checkIndex - 1
        } else {
            nextTo = checkIndex - 1
        }
    }
    const nextResult = findClosest(nums, target, nextFrom, nextTo)
    const nextResultDiff = nums[nextResult] >= target ? nums[nextResult] - target : target - nums[nextResult]
    if (diffLeft <= nextResultDiff) {
        return checkIndex
    } else if (diffRight <= nextResultDiff) {
        return checkIndex + 1
    } else {
        return nextResult
    }
}

module.exports = threeSumClosest
