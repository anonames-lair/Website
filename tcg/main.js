// 0: Text mode
// 1: Image mode
// 2: Crop mode
let viewMode;
let deck;

let pool = [];
let hand = [];
let prize = [];
let active = null;
let bench = [];
let trash = [];

let benchSize = 5;

/////////////////////////////////////////////

function isMobile () {
	const userAgent = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
	const mobileString = ['iphone', 'ipod', 'ipad', 'android', 'blackberry', 'phone', 'mobile', 'webos', 'opera mini'];
	
	for (let i = 0; i < mobileString.length; i++) if (userAgent.includes(mobileString[i])) return true;
	return false;
}

function countDeck () {
	let count = 0;
	for (key in deck) {
		count += deck[key].count;
	}
	console.log(count);
}

function resetGame () {
	pool = [];
	hand = [];
	prize = [];
	active = null;
	bench = [];
	trash = [];
	print();
	console.log("Game has been reset!");
}

function createCard (key) {
	// Create a deep copy of the card object to prevent shared references
	const cardData = deck[key];
	return {
		name: key,
		type: cardData.type,
		stage: cardData.stage,
		evolveFrom: cardData.evolveFrom,
		energy: [],
		tool: null,
		preEvolution: []
		// Add other properties here if needed (hp, ability, move, weakness, resistance, retreat cost)
	};
}

function populate () {
	pool = [];
	document.getElementById('decklist').innerHTML = '';
	for (const key in deck) {
		// Populate pool
		for (let i = 0; i < deck[key].count; i++) {
			pool.push(createCard(key));
		}
		
		// Populate decklist
		document.getElementById('decklist').appendChild(printCardImage(createCard(key), 'Decklist', deck[key].count));
	}
}

function shuffle () {
	let currentIndex = pool.length;
	let randomIndex;
	
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[pool[currentIndex], pool[randomIndex]] = [pool[randomIndex], pool[currentIndex]];
	}
}

function startGame () {
	resetGame();
	populate();
	shuffle();
	for (let i = 0; i < startingHand; i++) draw(null, false);
	for (let i = 0; i < prizeCount; i++) assignPrize();
	
	// Initial print after setup
	print();
}

function assignPrize () {
	if (pool.length > 0) {
		const index = parseInt(Math.random() * pool.length);
		prize.push(pool[index]);
		pool.splice(index, 1);
		// print();
	}
	else {
		console.log("Deck is empty for prize assignment!");
	}
}

function draw (name = null, update = true) {
	if (pool.length > 0) {
		let index = -1;
		if (name) {
			for (let i = 0; i < pool.length; i++) {
				if (pool[i].name.toLowerCase() === name.toLowerCase()) {
					index = i;
					break;
				}
			}

			if (index === -1) {
				alert(`Card "${name}" not found in the deck.`);
				return;
			}
		}
		else {
			index = parseInt(Math.random() * pool.length);
		}
		
		hand.push(pool[index]);
		pool.splice(index, 1);
		if (update) print();
	}
	else {
		alert("Deck is empty! Cannot draw.");
	}
}

