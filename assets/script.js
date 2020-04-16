function changeTurn(turn_content,players,turn){
    turn_content.innerHTML= players[turn]+"'s turn"
    if(turn===0){
        turn=1
    }
    else{
        turn=0
    }
    return turn
}
function getBoard(){
    
}
function startGame(players) {
    let board=[
        [-1,-1,-1],
        [-1,-1,-1],
        [-1,-1,-1]
    ]

    let turn = Math.floor(Math.random() * 2)
    console.log(turn)
    const turns = document.getElementById('turns')
    const turn_content=document.querySelector("#turns > h1")
    const game_board = document.getElementById('game-body')
    game_board.style.display = 'block'
    turns.style.display ='block'
    turn = changeTurn(turn_content,players,turn)


    
}

function submitForm() {
    let players=[]
    let player1 = document.getElementById("player-1").value
    let player2 = document.getElementById("player-2").value
    
    if (player1 === "") {
        player1 = "Player 1"
    }
    if (player2 === "") {
        player2 = "Player 2"
    }
    players.push(player1)
    players.push(player2)

    startGame(players)

}

const submitBtn = document.querySelector("#input-playes > input[type=submit]:nth-child(5)")
submitBtn.addEventListener('click', submitForm)