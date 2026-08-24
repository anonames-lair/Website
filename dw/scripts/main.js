let filter;
let game;
let container;
let popup;
let mode;
let upload;
let download;
let isGuideMode = false;

let progressArray;

window.onload = function () {
	filter = document.getElementById('filter');
	game = document.getElementById('game');
	container = document.getElementById('container');
	popup = document.getElementById('popup');
	popup.onclick = () => {
		popup.style.display = 'none';
	};
	mode = document.getElementById('mode');
	upload = document.getElementById('upload');
	download = document.getElementById('download');
	
	if (localStorage.progress) {
		// Load progress from localStorage into temp array, process it, then copy the result to progress array
		let tempArray = JSON.parse(localStorage.progress);
		
		for (let gameName in headers) {
			if (!tempArray[gameName]) tempArray[gameName] = [];
			
			let warriorCount = 0;
			for (let warriorName in warriors) if (getWarriorGameList(warriorName).includes(gameName)) warriorCount++;
			
			while (tempArray[gameName].length < warriorCount) tempArray[gameName].push([]);
			
			let k = 0;
			for (let warriorName in warriors) {
				if (getWarriorGameList(warriorName).includes(gameName)) {
					while (tempArray[gameName][k].length < headers[gameName].length) tempArray[gameName][k].push(false);
					k++;
				}
			}
		}
		
		progressArray = tempArray;
	}
	else {
		progressArray = {};
		for (let gameName in headers) {
			let gameArr = [];
			for (let warriorName in warriors) {
				if (getWarriorGameList(warriorName).includes(gameName)) {
					let warriorArr = [];
					for (let k = 0; k < headers[gameName].length; k++) warriorArr.push(false);
					gameArr.push(warriorArr);
				}
			}
			progressArray[gameName] = gameArr;
		}
		localStorage.progress = JSON.stringify(progressArray);
	}
	
	changeMode();
	upload.innerHTML = uploadSvg;
	download.innerHTML = downloadSvg;
	
	filter.focus();
}

function changeMode () {
	isGuideMode = !isGuideMode;
	
	if (isGuideMode) mode.innerHTML = guideSvg;
	else mode.innerHTML = checkboxSvg;
	
	render();
}

function uploadData () {
	const fileInput = document.createElement('input');
	fileInput.type = 'file';
	fileInput.accept = '.txt';
	
	fileInput.addEventListener('change', (event) => {
		const file = event.target.files[0];
		if (!file) return;
	
		const reader = new FileReader();
		reader.onload = (e) => {
			const data = e.target.result;
			if (data === undefined || data.length === 0) return;
			else {
				localStorage.progress = data;
				progressArray = JSON.parse(localStorage.progress);
				render();
			}
		};
		
		reader.readAsText(file);
	});
	
	// Programmatically open the native OS file picker
	fileInput.click();
}

function downloadData () {
	const link = document.createElement("a");
	const file = new Blob([localStorage.progress], { type: 'text/plain' });
	link.href = URL.createObjectURL(file);
	link.download = "progress.txt";
	link.click();
}

function getWarriorGameList (name) {
	let games = [];
	for (let i = 0; i < warriors[name].length; i++) if (!games.includes(warriors[name][i].Game)) games.push(warriors[name][i].Game);
	return games;
}

function eleColor (color) {
	switch (color) {
		case 'Fire': return '#9F0000';
		case 'Lightning': return '#706D00';
		case 'Ice': return '#2534C0';
		case 'Wind': return '#167928';
		case 'Demon': return '#771C9C';
	}
	return '#000000';
}

function showGuide (warrior, weapon) {
	popup.innerHTML = `<div class="message">
			<div class="name">` + warriors[warrior][weapon].Game + ` - ` + warriors[warrior][weapon].Name + `</div>
			<div class="stage">` + warriors[warrior][weapon].Stage + `</div>
			<div class="requirement">` + warriors[warrior][weapon].Requirement + `</div>
		</div>`;
	popup.style.display = '';
}

function check (e) {
	let id = e.target.id.split(sprt);
	progressArray[id[0]][id[1]][id[2]] = document.getElementById(e.target.id).checked;
	localStorage.progress = JSON.stringify(progressArray);
}

function render () {
	popup.style.display = 'none';
	
	let str = ``;
	if (isGuideMode) {
		for (let warriorName in warriors) {
			if (warriorName.toLowerCase().includes(filter.value.toLowerCase())) {
				// Warrior's name
				str += `<div class="warrior">
					<div>
						<div class="name">` + warriorName + `</div>
					</div>`;
				for (let j = 0; j < warriors[warriorName].length; j++) {
					if (game.value == 'All' || game.value == warriors[warriorName][j].Game) {
						// Weapon's stats
						let statStr = '';
						if (warriors[warriorName][j].Stats.length > 0) {
							statStr += `<div><div class="stats">`;
							for (let k = 0; k < warriors[warriorName][j].Stats.length; k++) statStr += `<div class="stat">` + warriors[warriorName][j].Stats[k] + `</div>`;
							statStr += `</div></div>`;
						}
						
						// Warrior's weapons
						str += `<div class="weapon" onclick="showGuide('` + warriorName + `', ` + j + `)">
								<div>
									<div class="wName">
										<span class="tag">` + warriors[warriorName][j].Game + `</span> ` + warriors[warriorName][j].Name + `</div>
								</div>
								<div class="wDesc">
									<div class="wImage">
										<img src="image/` + warriors[warriorName][j].Game + sprt + warriorName + sprt + warriors[warriorName][j].Rank + `.webp" alt="` + warriors[warriorName][j].Name + `" title="` + warriorName + ` ` + warriors[warriorName][j].Rank + `th Weapon">
									</div>
									<div style="color: ` + eleColor(warriors[warriorName][j].Element) + `;"><b>` + warriors[warriorName][j].Element + `</b></div>
									Base Attack: ` + warriors[warriorName][j].Base + `
								</div>
								` + statStr + `
							</div>`;
					}
				}
				str += `</div>`;
			}
		}
	}
	else {
		for (let gameName in headers) {
			if (game.value == 'All' || game.value == gameName) {
				str += `<table><tr><th>` + gameName + `</th>`;
				for (let j = 0; j < headers[gameName].length; j++) {
					str += `<td>` + headers[gameName][j] + `</td>`;
				}
				str += `</tr>`;
				let index = 0;
				for (let warriorName in warriors) {
					if (getWarriorGameList(warriorName).includes(gameName)) {
						str += `<tr><td>` + warriorName + `</td>`;
						for (let k = 0; k < headers[gameName].length; k++) {
							str += `<td align="center"><input type="checkbox" id="` + gameName + sprt + index + sprt + k + `" onchange="check(event)"` + (progressArray[gameName][index][k] ? ` checked` : ``) + `></td>`;
						}
						str += `</tr>`;
						index++;
					}
				}
				str += `</table>`;
			}
		}
	}
	
	container.innerHTML = str;
}