function play (name) {
	if (hand.length <= 0) {
		alert("Hand is empty! Cannot play a card.");
		return;
	}
	
	if (!name) {
		alert("Pick a card to play.");
		return;
	}
	
	let index = -1;
	for (let i = 0; i < hand.length; i++) {
		if (hand[i].name.toLowerCase() === name.toLowerCase()) {
			index = i;
			break;
		}
	}
	
	if (index === -1) {
		alert(`Card "${name}" not found in your hand.`);
		return;
	}
	
	const cardToPlay = hand[index];
	
	// Rules for playing cards
	if (cardToPlay.type === 'Pokemon') {
		// Evolution card
		if (cardToPlay.stage > 0 || cardToPlay.evolveFrom !== '-') {
			let evolutionSuccess = false;
			const destination = document.getElementById('destination').value;
			// Try to match based on destination and bench index user interface
			if (destination === 'Active' && active !== null && active.name === cardToPlay.evolveFrom) {
				evolve(active, cardToPlay);
				evolutionSuccess = true;
			}
			else if (destination === 'Bench') {
				const index = document.getElementById('benchIndex').value;
				if (bench[index] && bench[index].name === cardToPlay.evolveFrom) {
					evolve(bench[index], cardToPlay);
					evolutionSuccess = true;
				}
			}
			
			if (!evolutionSuccess) {
				// For fallback, find match from all Pokemon in active and bench, then evolve the first match found
				if (active !== null && active.name === cardToPlay.evolveFrom) {
					evolve(active, cardToPlay);
					evolutionSuccess = true;
				}
				else {
					for (let i = 0; i < bench.length; i++) {
						if (bench[i].name === cardToPlay.evolveFrom) {
							evolve(bench[i], cardToPlay);
							evolutionSuccess = true;
							break;
						}
					}
				}
				
				if (!evolutionSuccess) {
					alert('Failed to perform evolution.');
					return;
				}
			}
		}
		// Basic Pokemon card
		else {
			if (active === null) {
				active = cardToPlay;
			}
			else if (bench.length < benchSize) {
				bench.push(cardToPlay);
			}
			else {
				alert(`No more space on the bench. Max bench size is ${benchSize}.`);
				// Don't remove Pokemon from hand
				return;
			}
		}
	}
	else if (cardToPlay.type === 'Item' || cardToPlay.type === 'Supporter' || cardToPlay.type === 'Stadium') {
		// For now, these go to trash, as the simulator doesn't have specific zones for them
		trash.push(cardToPlay);
		// You would add specific logic here for their effects
		// alert(`Played "${cardToPlay.name}". (Effect not simulated yet).`);
	}
	else if (cardToPlay.type === 'Energy') {
		alert('Energy cards are attached, not "played" to the field. Use "Attach" function.');
		// Don't remove energy from hand
		return;
	}
	else if (cardToPlay.type === 'Tool') {
		alert('Pokemon tools are attached, not "played" to the field. Use "Attach" function.');
		// Don't remove tool from hand
		return;
	}
	else {
		alert(`Cannot play card type: ${cardToPlay.type}.`);
		// Don't remove card from hand
		return;
	}
	
	hand.splice(index, 1);
	print();
}

function evolve (cardToEvolve, evolutionCard) {
	cardToEvolve.preEvolution.push(cardToEvolve.name);
	
	cardToEvolve.name = evolutionCard.name;
	cardToEvolve.stage = evolutionCard.stage;
	cardToEvolve.evolveFrom = evolutionCard.evolveFrom;
}

function switchActive (index) {
	if (index < 0 || index >= bench.length) {
		alert('Invalid bench index.');
		return;
	}
	
	const tempCard = active;
	active = bench[index];
	bench[index] = tempCard;
	print();
}

function claimPrize (index) {
	if (index < 0 || index >= prize.length) {
		alert('Invalid prize index.');
		return;
	}
	
	const prizeToClaim = prize[index];
	hand.push(prizeToClaim);
	prize.splice(index, 1);
	print();
}

function discard (name) {
	if (hand.length <= 0) {
		alert("Hand is empty! Cannot discard.");
		return;
	}
	
	if (!name) {
		alert("Pick a card to discard.");
		return;
	}
	
	let index = -1;
	for (let i = 0; i < hand.length; i++) {
		if (hand[i].name.toLowerCase() === name.toLowerCase()) {
			index = i;
			break;
		}
	}
	
	if (index === -1) {
		alert(`Card "${name}" not found in your hand.`);
		return;
	}
	
	trash.push(hand[index]);
	hand.splice(index, 1);
	print();
}

