class Matrix {
    constructor(numRows, numColumns) {

        this.matrix = this.generateMatrix(numRows, numColumns)

    }
    generateMatrix(numRows, numColumns) {
        let matrix = []
        let counter = 1

        for (let i = 0; i < numRows; i++) {
            let arr = []
            for (let r = 0; r < numColumns; r++) {
                arr.push(counter++)
            }
            matrix.push(arr)
        }
        return matrix
    }
    alter(rowNum, colNum, updetVal) {
        return this.matrix[rowNum][colNum] = updetVal
    }
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]

    }
    print() {

        for (let i = 0; i < this.matrix.length; i++) {
            let str = ''
            for (let j = 0; j < this.matrix[i].length; j++) {
                str += this.matrix[i][j] + "\t"
            }
            console.log(str)
        }
    }
    printRow(rowNum) {
        for (let i = 0; i <= this.matrix.length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
    printColumn(columnNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][columnNum])
        }
    }
    findCoordinate(value) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let k = 0; k <= this.matrix.length; k++) {
                if (this.matrix[i][k] === value) {
                    return { "x": i, "y": k }
                }
            }
        }
    }
}