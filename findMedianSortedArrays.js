var findMedianSortedArrays = function (nums1, nums2) {
    const sumLength = nums1.length + nums2.length
    const isEven = (sumLength % 2) === 0
    const startMedianIndex = isEven ? (sumLength / 2) - 1 : Math.ceil(sumLength / 2) - 1

    for (let i = 0, i1 = 0, i2 = 0; i < sumLength; i++) {
        const n1 = nums1[i1]
        const n2 = nums2[i2]
        let current = 0

        if (n1 <= n2 || typeof n2 !== 'number') {
            i1++
            current = n1
        } else {
            i2++
            current = n2
        }
        if (i === startMedianIndex) {
            if (isEven) {
                let next = 0
                if (typeof nums1[i1] === 'number' && typeof nums2[i2] === 'number') {
                    next = Math.min(nums1[i1], nums2[i2])
                } else {
                    next = typeof nums1[i1] === 'number' ? nums1[i1] : nums2[i2]
                }
                return (current + next) / 2
            } else {
                return current
            }
        }
    }
};

module.exports = findMedianSortedArrays