function attachCard (destination, destinationIndex, source, attachCardName) {
	if (!attachCardName) {
		alert("Pick an card to attach.");
		return;
	}
	
	if (destination.toLowerCase() !== 'active' && destination.toLowerCase() !== 'bench') {
		alert("Invalid destination for attach card.");
		return;
	}
	
	if (source.toLowerCase() !== 'hand' && source.toLowerCase() !== 'trash') {
		alert("Invalid source for attach card.");
		return;
	}
	
	let targetPokemon = null;
	if (destination.toLowerCase() === 'active') {
		if (active === null) {
			alert('There is no Active Pokemon.');
			return;
		}
		targetPokemon = active;
	}
	else if (destination.toLowerCase() === 'bench') {
		if (destinationIndex < 0 || destinationIndex >= bench.length) {
			alert('Invalid bench index.');
			return;
		}
		targetPokemon = bench[destinationIndex];
	}
	
	// Ensure target is a Pokemon
	if (targetPokemon.type !== 'Pokemon') {
		alert('Cannot attach card to a non-Pokemon card.');
		return;
	}
	
	let attachCard = null;
	let sourceArray = null;
	
	if (source.toLowerCase() === 'hand') {
		sourceArray = hand;
	}
	else if (source.toLowerCase() === 'trash') {
		sourceArray = trash;
	}
	
	let attachCardIndex = -1;
	for (let i = 0; i < sourceArray.length; i++) {
		if (sourceArray[i].name.toLowerCase() === attachCardName.toLowerCase()) {
			attachCardIndex = i;
			break;
		}
	}
	
	if (attachCardIndex === -1) {
		alert(`Card "${attachCardName}" not found in your ${source}.`);
		return;
	}
	
	attachCard = sourceArray[attachCardIndex];
	
	if (attachCard.type !== 'Energy' && attachCard.type !== 'Tool') {
		alert(`Card "${attachCardName}" is not an attach card.`);
		return;
	}
	
	if (attachCard.type === 'Tool' && targetPokemon.tool) {
		alert(`"${targetPokemon.name}" already hold a tool.`);
		return;
	}
	
	// Remove from source
	sourceArray.splice(attachCardIndex, 1);
	
	if (attachCard.type === 'Energy') targetPokemon.energy.push(attachCard);
	else targetPokemon.tool = attachCard;
	print();
}

function printPokemonText (pokemon, destination, index) {
	let innerHTML = pokemon.name;
	let string = pokemon.name;
	if (pokemon.tool) {
		innerHTML += ' <span style="color: ' + toolBorderColor + ';">@' + pokemon.tool.name + '</span>';
	}
	if (pokemon.energy.length > 0) {
		innerHTML += ' (';
		for (let i = 0; i < pokemon.energy.length; i++) {
			if (i > 0) innerHTML += ', ';
			innerHTML += '<span style="color: red;">' + pokemon.energy[i].name.split(' ')[0] + '</span>';
		}
		innerHTML += ')';
	}
	
	let fullHTML = `<li class="card-list-item"
		onmouseover="showDisplayCard('${pokemon.name}')"
		onmouseleave="hideDisplayCard()"
		onclick="setDestination('${destination}', ${index})"`;
	if (destination === 'Bench') {
		fullHTML += ` ondblclick="switchActive(${index})"`;
	}
	fullHTML += `>
			${innerHTML}
		</li>`;
	return fullHTML;
}

