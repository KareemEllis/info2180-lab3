window.addEventListener('load', function () {
    alert("Page Loaded")
    const board = document.getElementById("board")
    console.log(board)
    const squares = Array.from(board.getElementsByTagName("div"))
    console.log(squares)
    squares.forEach(square => {
        square.classList.add("square")
    });
    
})



