/* FIND BIGGEST TOTAL STATS
let biggestTotal = 0;
let biggestName = '-';
let haveDuplicate = false;
for (let i = 0; i < officerArray.length; i++) {
	let total = parseInt(officerArray[i]['ldr']) + parseInt(officerArray[i]['war']) +
		parseInt(officerArray[i]['int']) + parseInt(officerArray[i]['pol']) +
		parseInt(officerArray[i]['chr']);
	
	if (total == biggestTotal) haveDuplicate = true;
	else if (total > biggestTotal) {
		biggestTotal = total;
		biggestName = officerArray[i]['name'];
		haveDuplicate = false;
	}
}

let alertString = biggestName + ' with ' + biggestTotal;
if (haveDuplicate) alertString += ', but have duplicate.';
else alertString += ', no duplicate.';
alert(alertString);
*/

/* ORDERING BASED ON sortVal
if (sender == 'sort') {
	if (sortVal == 'name') document.getElementById('order').value = 'asc';
	else document.getElementById('order').value = 'dsc';
	
	inputChanged();
	return;
}
*/

/* Sort filtered array with bubble sort
for (let i = 0; i < filteredArray.length; i++) {
	for (let j = i + 1; j < filteredArray.length; j++) {
		let compareI = isNumeric(filteredArray[i][sortVal]) ? parseInt(filteredArray[i][sortVal]) : filteredArray[i][sortVal];
		let compareJ = isNumeric(filteredArray[j][sortVal]) ? parseInt(filteredArray[j][sortVal]) : filteredArray[j][sortVal];
		
		if (orderVal == 'asc') {
			if (compareI > compareJ) {
				let temp = filteredArray[i];
				filteredArray[i] = filteredArray[j];
				filteredArray[j] = temp;
			}
		}
		else if (orderVal == 'dsc') {
			if (compareI < compareJ) {
				let temp = filteredArray[i];
				filteredArray[i] = filteredArray[j];
				filteredArray[j] = temp;
			}
		}
	}
}
*/