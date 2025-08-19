let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const gameStatus = document.querySelector('.game-status');
const resetButton = document.getElementById('reset-button');

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameOver || cell.textContent !== '') return;
        gameState[index] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
});

resetButton.addEventListener('click', () => {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    cells.forEach(cell => cell.textContent = '');
    gameStatus.textContent = '';
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        if (gameState[combination[0]] !== '' &&
            gameState[combination[0]] === gameState[combination[1]] &&
            gameState[combination[0]] === gameState[combination[2]]) {
            gameOver = true;
            gameStatus.textContent = `Player ${gameState[combination[0]]} wins!`;
            return;
        }
    }

    if (!gameState.includes('')) {
        gameOver = true;
        gameStatus.textContent = 'It\'s a draw!';
    }
}


