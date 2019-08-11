class rendrer{
    constructor(){
    }
    renderBoard(board){        
        $('.box').empty()
        for(let box of board){
        const source = $('#templateBoard').html()
        const template = Handlebars.compile(source)
        const newHTML = template({box})
        $('.box').append(newHTML)
        }
    }
}