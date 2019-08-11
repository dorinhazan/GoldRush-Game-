
class GoldRush extends Matrix {
    constructor(numRows, numColumns) {
        super(numRows, numColumns)
        this.numRows = numRows
        this.numColumns = numColumns
        this.arrayCoins = []
        this.arrayCoins[0]=0
        this.arrayCoins[1]=0
        this.arrayCoins[2]=0

        this.coinCount=0
        this.loadBoard()

    }
    loadBoard() {
        this.matrix = []
        // this.arrayCoins = [0, 0, 0]

        for (let i = 0; i < this.numRows; i++) {
            let dotArr = []
            for (let j = 0; j < this.numColumns; j++) {
                let random = Math.floor(Math.random() * Math.floor(10))
                if (random < 5) {
                    dotArr.push('c')
                    this.coinCount++
                }
                else if (random > 5 && random < 9) {
                    dotArr.push('b')

                }
                else {
                    dotArr.push('e')
                }
            }

            this.matrix.push(dotArr)
        }

if(this.matrix[0][0] == 'c'){
    this.coinCount--
}
if(this.matrix[this.numRows - 1][this.numColumns - 1]=='c'){
    this.coinCount--
}
        this.matrix[0][0] = 1
        this.matrix[this.numRows - 1][this.numColumns - 1] = 2
    }
    play(rowNum, columnNum, player) {
        let play
        if (player === 1) {
            play = '1'
        }
        else {
            play = '2'
        }
        this.alter(rowNum, columnNum, play)
    }
    movePlayer(player, movement) {
        let place = this.findCoordinate(player)
        if (movement == "right" && place.y < this.numRows - 1) {
            if (this.matrix[place.x][place.y + 1] == "c") {
                this.arrayCoins[player]++
                    this.coinCount--
                    console.log(this.coinCount)
                if(this.coinCount==0){
                    this.winner()
                }

            }
            if (this.matrix[place.x][place.y + 1] == "b" || this.matrix[place.x][place.y + 1] === 2 || this.matrix[place.x][place.y + 1] === 1) {
                return
            }

            this.alter(place.x, place.y, 'e')
            this.alter(place.x, place.y + 1, player)
            place = this.findCoordinate(player)
            console.log(place)
        }

        if (movement == "left" && place.y > 0) {
            if (this.matrix[place.x][place.y - 1] == "c") {
                this.arrayCoins[player]++
                    this.coinCount--
                    console.log(this.coinCount)
                    if(this.coinCount==0){
                        this.winner()
                    }
            }
            if (this.matrix[place.x][place.y - 1] == "b" || this.matrix[place.x][place.y - 1] == 2 || this.matrix[place.x][place.y - 1] == 1) {
                return
            }

            this.alter(place.x, place.y, 'e')
            this.alter(place.x, place.y - 1, player)
            place = this.findCoordinate(player)
            console.log(place)

        }
        if (movement == "up" && place.x > 0) {
            if (this.matrix[place.x - 1][place.y] == "c") {
                this.arrayCoins[player]++
                    this.coinCount--
                    console.log(this.coinCount)
                    if(this.coinCount==0){
                        this.winner()
                    }

            }
            if (this.matrix[place.x - 1][place.y] == "b" || this.matrix[place.x - 1][place.y] === 2 || this.matrix[place.x - 1][place.y] === 1) {
                return
            }
            this.alter(place.x, place.y, 'e')
            this.alter(place.x - 1, place.y, player)
            place = this.findCoordinate(player)
            console.log(place)
        }
        if (movement == "down" && place.x < this.numColumns - 1) {
            if (this.matrix[place.x + 1][place.y] == "c") {
                this.arrayCoins[player]++
                    this.coinCount--
                    console.log(this.coinCount)
                    if(this.coinCount==0){
                        this.winner()
                    }
            }
            if (this.matrix[place.x + 1][place.y] == "b" || this.matrix[place.x + 1][place.y] === 2 || this.matrix[place.x + 1][place.y] === 1) {
                return
            }
            this.alter(place.x, place.y, 'e')
            this.alter(place.x + 1, place.y, player)
            place = this.findCoordinate(player)
            console.log(place)

        }
    }
    winner() {
        if (this.arrayCoins[1] < this.arrayCoins[2]) {
            alert("2 win")
        }
        else if (this.arrayCoins[1] > this.arrayCoins[2]) {
            alert("1 win")
        }
        else {
            alert("this is drue")
        }
    }
}




// // const board = new GoldRush(5, 5)
// board.loadBoard()
// board.movePlayer(1, "down")
// // board.movePlayer(1, "down")
// board.movePlayer(2, "up")
// // board.movePlayer(2, "up")
// board.print() //the print method should be defined inside of Matrix