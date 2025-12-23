const agentSkills = {
	Adoring: "Additional 10% HP from equipment",
	Devoted: "Additional 10% HP recovery from Items on Digimon",
	Zealous: "Restore 3% HP when Guarding",
	Brave: "Ignore 3% x Rank of target DEF (not affecting skills)",
	Tolerant: "Additional 10% SP from equipment",
	Overprotective: "Additional 10% HP recovery from Skills used by Digimon",
	Reckless: "Additional 10% ATK from equipment",
	Daring: "-10% x Rank Physical damage when Guarding",
	Enlightened: "Additional 10% item amount from enemies defeated by Digimon",
	Sly: "Additional 20% YEN from enemies defeated by Digimon",
	Opportunistic: "Recover 15% HP and 10% SP every 3 turns while in reserve",
	Friendly: "Additional 10% chance to change Personality Skill during conversation or training",
	Astute: "Ignore 3% x Rank of target SPI (not affecting skills)",
	Strategic: "Reduce magic damage by 1% x Rank",
	Sociable: "Double Buff effect from item used during Digimons turn",
	Compassionate: "30% chance to not consume item during Digimons turn"
};

const categorySkill = {
	Valor: [
		{ name: "Warrior Wisdom", desc: "Reduces SP cost for physical attack skills by 10%" },
		{ name: "Song of Triumph", desc: "Slightly boosts CP gained" }
	],
	Wisdom: [
		{ name: "Secret Sage Art", desc: "Attacking deals magic damage" },
		{ name: "Magical Wisdom", desc: "Reduces SP cost for magic attack skills by 10%" }
	],
	Amicability: [
		{ name: "Cheer", desc: "At start of battle, boosts ATK and INT for all allies based on the total Bond of all battle members (20% buff)" },
		{ name: "Prankster", desc: "Boosts the probability rate of skill debuff effects" }
	],
	Philanthropy: [
		{ name: "Healing Wisdom", desc: "Reduces SP cost for recovery skills by 10%" },
		{ name: "SP Supplement", desc: "Also recovers 10% of target's Max SP when using skills to recover an ally's HP" }
	]
};

const signatureSkill = {
	Adoring: [
		{ name: "Follow-Up", desc: "Always acts last" },
		{ name: "Prayer for Aid", desc: "Slightly recovers all HP of all allies at the start of each round" }
	],
	Devoted: [
		{ name: "First Aid", desc: "Also removes target's injury after using skills to recover an ally's HP" },
		{ name: "Stout Spirit", desc: "Boosts SPI based on user's HP (maximum of 50% at full HP)" }
	],
	Zealous: [
		{ name: "First in Line", desc: "Always acts first" },
		{ name: "Fast Break", desc: "Boosts ATK for the first 3 rounds (maximum of 50% at round 1)" }
	],
	Brave: [
		{ name: "Extra Strikes Tech", desc: "Performs an additional attack when Extra Strikes is activated" },
		{ name: "Vitality Theft", desc: "Recovers HP equal to 10% of physical attack skill damage dealt" }
	],
	Tolerant: [
		{ name: "Steadfast Heart", desc: "Boosts DEF when HP is 90% or lower (the lower the HP, more DEF boost)" },
		{ name: "Rally Blessing", desc: "Revives with 50% HP when KO'd in battle (once per battle)" }
	],
	Overprotective: [
		{ name: "First in Line", desc: "Always acts first" },
		{ name: "Great Embrace", desc: "Overheals to up to 200% of target's Max HP when using recovery skills" }
	],
	Reckless: [
		{ name: "Steadfast Might", desc: "Boosts ATK when HP is 90% or lower (The lower the HP, the greater the boost to ATK)" },
		{ name: "Counter", desc: "Chance of countering with an Attack when being attacked (The lower the HP, the greater the chance to counter)" }
	],
	Daring: [
		{ name: "Stout Defense", desc: "Boosts DEF based on user's HP (maximum of 50% at full HP)" },
		{ name: "Strategic Order", desc: "Boosts CRT Rate by 5%" }
	],
	Enlightened: [
		{ name: "Intense Focus", desc: "Boosts INT for the first 3 rounds (maximum of 50% at round 1)" },
		{ name: "Haymaker", desc: "Boosts CRT damage by 20% (increases CRT multiplier from 1.3x to 1.5x)" }
	],
	Sly: [
		{ name: "Meditation", desc: "Boosts INT from round 4 onward (maximum of 50% at round 6)" },
		{ name: "Combo Magic", desc: "Chance to reuse skill when using a magic attack skill (better chance at lower HP)" }
	],
	Opportunistic: [
		{ name: "Slow Starter", desc: "Boosts ATK from round 4 onward (maximum of 50% at round 6)" },
		{ name: "Planning Ahead", desc: "At start of battle, reduces DEF and SPI for all enemies based on the total Bond of all battle members (20% debuff)" }
	],
	Friendly: [
		{ name: "Strategic Order", desc: "Boosts CRT Rate by 5%" },
		{ name: "Fortifying Charge", desc: "Also boosts all of target's stats when using skills to recover an ally's HP" }
	],
	Astute: [
		{ name: "Steadfast Emotion", desc: "Boosts INT when HP is 90% or lower (The lower the HP, the greater the INT boost)" },
		{ name: "Magic Theft", desc: "Recovers SP equal to 10% of magic attack skill damage dealt" }
	],
	Strategic: [
		{ name: "Follow-Up", desc: "Always acts last" },
		{ name: "Soothing Song", desc: "Slightly recovers SP of all allies at the start of each round" }
	],
	Sociable: [
		{ name: "Booing", desc: "Extends the duration of debuff effects applied by the user's skills by 2 turns" },
		{ name: "Weak Point Blitz", desc: "Boosts damage dealt by the user when hitting an enemy weak point after an ally does" }
	],
	Compassionate: [
		{ name: "Stout Strength", desc: "Boosts ATK based on user's HP (maximum of 50% at full HP)" },
		{ name: "Hustle Cry", desc: "Extends the duration of buff effects applied by the user's skills by 2 turns" }
	]
};

