const sprt = '-';

const headers = {
	'DW3': ['Level', 'Stats', '4th', '5th'],
	'DW4': ['Level', 'Stats', '4th', '5th'],
	'DW5': ['Level', 'Stats', '4th']
};

const guideSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/></svg>';
const checkboxSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>';

const warriors = {
	'Zhao Yun': [
		{
			'Game': "DW3",
			'Name': "Fierce Dragon",
			'Rank': 4,
			'Base': 43,
			'Element': "Fire",
			'Stats': [
				"HP Max: 74",
				"Attack: 25",
				"Defense: 52",
				"Musou Max: 80"
			],
			'Stage': "Battle of Chang Ban (Liu Bei's Forces)",
			'Requirement': "Defeat Xiahou Dun, Zhang Liao, and Zhang He. In addition to this you must also wait for Cao Cao's reinforcements to arrive (Cao Cao arrives at the 80 minute mark) and for Liu Bei to say, 'Cao Cao, so you want to end it here at Chang Ban?' (occurs at the 78 minute mark); after this happens fight anyone around Liu Bei with Zhao Yun, causing a cut scene in which Yun tells the enemy soldiers not to harm his lord. (This event can not be triggered by all characters, only Zhao Yun and some other Shu officers and cannot be triggered if Liu Bei has already reached his destination by Liu Qi's ships). You must finish everything before Liu Qi arrives with reinforcements and the requirements may be fulfilled in any order (the supply team arrives after completion). It is suggested that you defeat Zhang He last (so you are close to the supply team)."
		}, {
			'Game': "DW3",
			'Name': "War Dragon",
			'Rank': 5,
			'Base': 43,
			'Element': "Lightning",
			'Stats': [
				"Musou Max: 78",
				"HP Max: 75",
				"Reach: 25",
				"Musou Charge: 20"
			],
			'Stage': "Nanman Campaign (Shu Forces)",
			'Requirement': "Defeat all enemy generals (sub generals are not required, Meng Huo only needs to be defeated at the end of the stage)."
		}, {
			'Game': "DW4",
			'Name': "Fierce Dragon",
			'Rank': 4,
			'Base': 55,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Bo Wan Po",
			'Requirement': "First lead Xiahou Dun into the fire attack spot, then defeat Xiahou Dun. Next lead Han Hao into the ambush location, so when Guan Ping comes defeat Han Hao. Then lead Yu Jin into the next ambush spot, when Guan Yu's ambush arrives defeat Yu Jin. After Zhang Fei appears in the castle and burns the supply depot, lead Zhuge Liang into the castle to meet Cao Cao."
		}, {
			'Game': "DW4",
			'Name': "Raging Dragon",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Dragon Amulet: 18",
				"Cavalry Armor: 14",
				"Elixir: 20",
				"Herbal Remedy: 13"
			],
			'Stage': "The Chang Ban Run",
			'Requirement': "The entire stage must be completely within 13 minutes with these conditions fulfilled: First find Liu Chan within 2 minutes. Defeat Xu Huang and Cao Ren to open the castle door. Afterwards, protect Liu Bei for the rest of the game by targeting Yue Jin, Yu Jin, Xu Zhu, Xiahou Dun, Xiahou Yuan, Cheng Yu and Xun Yu as they will charge after Liu Bei. Defeat 300 enemies."
		}, {
			'Game': "DW5",
			'Name': "Fierce Dragon",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 16",
				"Life: 17",
				"Musou: 17",
				"Attack: 17",
				"Defense: 17"
			],
			'Stage': "Battle of Cheng Du",
			'Requirement': "Defeat Liu Xun's three sub-generals then defeat Liu Xun himself, and capture Luo Castle."
		}
	],
	'Guan Yu': [
		{
			'Game': "DW3",
			'Name': "Blue Moon Dragon",
			'Rank': 4,
			'Base': 49,
			'Element': "Lightning",
			'Stats': [
				"HP Max: 87",
				"Attack: 28",
				"Defense: 59",
				"Musou Max: 25"
			],
			'Stage': "Guan Yu's Escape (Guan Yu's Forces)",
			'Requirement': "Clear the 4th gate."
		}, {
			'Game': "DW3",
			'Name': "Divine Dragon",
			'Rank': 5,
			'Base': 49,
			'Element': "-",
			'Stats': [
				"Red Hare Saddle",
				"Speed: 21",
				"Musou Max: 82",
				"Defense: 60",
				"Musou Charge: 25"
			],
			'Stage': "Battle of Fan Castle (Guan Yu's Forces)",
			'Requirement': "Defeat the generals in this order:  Pang De, Lu Xun, Gan Ning, Lu Meng."
		}, {
			'Game': "DW4",
			'Name': "Blue Moon Dragon",
			'Rank': 4,
			'Base': 57,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Fan Castle",
			'Requirement': "After every general besides Guan ping and Zhou Cang defect, defeat all the Wu reinforcement troops."
		}, {
			'Game': "DW4",
			'Name': "Divine Dragon",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Peacock Urn: 17",
				"Speed Scroll: 17",
				"Huang's Bow: 13",
				"Horned Helm: 20"
			],
			'Stage': "Defense of Xu",
			'Requirement': "Defeat 200 or 300 enemies, and defeat Yue Jin, Yu Jin and Li Dian. The carriage must also not be in danger for more than 3 times."
		}, {
			'Game': "DW5",
			'Name': "Blue Moon Dragon",
			'Rank': 4,
			'Base': 38,
			'Element': "Light",
			'Stats': [
				"Life: 18",
				"Attack: 18",
				"Defense: 17",
				"Horse: 16",
				"Charge: 16"
			],
			'Stage': "Battle of Fan Castle",
			'Requirement': "Defeat Niu Jin and Yue Jin before the water attack is triggered."
		}
	],
	'Zhang Fei': [
		{
			'Game': "DW3",
			'Name': "Viper Blade",
			'Rank': 4,
			'Base': 43,
			'Element': "-",
			'Stats': [
				"Attack: 29",
				"Defense: 58",
				"Mounted Attack: 56",
				"Mounted Defense: 57",
				"Musou Max: 24"
			],
			'Stage': "Battle of Chang Ban (Liu Bei's Forces)",
			'Requirement': "Go to Chang Ban bridge (the detailed bridge North of Xu Zhu) and wait until an officer attacks you there. When you meet the officer on the bridge you will see the Zhang Fei shout event. It does not matter what officer you meet on the bridge, they can come from the North or the South. You can also initiate the event by getting an officer to chase you to the bridge. When you have done this defeat Xiahou Dun and Xiahou Yuan."
		}, {
			'Game': "DW3",
			'Name': "Serpent Blade",
			'Rank': 5,
			'Base': 43,
			'Element': "Fire",
			'Stats': [
				"Musou Max: 83",
				"HP Max: 81",
				"Bow Defense: 58",
				"Musou Charge: 24"
			],
			'Stage': "Battle of Mt. Ding Jun (Shu Forces)",
			'Requirement': "Mount a horse, and from Huang Zhong's starting position (the eastern trail) ride down the hill (north) and take the eastern turn when the trail forks. It is okay if you fall off the horse while moving down the hill. When you approach the bridge to the north a message will confirm your charge down the mountain. Defeat Cao Hong to prompt the item report."
		}, {
			'Game': "DW4",
			'Name': "Viper Blade",
			'Rank': 4,
			'Base': 58,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Chang Ban",
			'Requirement': "Defeat Xiahou Dun, Xiahou Yuan, Xiahou En, and Xiahou De. Then head for Zhang He and defeat him to get the bridge defense event. However, it may occur with Zhang He alive so keep trying to get it right. After the bridge event, head inside the fortress to find Liu Shan and rescue him while on a horse to trigger the cutscene."
		}, {
			'Game': "DW4",
			'Name': "Venom",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tiger Amulet: 20",
				"Horned Helm: 13",
				"Elixir: 18",
				"Herbal Remedy: 17"
			],
			'Stage': "Defense of Chang Ban",
			'Requirement': "Defeat all officers and Cao Cao before the stage ends on time out."
		}, {
			'Game': "DW5",
			'Name': "Viper Blade",
			'Rank': 4,
			'Base': 39,
			'Element': "Light",
			'Stats': [
				"Fill: 16",
				"Attack: 19",
				"Defense: 15",
				"Horse: 16",
				"Musou: 17"	
			],
			'Stage': "Battle of Chang Ban (Shu)",
			'Requirement': "As soon as the stage starts, defeat Wen Pin, Xiahou Dun and Xiahou En."
		}
	],
	'Zhuge Liang': [
		{
			'Game': "DW3",
			'Name': "Peacock Feather",
			'Rank': 4,
			'Base': 40,
			'Element': "Fire",
			'Stats': [
				"Speed: 22",
				"Jump: 22",
				"Defense: 55",
				"Bow Defense: 55",
				"Mounted Defense: 55"
			],
			'Stage': "Battle at Wu Zhang Plains (Zhuge Liang's Forces)",
			'Requirement': "Defeat Cao Xiu after he arrives with his reinforcement troops."
		}, {
			'Game': "DW3",
			'Name': "Griffin Feather",
			'Rank': 5,
			'Base': 40,
			'Element': "Wind",
			'Stats': [
				"Speed: 22",
				"HP Max: 80",
				"Attack: 30",
				"Luck: 22",
				"Reach: 25"
			],
			'Stage': "Battle at Chi Bi (Shu Forces)",
			'Requirement': "Using first or second player, defeat 1000 enemies."
		}, {
			'Game': "DW4",
			'Name': "Peacock Feather",
			'Rank': 4,
			'Base': 50,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Wu Zhang Plains",
			'Requirement': "Must be done in Musou Mode; Battle of Jie Ting must be completed first so that the supply unit appears. Head for Zhang He's position and defeat him. Approach the castle to witness the cut scene. When the supply unit arrives in the west fortress, head there and defeat Xiahou Dun. After he is defeated, the supply team should reach the camp without any distraction."
		}, {
			'Game': "DW4",
			'Name': "Divine Feather",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tiger Amulet: 11",
				"Nanman Armor: 20",
				"Cavalry Armor: 20",
				"Seven Star Sash: 9"
			],
			'Stage': "Yue Ying, Woman Warrior",
			'Requirement': "Defeat Yue Ying six times, all 'by a wide margin', and also defeat two of the three other officers."
		}, {
			'Game': "DW5",
			'Name': "Peacock Feather",
			'Rank': 4,
			'Base': 32,
			'Element': "Medium",
			'Stats': [
				"Charge: 18",
				"Bow: 15",
				"Musou: 20",
				"Fill: 15",
				"Defense: 18"
			],
			'Stage': "Battle of Tian Shui (Shu)",
			'Requirement': "Defeat Xiahou Mao and capture Nan An Castle; also defeat Cui Liang and capture An Ding Castle. Then wait for Jiang Wei to return to Tian Shui Castle, and defeat him before he enters Tian Shui Castle."
		}
	],
	'Liu Bei': [
		{
			'Game': "DW3",
			'Name': "Gold Moon Dragon",
			'Rank': 4,
			'Base': 40,
			'Element': "-",
			'Stats': [
				"Speed: 20",
				"Musou Max: 70",
				"Mounted Attack: 44",
				"Mounted Defense: 52",
				"Luck: 22"
			],
			'Stage': "Battle at Yi Ling (Liu Bei's Forces)",
			'Requirement': "Defeat Sun Shang Xiang."
		}, {
			'Game': "DW3",
			'Name': "Dragon Star",
			'Rank': 5,
			'Base': 40,
			'Element': "Lightning",
			'Stats': [
				"Speed: 24",
				"Musou Max: 65",
				"Defense: 40",
				"Mounted Attack: 44",
				"Arrows: 27"
			],
			'Stage': "Battle of Jie Ting (Shu Forces)",
			'Requirement': "When Ma Su is surrounded, defeat Du Xi to save him (south of the large open area on the western side of the map, below Zhang He's initial position)."
		}, {
			'Game': "DW4",
			'Name': "Gold Moon Dragon",
			'Rank': 4,
			'Base': 52,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Ru Nan",
			'Requirement': "At the start of the battle, defeat Li Dian before you (Liu Bei) meet with Zhao Yun. Then meet with Zhang Fei and wait until Xiahou Yuan appears, then defeat him before Guan Yu arrives. Afterwards, defeat all of Cao Cao's generals in any order before Liu Pi arrives which is exactly in 10 minutes."
		}, {
			'Game': "DW4",
			'Name': "King of Shu",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tortoise Amulet: 19",
				"Speed Scroll: 14",
				"Horned Helm: 9",
				"Seven Star Sash: 20"
			],
			'Stage': "Skirmish at Cheng Du",
			'Requirement': "Defeat all generals before they flee (missing one seems to be okay if one manages to flee), and kill fewer than 8 peasants (your bodyguards killing peasants doesn't count against the conditions)."
		}, {
			'Game': "DW5",
			'Name': "Gold Moon Dragon",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Luck: 20",
				"Horse: 15",
				"Speed: 18",
				"Defense: 18",
				"Musou: 15"
			],
			'Stage': "Battle of Yi Ling",
			'Requirement': "Defeat Ling Tong, Gan Ning, Lu Xun, and Sun Shang Xiang."
		}
	],
	'Ma Chao': [
		{
			'Game': "DW3",
			'Name': "Steel Dragon",
			'Rank': 4,
			'Base': 42,
			'Element': "Fire",
			'Stats': [
				"Jump: 21",
				"Mounted Attack: 60",
				"Mounted Defense: 60",
				"Reach: 21"
			],
			'Stage': "Battle of Tong Gate (Allied Forces)",
			'Requirement': "Playing as Ma Chao charge Cao Cao as soon as you get the chance. When you get near Cao Cao there will be a cut scene after which he travels West across the top of the map (to the bridge above Ma Chao's camp). Ma Chao will tell Han Sui and some other officers to help against Cao Cao so they will travel North from the camp across the bridge to face him. Fight by Han Sui (keep him safe) and defeat as many officers and soldiers as possible until Cao Cao himself arrives. Cao Cao will meet with Han Sui causing his moral to drop (this happens when Cao Cao gets close to Han Sui). Continue fighting until you see the 'the allied forces are reeling from reports of Han Sui's betrayal' message. Shortly after this message appears Han Sui will betray to Cao Cao's side."
		}, {
			'Game': "DW3",
			'Name': "Lightning Spear",
			'Rank': 5,
			'Base': 42,
			'Element': "Lightning",
			'Stats': [
				"Jump: 21",
				"Musou Max: 87",
				"Luck: 15",
				"Reach: 21",
				"Charge: 8"
			],
			'Stage': "Assault on Cheng Du (Shu Forces)",
			'Requirement': "Defeat Liu Xun or Liu Han before Pang Tong dies."
		}, {
			'Game': "DW4",
			'Name': "Stallion Fury",
			'Rank': 4,
			'Base': 57,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle for Cheng Du",
			'Requirement': "Defeat Pang De and Ma Dai when they arrive as reinforcements; however, only defeat Ma Dai when he attacks the main camp."
		}, {
			'Game': "DW4",
			'Name': "Last Stallion",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tiger Amulet: 12",
				"Horned Helm: 20",
				"Cavalry Armor: 20",
				"Elixir: 15"
			],
			'Stage': "Battle of Jia Meng Gate",
			'Requirement': "Defeat 500 enemies and be constantly ahead of the competition."
		}, {
			'Game': "DW5",
			'Name': "Stallion Fury",
			'Rank': 4,
			'Base': 38,
			'Element': "Medium",
			'Stats': [
				"Horse: 20",
				"Defense: 16",
				"Life: 15",
				"Speed: 15",
				"Attack: 17"
			],
			'Stage': "Battle of Tong Gate (Ma Chao's Forces)",
			'Requirement': "Knock Cao Cao off his horse before he crosses the Yellow River."
		}
	],
	'Huang Zhong': [
		{
			'Game': "DW3",
			'Name': "Oracle Sword",
			'Rank': 4,
			'Base': 44,
			'Element': "-",
			'Stats': [
				"Attack: 23",
				"Defense: 45",
				"Bow Attack: 60",
				"Bow Defense: 58",
				"Reach: 26"
			],
			'Stage': "Battle of Mt. Ding Jun (Shu Forces)",
			'Requirement': "Travel down the central patch and defeat Xiahou Shang."
		}, {
			'Game': "DW3",
			'Name': "Mystic Blade",
			'Rank': 5,
			'Base': 44,
			'Element': "Wind",
			'Stats': [
				"Defense: 52",
				"Bow Attack: 60",
				"Reach: 28",
				"Arrows: 47"
			],
			'Stage': "Battle at Yi Ling (Shu Forces)",
			'Requirement': "Prevent fire attack by defeating Zhu Ran, and then defeat Lu Xun."
		}, {
			'Game': "DW4",
			'Name': "Oracle Sword",
			'Rank': 4,
			'Base': 54,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Jian Ye",
			'Requirement': "Defeat Sun Ce, Sun Quan, and Sun Shang Xiang before they become commanders of the Wu Forces."
		}, {
			'Game': "DW4",
			'Name': "Venerable Master",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Peacock Urn: 8",
				"Huang's Bow: 20",
				"Nanman Armor: 20",
				"Herbal Remedy: 17"
			],
			'Stage': "Battle of Chang Sha",
			'Requirement': "Shoot Guan Yu off his horse before he begins taunting you in order to lower your morale. When Wei Yan kills Han Xuan, ignore Zhou Cang and run straight to Guan Yu. They will talk. Decrease his HP until Zhao Yun and Zhang Fei appear. Defeat Zhou Cang and Guan Ping. Zhang Fei will appear after you defeat one of them, and Zhao Yun will appear after you defeat the other one. Defeat Zhao Yun and Zhang Fei. Defeat 100 enemies. Defeat Guan Yu."
		}, {
			'Game': "DW5",
			'Name': "Oracle Sword",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Fill: 18",
				"Horse: 15",
				"Bow: 20",
				"Def: 15",
				"Musou: 15"
			],
			'Stage': "Battle of Mt. Ding Jun (Shu)",
			'Requirement': "Defeat Xiahou Yuan and Zhang He within 5 minutes before Cao Cao appears."
		}
	],
	'Jiang Wei': [
		{
			'Game': "DW3",
			'Name': "Blink",
			'Rank': 4,
			'Base': 41,
			'Element': "Lightning",
			'Stats': [
				"Musou Max: 74",
				"Attack: 23",
				"Luck: 25"
			],
			'Stage': "Battle of Jie Ting (Zhuge Liang's Forces)",
			'Requirement': "Defeat Cao Zhen and Zhen Ji. Because there seems to be a time limit or some other requirement for this weapon it is suggested that you move North and defeat Zhen Ji as soon as the battle begins and then immediately continue North to defeat Cao Zhen. If you defeat them both at the beginning (you can beat other officers on the way) the weapon report will show immediately. Also note that you do not have to approach Sima Yi's encampment at all."
		}, {
			'Game': "DW3",
			'Name': "Starlight Pike",
			'Rank': 5,
			'Base': 41,
			'Element': "-",
			'Stats': [
				"Defender",
				"Musou Max: 79",
				"Attack: 21",
				"Defense: 58",
				"Musou Charge: 20"
			],
			'Stage': "Battle at Yi Ling (Shu Forces)",
			'Requirement': "After the fire attack wait for the enemy to trigger the Stone Warrior Formation ambush, and then defeat Zhu Huan."
		}, {
			'Game': "DW4",
			'Name': "Blink",
			'Rank': 4,
			'Base': 55,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Tian Shui",
			'Requirement': "Ignore Zhuge Liang's strategy, and open both the gates of Ji Castle and Tian Shui Castle to trigger the ambush parties (either from the outside or inside), then defeat both Yin Shang and Liang Xu."
		}, {
			'Game': "DW4",
			'Name': "Prodigal",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Wing Boots: 20",
				"Peacock Urn: 14",
				"Horned Helm: 14",
				"Herbal Remedy: 17"
			],
			'Stage': "Defense of Jian Ge",
			'Requirement': "Defeat all enemy generals, all while making sure Liu Shan does not have his HP below half for around 8-to-9 minutes total within the stage."
		}, {
			'Game': "DW5",
			'Name': "Blink",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Luck: 15",
				"Speed: 15",
				"Attack: 16",
				"Musou: 18",
				"Life: 17",
			],
			'Stage': "Battle of Tian Shui (Wei)",
			'Requirement': "Defeat the reinforcement general, Gao Xiong."
		}
	],
	'Wei Yan': [
		{
			'Game': "DW3",
			'Name': "Double Comet",
			'Rank': 4,
			'Base': 46,
			'Element': "Demon",
			'Stats': [
				"Jump: 23",
				"Attack: 24",
				"Defense: 56",
				"Reach: 22"
			],
			'Stage': "Battle of Jie Ting (Zhuge Liang's Forces)",
			'Requirement': "After a little while, Ma Su will charge the enemy but will instead be ambushed. When this happens find the enemy general attacking him (under Zhang He's command) and defeat him to save Ma Su. Keep Ma Su safe. Defeat all enemy officers by Sima Yi and then enter his camp (the item report will occur)."
		}, {
			'Game': "DW3",
			'Name': "Twin Stars",
			'Rank': 5,
			'Base': 46,
			'Element': "-",
			'Stats': [
				"Way of the Musou",
				"Musou Max: 82",
				"HP Max: 82",
				"Reach: 22",
				"Musou Charge: 20"
			],
			'Stage': "Battle at Yi Ling (Shu Forces)",
			'Requirement': "Defeat all enemy generals and gate captains (sub-generals not required)."
		}, {
			'Game': "DW4",
			'Name': "Comet Strike",
			'Rank': 4,
			'Base': 57,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Jing Province",
			'Requirement': "Defeat the ambush general Xing Dao Rong, next defeat Liu Du and Liu Xian, make sure you do not defeat Jin Xuan, defeat Yang Ling, a sub-general of Han Xuan, now Huang Zhong should exit the castle, defeat him and wait for Wei Yan and Huang Zhong to defect."
		}, {
			'Game': "DW4",
			'Name': "Meteor Strike",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Peacock Urn: 18",
				"Nanman Armor: 14",
				"Cavalry Armor: 16",
				"Herbal Remedy: 19"
			],
			'Stage': "Encounter at Wu Zhang Plains",
			'Requirement': "Before Zhuge Liang launches an attack on Wei Yan, defeat Xiahou He, Xiahou Wei and Xiahou Hui in any order. After Zhuge Liang launches an attack on Wei Yan, defeat all Shu officers and 200 enemies."
		}, {
			'Game': "DW5",
			'Name': "Comet Strike",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Attack: 18",
				"Defense: 16",
				"Musou: 15",
				"Charge: 16",
				"Luck: 15"
			],
			'Stage': "Battle of Chen Cang (Shu)",
			'Requirement': "Defeat the four Defense Captains guarding Chen Cang."
		}
	],
	'Pang Tong': [
		{
			'Game': "DW3",
			'Name': "Tornado Staff",
			'Rank': 4,
			'Base': 38,
			'Element': "-",
			'Stats': [
				"HP Max: 66",
				"Attack: 22",
				"Bow Attack: 46",
				"Reach: 28",
				"Musou Max: 29"
			],
			'Stage': "Battle of Cheng Du (Liu Bei's Forces)",
			'Requirement': "Trigger Zhang Ren's ambush, and defeat Zhang Ren."
		}, {
			'Game': "DW3",
			'Name': "Lightning Staff",
			'Rank': 5,
			'Base': 38,
			'Element': "Lightning",
			'Stats': [
				"Musou Max: 80",
				"Defense: 56",
				"Bow Defense: 50",
				"Musou Charge: 30",
				"Charge: 5"
			],
			'Stage': "Battle at Chi Bi (Shu Forces)",
			'Requirement': "Make sure fire attack succeeds, and then defeat Xiahou Dun when he arrives."
		}, {
			'Game': "DW4",
			'Name': "Tornado Staff",
			'Rank': 4,
			'Base': 51,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Luo Castle",
			'Requirement': "Head for the valley where Pang Tong supposed to die. After that, defeat all the generals on the east area of the land. After you arrive at the castle, make sure you come face to face with Zhang Ren. Refuse his challenge for a duel and head for the bridge in the south. After you and he crosses over, destroy the bridge and defeat him."
		}, {
			'Game': "DW4",
			'Name': "Great Phoenix",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Dragon Amulet: 14",
				"Nanman Armor: 20",
				"Cavalry Armor: 20",
				"Seven Star Sash: 7"
			],
			'Stage': "Illusions of Pang Tong",
			'Requirement': "Make sure all of Pang Tong's battle strategies succeed with high favor gained, and defeat at least 450 enemies after encounting Zhuge Liang for the unique message."
		}, {
			'Game': "DW5",
			'Name': "Tornado Staff",
			'Rank': 4,
			'Base': 32,
			'Element': "Medium",
			'Stats': [
				"Defense: 17",
				"Life: 15",
				"Fill: 18",
				"Bow: 16",
				"Luck: 15",
			],
			'Stage': "Conquest of Nan Zhong (Shu)",
			'Requirement': "Succeed in the strategies against the poison swamps, wild animals, and armored troops."
		}
	],
	'Yue Ying': [
		{
			'Game': "DW4",
			'Name': "Oblivion",
			'Rank': 4,
			'Base': 53,
			'Element': "-",
			'Stats': [],
			'Stage': "The Nanman Campaign",
			'Requirement': "Defeat Zhu Rong in a duel. Make Ahui Nan and Dong Tu defect by defeating Yong Kai and his officers. Trigger the fire attack against Wu Tugu. Defeat Meng Huo all six-to-seven times."
		}, {
			'Game': "DW4",
			'Name': "Nether Realm",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tiger Amulet: 18",
				"Huang's Bow: 13",
				"Horned Helm: 14",
				"Herbal Remedy: 18"
			],
			'Stage': "Ride of the Juggernauts",
			'Requirement': "Defeat all enemy officers. It's okay to have the Juggernauts defeat some. Protect all Juggernauts. It is okay to have one destroyed."
		}, {
			'Game': "DW5",
			'Name': "Oblivion",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Life: 16",
				"Defense: 17",
				"Charge: 15",
				"Horse: 15",
				"Bow: 16"
			],
			'Stage': "Battle of Wu Zhang Plains (Shu)",
			'Requirement': "Defeat Deng Ai before he sets up the catapults."
		}
	],
	'Guan Ping': [
		{
			'Game': "DW5",
			'Name': "Young Dragon",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Charge: 16",
				"Luck: 15",
				"Bow: 15",
				"Attack: 17",
				"Life: 15"
			],
			'Stage': "Escape from Chi Bi (Shu)",
			'Requirement': "Defeat all generals, not including sub-generals."
		}
	],
	'Xing Cai': [
		{
			'Game': "DW5",
			'Name': "Ambition",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Horse: 15",
				"Speed: 16",
				"Defense: 17",
				"Musou: 17",
				"Life: 15"
			],
			'Stage': "Battle of Bai Di Castle (Shu)",
			'Requirement': "Successfully save the peasants, and have Liu Shan come out to meet you and lead him back to the castle."
		}
	],
	'Xiahou Dun': [
		{
			'Game': "DW3",
			'Name': "Kirin Fang",
			'Rank': 4,
			'Base': 48,
			'Element': "Fire",
			'Stats': [
				"Attack: 26",
				"Bow Defense: 60",
				"Mounted Defense: 56",
				"Reach: 24"
			],
			'Stage': "Guan Yu's Escape (Xiahou Dun's Forces)",
			'Requirement': "Defeat Zhou Cang, Chen Zhen, and Guan Ping."
		}, {
			'Game': "DW3",
			'Name': "Tempest Sword",
			'Rank': 5,
			'Base': 48,
			'Element': "Wind",
			'Stats': [
				"HP Max: 82",
				"Attack: 28",
				"Mounted Attack: 55",
				"Reach: 25"
			],
			'Stage': "Battle of Jie Ting (Wei Forces)",
			'Requirement': "After Ma Su is surrounded, but before he starts to break through, defeat Wei Yan, Jiang Wei, and Ma Chao."
		}, {
			'Game': "DW4",
			'Name': "Kirin Fang",
			'Rank': 4,
			'Base': 56,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Xia Pi (Wei)",
			'Requirement': "Wait till the arrow cutscene happens, then defeat Diao Chan."
		}, {
			'Game': "DW4",
			'Name': "Kirin Blaze",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tortoise Amulet: 15",
				"Nanman Armor: 20",
				"Seven Star Sash: 12",
				"Elixir: 18"
			],
			'Stage': "Skirmish at Xia Pi",
			'Requirement': "Defeat Cao Xing on the first encounter before he flees, re-encounter him afterwards for the unique dialogue message (without entering the top left of the castle map), and defeat 100 enemies."
		}, {
			'Game': "DW5",
			'Name': "Kirin Fang",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Horse: 16",
				"Defense: 17",
				"Attack: 17",
				"Musou: 16",
				"Charge: 17"
			],
			'Stage': "Battle of Fan Castle (Wei)",
			'Requirement': "Defeat Guan Ping before the water attack."
		}
	],
	'Dian Wei': [
		{
			'Game': "DW3",
			'Name': "Mad Bull",
			'Rank': 4,
			'Base': 49,
			'Element': "Lightning",
			'Stats': [
				"HP Max: 84",
				"Attack: 27",
				"Musou Max: 28"
			],
			'Stage': "Wan Castle (Cao Cao's Forces)",
			'Requirement': "Defeat Hu Che Er."
		}, {
			'Game': "DW3",
			'Name': "Beast Axe",
			'Rank': 5,
			'Base': 49,
			'Element': "-",
			'Stats': [
				"Hex Mark Saddle",
				"HP Max: 90",
				"Attack: 28",
				"Defense: 52",
				"Bow Defense: 50"
			],
			'Stage': "Battle at He Fei (Wei Forces)",
			'Requirement': "After the Taishi Ci Death Event, defeat Lu Xun. Later enemy backup troops will appear, defeat Gan Ning (south of Cao Cao's camp)."
		}, {
			'Game': "DW4",
			'Name': "Mad Bull",
			'Rank': 4,
			'Base': 58,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Wan Castle",
			'Requirement': "Defeat Huche'er first before meeting up with Cao Cao. Afterwards, deplete Zhang Xiu's health in half to make him retreat. Once the castle gate closes, clear a path of enemies for Cao Cao to advance. When Xu Zhu breaks down the door, Dian Wei will receive the weapon."
		}, {
			'Game': "DW4",
			'Name': "Bull Rampage",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tortoise Amulet: 18",
				"Speed Scroll: 17",
				"Nanman Armor: 20",
				"Cavalry Armor: 16"
			],
			'Stage': "Defense of Wan Castle",
			'Requirement': "Defeat Hu Che Er and Jia Xu after they appear, then defeat 200 enemies."
		}, {
			'Game': "DW5",
			'Name': "Mad Bull",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Charge: 15",
				"Fill: 15",
				"Attack: 18",
				"Musou: 17",
				"Life: 17"
			],
			'Stage': "Battle of Wan Castle (Wei)",
			'Requirement': "Rendezvous with Cao Cao, lead him to the escape gates, defeating enemy officers along the way. Once Cao Cao leaves the castle, do not let a single enemy pass the gate until a message that Cao Cao's escape is starting appears."
		}
	],
	'Xu Zhu': [
		{
			'Game': "DW3",
			'Name': "Stone Crusher",
			'Rank': 4,
			'Base': 50,
			'Element': "-",
			'Stats': [
				"Musou Max: 88",
				"HP Max: 86",
				"Attack: 28",
				"Defense: 58",
				"Luck: 27"
			],
			'Stage': "Battle of Tong Gate (Cao Cao's Forces)",
			'Requirement': "After defeating Ma Dai and Pang De (Ma Chao's officers) pass through Tong Gate to trigger the special item report. If you are playing with two players it is okay for the second player to defeat Ma Dai and Pang De, but it must be the first player (Xu Zhu) who passes through the gate."
		}, {
			'Game': "DW3",
			'Name': "Earthly Mace",
			'Rank': 5,
			'Base': 50,
			'Element': "Fire",
			'Stats': [
				"Speed: 24",
				"HP Max: 82",
				"Defense: 55",
				"Bow Defense: 50",
				"Meat Bun Recovery: 14"
			],
			'Stage': "Siege at He Fei Castle (Wei Forces)",
			'Requirement': "Defeat all playable enemy generals."
		}, {
			'Game': "DW4",
			'Name': "Stone Crusher",
			'Rank': 4,
			'Base': 59,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Tong Gate",
			'Requirement': "Defeat Ma Dai then Pang De in order, then wait for Cao Cao to meet with Han Sui. Defeat 2 sub-generals of Han Sui to get him to defect."
		}, {
			'Game': "DW4",
			'Name': "Earth Shaker",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Peacock Urn: 14",
				"Speed Scroll: 20",
				"Wing Boots: 19",
				"Seven Star Sash: 16"
			],
			'Stage': "Village Encounter",
			'Requirement': "Defeat all generals, including defeating Dian Wei twice, without having over 3 supply captains retreat and/or having the plundering cause heavy damage to the fields via the battle messages."
		}, {
			'Game': "DW5",
			'Name': "Stone Crusher",
			'Rank': 4,
			'Base': 38,
			'Element': "Light",
			'Stats': [
				"Fill: 17",
				"Bow: 19",
				"Life: 20",
				"Luck: 15",
				"Defense: 19"
			],
			'Stage': "Battle of Tong Gate (Wei)",
			'Requirement': "Defeat Pang De and Ma Chao."
		}
	],
	'Cao Cao': [
		{
			'Game': "DW3",
			'Name': "Wrath of Heaven",
			'Rank': 4,
			'Base': 45,
			'Element': "Demon",
			'Stats': [
				"Attack: 24",
				"Bow Attack: 52",
				"Mounted Attack: 48",
				"Reach: 24"
			],
			'Stage': "Yellow Turban Rebellion (Allied Forces)",
			'Requirement': "Defeat Zhang Bao and Zhang Liang without defeating any Gate Captain and without losing any of your own."
		}, {
			'Game': "DW3",
			'Name': "Blue Steel",
			'Rank': 5,
			'Base': 45,
			'Element': "-",
			'Stats': [
				"Musou Armor",
				"HP Max: 86",
				"Defense: 51",
				"Bow Defense: 58",
				"Reach: 24"
			],
			'Stage': "Battle of Mt. Ding Jun (Wei Forces)",
			'Requirement': "Defeat Huang Zhong within 5 minutes."
		}, {
			'Game': "DW4",
			'Name': "Wrath of Heaven",
			'Rank': 4,
			'Base': 56,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Chi Bi (Wei)",
			'Requirement': "Uncover and foil the three plots of the allied forces while playing as Cao Cao. To do so, Pang Tong, Zhuge Liang, and Huang Gai must all be defeated. In addition, Lu Meng and Gan Ning must be defeated before Huang Gai's arrival."
		}, {
			'Game': "DW4",
			'Name': "King of Wei",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tortoise Amulet: 18",
				"Huang's Bow: 12",
				"Cavalry Armor: 16",
				"Seven Star Sash: 20"
			],
			'Stage': "Escape from Chi Bi",
			'Requirement': "Defeat Shu generals Zhao Yun, Guan Ping, Zhou Cang, and Zhang Fei before ally reinforcement troops appear. Initiate the cutscene between Cao Cao and Guan Yu before defeating 200 enemies."
		}, {
			'Game': "DW5",
			'Name': "Wrath of Heaven",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Charge: 17",
				"Bow: 15",
				"Life: 17",
				"Horse: 17",
				"Attack: 17"
			],
			'Stage': "Battle of Xia Pi (Wei)",
			'Requirement': "Right after Gao Shun begins to defend the water gate, defeat him and Zhang Liao."
		}
	],
	'Xiahou Yuan': [
		{
			'Game': "DW3",
			'Name': "Demon Fang",
			'Rank': 4,
			'Base': 45,
			'Element': "Fire",
			'Stats': [
				"Musou Max: 84",
				"HP Max: 78",
				"Bow Attack: 58",
				"Bow Defense: 59"
			],
			'Stage': "Battle of Mt. Ding Jun (Sima Yi's Forces)",
			'Requirement': "Wait for Huang Zhong to charge downhill (there will be an event) and defeat him. This occurs early in the battle if you fight up the hill toward him."
		}, {
			'Game': "DW3",
			'Name': "Mystic Fang",
			'Rank': 5,
			'Base': 45,
			'Element': "Demon",
			'Stats': [
				"Attack: 24",
				"Bow Attack: 58",
				"Mounted Attack: 58",
				"Reach: 21"
			],
			'Stage': "Battle at Tong Gate (Wei Forces)",
			'Requirement': "Appears after the Han Sui defect event."
		}, {
			'Game': "DW4",
			'Name': "Enforcer Rod",
			'Rank': 4,
			'Base': 55,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Mt. Ding Jun",
			'Requirement': "All you must do here is defeat Chen Shi before he can get back to the Shu army and defeat Huang Zhong before Cao Cao comes with reinforcements."
		}, {
			'Game': "DW4",
			'Name': "Ogre Rod",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tiger Amulet: 10",
				"Huang's Bow: 19",
				"Nanman Armor: 19",
				"Elixir: 17"
			],
			'Stage': "Reprisal at Mt. Ding Jun",
			'Requirement': "Prevent the 'Ally base guard troop decreased' message, and defeat 400 enemies. Do this all before Xiahou Dun's ally reinforcement troops appear, and before Huang Zhong appears."
		}, {
			'Game': "DW5",
			'Name': "Enforcer Rod",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 16",
				"Attack: 16",
				"Life: 17",
				"Bow: 19",
				"Musou: 17"
			],
			'Stage': "Battle of Chi Bi (Wei)",
			'Requirement': "Defeat Pang Tong as he defects, Zhuge Liang before he can successfully call the wind, and Huang Gai before he can burn the ships."
		}
	],
	'Zhang Liao': [
		{
			'Game': "DW3",
			'Name': "Dragon Breath",
			'Rank': 4,
			'Base': 48,
			'Element': "-",
			'Stats': [
				"HP Max: 79",
				"Attack: 25",
				"Mounted Attack: 58",
				"Mounted Defense: 58",
				"Reach: 21"
			],
			'Stage': "Battle at He Fei (Cao Cao's Forces)",
			'Requirement': "Defeat Zhou Tai."
		}, {
			'Game': "DW3",
			'Name': "Dragon God",
			'Rank': 5,
			'Base': 48,
			'Element': "Fire",
			'Stats': [
				"Attack: 27",
				"Bow Defense: 53",
				"Reach: 25",
				"Musou Charge: 23"
			],
			'Stage': "Battle at Guan Du (Xtreme) (Dong Zhuo's Forces)",
			'Requirement': "Early in the battle archer towers will be set up. Defeat all archers in those towers before the castle wall falls, making sure you get the last kill."
		}, {
			'Game': "DW4",
			'Name': "Gold Wyvern",
			'Rank': 4,
			'Base': 56,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Hu Lao Gate",
			'Requirement': "In Musou mode, at the battle of Si Shui Gate of Lu Bu's forces, defeat Liu Bei, Cao Cao, and Sun Jian. Then, at the battle of Hu Lao Gate, do not defeat any generals until after the fire attack on the city. Once that occurs, defeat Liu Bei, Cao Cao, and Sun Jian."
		}, {
			'Game': "DW4",
			'Name': "Celestial Wyvern",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Dragon Amulet: 17",
				"Huang's Bow: 11",
				"Horned Helm: 18",
				"Elixir: 20"
			],
			'Stage': "Ambush at He Fei",
			'Requirement': "Keep all four top castle ally Guard Troop Captains alive until Zhou Tai appears. Defeat 300 enemies."
		}, {
			'Game': "DW5",
			'Name': "Gold Wyvern",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Life: 17",
				"Attack: 17",
				"Fill: 15",
				"Horse: 18",
				"Luck: 15"
			],
			'Stage': "Battle of He Fei (Wei)",
			'Requirement': "Defeat nine generals/sub-generals within 10 minutes. And Sun Quan will comment that 'One man struck fear in my entire army by himself!'."
		}
	],
	'Xu Huang': [
		{
			'Game': "DW3",
			'Name': "Marauder",
			'Rank': 4,
			'Base': 46,
			'Element': "-",
			'Stats': [
				"Speed: 21",
				"Musou Max: 82",
				"Attack: 24",
				"Luck: 24",
				"Reach: 22"
			],
			'Stage': "Battle of Fan Castle (Sima Yi's Forces)",
			'Requirement': "Defeat Guan Ping before the flood event (10 minutes). If you plan to do this in free mode unlock the Wei side at Fan Castle first (you can do this by beating it in musou mode with Sima Yi)."
		}, {
			'Game': "DW3",
			'Name': "Tiger Fang",
			'Rank': 5,
			'Base': 46,
			'Element': "Fire",
			'Stats': [
				"Speed: 23",
				"HP Max: 81",
				"Defense: 41",
				"Reach: 28"
			],
			'Stage': "Battle at Tong Gate (Wei Forces)",
			'Requirement': "Appears after the Han Sui defect event."
		}, {
			'Game': "DW4",
			'Name': "Marauder",
			'Rank': 4,
			'Base': 57,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Guan Du",
			'Requirement': "Allow Yuan Shao's rams to knock down the walls of Guan Du castle then see to it that Wu Chao is in flames."
		}, {
			'Game': "DW4",
			'Name': "Annihilator",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Dragon Amulet: 16",
				"Huang's Bow: 13",
				"Horned Helm: 19",
				"Elixir: 19"
			],
			'Stage': "Defense of Fan Castle",
			'Requirement': "Destroy all 4 siege weapons before they set up and start attacking the castle. Defeat all enemy generals except Guan Yu, and defeat 200 enemies."
		}, {
			'Game': "DW5",
			'Name': "Marauder",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Attack: 17",
				"Life: 18",
				"Speed: 15",
				"Fill: 15",
				"Luck: 15"
			],
			'Stage': "Battle of Chang Ban (Wei)",
			'Requirement': "Defeat Guan Yu and Zhang Fei once the final wave of reinforcements appears."
		}
	],
	'Zhang He': [
		{
			'Game': "DW3",
			'Name': "Peacock Talon",
			'Rank': 4,
			'Base': 43,
			'Element': "Demon",
			'Stats': [
				"Jump: 23",
				"Attack: 24",
				"Reach: 27",
				"Musou Charge: 29"
			],
			'Stage': "Guan Du (Cao Cao's Forces)",
			'Requirement': "Find and burn the enemy supply depot with Yan Liang and Wen Chou alive. The supply depot itself changes location each game."
		}, {
			'Game': "DW3",
			'Name': "Phoenix Talon",
			'Rank': 5,
			'Base': 43,
			'Element': "-",
			'Stats': [
				"Survival Guide",
				"HP Max: 73",
				"Bow Defense: 58",
				"Reach: 25",
				"Musou Charge: 30"
			],
			'Stage': "Battle of Jie Ting (Xtreme) (Yuan Shao's Forces)",
			'Requirement': "In order, defeat Xu Zhu, Xiahou Yuan, Zhang Liao, Cao Zhen, Dian Wei, and then Xu Huang."
		}, {
			'Game': "DW4",
			'Name': "Phoenix Talon",
			'Rank': 4,
			'Base': 52,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Jie Ting",
			'Requirement': "Surround Ma Su's camp by defeating all his officers and Ma Su. Once that is done, wait for Shu reinforcements then defeat all the officers and generals on the field."
		}, {
			'Game': "DW4",
			'Name': "Infernal Talon",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Peacock Urn: 12",
				"Speed Scroll: 20",
				"Wing Boots: 20",
				"Huang's Bow: 10"
			],
			'Stage': "Pursuit at Mt. Qi",
			'Requirement': "Defeat Wei Yan while he's running away from you. Or, after Wei Yan stops retreating. Defeat Guan Xing and Zhang Bao. Then defeat 100 enemies, not before."
		}, {
			'Game': "DW5",
			'Name': "Phoenix Talon",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Fill: 15",
				"Speed: 19",
				"Attack: 16",
				"Musou: 18",
				"Charge: 15"
			],
			'Stage': "Battle of Jie Ting (Wei)",
			'Requirement': "Surround Ma Su, and defeat Gao Xiong and Wang Ping, as well as the checkpoint near them. Later, take down all of Ma Su sub-officers. Once Ma Su starts retreating to the main camp, defeat him."
		}
	],
	'Zhen Ji': [
		{
			'Game': "DW3",
			'Name': "Dark Moon Flute",
			'Rank': 4,
			'Base': 37,
			'Element': "-",
			'Stats': [
				"Speed: 23",
				"Defense: 52",
				"Bow Attack: 50",
				"Mounted Attack: 50",
				"Reach: 25"
			],
			'Stage': "Jie Ting (Sima Yi's Forces)",
			'Requirement': "Defeat Jiang Wei."
		}, {
			'Game': "DW3",
			'Name': "Half Moon Flute",
			'Rank': 5,
			'Base': 37,
			'Element': "Fire",
			'Stats': [
				"Speed: 21",
				"Musou Max: 68",
				"Attack: 22",
				"Reach: 28"
			],
			'Stage': "Battle at Guan Du (Wei Forces)",
			'Requirement': "Find the enemy supply depot on the fourth try, after entering the three incorrect camps first. Defeat Chun Yuqiong to burn the supplies and trigger the item report."
		}, {
			'Game': "DW4",
			'Name': "Dark Moon Flute",
			'Rank': 4,
			'Base': 51,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Chang Ban",
			'Requirement': "Defeat Guan Yu and Zhuge Liang in battle. Defeat Zhao Yun and Zhang Fei in a duel."
		}, {
			'Game': "DW4",
			'Name': "Twilight Flute",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Dragon Amulet: 18",
				"Nanman Armor: 10",
				"Horned Helm: 13",
				"Seven Star Sash: 20"
			],
			'Stage': "Encounter at Yi Province",
			'Requirement': "Go outside the castle into Cao Pi's army and Zhen Ji will defect to Cao Pi's army. Then, defeat all enemy generals and sub-generals except Yuan Xi, and defeat 150 enemies. Or, do the opposite and stay inside the castle with Yuan Xi, and defeat every generals and sub-generals except Cao Pi, and defeat 150 enemies."
		}, {
			'Game': "DW5",
			'Name': "Dark Moon Flute",
			'Rank': 4,
			'Base': 32,
			'Element': "Medium",
			'Stats': [
				"Fill: 20",
				"Horse: 17",
				"Bow: 18",
				"Defense: 18",
				"Life: 17"
			],
			'Stage': "Battle of He Fei Castle (Wei)",
			'Requirement': "Defeat 300 enemies, and rendezvous with Cao Pi."
		}
	],
	'Cao Ren': [
		{
			'Game': "DW4",
			'Name': "Roc",
			'Rank': 4,
			'Base': 56,
			'Element': "-",
			'Stats': [],
			'Stage': "Siege of Fan Castle (Wei)",
			'Requirement': "Defeat all four siege vehicles around the castle before either the castle falls or Lu Meng arrives. Defeat Lu Meng when he comes charging out from the Wu castle in the west. Do not defeat more than two generals near the castle or Lu Meng will appear and the 'all siege weapons destroyed' message will not appear."
		}, {
			'Game': "DW4",
			'Name': "Kai",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Peacock Urn: 18",
				"Nanman Armor: 17",
				"Cavalry Armor: 19",
				"Seven Star Sash: 12"
			],
			'Stage': "Encounter at Jiang Ling",
			'Requirement': "Meet with Niu Jin only after his morale reaches 8 stars. Then defeat Han Dang and Gan Ning after meeting with Niu Jin. Defeat the two ambush troop generals, Zhou Tai and Zhou Yu, after they appear. While keeping Niu Jin's health as high as possible, defeat at least 250 enemies."
		}, {
			'Game': "DW5",
			'Name': "Roc",
			'Rank': 4,
			'Base': 32,
			'Element': "Light",
			'Stats': [
				"Fill: 15",
				"Bow: 15",
				"Attack: 15",
				"Defense: 18",
				"Life: 19"
			],
			'Stage': "Escape from Chi Bi (Wei)",
			'Requirement': "Quickly defeat all the enemy reinforcements except for Liu Bei and Guan Yu. Take out the leading general of each enemy ambush before the corresponding ally reinforcement offers to help. Defeat Sun Quan when he arrives."
		}
	],
	'Cao Pi': [
		{
			'Game': "DW5",
			'Name': "Chaos",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Fill: 15",
				"Speed: 19",
				"Defense: 15",
				"Attack: 15",
				"Musou: 19"
			],
			'Stage': "Battle of Wu Zhang Plains (Wei)",
			'Requirement': "After Zhuge Liang passes away, destroy each arbalest with Cao Ren still alive."
		}
	],
	'Pang De': [
		{
			'Game': "DW5",
			'Name': "Heavenly Halberd",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Luck: 15",
				"Horse: 17",
				"Defense: 15",
				"Attack: 16",
				"Life: 18"
			],
			'Stage': "Battle of Mt. Ding Jun (Wei)",
			'Requirement': "Defeat Zhao Yun, Guan Ping, Wei Yan, and Huang Zhong before Cao Cao arrives. Need to defeat Huang Zhong last."
		}
	],
	'Zhou Yu': [
		{
			'Game': "DW3",
			'Name': "Ancient's Sword",
			'Rank': 4,
			'Base': 46,
			'Element': "Fire",
			'Stats': [
				"Attack: 23",
				"Defense: 50",
				"Reach: 25",
				"Musou Charge: 27"
			],
			'Stage': "Battle at Chi Bi (Sun Quan's Forces)",
			'Requirement': "Defeat Xiahou Dun and Xu Huang or Xiahou Dun and Zhang He."
		}, {
			'Game': "DW3",
			'Name': "Elder Moon",
			'Rank': 5,
			'Base': 46,
			'Element': "Wind",
			'Stats': [
				"Speed: 23",
				"HP Max: 82",
				"Attack: 25",
				"Reach: 28"
			],
			'Stage': "Assault on the Wu Territory (Wu Forces)",
			'Requirement': "Defeat Liu Yong before your forces divide, appears after Taishi Ci defects."
		}, {
			'Game': "DW4",
			'Name': "Ancients Sword",
			'Rank': 4,
			'Base': 54,
			'Element': "-",
			'Stats': [],
			'Stage': "Siege of Fan Castle",
			'Requirement': "After 10 minutes have passed in the battle, a supply team for Cao Ren will appear in the northeast and move towards the east gate. Defeat the supply team before they get inside the castle; defeat the guard just in case."
		}, {
			'Game': "DW4",
			'Name': "Scion Sword",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tortoise Amulet: 16",
				"Wing Boots: 18",
				"Seven Star Sash: 13",
				"Elixir: 17"
			],
			'Stage': "The Chi Bi Gambit",
			'Requirement': "Defeat all generals except Zhuge Liang, and defeat 50 enemies."
		}, {
			'Game': "DW5",
			'Name': "Ancients Sword",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Charge: 17",
				"Defense: 15",
				"Musou: 18",
				"Bow: 16",
				"Attack: 16"
			],
			'Stage': "Battle of the Wu Territory (Wu)",
			'Requirement': "Take over both of the enemy forts by defeating both Yan Baihu and Wang Lang."
		}
	],
	'Lu Xun': [
		{
			'Game': "DW3",
			'Name': "Falcon",
			'Rank': 4,
			'Base': 46,
			'Element': "Demon",
			'Stats': [
				"Speed: 22",
				"Musou Max: 75",
				"Defense: 43",
				"Reach: 29"
			],
			'Stage': "Battle at Yi Ling (Sun Quan's Forces)",
			'Requirement': "With either Lu Meng or Gan Ning alive complete the stone warrior formation (a square area in the central South area of the map with four mounds) and defeat Zhuge Liang."
		}, {
			'Game': "DW3",
			'Name': "Flash Blade",
			'Rank': 5,
			'Base': 46,
			'Element': "Wind",
			'Stats': [
				"HP Max: 80",
				"Attack: 24",
				"Bow Defense: 55",
				"Reach: 30"
			],
			'Stage': "Battle at You Ting (Wu Forces)",
			'Requirement': "Fail the plot to surround Cao Xiu, by waiting until the cutscene of Sima Yi discovering Zhou Fang is a spy."
		}, {
			'Game': "DW4",
			'Name': "Falcon",
			'Rank': 4,
			'Base': 52,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Yi Ling",
			'Requirement': "Keep Zhu Ran alive till the fire attack is successful, then enter and pass through the stone maze in under 3 minutes."
		}, {
			'Game': "DW4",
			'Name': "Raptor",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tiger Amulet: 14",
				"Speed Scroll: 20",
				"Wing Boots: 17",
				"Cavalry Armor: 11"
			],
			'Stage': "Battle of Yu Fu Bay",
			'Requirement': "Go through the Stone Maze without getting lost, then defeat Zhao Yun and Guan Xing in under 11 minutes."
		}, {
			'Game': "DW5",
			'Name': "Falcon",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Fill: 15",
				"Luck: 18",
				"Speed: 20",
				"Attack: 15",
				"Musou: 19"
			],
			'Stage': "Battle of Bai Di Castle (Wu)",
			'Requirement': "Defeat Jiang Wei and Ma Chao before Yue Ying arrives, she arrives after you defeat Xing Cai or enter Liu Chan's base."
		}
	],
	'Taishi Ci': [
		{
			'Game': "DW3",
			'Name': "Tiger Slayer",
			'Rank': 4,
			'Base': 45,
			'Element': "Lightning",
			'Stats': [
				"HP Max: 81",
				"Attack: 26",
				"Bow Attack: 55",
				"Mounted Attack: 51"
			],
			'Stage': "Assault on the Wu Territory (Allied Forces)",
			'Requirement': "Defeat all enemy officers but Sun Ce."
		}, {
			'Game': "DW3",
			'Name': "Tiger Wolf",
			'Rank': 5,
			'Base': 45,
			'Element': "-",
			'Stats': [
				"Divine Helm",
				"Speed: 22",
				"Defense: 46",
				"Bow Defense: 55",
				"Reach: 26"
			],
			'Stage': "Battle at He Fei (Wu Forces)",
			'Requirement': "Defeat Zhang Liao after he ambushes the Wu headquarters."
		}, {
			'Game': "DW4",
			'Name': "Tiger Slayer",
			'Rank': 4,
			'Base': 56,
			'Element': "-",
			'Stats': [],
			'Stage': "Campaign for Wu Territory",
			'Requirement': "When Yu Mi retreats into the fortress, chase him down and defeat him. (Suggestion: Red Hare) After Yu Mi is defeated, defeat Zhang Ying before he escapes."
		}, {
			'Game': "DW4",
			'Name': "Demon Slayer",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tiger Amulet: 20",
				"Wing Boots: 11",
				"Nanman Armor: 16",
				"Herbal Remedy: 19"
			],
			'Stage': "Campaign Against Liu Yong",
			'Requirement': "Defeat Xue Li and Fan Neng. Gather at least 9 units before you encounter and rescue Hua Xin. Gather at least 12 units to join forces with, and defeat 450 enemies."
		}, {
			'Game': "DW5",
			'Name': "Tiger Slayer",
			'Rank': 4,
			'Base': 38,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Horse: 15",
				"Bow: 15",
				"Defense: 18",
				"Life: 18"
			],
			'Stage': "Battle of Wu Territory (Allied forces)",
			'Requirement': "After Sun Quan is lured into the eastern fort, defeat him before Zhou Tai can rendezvous with him."
		}
	],
	'Sun Shang Xiang': [
		{
			'Game': "DW3",
			'Name': "Sol Chakram",
			'Rank': 4,
			'Base': 40,
			'Element': "-",
			'Stats': [
				"Speed: 23",
				"Jump: 22",
				"HP Max: 66",
				"Luck: 23",
				"Reach: 30"
			],
			'Stage': "Battle at You Ting (Wu Forces)",
			'Requirement': "Defeat Cao Xiu."
		}, {
			'Game': "DW3",
			'Name': "Dragon Chakram",
			'Rank': 5,
			'Base': 40,
			'Element': "Fire",
			'Stats': [
				"HP Max: 75",
				"Attack: 20",
				"Luck: 28",
				"Reach: 30",
				"Arrows: 30"
			],
			'Stage': "Battle at Fan Castle (Wu Forces)",
			'Requirement': "Defeat Guan Ping before the flood event."
		}, {
			'Game': "DW4",
			'Name': "Sol Chakram",
			'Rank': 4,
			'Base': 51,
			'Element': "-",
			'Stats': [],
			'Stage': "Race for the Nan Territory",
			'Requirement': "Defeat Wang Lang and then go into the castle. After Zhou Yu gets hit by an arrow cutscene, defeat Cao Ren when he comes charging out."
		}, {
			'Game': "DW4",
			'Name': "Astral Chakram",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tortoise Amulet: 14",
				"Huang's Bow: 16",
				"Speed Scroll: 19",
				"Wing Boots: 12"
			],
			'Stage': "Liu Bei's Escape",
			'Requirement': "Defeat 150 enemies around the first enemy Gate Captain. Rescue the female guards on the way. Defeat Cheng Pu and Pan Zhang. Should defeat 200 enemies by now. Run to the gate with Xu Sheng and Ding Feng. Ignore the soldiers and defeat the officers with 3 female bodyguards. Run to Zhou Tai and Jiang Qin and defeat them. Rescue the last bodyguard. Do not let Zhao Yun appear at any point of the stage. He'll appear if you don't defeat 200 enemies by the time enemy reinforcements appear. Level 11 message when you cross the bridge."
		}, {
			'Game': "DW5",
			'Name': "Sol Chakram",
			'Rank': 4,
			'Base': 32,
			'Element': "Heavy",
			'Stats': [
				"Luck: 19",
				"Bow: 15",
				"Speed: 19",
				"Life: 15",
				"Defense: 17"
			],
			'Stage': "Invasion of Nan Zhong",
			'Requirement': "Don't defeat any generals until the bridge collapses and go to Sun Quan for a scene, after the scene defeat every general and sub-general, including reinforcements."
		}
	],
	'Sun Jian': [
		{
			'Game': "DW3",
			'Name': "Savage Wolf",
			'Rank': 4,
			'Base': 43,
			'Element': "Fire",
			'Stats': [
				"Musou Max: 76",
				"HP Max: 68",
				"Attack: 22",
				"Defense: 49"
			],
			'Stage': "Surprise Attack on Liu Biao (Sun Jian's Forces)",
			'Requirement': "Defeat Lu Gong."
		}, {
			'Game': "DW3",
			'Name': "Wolf Blade",
			'Rank': 5,
			'Base': 43,
			'Element': "-",
			'Stats': [
				"Buckler",
				"Musou Max: 82",
				"Defense: 42",
				"Bow Attack: 55",
				"Reach: 26"
			],
			'Stage': "Siege of He Fei Castle (Wu Forces)",
			'Requirement': "Lead your troops into the northwest entrance to He Fei, through the arrow trap, past the wind trap room, and to Zhang He and Xu Huang (by defeating soldiers, gate captains, and officers that get in their way). Once you defeat Zhang He and Xu Huang, all gates will open. Run to the southwest and defeat Man Chong and Cao Rui (remove their gate captain first), then head north to Xu Zhu. Once you defeat him, the item report will occur."
		}, {
			'Game': "DW4",
			'Name': "Savage Tiger",
			'Rank': 4,
			'Base': 54,
			'Element': "-",
			'Stats': [],
			'Stage': "The Imperial Seal",
			'Requirement': "Do not destroy more than 50 crates until Lu Bu appears, then defeat him once he appears. This means that Sun Jian will have to blow his cover and reveal his presence to Diao Chan, Li Jue, and Zhang Liao's scouts, forcing him to defeat them to cause Lu Bu to appear."
		}, {
			'Game': "DW4",
			'Name': "King of Wu",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tortoise Amulet: 20",
				"Wing Boots: 10",
				"Nanman Armor: 18",
				"Herbal Remedy: 16"
			],
			'Stage': "Dong Zhuo and the Alliance",
			'Requirement': "Defeat Hua Xiong, Hu Zhen, and Lu Bu after he appears, all before passing through the map center castle. Eliminate the top and right enemy entry points. Encounter Dong Zhuo before the map left ally castle is breached."
		}, {
			'Game': "DW5",
			'Name': "Savage Tiger",
			'Rank': 4,
			'Base': 34,
			'Element': "Light",
			'Stats': [
				"Fill: 18",
				"Defense: 16",
				"Horse: 16",
				"Musou: 15",
				"Life: 15"
			],
			'Stage': "Battle of Si Shui Gate (Allied forces)",
			'Requirement': "Defeat Lu Bu within 5 minutes of his appearance."
		}
	],
	'Sun Quan': [
		{
			'Game': "DW3",
			'Name': "Master Wolf",
			'Rank': 4,
			'Base': 42,
			'Element': "-",
			'Stats': [
				"Musou Max: 68",
				"Attack: 22",
				"Bow Attack: 49",
				"Bow Defense: 50",
				"Musou Charge: 26"
			],
			'Stage': "Siege of He Fei Castle (Sun Quan's Forces)",
			'Requirement': "Defeat Zhang He."
		}, {
			'Game': "DW3",
			'Name': "Heavenly Wolf",
			'Rank': 5,
			'Base': 42,
			'Element': "Demon",
			'Stats': [
				"Musou Max: 68",
				"HP Max: 70",
				"Bow Attack: 52",
				"Mounted Attack: 55"
			],
			'Stage': "Battle at He Fei (Wu Forces)",
			'Requirement': "Northwest from your starting position you will find Zhang Liao. Defeat him before he can get near Taishi Ci to prevent his death by arrows. From there, clear out all officers that threaten the central area, move north and to the east to clear out the northeastern area, then head west to Cao Cao's camp. Avoid Cao Cao, but go around, find, and defeat Xu Zhu. Also take a moment to kill his gate captains. Run south to finish off a few remaining enemy officers and get the weapon, then return north to finish Cao Cao."
		}, {
			'Game': "DW4",
			'Name': "Master Wolf",
			'Rank': 4,
			'Base': 53,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of He Fei",
			'Requirement': "Defeat Xiahou Dun and Xiahou Yuan, then defeat Zhang Liao when he reappears near the Wu camp."
		}, {
			'Game': "DW4",
			'Name': "Legacy",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tortoise Amulet: 18",
				"Cavalry Armor: 14",
				"Seven Star Sash: 15",
				"Elixir: 16"
			],
			'Stage': "Retreat From He Fei",
			'Requirement': "Defeat Yue Jin, Li Dian, and Zhang Liao 3 times. Keep all ally generals alive and defeat 500 enemies."
		}, {
			'Game': "DW5",
			'Name': "Master Wolf",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Fill: 15",
				"Bow: 15",
				"Attack: 16",
				"Musou: 18",
				"Charge: 17"
			],
			'Stage': "Battle of Chi Bi (Allied forces)",
			'Requirement': "Ensure that all parts of the plan succeed. Huang Gai must set Cao Cao's boats on fire, the bridges must be knocked down for Pang Tong, Zhuge Liang must successfully summon the southern wind, and Zhou Yu must not be defeated."
		}
	],
	'Lu Meng': [
		{
			'Game': "DW3",
			'Name': "White Tiger",
			'Rank': 4,
			'Base': 45,
			'Element': "Lightning",
			'Stats': [
				"Defense: 53",
				"Bow Defense: 54",
				"Mounted Defense: 54",
				"Musou Charge: 25"
			],
			'Stage': "Fan Castle (Sima Yi's Forces)",
			'Requirement': "Defeat Guan Ping."
		}, {
			'Game': "DW3",
			'Name': "Fighting Tiger",
			'Rank': 5,
			'Base': 45,
			'Element': "-",
			'Stats': [
				"Musou Armor",
				"HP Max: 82",
				"Attack: 25",
				"Mounted Attack: 50",
				"Reach: 25"
			],
			'Stage': "Siege of He Fei Castle (Wu Forces)",
			'Requirement': "Defeat Zhang He and Xu Huang, trigger the archer ambush event (by walking near the walkway across the center river), defeat Xu Zhu, and then defeat Man Chong who arrives with Cao Rui as reinforcements."
		}, {
			'Game': "DW4",
			'Name': "White Tiger",
			'Rank': 4,
			'Base': 54,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Mai Castle",
			'Requirement': "Without letting Guan Yu retreat or escape, defeat all the generals and officers, including the ambushes and reinforcements."
		}, {
			'Game': "DW4",
			'Name': "Mystic Hunter",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tortoise Amulet: 19",
				"Speed Scroll: 15",
				"Huang's Bow: 10",
				"Herbal Remedy: 20"
			],
			'Stage': "Siege of Mai Castle",
			'Requirement': "With all allied officers alive, defeat Zhou Cang, Liao Hua, and Guan Ping, all while also sealing off both enemy entry points, get the message that Guan Yu has been angered, and defeat 50 enemies."
		}, {
			'Game': "DW5",
			'Name': "White Tiger",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Horse: 16",
				"Bow: 15",
				"Defense: 17",
				"Life: 17"
			],
			'Stage': "Battle of Fan Castle (Allied forces)",
			'Requirement': "Defeat Zhang Bao and Zhang Fei."
		}
	],
	'Gan Ning': [
		{
			'Game': "DW3",
			'Name': "Sea Master",
			'Rank': 4,
			'Base': 46,
			'Element': "Lightning",
			'Stats': [
				"Speed: 22",
				"Jump: 21",
				"Attack: 25",
				"Luck: 26",
				"Musou Charge: 28"
			],
			'Stage': "The Battle at He Fei (Sun Quan's Forces)",
			'Requirement': "Wait for Taishi Ci's death event. This event occurs when he meets Zhang Liao, which will be early in the battle. Do not defeat Zhang Liao before this event."
		}, {
			'Game': "DW3",
			'Name': "Seven Seas Blade",
			'Rank': 5,
			'Base': 46,
			'Element': "Wind",
			'Stats': [
				"Speed: 24",
				"Defense: 45",
				"Reach: 28",
				"Meat Bun Recovery: 12"
			],
			'Stage': "Battle of Yi Ling (Wu Forces)",
			'Requirement': "Successfully navigate the stone soldier maze, and then defeat Zhuge Liang."
		}, {
			'Game': "DW4",
			'Name': "Sea Master",
			'Rank': 4,
			'Base': 56,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Xia Kou",
			'Requirement': "Defeat Su Fei & Chen Sheng / the enemy Gan Ning (it is best to ignore the rest of Huang Zu's generals first), then wait For Zhou Yu's message about the gunpower on Huang Zu's northern ship and destroy it once it is discovered (to light his ships on fire). Then defeat all the rest of Huang Zu's generals (Zhang Hu, Chen Jiu, Deng Long & Cai Mao) before both of his ships collide. Both Ling Cao & Ling Tong must still be alive."
		}, {
			'Game': "DW4",
			'Name': "Leviathan",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Speed Scroll: 20",
				"Horned Helm: 11",
				"Seven Star Sash: 16",
				"Herbal Remedy: 19"
			],
			'Stage': "Battle of Ru Xu Kou",
			'Requirement': "Defeat Li Dian and Yue Jin before they regather their troops, and defeat either Cao Xiu or Zhang Liao after they appear. Defeat 140 enemies."
		}, {
			'Game': "DW5",
			'Name': "Sea Master",
			'Rank': 4,
			'Base': 38,
			'Element': "Light",
			'Stats': [
				"Charge: 15",
				"Luck: 18",
				"Speed: 15",
				"Attack: 19",
				"Musou: 15"
			],
			'Stage': "Battle of Xia Kou (Huang Zu's forces)",
			'Requirement': "Defeat Ling Tong and Ling Cao within 2 minutes of the stage starting."
		}
	],
	'Huang Gai': [
		{
			'Game': "DW3",
			'Name': "Black Shadow",
			'Rank': 4,
			'Base': 44,
			'Element': "-",
			'Stats': [
				"HP Max: 82",
				"Defense: 57",
				"Mounted Attack: 52",
				"Reach: 23",
				"Musou Charge: 27"
			],
			'Stage': "Chi Bi (Sun Quan's Forces)",
			'Requirement': "Defeat Zhang Liao."
		}, {
			'Game': "DW3",
			'Name': "Spiked Mace",
			'Rank': 5,
			'Base': 44,
			'Element': "Lightning",
			'Stats': [
				"Musou Max: 85",
				"Attack: 26",
				"Mounted Attack: 50",
				"Reach: 28"
			],
			'Stage': "Yellow Turban Rebellion (Han Forces)",
			'Requirement': "Defeat He Yi and then Zhang Bao, in order, before any other officers."
		}, {
			'Game': "DW4",
			'Name': "Dark Shadow",
			'Rank': 4,
			'Base': 56,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Chi Bi (Wu)",
			'Requirement': "Defeat all the gate captains before the fire attack, then defeat Cao Ren, Cao Hong, and Cao Pi."
		}, {
			'Game': "DW4",
			'Name': "Shade",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Peacock Urn: 19",
				"Speed Scroll: 17",
				"Elixir: 14",
				"Herbal Remedy: 16"
			],
			'Stage': "Skirmish at Chi Bi",
			'Requirement': "Reach the Wei ship without being discovered in under 3:30 minutes."
		}, {
			'Game': "DW5",
			'Name': "Dark Shadow",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Luck: 16",
				"Defense: 17",
				"Attack: 17",
				"Life: 15"
			],
			'Stage': "Yellow Turban Rebellion (Allied forces)",
			'Requirement': "Defeat all officers and sub-officers outside of Zhang Jiao's garrison."
		}
	],
	'Sun Ce': [
		{
			'Game': "DW3",
			'Name': "Overlord",
			'Rank': 4,
			'Base': 42,
			'Element': "Fire",
			'Stats': [
				"Speed: 21",
				"Jump: 20",
				"Musou Max: 80",
				"HP Max: 72"
			],
			'Stage': "Assault on Wu Territory (Sun Ce's Forces)",
			'Requirement': "Defeat Liu Yong (the lord in the Southeast area of the map) before you defeat Taishi Ci. Taishi Ci will betray to your side and the special item report will occur."
		}, {
			'Game': "DW3",
			'Name': "God of War",
			'Rank': 5,
			'Base': 42,
			'Element': "Lightning",
			'Stats': [
				"Speed: 22",
				"Bow Defense: 50",
				"Reach: 30",
				"Musou Charge: 23"
			],
			'Stage': "Surprise attack on Liu Biao (Wu Forces)",
			'Requirement': "After Sun Jian is killed, defeat Cai Mao (southeast from Liu Biao)."
		}, {
			'Game': "DW4",
			'Name': "Overlord",
			'Rank': 4,
			'Base': 54,
			'Element': "-",
			'Stats': [],
			'Stage': "Unification of Jiang Dong",
			'Requirement': "Wait for the north food supply depot to fall and Zhou Yu to be routed. Defeat Liang Gang to gain access into Wan/Huan Castle, and defeat Yuan Shu to open the rest of its gates. Once that's done give chase to Liu Xun and wait till he meets with Ji Ling (or enters Mt. Xi Sai first). Once Liu Xun starts to head for the supply depot, ride ahead of him and defeat the all the generals (Li Feng, Yue Jiu and Chen Li) at the supply depot along with the gate captains."
		}, {
			'Game': "DW4",
			'Name': "Hierophant",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Dragon Amulet: 19",
				"Wing Boots: 10",
				"Huang's Bow: 19",
				"Elixir: 20"
			],
			'Stage': "The Shadow of Sun Ce",
			'Requirement': "Clear the stage in under 1:50 minutes after defeating the real Yu Ji's appearance."
		}, {
			'Game': "DW5",
			'Name': "Overlord",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Attack: 18",
				"Life: 15",
				"Speed: 18",
				"Musou: 15"
			],
			'Stage': "The Trials of Sun Ce (Sun Ce's forces)",
			'Requirement': "Defeat all of Yu Ji's phantoms, Sun Jian, and Da Qiao in less than 10 minutes."
		}
	],
	'Da Qiao': [
		{
			'Game': "DW3",
			'Name': "True Beauty",
			'Rank': 4,
			'Base': 37,
			'Element': "-",
			'Stats': [
				"Musou Max: 64",
				"HP Max: 65",
				"Attack: 22",
				"Defense: 48",
				"Luck: 29"
			],
			'Stage': "Battle at You Ting (Wu Forces)",
			'Requirement': "Defeat Zhang He. You will not be able to get this weapon in Musou Mode."
		}, {
			'Game': "DW3",
			'Name': "Yellow Beauty",
			'Rank': 5,
			'Base': 37,
			'Element': "Fire",
			'Stats': [
				"HP Max: 65",
				"Attack: 26",
				"Reach: 22",
				"Meat Bun Recovery: 10"
			],
			'Stage': "Surprise Attack on Liu Biao (Wu Forces)",
			'Requirement': "After Sun Jian is killed, defeat Kuai Ling (east from Liu Biao)."
		}, {
			'Game': "DW4",
			'Name': "Qiao Beauty",
			'Rank': 4,
			'Base': 50,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Xu Chang",
			'Requirement': "Defeat Dian Wei and his officers - Deng Ai and Hu Zhi."
		}, {
			'Game': "DW4",
			'Name': "Mortal Beauty",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Peacock Urn: 19",
				"Nanman Armor: 15",
				"Horned Helm: 11",
				"Seven Star Sash: 15"
			],
			'Stage': "Battle of the Wu Territory",
			'Requirement': "Defeat the 3 loyalist generals prior to the rock slide attack, each of them within 1 minute of their appearance. Then defeat 300 enemies."
		}, {
			'Game': "DW5",
			'Name': "Qiao Beauty",
			'Rank': 4,
			'Base': 32,
			'Element': "Heavy",
			'Stats': [
				"Luck: 18",
				"Attack: 16",
				"Life: 15",
				"Defense: 15",
				"Musou: 19"
			],
			'Stage': "Battle of Xia Kou (Wu)",
			'Requirement': "Defeat Cai Mao and Gan Ning before Ling Tong is defeated."
		}
	],
	'Xiao Qiao': [
		{
			'Game': "DW3",
			'Name': "True Grace",
			'Rank': 4,
			'Base': 38,
			'Element': "Demon",
			'Stats': [
				"Speed: 24",
				"Defense: 47",
				"Luck: 28",
				"Musou Charge: 30"
			],
			'Stage': "Nanman Campaign (Sun Quan's Forces)",
			'Requirement': "Defeat Zhu Rong."
		}, {
			'Game': "DW3",
			'Name': "Blue Grace",
			'Rank': 5,
			'Base': 38,
			'Element': "-",
			'Stats': [
				"Survival Guide",
				"Musou Max: 85",
				"Attack: 28",
				"Bow Defense: 54",
				"Reach: 22"
			],
			'Stage': "Assault on the Wu Territory (Wu Forces)",
			'Requirement': "Defeat Yan Bai Hu and Wang Lang."
		}, {
			'Game': "DW4",
			'Name': "Qiao Grace",
			'Rank': 4,
			'Base': 50,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Cheng Du",
			'Requirement': "Before Ma Chao appears as reinforcements in Luo Castle, defeat Guan Ping and Guan Yu."
		}, {
			'Game': "DW4",
			'Name': "Fatal Grace",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Dragon Amulet: 17",
				"Speed Scroll: 14",
				"Elixir: 19",
				"Herbal Remedy: 10"
			],
			'Stage': "Escape From Tong Qiao Tai",
			'Requirement': "Defeat Cao Cao 4 times in a row. Defeat Xiahou Dun, Xu Zhu, Dian Wei and Cao Ren. At this point, there must be more than 15 minutes remaining. When Cao Cao appears for the fifth time, Xiahou Yuan will bring Da Qiao with him. Move to the top of the tower to meet Da Qiao. There will be a cutscene. Defeat Xiahou Yuan. Defeat 100 enemies."
		}, {
			'Game': "DW5",
			'Name': "Qiao Grace",
			'Rank': 4,
			'Base': 32,
			'Element': "Heavy",
			'Stats': [
				"Defense: 15",
				"Musou: 15",
				"Fill: 15",
				"Charge: 17",
				"Speed: 19"
			],
			'Stage': "Battle of Jing Province (Wu)",
			'Requirement': "Defeat Cai Mao and Lu Gong before Sun Jian is ambushed."
		}
	],
	'Zhou Tai': [
		{
			'Game': "DW4",
			'Name': "Dusk",
			'Rank': 4,
			'Base': 55,
			'Element': "-",
			'Stats': [],
			'Stage': "The Nanman Campaign",
			'Requirement': "Using Red Hare, quickly head towards Wu Tugu and defeat him. Then enter Meng Huo's base before Ahui Nan and Dong Tu Na defect to the Wu forces."
		}, {
			'Game': "DW4",
			'Name': "Setsuna",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Dragon Amulet: 14",
				"Wing Boots: 13",
				"Horned Helm: 18",
				"Elixir: 20"
			],
			'Stage': "Battle of Niu Zhu",
			'Requirement': "Rescue Sun Quan in under 1 minute and 30 seconds, and his four sub-officers (no time limit). Then defeat Taishi Ci and Liu Yong with 500 enemies defeated."
		}, {
			'Game': "DW5",
			'Name': "Dusk",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Fill: 16",
				"Speed: 15",
				"Attack: 17",
				"Musou: 18",
				"Life: 15"
			],
			'Stage': "Battle of Yi Ling (Wu)",
			'Requirement': "Zhou Tai must defeat Zhao Yun before the fire attack goes off. The fire attack must succeed."
		}
	],
	'Ling Tong': [
		{
			'Game': "DW5",
			'Name': "Dragon Fury",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 16",
				"Luck: 16",
				"Speed: 19",
				"Attack: 17",
				"Life: 15"
			],
			'Stage': "Battle of He Fei (Wu)",
			'Requirement': "Ling Tong must defeat Zhang Liao after each of his four appearances."
		}
	],
	'Sima Yi': [
		{
			'Game': "DW3",
			'Name': "Dark Feather",
			'Rank': 4,
			'Base': 40,
			'Element': "Lightning",
			'Stats': [
				"Attack: 28",
				"Bow Attack: 50",
				"Mounted Attack: 55",
				"Reach: 29",
				"Musou Charge: 26"
			],
			'Stage': "Battle at Wu Zhang Plains (Sima Yi's Forces)",
			'Requirement': "Defeat Zhang Bao and at the 70 minute mark a Supply Team will appear by Zhang Bao's starting position (make sure you defeat Zhang Bao before the 70 minute mark)."
		}, {
			'Game': "DW3",
			'Name': "Raven Feather",
			'Rank': 5,
			'Base': 40,
			'Element': "-",
			'Stats': [
				"Defender",
				"HP Max: 71",
				"Bow Defense: 55",
				"Reach: 30",
				"Musou Charge: 25"
			],
			'Stage': "Siege of He Fei Castle (Wei Forces)",
			'Requirement': "In order, defeat Lu Xun, Lu Meng, Sun Shang Xiang, and Gan Ning before the full attack message (9:00.00)."
		}, {
			'Game': "DW4",
			'Name': "Dark Feather",
			'Rank': 4,
			'Base': 50,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Wu Zhang Plains",
			'Requirement': "Defeat Ma Chao and Wei Yan."
		}, {
			'Game': "DW4",
			'Name': "Abyssal Feather",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tortoise Amulet: 18",
				"Nanman Armor: 15",
				"Cavalry Armor: 16",
				"Seven Star Sash: 11"
			],
			'Stage': "Battle of Mt. Qi",
			'Requirement': "Trigger the rain event manually, instead of it activating automatically, and defeat nine of the ten enemy generals."
		}, {
			'Game': "DW5",
			'Name': "Dark Feather",
			'Rank': 4,
			'Base': 32,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Defense: 16",
				"Musou: 19",
				"Fill: 15",
				"Attack: 15"
			],
			'Stage': "Battle of Chen Cang (Wei)",
			'Requirement': "Stop the siege machine lines by taking all three of the enemy defense bases along the south before any damage is done to your castle walls."
		}
	],
	'Diao Chan': [
		{
			'Game': "DW3",
			'Name': "Gold Globe",
			'Rank': 4,
			'Base': 40,
			'Element': "-",
			'Stats': [
				"Musou Max: 65",
				"Defense: 48",
				"Luck: 30",
				"Reach: 28",
				"Musou Charge: 30"
			],
			'Stage': "Battle of Hu Lao Gate (Dong Zhuo's Forces)",
			'Requirement': "Defeat Yuan Shu (he starts in the Southeastern area of the map)."
		}, {
			'Game': "DW3",
			'Name': "Imperial Mace",
			'Rank': 5,
			'Base': 40,
			'Element': "Fire",
			'Stats': [
				"Jump: 21",
				"HP Max: 72",
				"Attack: 25",
				"Reach: 30",
				"Musou Charge: 10"
			],
			'Stage': "Diao Chan's Escape (Xtreme) (Diao Chan's Forces)",
			'Requirement': "Defeat Lu Bu, and he will drop it."
		}, {
			'Game': "DW4",
			'Name': "Diva",
			'Rank': 4,
			'Base': 51,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Si Shui Gate",
			'Requirement': "Do not defeat any general until the messenger delivers the message of Hua Xiong being defeated. Then defeat two of the three officers - Cao Cao, Sun Jian, and Liu Bei."
		}, {
			'Game': "DW4",
			'Name': "Muse",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Dragon Amulet: 12",
				"Seven Star Sash: 15",
				"Elixir: 20",
				"Herbal Remedy: 14"
			],
			'Stage': "Assassinate Dong Zhuo!",
			'Requirement': "Defeat Hua Xiong in under 10 minutes."
		}, {
			'Game': "DW5",
			'Name': "Diva",
			'Rank': 4,
			'Base': 32,
			'Element': "Heavy",
			'Stats': [
				"Fill: 18",
				"Luck: 18",
				"Speed: 19",
				"Defense: 16",
				"Musou: 18"
			],
			'Stage': "Battle of Xia Pi",
			'Requirement': "Defeat all generals and sub-generals before Cao Cao arrives. The player must also prevent any allies from being defeated. Defeat the sub-generals in the west and Xiahou Dun and Xiahou Yuan will charge, so defeat them. Then defeat Liu Bei, Zhang Fei, and Guan Yu. Defeating the rest of the generals will trigger the Precious Item to appear in the southwest."
		}
	],
	'Lu Bu': [
		{
			'Game': "DW3",
			'Name': "Sky Scorcher",
			'Rank': 4,
			'Base': 50,
			'Element': "Lightning",
			'Stats': [
				"Jump: 24",
				"Musou: 90",
				"HP Max: 90",
				"Attack: 30",
				"Defense: 60"
			],
			'Stage': "Hu Lao Gate (Dong Zhuo's Forces)",
			'Requirement': "Defeat Guan Yu, Zhang Fei, and Liu Bei. Don't defeat Liu Bei first or Guan Yu and Zhang Fei will retreat."
		}, {
			'Game': "DW3",
			'Name': "Demon Slayer",
			'Rank': 5,
			'Base': 50,
			'Element': "Fire",
			'Stats': [
				"Red Hare Saddle",
				"Musou Max: 90",
				"HP Max: 90",
				"Attack: 30",
				"Reach: 30"
			],
			'Stage': "Battle at Chi Bi (Xtreme) (Lu Bu's Forces)",
			'Requirement': "Defeat Lu Meng, Huang Gai, Taishi Ci, and Gan Ning."
		}, {
			'Game': "DW4",
			'Name': "Sky Scorcher",
			'Rank': 4,
			'Base': 60,
			'Element': "-",
			'Stats': [],
			'Stage': "Lu Bu's Revolt (Lu Bu's Forces)",
			'Requirement': "Clear the entire map of enemies excluding Dong Zhuo, which also includes any ambush units. If you have not received the message, be sure to search around the stage for any ambush units you've failed to trigger."
		}, {
			'Game': "DW4",
			'Name': "Maelstrom",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tiger Amulet: 20",
				"Huang's Bow: 15",
				"Horned Helm: 15",
				"Herbal Remedy: 20"
			],
			'Stage': "Carnage at Hu Lao Gate",
			'Requirement': "Defeat 2000 enemies."
		}, {
			'Game': "DW5",
			'Name': "Sky Scorcher",
			'Rank': 4,
			'Base': 40,
			'Element': "Medium",
			'Stats': [
				"Horse: 20",
				"Defense: 20",
				"Attack: 20",
				"Musou: 19",
				"Life: 19"
			],
			'Stage': "Battle of Chang Shan",
			'Requirement': "Defeat 1000 enemies."
		}
	],
	'Dong Zhuo': [
		{
			'Game': "DW3",
			'Name': "Grand Star",
			'Rank': 4,
			'Base': 41,
			'Element': "Lightning",
			'Stats': [
				"HP Max: 70",
				"Defense: 45",
				"Reach: 25"
			],
			'Stage': "Hu Lao Gate (Dong Zhuo's Forces)",
			'Requirement': "Wait until the allied force has defeat all your generals but Lu Bu and Diao Chan. Diao Chan will betray to the allied forces side. Defeat Diao Chan. You will want to go out and keep Diao Chan safe while your officers are being defeated, but try not to kill to many soldiers of the allied force. Try not to kill any generals at all."
		}, {
			'Game': "DW3",
			'Name': "Black Steel",
			'Rank': 5,
			'Base': 41,
			'Element': "Demon",
			'Stats': [
				"Musou Max: 74",
				"Defense: 45",
				"Mounted Defense: 53",
				"Reach: 29",
				"Arrows: 30"
			],
			'Stage': "Battle at Wu Zhang Plains (Xtreme) (Dong Zhuo's Forces)",
			'Requirement': "Prevent bombardment of allied headquarters by defeating Pang Tong while Fen Chou is still alive then wait for allied reinforcements."
		}, {
			'Game': "DW4",
			'Name': "Horror",
			'Rank': 4,
			'Base': 57,
			'Element': "-",
			'Stats': [],
			'Stage': "Lu Bu's Revolt",
			'Requirement': "Defeat all enemy, except Lu Bu. That includes every single solider, gate keaper, officer and Lu Bu's bodyguards."
		}, {
			'Game': "DW4",
			'Name': "Pandemonium",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tiger Amulet: 17",
				"Wing Boots: 14",
				"Horned Helm: 20",
				"Cavalry Armor: 16"
			],
			'Stage': "The Ten Eunuchs",
			'Requirement': "Defeat the Ten Eunuchs with Yuan Shao alive. Defeat 100 enemies."
		}, {
			'Game': "DW5",
			'Name': "Horror",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Luck: 17",
				"Horse: 17",
				"Defense: 15",
				"Attack: 18",
				"Life: 15"
			],
			'Stage': "Battle of Liang Zhou (Dong Zhuo's Forces)",
			'Requirement': "After capturing all five of the enemy bases, defeat Ma Chao and Pang De."
		}
	],
	'Yuan Shao': [
		{
			'Game': "DW3",
			'Name': "Grand Master",
			'Rank': 4,
			'Base': 44,
			'Element': "-",
			'Stats': [
				"Jump: 20",
				"Musou Max: 78",
				"Defense: 54",
				"Bow Attack: 51",
				"Mounted Attack: 46"
			],
			'Stage': "Guan Du (Yuan Shao's Forces)",
			'Requirement': "Keep Wen Chou alive for 10 minutes. Go to his aid at the beginning of the battle, he will be in trouble quickly. As soon as he is safe, find and defeat Guan Yu (if Guan Yu gets near Wen Chou, Guan Yu will automatically kill Wen Chou). After defeating Guan Yu, return to Wen Chou and continue to protect him."
		}, {
			'Game': "DW3",
			'Name': "Imperial Saber",
			'Rank': 5,
			'Base': 44,
			'Element': "Fire",
			'Stats': [
				"Speed: 21",
				"Attack: 27",
				"Defense: 54",
				"Bow Defense: 49"
			],
			'Stage': "Battle at Hu Lao Gate (Xtreme) (Yuan Shao's Forces)",
			'Requirement': "With Liu Bei, Cao Cao, Sun Jian, and Lu Bu still alive, and before the Dong Zhuo ambush event, defeat Diao Chan."
		}, {
			'Game': "DW4",
			'Name': "Sword of Kings",
			'Rank': 4,
			'Base': 53,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Guan Du",
			'Requirement': "Head for the southern castle, and protect the battering ram until the castle wall falls."
		}, {
			'Game': "DW4",
			'Name': "Majesty",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Dragon Amulet: 15",
				"Wing Boots: 11",
				"Cavalry Armor: 19",
				"Herbal Remedy: 18"
			],
			'Stage': "Battle of Jie Qiao",
			'Requirement': "Defeat 100 enemies, and defeat each general as they appear, except Gongsun Zan."
		}, {
			'Game': "DW5",
			'Name': "Sword of Kings",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Fill: 15",
				"Horse: 15",
				"Bow: 15",
				"Defense: 18",
				"Musou: 17"
			],
			'Stage': "Battle of Guan Du (Yuan Shao's forces)",
			'Requirement': "Protect Yan Liang and Wen Chou, and demoralize Cao Cao's troops until they let you in the castle."
		}
	],
	'Zhang Jiao': [
		{
			'Game': "DW3",
			'Name': "Volcano Staff",
			'Rank': 4,
			'Base': 37,
			'Element': "Fire",
			'Stats': [
				"Musou Max: 72",
				"Attack: 43",
				"Reach: 27"
			],
			'Stage': "Yellow Turban Rebellion (Zhang Jiao's Forces)",
			'Requirement': "Defeat all three of Liu Bei's officers, all five of Cao Cao's officers, or all four of Sun Jian's officers."
		}, {
			'Game': "DW3",
			'Name': "Thunder Staff",
			'Rank': 5,
			'Base': 37,
			'Element': "Lightning",
			'Stats': [
				"HP Max: 68",
				"Defense: 43",
				"Mounted Defense: 55",
				"Luck: 18",
				"Meat Bun Recovery: 13"
			],
			'Stage': "Nanman Campaign (Xtreme) (Zhang Jiao's Forces)",
			'Requirement': "All 4 peasant units escape through southern central troop entry point."
		}, {
			'Game': "DW4",
			'Name': "Volcano Staff",
			'Rank': 4,
			'Base': 52,
			'Element': "-",
			'Stats': [],
			'Stage': "Yellow Turban Rebellion",
			'Requirement': "Defeat all the officers and generals, saving He Jin for last. When Dong Zhuo appears, defeat Hua Xiong and make sure Zhang Liang and Zhang Bao are alive till the end."
		}, {
			'Game': "DW4",
			'Name': "Staff of Peace",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Peacock Urn: 15",
				"Speed Scroll: 17",
				"Nanman Armor: 10",
				"Seven Star Sash: 20"
			],
			'Stage': "Yellow Turbans' Last Stand",
			'Requirement': "Eight minutes into the stage, defeat 100 enemies and 6 of the 7 enemy gates are closed."
		}, {
			'Game': "DW5",
			'Name': "Volcano Staff",
			'Rank': 4,
			'Base': 32,
			'Element': "Medium",
			'Stats': [
				"Attack: 15",
				"Musou: 17",
				"Luck: 15",
				"Fill: 9",
				"Charge: 16"
			],
			'Stage': "Yellow Turban Rebellion (Yellow Turban Forces)",
			'Requirement': "Rendezvous with Zhang Bao and Zhang Liang, brainwash Sun Jian and Cao Cao's armies, and successfully get Zhang Man Cheng to drop rocks on the enemy. No allies may be defeated."
		}
	],
	'Meng Huo': [
		{
			'Game': "DW3",
			'Name': "King of Beasts",
			'Rank': 4,
			'Base': 48,
			'Element': "Fire",
			'Stats': [
				"HP Max: 88",
				"Attack: 27",
				"Mounted Attack: 54",
				"Mounted Defense: 54"
			],
			'Stage': "Nanman Campaign (Nanman Forces)",
			'Requirement': "Defeat Ma Chao, Zhang Yi and Ma Dai or defeat Zhang Fei, Zhang Bao, and Guan Xing."
		}, {
			'Game': "DW3",
			'Name': "Shadow Beast",
			'Rank': 5,
			'Base': 48,
			'Element': "Lightning",
			'Stats': [
				"Speed: 24",
				"Attack: 30",
				"Mounted Attack: 54",
				"Luck: 13",
				"Musou Charge: 8"
			],
			'Stage': "Assault on the Wu Territory (Xtreme) (Nanman Forces)",
			'Requirement': "In order, defeat Lu Xun, Taishi Ci, Gan Ning, and then Lu Meng."
		}, {
			'Game': "DW4",
			'Name': "King of Beasts",
			'Rank': 4,
			'Base': 58,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Cheng Du",
			'Requirement': "Defeat Zhao Yun, Zhuge Liang, Yue Ying, Jiang Wei, Ma Chao, and Guan Yu. Ma Chao will appear as back-up for Liu Bei if Ma Su is defeated in combat."
		}, {
			'Game': "DW4",
			'Name': "King of Nanman",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tortoise Amulet: 17",
				"Speed Scroll: 15",
				"Wing Boots: 16",
				"Herbal Remedy: 20"
			],
			'Stage': "Nanman Warfare",
			'Requirement': "Defeat Xiahou He, Xiahou Hui, Xiahou Wei, Zhong Hui and Deng Ai. All allies must be rescued."
		}, {
			'Game': "DW5",
			'Name': "King of Beasts",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Charge: 15",
				"Fill: 15",
				"Horse: 15",
				"Attack: 18",
				"Life: 19"
			],
			'Stage': "Conquest of Nan Zhong",
			'Requirement': "Defeat Yue Ying, Huang Zhong and Wei Yan."
		}
	],
	'Zhu Rong': [
		{
			'Game': "DW3",
			'Name': "Magma Wheel",
			'Rank': 4,
			'Base': 42,
			'Element': "Fire",
			'Stats': [
				"Musou Max: 72",
				"Defense: 52",
				"Bow Defense: 52",
				"Reach: 26"
			],
			'Stage': "Nanman Campaign (Nanman Forces)",
			'Requirement': "Keep Dong Tu Na and Ahui Nan alive for 15 minutes so they can trigger an event together. After the escape event the item will appear."
		}, {
			'Game': "DW3",
			'Name': "Tri Blade",
			'Rank': 5,
			'Base': 42,
			'Element': "Wind",
			'Stats': [
				"HP Max: 78",
				"Attack: 25",
				"Reach: 26",
				"Arrows: 47"
			],
			'Stage': "Siege of He Fei Castle (Xtreme) (Nanman Forces)",
			'Requirement': "Defeat Xiao Qiao, Zhou Yu, Zhen Ji, Cao Pi, and Diao Chan. A cut scene will activate between Meng Huo and Zhu Rong, which will be followed by the precious item report."
		}, {
			'Game': "DW4",
			'Name': "Inferno",
			'Rank': 4,
			'Base': 53,
			'Element': "-",
			'Stats': [],
			'Stage': "Battle of Xu Chang",
			'Requirement': "The siege ramp must survive. Defeat Cao Zhang, Cao Hong, Man Chong, and Xiahou Dun."
		}, {
			'Game': "DW4",
			'Name': "Fire Goddess",
			'Rank': 5,
			'Base': 60,
			'Element': "-",
			'Stats': [
				"Tiger Amulet: 11",
				"Huang's Bow: 20",
				"Cavalry Armor: 15",
				"Elixir: 17"
			],
			'Stage': "Rescue of Meng Huo",
			'Requirement': "Get to Zhuge Liang without any soldiers noticing."
		}, {
			'Game': "DW5",
			'Name': "Inferno",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Charge: 16",
				"Fill: 17",
				"Bow: 15",
				"Defense: 15",
				"Musou: 18"
			],
			'Stage': "Invasion of Nan Zhong",
			'Requirement': "Wait until the elephant troops charge the camp, you mustn't destroy the bridge beforehand. Then defeat Gan Ning and Jiang Qin."
		}
	],
	'Zuo Ci': [
		{
			'Game': "DW5",
			'Name': "Trump Deck",
			'Rank': 4,
			'Base': 40,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Fill: 20",
				"Bow: 15",
				"Defense: 15",
				"Musou: 20"
			],
			'Stage': "Battle of Hu Lao Gate (Allied Forces)",
			'Requirement': "Defeat Lu Bu."
		}
	]
};
