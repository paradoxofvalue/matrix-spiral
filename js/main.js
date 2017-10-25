window.onload = function() {
    drawTable(15);
    drawSpiral(15);
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
        down = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
        right = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41],
        up = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42],
        left = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43],
        time = 100,
        test = new Array();

    for (let i = 0; i < numberOfDirections; i++) {
        if (down.includes(i)) {
            let step = down.indexOf(i);
            for (let cell = step; cell < table.length - step; cell++) {
                test.push(table[cell].cells[step]);
            }
        }
        if (right.includes(i)) {
            let step = right.indexOf(i);
            for (let cell = step + step + 1; cell < table.length; cell++) {
                test.push(table[table.length - 1 - step].cells[cell - step]);
            }
        }
        if (up.includes(i)) {
            let step = up.indexOf(i);
            for (let cell = table.length - 2 - step; cell >= step; cell--) {
                test.push(table[cell].cells[table.length - 1 - step]);
            }
        }
        if (left.includes(i)) {
            let step = left.indexOf(i),
                count = number - 2 - step - step;
            for (let cell = count; cell > 0; cell--) {
                // table[0 + step].cells[cell].className = "";
                test.push(table[step].cells[step + cell]);
            }
        }
    }
    draw(test, numbers, time);
}

function draw(arrayOfElements, numbers, time) {
    arrayOfElements.map(function(elem, index) {
        (function(index) {
            setTimeout(function() {
                elem.className = "";
                let text = document.createTextNode(numbers[index]);
                elem.appendChild(text);
            }, time * index);
        })(index)
    })

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