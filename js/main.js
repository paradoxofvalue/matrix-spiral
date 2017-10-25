window.onload = function() {
    drawTable(5);
    drawSpiral(5);

}

function drawTable(number) {
    let table = document.createElement('table'),
        rows = number,
        cols = number;
    document.body.appendChild(table);
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td');
            cell.className = "hidden";
            row.appendChild(cell);
        }
    }
}

function drawSpiral(number) {
    let numbers = getNumbers(number, 6),
        numberOfDirections = number + number - 1,
        table = document.querySelectorAll('tr'),
        down = [0, 4, 8, 12, 16, 20, 24, 28, 32],
        right = [1, 5, 9, 13, 17, 21, 25, 29, 33],
        up = [2, 6, 10, 14, 18, 22, 26, 30, 34],
        left = [3, 7, 11, 15, 19, 23, 27, 31, 35],
        time = 1000


    for (let i = 0; i < numberOfDirections; i++) {

        (function(index) {
            setTimeout(function(index) {
                if (down.includes(i)) {
                    let step = down.indexOf(i);
                    for (let cell = step; cell < table.length; cell++) {
                        table[cell].cells[step].className = "";
                    }
                }
                if (right.includes(i)) {
                    let step = right.indexOf(i);
                    for (let cell = 0; cell < table.length; cell++) {
                        table[table.length - 1 - step].cells[cell].className = "";
                    }
                }
                if (up.includes(i)) {
                    let step = up.indexOf(i);
                    for (let cell = table.length - 1; cell > 0; cell--) {
                        table[cell].cells[table.length - 1 - step].className = "";
                    }
                }
                if (left.includes(i)) {
                    let step = left.indexOf(i);
                    for (let cell = table.length - 1; cell > 0; cell--) {
                        table[0 + step].cells[cell].className = "";
                    }
                }
            }, time * index);
        })(i);
    }
}

function getNumbers(number, skip) {
    let numbers = [],
        doubleNumber = Math.pow(number, 2),
        regExpr = new RegExp(skip);
    for (let i = 0; i < doubleNumber; i++) {
        !i.toString().match(regExpr) ? numbers.push(i) : doubleNumber++;
    }
    return numbers.reverse();
}