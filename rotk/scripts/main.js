let displayOfficerId = -1;
let filterSkills = [];

window.onload = function () {
	updateSkills();
	
	document.getElementById('name').focus();
	inputChanged();
}

function isNumeric (value) {
	return /^\d+$/.test(value);
}

function isMobile () {
	let userAgent = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
	let mobileString = ['iphone', 'ipod', 'ipad', 'android', 'blackberry', 'phone', 'mobile', 'webos', 'opera mini'];
	
	for (let i = 0; i < mobileString.length; i++) if (userAgent.includes(mobileString[i])) return true;
	return false;
}

function parse (value) {
	return isNumeric(value) ? parseInt(value) : value;
}

function isLegal (id) {
	return typeof id === 'number' && id >= 0 && id < officerArray.length;
}

function cleanName (name) {
	if (typeof name !== 'string') return '';
	if (name.includes(' (')) return name.split(' (')[0];
	else return name;
}

function inputChanged (header) {
	let sortVal = document.getElementById('sort').value;
	let orderVal = document.getElementById('order').value;
	let nameVal = document.getElementById('name').value;
	let nameToLower = nameVal.toLowerCase();
	let skillVal = document.getElementById('skill').value;
	
	if (typeof header === 'string' && headers.includes(header)) {
		let autoOrder = (header == 'name') ? 'asc' : 'dsc';
		document.getElementById('sort').value = header;
		document.getElementById('order').value = autoOrder;
		sortVal = header;
		orderVal = autoOrder;
	}
	
	// Create filtered array
	let filteredArray = new Array();
	for (let i = 0; i < officerArray.length; i++) {
		if (officerArray[i]['name'].toLowerCase().indexOf(nameToLower) >= 0) {
			let haveSkills = true;
			for (let j = 0; j < filterSkills.length; j++) {
				if (!officerArray[i]['skills'].includes(filterSkills[j])) haveSkills = false;
			}
			
			if (haveSkills) {
				filteredArray.push({
					"id": i,
					"name": officerArray[i]['name'],
					"ldr": officerArray[i]['ldr'],
					"war": officerArray[i]['war'],
					"int": officerArray[i]['int'],
					"pol": officerArray[i]['pol'],
					"chr": officerArray[i]['chr'],
					"total": officerArray[i]['total'],
					"skills": officerArray[i]['skills'].length
				});
			}
		}
	}
	
	// Sort filtered array
	let i = 1;
	if (orderVal == 'asc') {
		while (i < filteredArray.length) {
			let j = i;
			while (j > 0 && parse(filteredArray[j - 1][sortVal]) > parse(filteredArray[j][sortVal])) {
				let temp = filteredArray[j];
				filteredArray[j] = filteredArray[j - 1];
				filteredArray[j - 1] = temp;
				j--;
			}
			i++;
		}
	}
	else if (orderVal == 'dsc') {
		while (i < filteredArray.length) {
			let j = i;
			while (j > 0 && parse(filteredArray[j - 1][sortVal]) < parse(filteredArray[j][sortVal])) {
				let temp = filteredArray[j];
				filteredArray[j] = filteredArray[j - 1];
				filteredArray[j - 1] = temp;
				j--;
			}
			i++;
		}
	}
	
	let string = `<table class="data">
		<tr>
			<th onclick="inputChanged('name')">Name</th>
			<th onclick="inputChanged('ldr')">LDR</th>
			<th onclick="inputChanged('war')">WAR</th>
			<th onclick="inputChanged('int')">INT</th>
			<th onclick="inputChanged('pol')">POL</th>
			<th onclick="inputChanged('chr')">CHR</th>
			<th class="total" onclick="inputChanged('total')">Total</th>
			<th onclick="inputChanged('skills')">Skills</th>
		</tr>`;
	for (let i = 0; i < filteredArray.length; i++) {
		string += `<tr class="officer"
			onclick="setDisplay(` + filteredArray[i]['id'] + `, 'click')"
			onmouseover="setDisplay(` + filteredArray[i]['id'] + `, 'mouseover')">
				<td>` + cleanName(filteredArray[i]['name']) + `</td>
				<td class="number">` + filteredArray[i]['ldr'] + `</td>
				<td class="number">` + filteredArray[i]['war'] + `</td>
				<td class="number">` + filteredArray[i]['int'] + `</td>
				<td class="number">` + filteredArray[i]['pol'] + `</td>
				<td class="number">` + filteredArray[i]['chr'] + `</td>
				<td class="number total">` + filteredArray[i]['total'] + `</td>
				<td class="number">` + filteredArray[i]['skills'] + `</td>
			</tr>`;
	}
	string += `</table>`;
	
	document.getElementById('output').innerHTML = string;
}

function setDisplay (id, mode) {
	if (mode === 'mouseover' && isMobile()) return;
	
	if (displayOfficerId !== id && isLegal(id)) {
		displayOfficerId = id;
		showDisplay();
	}
}

