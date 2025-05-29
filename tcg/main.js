var icons = {};

var pool = [];
var hand = [];
var prize = [];
var active = null;
var bench = [];
var trash = [];

/////////////////////////////////////////////

function isMobile () {
	var userAgent = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
	var mobileString = ['iphone', 'ipod', 'ipad', 'android', 'blackberry', 'phone', 'mobile', 'webos', 'opera mini'];
	
	for (var i = 0; i < mobileString.length; i++) if (userAgent.includes(mobileString[i])) return true;
	return false;
}

function countDeck () {
	var count = 0;
	for (key in deck) {
		count += deck[key].count;
	}
	console.log(count);
}

function populate () {
	pool = [];
	for (const key in deck) {
		for (var i = 0; i < deck[key].count; i++) {
			// Create a deep copy of the card object to prevent shared references
			const cardData = deck[key];
			pool.push({
				name: key,
				type: cardData.type,
				energy: [],
				tool: null
				// Add other properties here if needed (hp, ability, move, weakness, resistance, retreat cost)
			});
		}
	}
}

function shuffle () {
	var currentIndex = pool.length;
	var randomIndex;
	
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[pool[currentIndex], pool[randomIndex]] = [pool[randomIndex], pool[currentIndex]];
	}
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
		var index = -1;
		if (name) {
			for (var i = 0; i < pool.length; i++) {
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
	
	var targetPokemon = null;
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
	
	var attachCard = null;
	var sourceArray = null;
	
	if (source.toLowerCase() === 'hand') {
		sourceArray = hand;
	}
	else if (source.toLowerCase() === 'trash') {
		sourceArray = trash;
	}
	
	var attachCardIndex = -1;
	for (var i = 0; i < sourceArray.length; i++) {
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

function startGame () {
	resetGame();
	populate();
	shuffle();
	for (var i = 0; i < startingHand; i++) draw(null, false);
	for (var i = 0; i < prizeCount; i++) assignPrize();
	
	// Initial print after setup
	print();
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
	
	var index = -1;
	for (var i = 0; i < hand.length; i++) {
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
	else if (cardToPlay.type === 'Item' || cardToPlay.type === 'Supporter' || cardToPlay.type === 'Stadium') {
		// For now, these go to trash, as the simulator doesn't have specific zones for them
		trash.push(cardToPlay);
		// You would add specific logic here for their effects
		alert(`Played "${cardToPlay.name}". (Effect not simulated yet).`);
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

function discard (name) {
	if (hand.length <= 0) {
		alert("Hand is empty! Cannot discard.");
		return;
	}
	
	if (!name) {
		alert("Pick a card to discard.");
		return;
	}
	
	var index = -1;
	for (var i = 0; i < hand.length; i++) {
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

function printPokemonText (pokemon, destination, index) {
	var innerHTML = pokemon.name;
	var string = pokemon.name;
	if (pokemon.tool) {
		innerHTML += ' <span style="color: purple;">@' + pokemon.tool.name + '</span>';
	}
	if (pokemon.energy.length > 0) {
		innerHTML += ' (';
		for (var i = 0; i < pokemon.energy.length; i++) {
			if (i > 0) innerHTML += ', ';
			innerHTML += '<span style="color: red;">' + pokemon.energy[i].name.split(' ')[0] + '</span>';
		}
		innerHTML += ')';
	}
	return `<li class="card-list-item pokemon-card" onclick="setDestination('${destination}', ${index})">${innerHTML}</li>`
}

function printCardImage (card, destination, index) {
	const canvas = document.createElement('canvas');
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	canvas.style.width = styleWidth;
	canvas.style.height = styleHeight;
	canvas.onmouseover = function () {
		if (isMobile()) return;
		
		document.getElementById('display').src = 'images/' + card.name + '.png';
		document.getElementById('display').style.display = 'block';
	};
	canvas.onmouseleave = function () {
		document.getElementById('display').style.display = 'none';
	}
	const ctx = canvas.getContext('2d');
	const img = document.createElement('img');
	img.src = 'images/' + card.name + '.png';
	
	img.onload = function() {
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		
		// Draw attached energy
		var energyX = padding;
		var energyY = canvas.height - (energySize + energyX);
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
				var energyColor = '#888'; // Default color
				switch (energyType) {
					case 'fighting': energyColor = '#c28b4d'; break; // Brownish
					case 'fire': energyColor = '#e74c3c'; break; // Red
					case 'water': energyColor = '#3498db'; break; // Blue
					case 'grass': energyColor = '#2ecc71'; break; // Green
					case 'electric': energyColor = '#f1c40f'; break; // Yellow
					case 'psychic': energyColor = '#9b59b6'; break; // Purple
					case 'dark': energyColor = '#34495e'; break; // Dark grey
					case 'steel': energyColor = '#bdc3c7'; break; // Light grey
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
				break;
			case 'Active':
				canvas.onclick = function () { setDestination(destination, 0); };
				break;
			case 'Bench':
				canvas.onclick = function () { setDestination(destination, index); };
				break;
		}
	};
	
	img.onerror = function() {
		console.error(`Failed to load image for ${card.name}`);
		// Draw a placeholder or error message on the canvas here
	};
	
	return canvas;
}

function printCropImage (card, destination, index) {
	const canvas = document.createElement('canvas');
	canvas.width = cropCanvasWidth;
	canvas.height = cropCanvasHeight;
	canvas.style.width = cropStyleWidth;
	canvas.style.height = cropStyleHeight;
	canvas.onmouseover = function () {
		if (isMobile()) return;
		
		document.getElementById('display').src = 'images/' + card.name + '.png';
		document.getElementById('display').style.display = 'block';
	};
	canvas.onmouseleave = function () {
		document.getElementById('display').style.display = 'none';
	}
	const ctx = canvas.getContext('2d');
	const img = document.createElement('img');
	img.src = 'images/' + card.name + '.png';
	
	img.onload = function() {
		var y = cropY;
		if (card.type === 'Item' || card.type === 'Supporter' || card.type === 'Stadium' || card.type === 'Tool') {
			y += trainerCropPad;
		}
		else if (card.type === 'Energy') {
			y += energyCropPad;
		}
		ctx.drawImage(img, cropX, y, cropWidth, cropHeight, 0, 0, canvas.width, canvas.height);
		
		// Draw attached energy
		var energyX = padding;
		var energyY = canvas.height - (energySize + energyX);
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
				var energyColor = '#888'; // Default color
				switch (energyType) {
					case 'fighting': energyColor = '#c28b4d'; break; // Brownish
					case 'fire': energyColor = '#e74c3c'; break; // Red
					case 'water': energyColor = '#3498db'; break; // Blue
					case 'grass': energyColor = '#2ecc71'; break; // Green
					case 'electric': energyColor = '#f1c40f'; break; // Yellow
					case 'psychic': energyColor = '#9b59b6'; break; // Purple
					case 'dark': energyColor = '#34495e'; break; // Dark grey
					case 'steel': energyColor = '#bdc3c7'; break; // Light grey
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
				break;
			case 'Active':
				canvas.onclick = function () { setDestination(destination, 0); };
				break;
			case 'Bench':
				canvas.onclick = function () { setDestination(destination, index); };
				break;
		}
	};
	
	img.onerror = function() {
		console.error(`Failed to load image for ${card.name}`);
		// Draw a placeholder or error message on the canvas here
	};
	
	return canvas;
}

// Main print function to update the HTML UI
function print () {
	// Text mode
	if (viewMode === 0) {
		// Hand
		const handList = document.getElementById('handList');
		handList.innerHTML = '';
		hand.forEach(card => {
			const li = document.createElement('li');
			li.textContent = card.name;
			li.onclick = function () { setInput(card.name, 'Hand'); };
			handList.appendChild(li);
		});
		document.getElementById('handCount').textContent = `Hand cards (${hand.length}):`;
		
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
			for (var i = 0; i < bench.length; i++) {
				benchList.innerHTML += printPokemonText(bench[i], 'Bench', i);
			}
		}
		else {
			benchList.innerHTML = '<li>-</li>';
		}
		document.getElementById('benchCount').textContent = `Bench (${bench.length}/${benchSize}):`;
		
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
		prize.forEach(card => {
			const li = document.createElement('li');
			li.textContent = card.name;
			prizeList.appendChild(li);
		});
	}
	// Image mode
	else if (viewMode === 1) {
		// Hand
		const handList = document.getElementById('handList');
		handList.innerHTML = '';
		hand.forEach(card => { 
			handList.appendChild(printCardImage(card, 'Hand', 0));
		});
		document.getElementById('handCount').textContent = `Hand cards (${hand.length}):`;
		
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
			for (var i = 0; i < bench.length; i++) {
				benchList.appendChild(printCardImage(bench[i], 'Bench', i));
			}
		}
		else {
			benchList.innerHTML = '<li>-</li>';
		}
		document.getElementById('benchCount').textContent = `Bench (${bench.length}/${benchSize}):`;
		
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
		prize.forEach(card => {
			const li = document.createElement('li');
			li.textContent = card.name;
			prizeList.appendChild(li);
		});
	}
	// Crop mode
	else if (viewMode === 2) {
		// Hand
		const handList = document.getElementById('handList');
		handList.innerHTML = '';
		hand.forEach(card => { 
			handList.appendChild(printCropImage(card, 'Hand', 0));
		});
		document.getElementById('handCount').textContent = `Hand cards (${hand.length}):`;
		
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
			for (var i = 0; i < bench.length; i++) {
				benchList.appendChild(printCropImage(bench[i], 'Bench', i));
			}
		}
		else {
			benchList.innerHTML = '<li>-</li>';
		}
		document.getElementById('benchCount').textContent = `Bench (${bench.length}/${benchSize}):`;
		
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
		prize.forEach(card => {
			const li = document.createElement('li');
			li.textContent = card.name;
			prizeList.appendChild(li);
		});
	}
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

/* --- UI Interaction Functions --- */
function setInput (name, source) {
	document.getElementById('drawCardName').value = name;
	document.getElementById('playCardName').value = name;
	document.getElementById('discardCardName').value = name;
	document.getElementById('attachCardName').value = name;
	document.getElementById('attachCardSource').value = source;
}

function setDestination (destination, index) {
	document.getElementById('attachCardDestination').value = destination;
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
		case 'psychicMix':
			deck = psychicMix;
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
	const source = document.getElementById('attachCardSource').value;
	const destination = document.getElementById('attachCardDestination').value;
	const benchIndex = parseInt(document.getElementById('benchIndex').value);
	
	attachCard(destination, destination === 'Bench' ? benchIndex : null, source, attachCardName);
	// document.getElementById('attachCardName').value = '';
}

// Initial print when page loads
document.addEventListener('DOMContentLoaded', () => {
	// Prepare energy icons
	const energies = ['fighting', 'fire', 'water', 'grass', 'electric', 'psychic', 'dark', 'steel', 'free'];
	energies.forEach(energy => {
		var img = document.createElement('img');
		img.src = 'icons/energy-' + energy + '.png';
		img.onload = function () {
			icons[energy] = img;
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
