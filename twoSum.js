var twoSum = function (nums, target) {
    const indexbyDiff = {}
    for (let index = 0; index < nums.length; index++) {
        const n = nums[index]
        const diff = target - n

        if (typeof indexbyDiff[n] === 'number') {
            return [indexbyDiff[n], index]
        } else {
            indexbyDiff[diff] = index
        }
    }
};

module.export = twoSum