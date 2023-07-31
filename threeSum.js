
var threeSum = function (nums) {
    const dict = {}
    const linkDict = {}
    const pairs = []
    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] = dict[nums[i]] || []
        dict[nums[i]].push(i)
        for (let k = 0; k < nums.length; k++) {
            if (!(linkDict[i] && linkDict[i].linked[k]) && i !== k) {
                linkDict[i] = linkDict[i] || { id: i, linked: {} }
                linkDict[k] = linkDict[k] || { id: k, linked: {} }
                linkDict[i].linked[k] = linkDict[k]
                linkDict[k].linked[i] = linkDict[i]

                const pair = [linkDict[i], linkDict[k]]
                pairs.push(pair)
            }
        }
    }

    const result = []

    for (let i = 0; i < pairs.length; i++) {

        const pair = pairs[i]
        const pairSum = nums[pair[0].id] + nums[pair[1].id]
        const dif = 0 - pairSum

        const indexes = dict[dif] || []

        for (let index of indexes) {
            const isNotExist = pair[0].id !== index && pair[1].id !== index
            if (isNotExist) {
                const res = [nums[pair[0].id], nums[pair[1].id], nums[index]].sort()
                result.push(res)
            }
        }
    }


    const sortedResults = result.sort((a, b) => a > b ? 1 : -1)

    const obj = {}
    const filtredResult = []

    for (let i = 0; i < result.length; i++) {
        const values = result[i].sort()
        const key = values.join('')
        if (obj[key]) continue
        filtredResult.push(values)
        obj[key] = true
    }
    
    return filtredResult
};


module.exports = threeSum