// Create an array of weapons with Base Attack from DW5, then sort them from highest
let data = [];
for (let i in warriors) {
    for (let j = 0; j < warriors[i].length; j++) {
		if (warriors[i][j].Game == 'DW5') {
			data.push({
				'Name': i,
				'Weapon': warriors[i][j].Name,
				'Base': warriors[i][j].Base
			});
		}
	}
}
data.sort((a, b) => b.Base - a.Base);

// Create an array of weapons with Attack stat from DW5, then sort them from highest
let data = [];
for (let i in warriors) {
    for (let j = 0; j < warriors[i].length; j++) {
		if (warriors[i][j].Game == 'DW5') {
			for (let k = 0; k < warriors[i][j].Stats.length; k++) {
				let arr = warriors[i][j].Stats[k].split(': ');
				if (arr[0] == 'Attack') {
					data.push({
						'Name': i,
						'Weapon': warriors[i][j].Name,
						'Stat': warriors[i][j].Stats[k]
					});
				}
			}
		}
	}
}
data.sort((a, b) => b.Stat.split(': ')[1] - a.Stat.split(': ')[1]);