const extraBonus = {
	Valor: [
		{ type: "Vaccine", bonus: "Extra Brave: 1 Enemy, 2x more damage than first strike" },
		{ type: "Data", bonus: "Extra Brave: 1 Enemy, 2x more damage than first strike" },
		{ type: "Virus", bonus: "Extra Brave: 1 Enemy, 2x more damage than first strike" },
		{ type: "Free", bonus: "Extra Brave: 1 Enemy, 2x more damage than first strike" },
		{ type: "Variable", bonus: "Extra Brave: 1 Enemy, 2x more damage than first strike" },
		{ type: "Unknown", bonus: "Extra Brave: 1 Enemy, 2x more damage than first strike" },
		{ type: "No Data", bonus: "Extra Brave: 1 Enemy, 2x more damage than first strike" }
	],
	Wisdom: [
		{ type: "Vaccine", bonus: "Blight Break: All Enemies, Random Status Debuff, 5 Turns" },
		{ type: "Data", bonus: "Blight Break: All Enemies, Random Status Debuff, 5 Turns" },
		{ type: "Virus", bonus: "Blight Break: All Enemies, Random Status Debuff, 5 Turns" },
		{ type: "Free", bonus: "Venom Bind: 1 Enemy, Poison/Deadly Poison (RARE)" },
		{ type: "Variable", bonus: "Panic Bind: 1 Enemy, Confusion/Chaos (RARE), 5 Turns" },
		{ type: "Unknown", bonus: "Paralysis Bind: 1 Enemy, Paralysis/Immobilization (RARE), 5 Turns" },
		{ type: "No Data", bonus: "Sleep Bind: 1 Enemy, Sleep/Deep Sleep (RARE), 5 Turns" }
	],
	Amicability: [
		{ type: "Vaccine", bonus: "Boost Link: All Allies, Random Stat Up 1 Rank (+10%), 2 Turns" },
		{ type: "Data", bonus: "Boost Charge: User, Random Stat Up 2 Ranks (+30%), 2 Turns" },
		{ type: "Virus", bonus: "Reduce Bind: 1 Enemy, Random Stat Down (-30%), 2 Turns" },
		{ type: "Free", bonus: "Boost Cheer: Other Allies, Random Stats Up 2 Ranks (+15%), 2 Turns" },
		{ type: "Variable", bonus: "Reduce Break: All Enemies, Random Stats Down 1 Rank (-15%), 2 Turns" },
		{ type: "Unknown", bonus: "Elemental Ripper: All Enemies, Random Resistance Down 1 Rank, 2 Turns" },
		{ type: "No Data", bonus: "Elemental Curtain: All Allies, Random Resistance Up 1 Rank, 2 Turns" }
	],
	Philanthropy: [
		{ type: "Vaccine", bonus: "Wind of Regeneration: All Allies, Regen HP (20%)" },
		{ type: "Data", bonus: "Energy Charge: User, Regen SP (50%)" },
		{ type: "Virus", bonus: "Regeneration Charge: User, Regen HP (100%)" },
		{ type: "Free", bonus: "Wind of Energy: All Allies, Regen SP (10%)" },
		{ type: "Variable", bonus: "Cheer of Regeneration: Other Allies, Regen HP (40%)" },
		{ type: "Unknown", bonus: "Cheer of Energy: Other Allies, Regen SP (20%)" },
		{ type: "No Data", bonus: "Wind of Healing: All Allies, Regen HP+SP (20% HP + 10% SP)" }
	]
}

