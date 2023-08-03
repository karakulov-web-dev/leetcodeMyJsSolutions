var fourSum = function (nums, target) {
    const dict = {}
    const uniqDict = {}
    const results = []

    for (let i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) dict[nums[i]] = []
        dict[nums[i]].push(i)
    }

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = 0; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                if (i !== j && i !== k && j !== k) {
                    const tripleSum = nums[i] + nums[j] + nums[k]
                    const diff = target - tripleSum
                    if (dict[diff] && (tripleSum + diff) === target) {
                        for (let li = 0; li < dict[diff].length; li++) {
                            let l = dict[diff][li]
                            if (l !== i && l !== j && l !== k) {
                                const result = [nums[i], nums[j], nums[k], nums[l]].sort((v1, v2) => v1 - v2)
                                const key = result.join('|')
                                if (!uniqDict[key]) {
                                    uniqDict[key] = true
                                    results.push(result)
                                } else {
                                    break
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return results
};


module.exports = fourSum