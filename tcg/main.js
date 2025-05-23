/*
var deck = {
	'Koraidon EX': {
		type: 'Pokemon',
		count: 4
	},
	'Koraidon A': {
		type: 'Pokemon',
		count: 2
	},
	'Koraidon S': {
		type: 'Pokemon',
		count: 2
	},
	'Sandy Shocks': {
		type: 'Pokemon',
		count: 2
	},
	'Flutter Mane': {
		type: 'Pokemon',
		count: 1
	},
	'Latias EX': {
		type: 'Pokemon',
		count: 1
	},
	'Radiant Greninja': {
		type: 'Pokemon',
		count: 1
	},
	'Fezandipiti EX': {
		type: 'Pokemon',
		count: 1
	},
	'Lumineon V': {
		type: 'Pokemon',
		count: 1
	},
	'Nest Ball': {
		type: 'Item',
		count: 4
	},
	'Ultra Ball': {
		type: 'Item',
		count: 4
	},
	'Quick Ball': {
		type: 'Item',
		count: 1
	},
	'Master Ball': {
		type: 'Item',
		count: 1
	},
	'Earthen Vessel': {
		type: 'Item',
		count: 4
	},
	'Trekking Shoes': {
		type: 'Item',
		count: 3
	},
	'Gutsy Pickaxe': {
		type: 'Item',
		count: 1
	},
	'Ancient Booster Energy': {
		type: 'Tool',
		count: 1
	},
	'Explorer Guidance': {
		type: 'Supporter',
		count: 4
	},
	'Professor Sada Vitality': {
		type: 'Supporter',
		count: 4
	},
	'Boss Orders': {
		type: 'Supporter',
		count: 2
	},
	'Cycling Road': {
		type: 'Stadium',
		count: 1
	},
	'Fighting Energy': {
		type: 'Energy',
		count: 11
	},
	'Fire Energy': {
		type: 'Energy',
		count: 4
	}
};
*/
var deck = {
	'Koraidon EX': {
		type: 'Pokemon',
		count: 2
	},
	'Sandy Shocks': {
		type: 'Pokemon',
		count: 2
	},
	'Great Tusk': {
		type: 'Pokemon',
		count: 1
	},
	'Scream Tail': {
		type: 'Pokemon',
		count: 1
	},
	'Lumineon V': {
		type: 'Pokemon',
		count: 1
	},
	'Turtonator': {
		type: 'Pokemon',
		count: 1
	},
	'Rockruff': {
		type: 'Pokemon',
		count: 3
	},
	'Lycanrock': {
		type: 'Pokemon',
		count: 2
	},
	'Ponyta': {
		type: 'Pokemon',
		count: 3
	},
	'Rapidash': {
		type: 'Pokemon',
		count: 2
	},
	'Nest Ball': {
		type: 'Item',
		count: 2
	},
	'Ultra Ball': {
		type: 'Item',
		count: 4
	},
	'Master Ball': {
		type: 'Item',
		count: 1
	},
	'Earthen Vessel': {
		type: 'Item',
		count: 1
	},
	'Switch': {
		type: 'Item',
		count: 2
	},
	'Ancient Booster Energy': {
		type: 'Tool',
		count: 2
	},
	'Cynthia Aspiration': {
		type: 'Supporter',
		count: 2
	},
	'Professor Sada Vitality': {
		type: 'Supporter',
		count: 2
	},
	'Professor Research': {
		type: 'Supporter',
		count: 4
	},
	'Nemona': {
		type: 'Supporter',
		count: 3
	},
	'Iono': {
		type: 'Supporter',
		count: 2
	},
	'Boss Orders': {
		type: 'Supporter',
		count: 2
	},
	'Fighting Energy': {
		type: 'Energy',
		count: 8
	},
	'Fire Energy': {
		type: 'Energy',
		count: 7
	}
};
const startingHand = 7;
const prizeCount = 6;
var benchSize = 5;

var pool = [];
var hand = [];
var prize = [];
var active = null;
var bench = [];
var trash = [];

/////////////////////////////////////////////

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
				// Add other properties here if needed (e.g., hp, abilities)
			});
		}
	}
}

function shuffle () {
	var currentIndex = pool.length;
	var randomIndex;
	
	while (currentIndex != 0) {
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

function draw (name = null) {
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
		print();
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
	for (var i = 0; i < startingHand; i++) draw();
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

// Helper function to render a Pokemon with its attached tool and energy
function printPokemonToHtml (pokemon, destination, index) {
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

// Main print function to update the HTML UI
function print () {
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
		activeList.innerHTML = printPokemonToHtml(active, 'Active', 0);
	}
	else {
		activeList.innerHTML = '<li>-</li>';
	}
	
	// Bench
	const benchList = document.getElementById('benchList');
	benchList.innerHTML = '';
	if (bench.length > 0) {
		for (var i = 0; i < bench.length; i++) {
			benchList.innerHTML += printPokemonToHtml(bench[i], 'Bench', i);
		}
	}
	else {
		benchList.innerHTML = '<li>-</li>';
	}
	document.getElementById('benchCount').textContent = `Bench (${bench.length}/${benchSize}):`; // Show current/max bench size
	
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

// --- UI Interaction Functions ---
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
	resetGame();
});