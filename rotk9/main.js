window.onload = function () {
	const officerArray = new Array({
		"name": "Xiao He",
		"ldr": "58",
		"war": "21",
		"int": "86",
		"pol": "98"
	}, {
		"name": "Yang Daiyan",
		"ldr": "90",
		"war": "97",
		"int": "70",
		"pol": "59"
	}, {
		"name": "Ying Bu",
		"ldr": "88",
		"war": "98",
		"int": "62",
		"pol": "40"
	}, {
		"name": "Xiang Ji",
		"ldr": "96",
		"war": "100",
		"int": "57",
		"pol": "32"
	}, {
		"name": "Liu Bang",
		"ldr": "70",
		"war": "76",
		"int": "61",
		"pol": "77"
	}, {
		"name": "Qin Liangyu",
		"ldr": "94",
		"war": "86",
		"int": "85",
		"pol": "71"
	}, {
		"name": "Wang Jian",
		"ldr": "94",
		"war": "80",
		"int": "83",
		"pol": "79"
	}, {
		"name": "Ying Zheng",
		"ldr": "64",
		"war": "56",
		"int": "90",
		"pol": "99"
	}, {
		"name": "Ma Yunlu",
		"ldr": "80",
		"war": "91",
		"int": "59",
		"pol": "45"
	}, {
		"name": "Huang Yueying",
		"ldr": "60",
		"war": "21",
		"int": "94",
		"pol": "88"
	}, {
		"name": "Lu Lingqi",
		"ldr": "85",
		"war": "90",
		"int": "37",
		"pol": "18"
	}, {
		"name": "Zhang Yi",
		"ldr": "29",
		"war": "30",
		"int": "94",
		"pol": "96"
	}, {
		"name": "Yue Fei",
		"ldr": "95",
		"war": "91",
		"int": "87",
		"pol": "56"
	}, {
		"name": "Yue Yi",
		"ldr": "98",
		"war": "76",
		"int": "90",
		"pol": "95"
	}, {
		"name": "Zhang Liang",
		"ldr": "68",
		"war": "6",
		"int": "100",
		"pol": "94"
	}, {
		"name": "Lin Xiangru",
		"ldr": "38",
		"war": "47",
		"int": "92",
		"pol": "93"
	}, {
		"name": "Da Qiao",
		"ldr": "75",
		"war": "74",
		"int": "74",
		"pol": "80"
	}, {
		"name": "Bai Qi",
		"ldr": "99",
		"war": "91",
		"int": "74",
		"pol": "36"
	}, {
		"name": "Chen Qingzhi",
		"ldr": "96",
		"war": "25",
		"int": "91",
		"pol": "70"
	}, {
		"name": "Chengji Sihan",
		"ldr": "100",
		"war": "92",
		"int": "86",
		"pol": "73"
	}, {
		"name": "Kong Qiu",
		"ldr": "72",
		"war": "66",
		"int": "89",
		"pol": "85"
	}, {
		"name": "Li Ji",
		"ldr": "95",
		"war": "79",
		"int": "88",
		"pol": "85"
	}, {
		"name": "Li Si",
		"ldr": "25",
		"war": "24",
		"int": "88",
		"pol": "97"
	}, {
		"name": "Huo Qubing",
		"ldr": "92",
		"war": "93",
		"int": "52",
		"pol": "21"
	}, {
		"name": "Fan Zeng",
		"ldr": "46",
		"war": "4",
		"int": "95",
		"pol": "84"
	}, {
		"name": "Guan Yiwu",
		"ldr": "81",
		"war": "69",
		"int": "95",
		"pol": "100"
	}, {
		"name": "Han Xin",
		"ldr": "100",
		"war": "73",
		"int": "96",
		"pol": "77"
	});
	
	// Sort
	let i = 1;
	while (i < officerArray.length) {
		let j = i;
		while (j > 0 && officerArray[j - 1]['name'] > officerArray[j]['name']) {
			let temp = officerArray[j];
			officerArray[j] = officerArray[j - 1];
			officerArray[j - 1] = temp;
			j--;
		}
		i++;
	}
	
	// Generate
	let string = '';
	for (let i = 0; i < officerArray.length; i++) {
		let officer = officerArray[i];
		
		let total = parseInt(officer['ldr']) + parseInt(officer['war']) + parseInt(officer['int']) + parseInt(officer['pol']);
		
		string += `<div style="border: 1px solid #577; background: #233;">
				<div style="display: flex; flex-direction: column; align-items: center;">
					<div class="displayName">${officer['name']}</div>
					<div class="displayPortrait"><img src="portraits/${officer['name']}.jpg" alt="${officer['name']}"></div>
				</div>
				<div style="border-top: 1px solid #577;">
					<table class="stat">
						<tr>
							<th>LDR</th>
							<th>WAR</th>
							<th>INT</th>
							<th>POL</th>
							<th class="total">Total</th>
						</tr>
						<tr>
							<td class="number">${officer['ldr']}</td>
							<td class="number">${officer['war']}</td>
							<td class="number">${officer['int']}</td>
							<td class="number">${officer['pol']}</td>
							<td class="number total">${total}</td>
						</tr>
					</table>
				</div>
			</div>`;
	}
	
	document.getElementById('output').innerHTML = string;
}