function printCardImage (card, destination, index) {
	const canvas = document.createElement('canvas');
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	canvas.style.width = styleWidth;
	canvas.style.height = styleHeight;
	canvas.onmouseover = function () { showDisplayCard(card.name) };
	canvas.onmouseleave = function () { hideDisplayCard(); };
	const ctx = canvas.getContext('2d');
	const img = document.createElement('img');
	img.src = 'images/' + card.name + '.png';
	
	img.onload = function() {
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		
		// Draw attached energy
		let energyX = padding;
		let energyY = canvas.height - (energySize + energyX);
		card.energy.forEach(energy => {
			const energyType = energy.name.split(' ')[0].toLowerCase();
			
			if (icons[energyType]) {
				ctx.strokeStyle = energyBorderColor;
				ctx.lineWidth = lineWidth;
				ctx.beginPath();
				ctx.arc(energyX + radius, energyY + radius, radius, 0, 2 * Math.PI);
				ctx.stroke();
				ctx.drawImage(icons[energyType], energyX, energyY, energySize, energySize);
			}
			else {
				let energyColor = '#888'; // Default color
				switch (energyType) {
					case 'fighting': energyColor = '#C28B4D'; break; // Brownish
					case 'fire': energyColor = '#E74C3C'; break; // Red
					case 'water': energyColor = '#3498DB'; break; // Blue
					case 'grass': energyColor = '#2ECC71'; break; // Green
					case 'electric': energyColor = '#F1C40F'; break; // Yellow
					case 'psychic': energyColor = '#9B59B6'; break; // Purple
					case 'dark': energyColor = '#34495E'; break; // Dark grey
					case 'steel': energyColor = '#BDC3C7'; break; // Light grey
					default: energyColor = '#888'; // Default for unknown
				}
				
				ctx.fillStyle = energyColor;
				ctx.fillRect(energyX, energyY, energySize, energySize);
				ctx.strokeStyle = energyBorderColor;
				ctx.lineWidth = lineWidth;
				ctx.beginPath();
				ctx.strokeRect(energyX, energyY, energySize, energySize);
				ctx.stroke();
			}
			
			energyX += energySize + energySpacing;
			// Simple wrap check for multiple energies
			if (energyX + energySize > canvas.width - padding) {
				energyX = padding;
				energyY -= (energySize + energySpacing);
			}
		});
		
		// Draw attached tool
		if (card.tool) {
			const toolName = card.tool.name.split(' ')[0].toLowerCase();
			if (icons[toolName]) {
				ctx.drawImage(icons[toolName], toolX, toolY, toolWidth, toolHeight);
			}
			else {
				ctx.fillStyle = toolBorderColor;
				ctx.fillRect(toolX, toolY, toolWidth, toolHeight);
			}
			
			ctx.strokeStyle = toolBorderColor;
			ctx.lineWidth = lineWidth;
			ctx.beginPath();
			ctx.strokeRect(toolX, toolY, toolWidth, toolHeight);
			ctx.stroke();
		}
		
		switch (destination) {
			case 'Hand':
				canvas.onclick = function () { setInput(card.name, destination); };
				canvas.ondblclick = function () { play(card.name); };
				break;
			case 'Active':
				canvas.onclick = function () { setDestination(destination, 0); };
				break;
			case 'Bench':
				canvas.onclick = function () { setDestination(destination, index); };
				canvas.ondblclick = function () { switchActive(index); };
				break;
			case 'Decklist':
				ctx.textBaseline = "middle";
				ctx.textAlign = "center";
				ctx.font = decklistFont;
				ctx.fillStyle = '#800';
				ctx.lineWidth = lineWidth;
				ctx.beginPath();
				ctx.arc(countX, countY, countSize, 0, 2 * Math.PI);
				ctx.fill();
				ctx.fillStyle = '#FFF';
				ctx.fillText(index.toString(), countX, countY);
				break;
		}
	};
	
	img.onerror = function() {
		console.error(`Failed to load image for ${card.name}`);
		// Draw text placeholder if image fails to load
		ctx.fillStyle = '#F00';
		ctx.font = errorFont;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText('No Image', canvas.width / 2, canvas.height / 2);
		ctx.fillStyle = '#ABB2BF';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';
		ctx.fillText(card.name, canvas.width / 2, 5 * ratio);
	};
	
	return canvas;
}