const colorMap = {
	'Valor': '#e74c3c',
	'Wisdom': '#9b59b6',
	'Amicability': '#3599e5',
	'Philanthropy': '#2ecc71'
};

window.onload = function () {
	// Set css color variables
	for (const [key, value] of Object.entries(colorMap)) {
		document.documentElement.style.setProperty('--' + key.toLowerCase(), value);
	}
	
	const items = document.querySelectorAll('.personality');
	const contentArea = document.getElementById('content-area');
	const placeholder = document.getElementById('default-msg');
	
	const infoTitle = document.getElementById('info-title');
	const infoCat = document.getElementById('info-cat');
	const infoAgent = document.getElementById('info-agent');
	const infoSignSkill = document.getElementById('info-sign-skill');
	const infoCatSkill = document.getElementById('info-cat-skill');
	const infoExtraBonus = document.getElementById('info-extra-bonus');
	
	items.forEach(item => {
		const title = item.getAttribute('data-title');
		const cat = item.getAttribute('data-cat');
		const focus = item.getAttribute('data-focus');
		const color = colorMap[cat];
		
		if (title.length <= 0) return;
		
		item.innerHTML += ' <span class="grid-focus">' + focus + '</span>';
		
		let signHtml = "";
		if (signatureSkill[title]) {
			signatureSkill[title].forEach(s => {
				signHtml += '<span class="grid-skill">' + s.name + '</span>';
			});
		}
		item.innerHTML += signHtml || "None";
		
		const showDetail = () => {
			placeholder.style.display = 'none';
			contentArea.style.display = 'block';
			
			infoTitle.innerText = title;
			infoCat.innerHTML = '<img src="images/' + cat + '.png">';
			infoAgent.innerText = agentSkills[title] || "No data.";
			
			infoTitle.style.color = color;
			infoCat.style.color = color;
			
			// Populate Signature Skills
			let signHtml = "";
			if (signatureSkill[title]) {
				signatureSkill[title].forEach(s => {
					signHtml += `<div class="skill-box" style="border-left-color: ${color}">
						<strong style="color: ${color}">★ ${s.name}:</strong> 
						<span>${s.desc}</span>
					</div>`;
				});
			}
			infoSignSkill.innerHTML = signHtml || "None";
			
			// Populate Category Skills
			let catHtml = "";
			if (categorySkill[cat]) {
				categorySkill[cat].forEach(s => {
					catHtml += `<div class="skill-box" style="border-left-color: ${color}">
						<strong style="color: ${color}">${s.name}:</strong> 
						<span>${s.desc}</span>
					</div>`;
				});
			}
			infoCatSkill.innerHTML = catHtml || "None";
			
			// Populate Extra Strike Bonuses
			let bonusHtml = '<table class="bonus-list">';
			if (extraBonus[cat]) {
				extraBonus[cat].forEach(b => {
					const bonusText = b.bonus || "No additional bonus";
					bonusHtml += `
						<tr class="bonus-item">
							<td class="bonus-type" style="color: ${color}">${b.type}: </td>
							<td class="bonus-desc">${bonusText}</td>
						</tr>`;
				});
			}
			bonusHtml += '</table>';
			infoExtraBonus.innerHTML = bonusHtml;
		};
		
		item.addEventListener('mouseenter', showDetail);
		item.addEventListener('touchstart', (e) => { e.preventDefault(); showDetail(); });
		/*
		item.addEventListener('mouseleave', () => {
			placeholder.style.display = 'block';
			contentArea.style.display = 'none';
		});
		*/
	});

}
