function convert(s, numRows) {
    if (numRows === 1) return s
    const matrix = []
    for (let i = 0; i < numRows; i++) {
        matrix[i] = []
    }
    let currentRowIndex = 0;
    let currentCellIndex = 0;
    let direction = 'bottom'

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        matrix[currentRowIndex][currentCellIndex] = char
        if (direction === 'bottom' && currentRowIndex < (numRows - 1)) {
            currentRowIndex++
        } else if (direction === 'bottom' && currentRowIndex === (numRows - 1)) {
            direction = 'top'
            currentRowIndex--
            currentCellIndex++
        } else if (direction === 'top' && currentRowIndex > 0) {
            currentRowIndex--
            currentCellIndex++
        } else if (direction === 'top' && currentRowIndex === 0) {
            direction = 'bottom'
            currentRowIndex++
        }
    }
    return matrix.map(row => row.join('')).join('')
};

module.exports = convert