function printCropImage (card, destination, index) {
	const canvas = document.createElement('canvas');
	canvas.width = cropCanvasWidth;
	canvas.height = cropCanvasHeight;
	canvas.style.width = cropStyleWidth;
	canvas.style.height = cropStyleHeight;
	canvas.onmouseover = function () { showDisplayCard(card.name) };
	canvas.onmouseleave = function () { hideDisplayCard(); };
	const ctx = canvas.getContext('2d');
	const img = document.createElement('img');
	img.src = 'images/' + card.name + '.png';
	
	img.onload = function() {
		let y = cropY;
		if (card.type === 'Item' || card.type === 'Supporter' || card.type === 'Stadium' || card.type === 'Tool') {
			y += trainerCropPad;
		}
		else if (card.type === 'Energy') {
			y += energyCropPad;
		}
		ctx.drawImage(img, cropX, y, cropWidth, cropHeight, 0, 0, canvas.width, canvas.height);
		
		// Draw attached energy
		let energyX = padding;
		let energyY = canvas.height - (energySize + energyX);
		card.energy.forEach(energy => {
			const energyType = energy.name.split(' ')[0].toLowerCase();
			
			if (icons[energyType]) {
				ctx.strokeStyle = energyBorderColor;
				ctx.lineWidth = lineWidth;
				ctx.beginPath();
				ctx.arc(energyX + radius, energyY + radius, radius, 0, 2 * Math.PI);
				ctx.stroke();
				ctx.drawImage(icons[energyType], energyX, energyY, energySize, energySize);
			}
			else {
				let energyColor = '#888'; // Default color
				switch (energyType) {
					case 'fighting': energyColor = '#C28B4D'; break; // Brownish
					case 'fire': energyColor = '#E74C3C'; break; // Red
					case 'water': energyColor = '#3498DB'; break; // Blue
					case 'grass': energyColor = '#2ECC71'; break; // Green
					case 'electric': energyColor = '#F1C40F'; break; // Yellow
					case 'psychic': energyColor = '#9B59B6'; break; // Purple
					case 'dark': energyColor = '#34495E'; break; // Dark grey
					case 'steel': energyColor = '#BDC3C7'; break; // Light grey
					default: energyColor = '#888'; // Default for unknown
				}
				
				ctx.fillStyle = energyColor;
				ctx.fillRect(energyX, energyY, energySize, energySize);
				ctx.strokeStyle = energyBorderColor;
				ctx.lineWidth = lineWidth;
				ctx.beginPath();
				ctx.strokeRect(energyX, energyY, energySize, energySize);
				ctx.stroke();
			}
			
			energyX += energySize + energySpacing;
			// Simple wrap check for multiple energies
			if (energyX + energySize > canvas.width - padding) {
				energyX = padding;
				energyY -= (energySize + energySpacing);
			}
		});
		
		// Draw attached tool
		if (card.tool) {
			const toolName = card.tool.name.split(' ')[0].toLowerCase();
			if (icons[toolName]) {
				ctx.drawImage(icons[toolName], padding, padding, toolWidth, toolHeight);
			}
			else {
				ctx.fillStyle = toolBorderColor;
				ctx.fillRect(padding, padding, toolWidth, toolHeight);
			}
			
			ctx.strokeStyle = toolBorderColor;
			ctx.lineWidth = lineWidth;
			ctx.beginPath();
			ctx.strokeRect(padding, padding, toolWidth, toolHeight);
			ctx.stroke();
		}
		
		switch (destination) {
			case 'Hand':
				canvas.onclick = function () { setInput(card.name, destination); };
				canvas.ondblclick = function () { play(card.name); };
				break;
			case 'Active':
				canvas.onclick = function () { setDestination(destination, 0); };
				break;
			case 'Bench':
				canvas.onclick = function () { setDestination(destination, index); };
				canvas.ondblclick = function () { switchActive(index); };
				break;
		}
	};
	
	img.onerror = function() {
		console.error(`Failed to load image for ${card.name}`);
		// Draw text placeholder if image fails to load
		ctx.fillStyle = '#F00';
		ctx.font = errorFont;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText('No Image', canvas.width / 2, canvas.height / 2);
		ctx.fillStyle = '#ABB2BF';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';
		ctx.fillText(card.name, canvas.width / 2, 5 * ratio);
	};
	
	return canvas;
}

