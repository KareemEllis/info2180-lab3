window.addEventListener('load', function () {
    alert("Page Loaded")
    const board = document.getElementById("board")
    const squares = Array.from(board.getElementsByTagName("div"))

    //Set starting player
    let currentPlay = "0";
    //Switches the players
    let switchPlayer = function(){
        console.log("Player has placed " + currentPlay)
        if (currentPlay == "0") {
            currentPlay = "X"
        }else{
            currentPlay = "0"
        }
    }

    //Set array to store record of game
    let plays = [" ", " ", " ",
                 " ", " ", " ",
                 " ", " ", " "]

    squares.forEach(square => {
        square.classList.add("square")
        
        //Functionality for clicking a square
        square.addEventListener("click", () => {
            if (square.innerText == "") {
                square.innerText = currentPlay
                
                //Adds move to the plays array to record game
                plays[squares.indexOf(square)] = currentPlay
                console.log("Game Recor:\n" + plays)

                switchPlayer()
            }
            
        })
    });
    

})



