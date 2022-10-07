window.addEventListener('load', function () {
    alert("Page Loaded")
    const board = document.getElementById("board")
    const squares = Array.from(board.getElementsByTagName("div"))
    let gameOn = true

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

    let checkWin = function(square){
        let playerMove = moves[square]
        console.log("CHECKING SQUARE: ", square)
        if (square == 0) {
            if ((moves[1] == playerMove & moves[2] == playerMove) || (moves[3] == playerMove & moves[6] == playerMove) || (moves[4] == playerMove && moves[8] == playerMove))
            {return true}
        }
        else if (square == 1) {
            if ((moves[0] == playerMove & moves[3] == playerMove) || (moves[4] == playerMove & moves[7] == playerMove))
            {return true}
        }
        else if (square == 2) {
            if ((moves[0] == playerMove & moves[1] == playerMove) || (moves[5] == playerMove & moves[8] == playerMove) || (moves[4] == playerMove && moves[6] == playerMove))
            {return true}
        }

        else if (square == 3) {
            if ((moves[0] == playerMove & moves[6] == playerMove) || (moves[4] == playerMove & moves[5] == playerMove))
            {return true}
        }
        else if (square == 4) {
            if ((moves[0] == playerMove & moves[8] == playerMove) || (moves[2] == playerMove & moves[6] == playerMove) || (moves[1] == playerMove && moves[7] == playerMove) || (moves[3] == playerMove && moves[5] == playerMove))
            {return true}
        }
        else if (square == 5) {
            if ((moves[2] == playerMove & moves[8] == playerMove) || (moves[3] == playerMove & moves[4] == playerMove))
            {return true}
        }

        else if (square == 6) {
            if ((moves[0] == playerMove & moves[3] == playerMove) || (moves[2] == playerMove & moves[5] == playerMove) || (moves[7] == playerMove && moves[8] == playerMove))
            {return true}
        }
        else if (square == 7) {
            if ((moves[1] == playerMove & moves[4] == playerMove) || (moves[6] == playerMove & moves[8] == playerMove))
            {return true}
        }
        else if (square == 8) {
            if ((moves[0] == playerMove & moves[4] == playerMove) || (moves[2] == playerMove & moves[5] == playerMove) || (moves[6] == playerMove && moves[7] == playerMove))
            {return true}
        }
        return false
        
    }
    //Set array to store record of game
    let moves = [" ", " ", " ",
                 " ", " ", " ",
                 " ", " ", " "]

    squares.forEach(square => {
        square.classList.add("square")
        
        //Functionality for clicking a square
        square.addEventListener("click", () => {
            if (square.innerText == "" && gameOn == true) {
                square.innerText = currentPlay
                
                //Adds move to the moves array to record game
                moves[squares.indexOf(square)] = currentPlay
                //console.log("Game Recor:\n" + moves)

                if(checkWin(squares.indexOf(square)) == true){
                    gameOn = false
                    const status = this.document.getElementById("status");
                    status.innerText = "Congratulations! " + currentPlay + " is the Winner!"

                    status.classList.add("you-won")
                }
                switchPlayer()
            }
        })

        square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        })
        square.addEventListener("mouseout", () => {
            square.classList.remove("hover")
        })
    });
    

})