function print () {
	// Text mode
	if (viewMode === 0) {
		// Hand
		const handList = document.getElementById('handList');
		handList.innerHTML = '';
		hand.forEach(card => {
			const li = document.createElement('li');
			li.textContent = card.name;
			li.onmouseover = function () { showDisplayCard(card.name); };
			li.onmouseleave = function () { hideDisplayCard(); };
			li.onclick = function () { setInput(card.name, 'Hand'); };
			li.ondblclick = function () { play(card.name); };
			handList.appendChild(li);
		});
		document.getElementById('handCount').textContent = `Hand cards (${hand.length})`;
		
		// Deck
		document.getElementById('deckCount').textContent = `Remaining cards in deck: ${pool.length}`;
		
		// Active
		const activeList = document.getElementById('activeList');
		activeList.innerHTML = '';
		if (active !== null) {
			activeList.innerHTML = printPokemonText(active, 'Active', 0);
		}
		else {
			activeList.innerHTML = '<li>-</li>';
		}
		
		// Bench
		const benchList = document.getElementById('benchList');
		benchList.innerHTML = '';
		if (bench.length > 0) {
			for (let i = 0; i < bench.length; i++) {
				benchList.innerHTML += printPokemonText(bench[i], 'Bench', i);
			}
		}
		else {
			benchList.innerHTML = '<li>-</li>';
		}
		document.getElementById('benchCount').textContent = `Bench (${bench.length}/${benchSize})`;
	}
	// Image mode
	else if (viewMode === 1) {
		// Hand
		const handList = document.getElementById('handList');
		handList.innerHTML = '';
		hand.forEach(card => { 
			handList.appendChild(printCardImage(card, 'Hand', 0));
		});
		document.getElementById('handCount').textContent = `Hand cards (${hand.length})`;
		
		// Deck
		document.getElementById('deckCount').textContent = `Remaining cards in deck: ${pool.length}`;
		
		// Active
		activeList = document.getElementById('activeList');
		activeList.innerHTML = '';
		if (active !== null) {
			activeList.appendChild(printCardImage(active, 'Active', 0));
		}
		else {
			activeList.innerHTML = '<li>-</li>';
		}
		
		// Bench
		benchList = document.getElementById('benchList');
		benchList.innerHTML = '';
		if (bench.length > 0) {
			for (let i = 0; i < bench.length; i++) {
				benchList.appendChild(printCardImage(bench[i], 'Bench', i));
			}
		}
		else {
			benchList.innerHTML = '<li>-</li>';
		}
		document.getElementById('benchCount').textContent = `Bench (${bench.length}/${benchSize})`;
	}
	// Crop mode
	else if (viewMode === 2) {
		// Hand
		const handList = document.getElementById('handList');
		handList.innerHTML = '';
		hand.forEach(card => { 
			handList.appendChild(printCropImage(card, 'Hand', 0));
		});
		document.getElementById('handCount').textContent = `Hand cards (${hand.length})`;
		
		// Deck
		document.getElementById('deckCount').textContent = `Remaining cards in deck: ${pool.length}`;
		
		// Active
		activeList = document.getElementById('activeList');
		activeList.innerHTML = '';
		if (active !== null) {
			activeList.appendChild(printCropImage(active, 'Active', 0));
		}
		else {
			activeList.innerHTML = '<li>-</li>';
		}
		
		// Bench
		benchList = document.getElementById('benchList');
		benchList.innerHTML = '';
		if (bench.length > 0) {
			for (let i = 0; i < bench.length; i++) {
				benchList.appendChild(printCropImage(bench[i], 'Bench', i));
			}
		}
		else {
			benchList.innerHTML = '<li>-</li>';
		}
		document.getElementById('benchCount').textContent = `Bench (${bench.length}/${benchSize})`;
	}
	
	// Trash
	const trashList = document.getElementById('trashList');
	trashList.innerHTML = '';
	trash.forEach(card => {
		const li = document.createElement('li');
		li.textContent = card.name;
		li.onclick = function () { setInput(card.name, 'Trash'); };
		trashList.appendChild(li);
	});
	
	// Prize
	const prizeList = document.getElementById('prizeList');
	prizeList.innerHTML = '';
	prize.forEach((card, index) => {
		const li = document.createElement('li');
		li.textContent = card.name;
		li.ondblclick = function () { claimPrize(index); };
		prizeList.appendChild(li);
	});
}

