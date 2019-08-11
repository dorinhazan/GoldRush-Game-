$('#btn').on('click', function () {
    const render = new rendrer()
    const main = function () {
        render.renderBoard(game)
    }
    let a = $('#number').val()
    console.log(a)

    const matrix = new GoldRush(a, a)
    let game = matrix.matrix

    $(".line").width(`${Math.floor(100/a)}%`);
    // $('.box').css("width", "80/a")
    // $('.box').css("height", "80/a")

    $(document).keypress(function (e) {
        e = e.which
        switch (e) {
            case 97:
                matrix.movePlayer(2, "left")
                break;
            case 119:
                matrix.movePlayer(2, "up")
                break
            case 115:
                matrix.movePlayer(2, "down")
                break;
            case 100:
                matrix.movePlayer(2, "right")
                break
            case 106:
                matrix.movePlayer(1, "left")
                break;
            case 105:
                matrix.movePlayer(1, "up")
                break
            case 107:
                matrix.movePlayer(1, "down")
                break;
            case 108:
                matrix.movePlayer(1, "right")
                break
        }
        render.renderBoard(game)
    })
    main()
})
