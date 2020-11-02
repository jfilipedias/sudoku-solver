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
    var rows = document.querySelectorAll('tr');

    for (var i = 0; i < 9; i++) {
        var inputs = rows[i].querySelectorAll('input');
        var boardRow = board[i];

        for (var j = 0; j < 9; j++) { 
            if(inputs[j].value == 0) inputs[j].value = '';

            if(boardRow[j] === 0) continue;

            inputs[j].value = boardRow[j];
            inputs[j].setAttribute('class', 'default');
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
                number = validateNumber(inputs[j].value);
            
            boardRow[j] = number;
        }
    }
}

function solve () {
    getBoard();
    setBoard();

    console.log('Solving...');
}

function validateNumber (number) {
    while (number >= 10)
        number /= 10;
    
    return Math.trunc(number);
}
 