function showDisplayCard (name) {
	if (isMobile()) return;
	
	document.getElementById('display').src = 'images/' + name + '.png';
	document.getElementById('display').style.display = 'block';
}

function hideDisplayCard () {
	document.getElementById('display').style.display = 'none';
}

/* --- UI Interaction Functions --- */
function startSimulation () {
	document.getElementById('cover').style.display = 'none';
	document.getElementById('audio').play();
}

function showDeck () {
	document.getElementById('decklist').style.display = 'flex';
}

function hideDeck () {
	document.getElementById('decklist').style.display = 'none';
}

function setInput (name, source) {
	document.getElementById('drawCardName').value = name;
	document.getElementById('playCardName').value = name;
	document.getElementById('discardCardName').value = name;
	document.getElementById('attachCardName').value = name;
	document.getElementById('source').value = source;
}

function setDestination (destination, index) {
	document.getElementById('destination').value = destination;
	document.getElementById('benchIndex').value = index;
}

function updateView () {
	viewMode = parseInt(document.getElementById('currentView').value);
	print();
}

function updateDeck () {
	switch (document.getElementById('currentDeck').value) {
		case 'koraidon1':
			deck = koraidon1;
			startGame();
			break;
		case 'koraidon2':
			deck = koraidon2;
			startGame();
			break;
		case 'psychic':
			deck = psychic;
			startGame();
			break;
	}
}

function drawCard () {
	const cardName = document.getElementById('drawCardName').value.trim();
	draw(cardName === '' ? null : cardName);
	// document.getElementById('drawCardName').value = '';
}

function playCard () {
	const cardName = document.getElementById('playCardName').value.trim();
	play(cardName === '' ? null : cardName);
	// document.getElementById('playCardName').value = '';
}

function discardCard () {
	const cardName = document.getElementById('discardCardName').value.trim();
	discard(cardName === '' ? null : cardName);
	// document.getElementById('discardCardName').value = '';
}

function attachCardToPokemon () {
	const attachCardName = document.getElementById('attachCardName').value.trim();
	const source = document.getElementById('source').value;
	const destination = document.getElementById('destination').value;
	const benchIndex = parseInt(document.getElementById('benchIndex').value);
	
	attachCard(destination, destination === 'Bench' ? benchIndex : null, source, attachCardName);
	// document.getElementById('attachCardName').value = '';
}

// Initial print when page loads
document.addEventListener('DOMContentLoaded', () => {
	// Prepare energy icons
	const energies = ['fighting', 'fire', 'water', 'grass', 'electric', 'psychic', 'dark', 'steel', 'free'];
	energies.forEach(energy => {
		let img = document.createElement('img');
		img.src = 'icons/energy-' + energy + '.png';
		img.onload = function () {
			icons[energy] = img;
			
			if (energy === 'free') {
				icons['therapeutic'] = img;
			}
		};
	});
	
	// Prepare tool icons
	const tools = ['ancient'];
	tools.forEach(tool => {
		const img = document.createElement('img');
		img.src = 'icons/tool-' + tool + '.png';
		img.onload = function () {
			icons[tool] = img;
		};
	});
	
	updateView();
	updateDeck();
});
