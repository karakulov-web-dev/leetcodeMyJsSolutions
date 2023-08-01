const threeSum = function (nums) {
    const dict = {}
    const result = []
    const uniq = {}
    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] = dict[nums[i]] || []
        dict[nums[i]].push(i)
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j === i) continue
            const diff = 0 - (nums[j] + nums[i])
            const isExist = dict[diff]
            if (isExist) {
                const filtred = []
                for (let k of dict[diff]) {
                    if (k !== i && k !== j) {
                        filtred.push(k)
                        break
                    }
                }
                if (filtred[0]) {
                    const triple = [diff, nums[i], nums[j]].sort()
                    const key = triple.join('|')
                    if (!uniq[key]) {
                        uniq[key] = true
                        result.push(triple)
                    }
                }
            }
        }
    }
    return result
};


module.exports = threeSum