function showDisplay () {
	if (isLegal(displayOfficerId)) {
		let officer = officerArray[displayOfficerId];
		let string = `<div style="display: inline-block;">
				<div style="float: left; margin-right: 5px;">
					<div class="displayName">` + cleanName(officer['name']) + `</div>
					<div class="displayPortrait"><img src="portraits/` + officer['name'].split(' ').join('_') + `.jpg" alt="` + officer['name'] + `"></div>
				</div>
				<div style="float: left;">
					<table style="border-collapse: collapse;">`;
		
		string += `<tr>`;
		for (let i = 0; i < domesticSkills.length; i++) {
			let style = (officer['skills'].includes(domesticSkills[i])) ? ' domesticSkill' : '';
			string += `<td class="displaySkill` + style + `">` + domesticSkills[i] + `</td>`;
		}
		string += `</tr>`;
		
		string += `<tr>`;
		for (let i = 0; i < battleSkills.length; i++) {
			let style = (officer['skills'].includes(battleSkills[i])) ? ' battleSkill' : '';
			string += `<td class="displaySkill` + style + `">` + battleSkills[i] + `</td>`;
		}
		string += `</tr>`;
		
		string += `<tr>`;
		for (let i = 0; i < tacticSkills.length; i++) {
			let style = (officer['skills'].includes(tacticSkills[i])) ? ' tacticSkill' : '';
			string += `<td class="displaySkill` + style + `">` + tacticSkills[i] + `</td>`;
		}
		string += `</tr>`;
		
		string += `<tr>`;
		for (let i = 0; i < duelSkills.length; i++) {
			let style = (officer['skills'].includes(duelSkills[i])) ? ' duelSkill' : '';
			string += `<td class="displaySkill` + style + `">` + duelSkills[i] + `</td>`;
		}
		string += `</tr>`;
		
		string += `<tr>`;
		for (let i = 0; i < debateSkills.length; i++) {
			let style = (officer['skills'].includes(debateSkills[i])) ? ' debateSkill' : '';
			string += `<td class="displaySkill` + style + `">` + debateSkills[i] + `</td>`;
		}
		string += `</tr>`;
		
		string += `<tr>`;
		for (let i = 0; i < renownSkills.length; i++) {
			let style = (officer['skills'].includes(renownSkills[i])) ? ' renownSkill' : '';
			string += `<td class="displaySkill` + style + `">` + renownSkills[i] + `</td>`;
		}
		string += `</tr>`;
		
		string += `</table>
				</div>
			</div>
			<div>
				<table class="stat">
					<tr>
						<th>LDR</th>
						<th>WAR</th>
						<th>INT</th>
						<th>POL</th>
						<th>CHR</th>
						<th class="total">Total</th>
						<th>Skills</th>
					</tr>
					<tr>
						<td class="number">` + officer['ldr'] + `</td>
						<td class="number">` + officer['war'] + `</td>
						<td class="number">` + officer['int'] + `</td>
						<td class="number">` + officer['pol'] + `</td>
						<td class="number">` + officer['chr'] + `</td>
						<td class="number total">` + officer['total'] + `</td>
						<td class="number">` + officer['skills'].length + `</td>
					</tr>
				</table>
			</div>`;
		
		document.getElementById('display').innerHTML = string;
		document.getElementById('displayContainer').style.display = 'block';
	}
}

function hideDisplay () {
	displayOfficerId = -1;
	document.getElementById('display').innerHTML = '';
	document.getElementById('displayContainer').style.display = 'none';
}

function toggleFilterSkills (skill) {
	if (typeof skill !== 'string') return;
	
	if (filterSkills.includes(skill)) {
		filterSkills = filterSkills.filter(x => x !== skill);
	}
	else {
		filterSkills.push(skill);
	}
	updateSkills();
}

function updateSkills () {
	let string = `<tr>`;
	for (let i = 0; i < domesticSkills.length; i++) {
		let style = (filterSkills.includes(domesticSkills[i])) ? ' domesticSkill' : '';
		string += `<td class="displaySkill` + style + `" onclick="toggleFilterSkills('` + domesticSkills[i] + `')">` + domesticSkills[i] + `</td>`;
	}
	string += `</tr>`;
	
	string += `<tr>`;
	for (let i = 0; i < battleSkills.length; i++) {
		let style = (filterSkills.includes(battleSkills[i])) ? ' battleSkill' : '';
		string += `<td class="displaySkill` + style + `" onclick="toggleFilterSkills('` + battleSkills[i] + `')">` + battleSkills[i] + `</td>`;
	}
	string += `</tr>`;
	
	string += `<tr>`;
	for (let i = 0; i < tacticSkills.length; i++) {
		let style = (filterSkills.includes(tacticSkills[i])) ? ' tacticSkill' : '';
		string += `<td class="displaySkill` + style + `" onclick="toggleFilterSkills('` + tacticSkills[i] + `')">` + tacticSkills[i] + `</td>`;
	}
	string += `</tr>`;
	
	string += `<tr>`;
	for (let i = 0; i < duelSkills.length; i++) {
		let style = (filterSkills.includes(duelSkills[i])) ? ' duelSkill' : '';
		string += `<td class="displaySkill` + style + `" onclick="toggleFilterSkills('` + duelSkills[i] + `')">` + duelSkills[i] + `</td>`;
	}
	string += `</tr>`;
	
	string += `<tr>`;
	for (let i = 0; i < debateSkills.length; i++) {
		let style = (filterSkills.includes(debateSkills[i])) ? ' debateSkill' : '';
		string += `<td class="displaySkill` + style + `" onclick="toggleFilterSkills('` + debateSkills[i] + `')">` + debateSkills[i] + `</td>`;
	}
	string += `</tr>`;
	
	string += `<tr>`;
	for (let i = 0; i < renownSkills.length; i++) {
		let style = (filterSkills.includes(renownSkills[i])) ? ' renownSkill' : '';
		string += `<td class="displaySkill` + style + `" onclick="toggleFilterSkills('` + renownSkills[i] + `')">` + renownSkills[i] + `</td>`;
	}
	string += `</tr>`;
	
	document.getElementById('skill').innerHTML = string;
	
	inputChanged();
}