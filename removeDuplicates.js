var removeDuplicates = function (nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) result.push(nums[i])
    }
    return result
};

module.exports = removeDuplicates