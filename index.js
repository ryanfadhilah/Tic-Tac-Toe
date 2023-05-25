// Sellector
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let count = 0

// memory
const x_class = 'x'
const o_class = 'o'
let circleTurn
const WIN = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // cross
    [0, 4, 8],
    [6, 4, 2],
]


// function
startGame()

function startGame() {
    console.log('game start !')

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
    if (checkWin(currentClass)) {
        console.log('Got Winner')
        winner(false)
    }
    // check draw
    count += 1
    if (count === 9) {
        console.log(`no winner`)
        draw()
    }
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

function checkWin(currentClass) {
    // some : check all element, atleast one pass, pas = true
    return WIN.some((combination) => {
        //  every : test if all elements pass the condition, pass = true
        return combination.every((i) => {
            console.log(cellElements[i].classList.contains(currentClass))
            return cellElements[i].classList.contains(currentClass)
        })
    })
}

function winner(draw) {
    winningMessageTextElement.innerText = `${circleTurn ? "X`s" : "O`s"} Wins !`
    winningMessageElement.classList.add('show')
}
function draw(draw) {
    winningMessageTextElement.innerText = `Draw`
    winningMessageElement.classList.add('show')
}

function restart() {
    location.reload()
}