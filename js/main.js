window.onload = function() {
	drawTable(3);
	drawSpiral(3);

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
		table = document.querySelector('table'),
		numberOfDirections = number+number-1,
		rows = table.querySelectorAll('tr');

	for (let i = 0; i < numberOfDirections; i++) {
		switch (i) {
			case [0,4,8,12,16,20,24,28,32].includes(i): {

				break;
			}
			case [1,5,9,13,17,21,25,29,33].includes(i): {
				break;
			}
			case [2,6,10,14,18,22,26,30,34].includes(i): {
				break;
			}
			case [3,7,11,15,19,23,27,31,35].includes(i): {
				break;
			}
		}
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

