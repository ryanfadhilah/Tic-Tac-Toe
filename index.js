const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')

const x_class = 'x'
const o_class = 'o'

let circleTurn

startGame()

function startGame() {
    circleTurn = false
    cellElements.forEach((cell) => {
        // once true: only applied once
        cell.addEventListener('click', handleClick, { once: true })
    })
}


function handleClick(e) {
    //   create mark
    const cell = e.target
    const currentClass = circleTurn ? o_class : x_class

    placeMark(cell, currentClass)
    // switch turn
    swapTurns()
    // apply hover
    setBoardHoverClass()
    // check win
    // check draw
}


function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}
function swapTurns() {
    circleTurn = !circleTurn
}
function setBoardHoverClass() {
    // reset
    board.classList.remove(x_class)
    board.classList.remove(o_class)
    // 
    if (circleTurn) {
        board.classList.add(o_class)
    }
    if (!circleTurn) {
        board.classList.add(x_class)
    }
}