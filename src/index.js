var board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

setBoard();

function setBoard () {
    var tableRow = document.querySelectorAll('tr');

    for (var row = 0; row < 9; row++) {
        var inputs = tableRow[row].querySelectorAll('input');
        var boardRow = board[row];

        for (var col = 0; col < 9; col++) { 
            if(inputs[col].value == 0) inputs[col].value = '';

            if(boardRow[col] === 0) continue;

            inputs[col].value = boardRow[col];
            inputs[col].setAttribute('class', 'default');
        }
    }
}

function getBoard () {
    var rows = document.querySelectorAll('tr');

    for (var i = 0; i < 9; i++) {
        var inputs = rows[i].querySelectorAll('input');
        var boardRow = board[i];

        for (var j = 0; j < 9; j++) { 
            var number = 0;
            
            if (inputs[j].value !== null || inputs[j].value !== undefined || inputs[j].value !== NaN) 
                number = getFirstDigit(inputs[j].value);
            
            boardRow[j] = number;
        }
    }
}

function getFirstDigit (number) {
    while (number >= 10)
        number /= 10;
    
    return Math.trunc(number);
}

function prepareToSolve() {
    getBoard();
    setBoard();
    solve();
}

function solve () {
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            if (board[row][col] !== 0) continue;
            
            for (var number = 1; number < 10; number ++) {
                if(isValid(row, col, number)) {
                    board[row][col] = number;
                    solve();
                    board[row][col] = 0;
                }
            } 
            return;
        }
    }

    setBoard(); 
}

function isValid (row, col, number) {
    // Check Row
    for (var i = 0; i < 9; i++) {
        if (board[row][i] === number)
            return false;
    }

    // Check Collum
    for (var i = 0; i < 9; i++) {
        if (board[i][col] === number)
            return false;
    }

    // Check Square 
    var squareRow = Math.trunc(row/3) * 3;
    var squareCol = Math.trunc(col/3) * 3;

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if(board[squareRow + 1][squareCol + 1] === number)
                return false
        }
    } 

    return true;
}
 