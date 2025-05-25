const domesticSkills = ["Farm", "Trade", "Tech", "Repair", "Order", "Hire", "Drill"];
const battleSkills = ["Charge", "Missile", "Unison", "Settle", "Rally", "Surprise", "Distract"];
const tacticSkills = ["Blunder", "Stun", "Entice", "Confuse", "Aero", "Geo", "Maze"];
const duelSkills = ["Recover", "Shout", "Scare", "Parry", "Counter", "Crush", "Maul"];
const debateSkills = ["Awe", "Plead", "Refute", "Fault", "Argue", "Incite", "Taunt"];
const renownSkills = ["Warlord", "Hero", "Admiral", "Spy", "Host", "Doctor", "Wizard"];

const officerArray = new Array({
    "name": "Ahui Nan",
    "ldr": "62",
    "war": "74",
    "int": "26",
    "pol": "32",
    "chr": "41",
    "total": "235",
	"skills": ["Unison", "Shout", "Parry"]
}, {
    "name": "Bao Long",
    "ldr": "58",
    "war": "75",
    "int": "42",
    "pol": "19",
    "chr": "23",
    "total": "217",
	"skills": ["Farm", "Missile", "Counter"]
}, {
    "name": "Bao Xin",
    "ldr": "78",
    "war": "60",
    "int": "83",
    "pol": "73",
    "chr": "82",
    "total": "376",
	"skills": ["Farm", "Repair", "Hire", "Unison", "Settle", "Rally", "Distract", "Blunder", "Stun", "Awe", "Fault", "Argue", "Warlord", "Hero"]
}, {
    "name": "Bei Yan",
    "ldr": "63",
    "war": "66",
    "int": "20",
    "pol": "29",
    "chr": "54",
    "total": "232",
	"skills": ["Tech", "Unison", "Recover"]
}, {
    "name": "Bian Xi",
    "ldr": "52",
    "war": "70",
    "int": "62",
    "pol": "38",
    "chr": "10",
    "total": "232",
	"skills": ["Scare"]
}, {
    "name": "Bo Cai",
    "ldr": "69",
    "war": "75",
    "int": "52",
    "pol": "30",
    "chr": "35",
    "total": "261",
	"skills": ["Drill", "Charge", "Stun", "Recover", "Crush"]
}, {
    "name": "Bu Chan",
    "ldr": "68",
    "war": "60",
    "int": "72",
    "pol": "63",
    "chr": "61",
    "total": "324",
	"skills": ["Trade", "Repair", "Missile", "Entice", "Admiral"]
}, {
    "name": "Bu Dugen",
    "ldr": "64",
    "war": "73",
    "int": "50",
    "pol": "49",
    "chr": "61",
    "total": "297",
	"skills": ["Charge", "Surprise", "Shout"]
}, {
    "name": "Bu Xie",
    "ldr": "73",
    "war": "53",
    "int": "75",
    "pol": "65",
    "chr": "67",
    "total": "333",
	"skills": ["Trade", "Entice"]
}, {
    "name": "Bu Zhi",
    "ldr": "80",
    "war": "52",
    "int": "83",
    "pol": "86",
    "chr": "70",
    "total": "371",
	"skills": ["Farm", "Trade", "Repair", "Missile", "Settle", "Blunder", "Fault", "Argue", "Hero", "Admiral"]
}, {
    "name": "Cai He",
    "ldr": "41",
    "war": "49",
    "int": "2",
    "pol": "14",
    "chr": "23",
    "total": "129",
	"skills": []
}, {
    "name": "Cai Mao",
    "ldr": "79",
    "war": "64",
    "int": "77",
    "pol": "75",
    "chr": "56",
    "total": "351",
	"skills": ["Trade", "Hire", "Missile", "Confuse", "Awe", "Hero", "Admiral"]
}, {
    "name": "Cai Zhong",
    "ldr": "44",
    "war": "47",
    "int": "2",
    "pol": "10",
    "chr": "19",
    "total": "122",
	"skills": []
}, {
    "name": "Cao Ang",
    "ldr": "74",
    "war": "62",
    "int": "68",
    "pol": "74",
    "chr": "77",
    "total": "355",
	"skills": ["Order", "Missile", "Settle", "Rally", "Stun", "Shout", "Spy"]
}, {
    "name": "Cao Bao",
    "ldr": "55",
    "war": "70",
    "int": "34",
    "pol": "23",
    "chr": "26",
    "total": "208",
	"skills": ["Order", "Drill", "Blunder", "Parry"]
}, {
    "name": "Cao Cao",
    "ldr": "99",
    "war": "71",
    "int": "92",
    "pol": "96",
    "chr": "96",
    "total": "454",
	"skills": ["Farm", "Trade", "Tech", "Order", "Hire", "Charge", "Unison", "Settle", "Rally", "Surprise", "Distract", "Entice", "Confuse", "Geo", "Parry", "Awe", "Plead", "Fault", "Argue", "Incite", "Warlord", "Hero", "Spy", "Host"]
}, {
    "name": "Cao Chong",
    "ldr": "14",
    "war": "7",
    "int": "80",
    "pol": "74",
    "chr": "77",
    "total": "252",
	"skills": ["Tech", "Blunder", "Geo", "Plead", "Fault"]
}, {
    "name": "Cao Chun",
    "ldr": "76",
    "war": "71",
    "int": "62",
    "pol": "43",
    "chr": "75",
    "total": "327",
	"skills": ["Drill", "Charge", "Surprise", "Crush"]
}, {
    "name": "Cao Fang",
    "ldr": "3",
    "war": "8",
    "int": "28",
    "pol": "54",
    "chr": "71",
    "total": "164",
	"skills": ["Host"]
}, {
    "name": "Cao Hong",
    "ldr": "82",
    "war": "80",
    "int": "47",
    "pol": "40",
    "chr": "54",
    "total": "303",
	"skills": ["Trade", "Hire", "Charge", "Shout", "Parry", "Counter"]
}, {
    "name": "Cao Huan",
    "ldr": "14",
    "war": "13",
    "int": "31",
    "pol": "40",
    "chr": "64",
    "total": "162",
	"skills": ["Trade"]
}, {
    "name": "Cao Mao",
    "ldr": "57",
    "war": "43",
    "int": "59",
    "pol": "72",
    "chr": "76",
    "total": "307",
	"skills": ["Order", "Spy"]
}, {
    "name": "Cao Pi",
    "ldr": "64",
    "war": "70",
    "int": "86",
    "pol": "87",
    "chr": "84",
    "total": "391",
	"skills": ["Trade", "Tech", "Missile", "Settle", "Stun", "Confuse", "Counter", "Awe", "Plead", "Refute", "Hero", "Spy"]
}, {
    "name": "Cao Ren",
    "ldr": "90",
    "war": "88",
    "int": "60",
    "pol": "53",
    "chr": "80",
    "total": "371",
	"skills": ["Repair", "Hire", "Charge", "Unison", "Rally", "Surprise", "Stun", "Shout", "Scare", "Crush", "Maul"]
}, {
    "name": "Cao Rui",
    "ldr": "75",
    "war": "48",
    "int": "84",
    "pol": "82",
    "chr": "90",
    "total": "379",
	"skills": ["Tech", "Repair", "Unison", "Settle", "Rally", "Entice", "Confuse", "Plead", "Fault", "Argue", "Hero"]
}, {
    "name": "Cao Shuang",
    "ldr": "37",
    "war": "34",
    "int": "30",
    "pol": "69",
    "chr": "48",
    "total": "218",
	"skills": ["Trade", "Host"]
}, {
    "name": "Cao Xi",
    "ldr": "30",
    "war": "26",
    "int": "58",
    "pol": "69",
    "chr": "45",
    "total": "228",
	"skills": ["Tech", "Settle", "Confuse"]
}, {
    "name": "Cao Xing",
    "ldr": "55",
    "war": "74",
    "int": "39",
    "pol": "28",
    "chr": "34",
    "total": "230",
	"skills": ["Missile", "Parry"]
}, {
    "name": "Cao Xiong",
    "ldr": "7",
    "war": "3",
    "int": "53",
    "pol": "65",
    "chr": "67",
    "total": "195",
	"skills": []
}, {
    "name": "Cao Xiu",
    "ldr": "76",
    "war": "75",
    "int": "63",
    "pol": "59",
    "chr": "69",
    "total": "342",
	"skills": ["Order", "Drill", "Missile", "Unison", "Surprise", "Stun", "Shout", "Parry"]
}, {
    "name": "Cao Xun",
    "ldr": "19",
    "war": "37",
    "int": "7",
    "pol": "13",
    "chr": "26",
    "total": "102",
	"skills": ["Farm"]
}, {
    "name": "Cao Yu",
    "ldr": "49",
    "war": "44",
    "int": "35",
    "pol": "52",
    "chr": "60",
    "total": "240",
	"skills": ["Tech", "Blunder"]
}, {
    "name": "Cao Zhang",
    "ldr": "84",
    "war": "88",
    "int": "39",
    "pol": "38",
    "chr": "68",
    "total": "317",
	"skills": ["Charge", "Rally", "Surprise", "Stun", "Scare", "Parry", "Crush", "Maul"]
}, {
    "name": "Cao Zhen",
    "ldr": "88",
    "war": "72",
    "int": "67",
    "pol": "71",
    "chr": "87",
    "total": "385",
	"skills": ["Repair", "Order", "Hire", "Unison", "Settle", "Rally", "Distract", "Stun", "Recover", "Hero"]
}, {
    "name": "Cao Zhi",
    "ldr": "20",
    "war": "22",
    "int": "85",
    "pol": "70",
    "chr": "79",
    "total": "276",
	"skills": ["Rally", "Plead", "Fault", "Incite", "Hero", "Host"]
}, {
    "name": "Cen Hun",
    "ldr": "1",
    "war": "2",
    "int": "30",
    "pol": "7",
    "chr": "2",
    "total": "42",
	"skills": []
}, {
    "name": "Che Zhou",
    "ldr": "49",
    "war": "57",
    "int": "36",
    "pol": "51",
    "chr": "51",
    "total": "244",
	"skills": ["Repair"]
}, {
    "name": "Chen Biao",
    "ldr": "62",
    "war": "49",
    "int": "74",
    "pol": "78",
    "chr": "70",
    "total": "333",
	"skills": ["Blunder"]
}, {
    "name": "Chen Dao",
    "ldr": "79",
    "war": "74",
    "int": "65",
    "pol": "50",
    "chr": "72",
    "total": "340",
	"skills": ["Repair", "Charge", "Missile", "Recover", "Counter"]
}, {
    "name": "Chen Deng",
    "ldr": "84",
    "war": "63",
    "int": "80",
    "pol": "82",
    "chr": "59",
    "total": "368",
	"skills": ["Trade", "Hire", "Missile", "Unison", "Distract", "Blunder", "Stun", "Entice", "Awe", "Fault", "Hero", "Spy"]
}, {
    "name": "Chen Gong",
    "ldr": "74",
    "war": "55",
    "int": "89",
    "pol": "83",
    "chr": "69",
    "total": "370",
	"skills": ["Farm", "Tech", "Hire", "Missile", "Settle", "Distract", "Blunder", "Stun", "Geo", "Plead", "Refute", "Fault", "Warlord", "Spy"]
}, {
    "name": "Chen Gui",
    "ldr": "16",
    "war": "5",
    "int": "83",
    "pol": "79",
    "chr": "71",
    "total": "254",
	"skills": ["Trade", "Blunder", "Confuse", "Plead", "Warlord", "Hero", "Spy"]
}, {
    "name": "Chen Heng",
    "ldr": "63",
    "war": "64",
    "int": "25",
    "pol": "28",
    "chr": "42",
    "total": "222",
	"skills": ["Recover"]
}, {
    "name": "Chen Ji",
    "ldr": "58",
    "war": "67",
    "int": "46",
    "pol": "52",
    "chr": "31",
    "total": "254",
	"skills": ["Trade", "Blunder"]
}, {
    "name": "Chen Jiao",
    "ldr": "41",
    "war": "26",
    "int": "77",
    "pol": "84",
    "chr": "65",
    "total": "293",
	"skills": ["Trade", "Entice", "Fault", "Hero"]
}, {
    "name": "Chen Lan",
    "ldr": "65",
    "war": "70",
    "int": "43",
    "pol": "21",
    "chr": "26",
    "total": "225",
	"skills": ["Crush"]
}, {
    "name": "Chen Lin",
    "ldr": "8",
    "war": "8",
    "int": "73",
    "pol": "81",
    "chr": "72",
    "total": "242",
	"skills": ["Farm", "Rally", "Confuse", "Fault", "Incite", "Hero"]
}, {
    "name": "Chen Qian",
    "ldr": "72",
    "war": "67",
    "int": "65",
    "pol": "62",
    "chr": "51",
    "total": "317",
	"skills": ["Repair", "Charge", "Surprise", "Blunder", "Entice", "Counter", "Hero"]
}, {
    "name": "Chen Qun",
    "ldr": "28",
    "war": "14",
    "int": "78",
    "pol": "97",
    "chr": "77",
    "total": "294",
	"skills": ["Farm", "Trade", "Tech", "Repair", "Plead", "Hero"]
}, {
    "name": "Chen Shi",
    "ldr": "73",
    "war": "67",
    "int": "31",
    "pol": "27",
    "chr": "22",
    "total": "220",
	"skills": ["Tech", "Missile", "Geo", "Parry"]
}, {
    "name": "Chen Shou",
    "ldr": "15",
    "war": "22",
    "int": "60",
    "pol": "71",
    "chr": "39",
    "total": "207",
	"skills": ["Confuse"]
}, {
    "name": "Chen Tai",
    "ldr": "85",
    "war": "73",
    "int": "85",
    "pol": "75",
    "chr": "75",
    "total": "393",
	"skills": ["Tech", "Hire", "Missile", "Unison", "Settle", "Distract", "Blunder", "Entice", "Geo", "Recover", "Awe", "Fault", "Warlord", "Hero", "Spy"]
}, {
    "name": "Chen Wu",
    "ldr": "74",
    "war": "88",
    "int": "47",
    "pol": "40",
    "chr": "63",
    "total": "312",
	"skills": ["Drill", "Charge", "Unison", "Stun", "Recover", "Shout", "Crush", "Maul", "Admiral"]
}, {
    "name": "Chen Ying",
    "ldr": "62",
    "war": "69",
    "int": "49",
    "pol": "27",
    "chr": "18",
    "total": "225",
	"skills": ["Missile", "Recover"]
}, {
    "name": "Chen Zhen",
    "ldr": "46",
    "war": "54",
    "int": "66",
    "pol": "76",
    "chr": "78",
    "total": "320",
	"skills": ["Trade", "Confuse", "Fault", "Spy"]
}, {
    "name": "Cheng Bing",
    "ldr": "17",
    "war": "13",
    "int": "66",
    "pol": "76",
    "chr": "78",
    "total": "250",
	"skills": ["Trade", "Blunder", "Plead"]
}, {
    "name": "Cheng Gongying",
    "ldr": "73",
    "war": "58",
    "int": "80",
    "pol": "70",
    "chr": "68",
    "total": "349",
	"skills": ["Tech", "Hire", "Missile", "Settle", "Surprise", "Blunder", "Counter", "Awe"]
}, {
    "name": "Cheng Pu",
    "ldr": "85",
    "war": "83",
    "int": "78",
    "pol": "73",
    "chr": "85",
    "total": "404",
	"skills": ["Tech", "Repair", "Order", "Hire", "Missile", "Unison", "Settle", "Distract", "Blunder", "Stun", "Recover", "Maul", "Awe", "Warlord", "Admiral"]
}, {
    "name": "Cheng Wu",
    "ldr": "52",
    "war": "33",
    "int": "76",
    "pol": "71",
    "chr": "51",
    "total": "283",
	"skills": ["Farm"]
}, {
    "name": "Cheng Yi",
    "ldr": "64",
    "war": "71",
    "int": "40",
    "pol": "45",
    "chr": "52",
    "total": "272",
	"skills": ["Charge", "Crush"]
}, {
    "name": "Cheng Yin",
    "ldr": "76",
    "war": "68",
    "int": "46",
    "pol": "35",
    "chr": "46",
    "total": "271",
	"skills": ["Drill", "Charge", "Surprise", "Shout"]
}, {
    "name": "Cheng Yu",
    "ldr": "77",
    "war": "56",
    "int": "92",
    "pol": "85",
    "chr": "50",
    "total": "360",
	"skills": ["Trade", "Repair", "Hire", "Unison", "Settle", "Distract", "Stun", "Entice", "Confuse", "Geo", "Awe", "Plead", "Fault", "Warlord", "Hero"]
}, {
    "name": "Cheng Yuanzhi",
    "ldr": "68",
    "war": "74",
    "int": "18",
    "pol": "25",
    "chr": "28",
    "total": "213",
	"skills": ["Charge", "Parry", "Crush"]
}, {
    "name": "Chunyu Qiong",
    "ldr": "76",
    "war": "67",
    "int": "32",
    "pol": "31",
    "chr": "33",
    "total": "239",
	"skills": ["Charge", "Unison", "Recover", "Host"]
}, {
    "name": "Cui Yan",
    "ldr": "21",
    "war": "56",
    "int": "70",
    "pol": "79",
    "chr": "76",
    "total": "302",
	"skills": ["Trade", "Geo", "Plead", "Fault", "Hero"]
}, {
    "name": "Dai Ling",
    "ldr": "64",
    "war": "75",
    "int": "45",
    "pol": "36",
    "chr": "51",
    "total": "271",
	"skills": ["Recover"]
}, {
    "name": "Dailai Dongzhu",
    "ldr": "51",
    "war": "56",
    "int": "55",
    "pol": "44",
    "chr": "65",
    "total": "271",
	"skills": ["Recover"]
}, {
    "name": "Dang Jun",
    "ldr": "33",
    "war": "19",
    "int": "81",
    "pol": "73",
    "chr": "41",
    "total": "247",
	"skills": ["Trade", "Blunder", "Spy"]
}, {
    "name": "Deng Ai",
    "ldr": "94",
    "war": "87",
    "int": "89",
    "pol": "82",
    "chr": "70",
    "total": "422",
	"skills": ["Farm", "Tech", "Drill", "Charge", "Missile", "Unison", "Settle", "Surprise", "Distract", "Stun", "Entice", "Geo", "Recover", "Parry", "Counter", "Awe", "Spy"]
}, {
    "name": "Deng Mao",
    "ldr": "60",
    "war": "76",
    "int": "31",
    "pol": "17",
    "chr": "37",
    "total": "221",
	"skills": ["Scare", "Maul"]
}, {
    "name": "Deng Xian",
    "ldr": "63",
    "war": "70",
    "int": "45",
    "pol": "36",
    "chr": "49",
    "total": "263",
	"skills": ["Blunder", "Scare"]
}, {
    "name": "Deng Zhi",
    "ldr": "75",
    "war": "51",
    "int": "76",
    "pol": "86",
    "chr": "88",
    "total": "376",
	"skills": ["Farm", "Trade", "Repair", "Missile", "Settle", "Rally", "Stun", "Entice", "Plead", "Refute", "Fault", "Argue", "Spy"]
}, {
    "name": "Deng Zhong",
    "ldr": "70",
    "war": "82",
    "int": "66",
    "pol": "51",
    "chr": "88",
    "total": "357",
	"skills": ["Farm", "Hire", "Missile", "Unison", "Surprise", "Blunder", "Geo", "Scare", "Counter"]
}, {
    "name": "Dian Man",
    "ldr": "52",
    "war": "74",
    "int": "38",
    "pol": "25",
    "chr": "56",
    "total": "245",
	"skills": ["Order", "Charge", "Shout"]
}, {
    "name": "Dian Wei",
    "ldr": "59",
    "war": "94",
    "int": "34",
    "pol": "31",
    "chr": "56",
    "total": "274",
	"skills": ["Order", "Stun", "Recover", "Shout", "Scare", "Parry", "Crush", "Host"]
}, {
    "name": "Ding Feng",
    "ldr": "81",
    "war": "84",
    "int": "70",
    "pol": "54",
    "chr": "56",
    "total": "345",
	"skills": ["Order", "Charge", "Unison", "Surprise", "Stun", "Recover", "Scare", "Maul", "Admiral"]
}, {
    "name": "Ding Feng (2)",
    "ldr": "67",
    "war": "68",
    "int": "52",
    "pol": "41",
    "chr": "59",
    "total": "287",
	"skills": ["Repair", "Unison", "Counter"]
}, {
    "name": "Ding Yi",
    "ldr": "17",
    "war": "3",
    "int": "66",
    "pol": "70",
    "chr": "28",
    "total": "184",
	"skills": ["Confuse"]
}, {
    "name": "Ding Yuan",
    "ldr": "72",
    "war": "76",
    "int": "37",
    "pol": "47",
    "chr": "74",
    "total": "306",
	"skills": ["Order", "Charge", "Surprise", "Scare", "Parry"]
}, {
    "name": "Dong Chao",
    "ldr": "16",
    "war": "15",
    "int": "51",
    "pol": "69",
    "chr": "67",
    "total": "218",
	"skills": ["Farm"]
}, {
    "name": "Dong Cheng",
    "ldr": "57",
    "war": "56",
    "int": "68",
    "pol": "61",
    "chr": "74",
    "total": "316",
	"skills": ["Trade", "Unison", "Settle", "Blunder", "Hero"]
}, {
    "name": "Dong He",
    "ldr": "59",
    "war": "35",
    "int": "73",
    "pol": "84",
    "chr": "71",
    "total": "322",
	"skills": ["Farm", "Trade", "Repair", "Fault", "Hero"]
}, {
    "name": "Dong Jue",
    "ldr": "67",
    "war": "61",
    "int": "75",
    "pol": "80",
    "chr": "63",
    "total": "346",
	"skills": ["Trade", "Tech", "Missile", "Blunder", "Fault"]
}, {
    "name": "Dong Min",
    "ldr": "51",
    "war": "60",
    "int": "22",
    "pol": "6",
    "chr": "20",
    "total": "159",
	"skills": ["Charge"]
}, {
    "name": "Dong Tuna",
    "ldr": "67",
    "war": "74",
    "int": "33",
    "pol": "37",
    "chr": "49",
    "total": "260",
	"skills": ["Scare"]
}, {
    "name": "Dong Xi",
    "ldr": "71",
    "war": "80",
    "int": "52",
    "pol": "43",
    "chr": "58",
    "total": "304",
	"skills": ["Hire", "Missile", "Unison", "Surprise", "Stun", "Counter", "Crush", "Maul", "Admiral"]
}, {
    "name": "Dong Yun",
    "ldr": "38",
    "war": "22",
    "int": "78",
    "pol": "91",
    "chr": "72",
    "total": "301",
	"skills": ["Farm", "Trade", "Repair", "Rally", "Plead", "Fault", "Hero"]
}, {
    "name": "Dong Zhao",
    "ldr": "21",
    "war": "27",
    "int": "80",
    "pol": "89",
    "chr": "60",
    "total": "277",
	"skills": ["Farm", "Trade", "Tech", "Blunder", "Geo", "Plead", "Warlord", "Hero"]
}, {
    "name": "Dong Zhuo",
    "ldr": "81",
    "war": "83",
    "int": "68",
    "pol": "22",
    "chr": "36",
    "total": "290",
	"skills": ["Hire", "Charge", "Missile", "Blunder", "Stun", "Recover", "Scare", "Awe", "Host"]
}, {
    "name": "Du Yu",
    "ldr": "86",
    "war": "30",
    "int": "85",
    "pol": "80",
    "chr": "81",
    "total": "362",
	"skills": ["Tech", "Repair", "Order", "Drill", "Missile", "Unison", "Settle", "Distract", "Blunder", "Confuse", "Awe", "Hero", "Admiral", "Spy"]
}, {
    "name": "E Huan",
    "ldr": "60",
    "war": "83",
    "int": "49",
    "pol": "24",
    "chr": "50",
    "total": "266",
	"skills": ["Order", "Recover", "Parry", "Maul"]
}, {
    "name": "Ehe Shaoge",
    "ldr": "61",
    "war": "76",
    "int": "1",
    "pol": "12",
    "chr": "32",
    "total": "182",
	"skills": ["Charge", "Shout", "Scare"]
}, {
    "name": "Fa Zheng",
    "ldr": "79",
    "war": "53",
    "int": "95",
    "pol": "82",
    "chr": "51",
    "total": "360",
	"skills": ["Trade", "Tech", "Missile", "Settle", "Distract", "Blunder", "Entice", "Confuse", "Geo", "Awe", "Fault", "Incite", "Warlord", "Spy"]
}, {
    "name": "Fan Chou",
    "ldr": "73",
    "war": "76",
    "int": "34",
    "pol": "26",
    "chr": "36",
    "total": "245",
	"skills": ["Charge", "Maul"]
}, {
    "name": "Fan Jian",
    "ldr": "45",
    "war": "29",
    "int": "71",
    "pol": "81",
    "chr": "73",
    "total": "299",
	"skills": ["Farm", "Trade", "Missile", "Blunder"]
}, {
    "name": "Fan Neng",
    "ldr": "70",
    "war": "61",
    "int": "47",
    "pol": "31",
    "chr": "57",
    "total": "266",
	"skills": ["Tech", "Repair", "Hire", "Unison", "Settle", "Stun", "Parry"]
}, {
    "name": "Fang Yue",
    "ldr": "58",
    "war": "82",
    "int": "28",
    "pol": "17",
    "chr": "23",
    "total": "208",
	"skills": ["Shout", "Counter", "Maul"]
}, {
    "name": "Fei Shi",
    "ldr": "14",
    "war": "28",
    "int": "63",
    "pol": "69",
    "chr": "65",
    "total": "239",
	"skills": ["Farm", "Confuse", "Fault"]
}, {
    "name": "Fei Yao",
    "ldr": "70",
    "war": "65",
    "int": "73",
    "pol": "61",
    "chr": "67",
    "total": "336",
	"skills": ["Charge", "Entice", "Crush"]
}, {
    "name": "Fei Yi",
    "ldr": "73",
    "war": "29",
    "int": "84",
    "pol": "94",
    "chr": "83",
    "total": "363",
	"skills": ["Farm", "Trade", "Repair", "Order", "Settle", "Awe", "Plead", "Refute", "Fault", "Hero", "Spy", "Host"]
}, {
    "name": "Feng Ji",
    "ldr": "27",
    "war": "22",
    "int": "84",
    "pol": "69",
    "chr": "36",
    "total": "238",
	"skills": ["Trade", "Blunder", "Entice", "Warlord", "Hero", "Spy"]
}, {
    "name": "Feng Xi",
    "ldr": "73",
    "war": "66",
    "int": "40",
    "pol": "42",
    "chr": "64",
    "total": "285",
	"skills": ["Unison", "Maul"]
}, {
    "name": "Fu Jia",
    "ldr": "44",
    "war": "36",
    "int": "85",
    "pol": "92",
    "chr": "69",
    "total": "326",
	"skills": ["Farm", "Trade", "Tech", "Plead", "Hero"]
}, {
    "name": "Fu Qian",
    "ldr": "75",
    "war": "82",
    "int": "73",
    "pol": "42",
    "chr": "55",
    "total": "327",
	"skills": ["Tech", "Drill", "Charge", "Unison", "Surprise", "Stun", "Geo", "Recover", "Crush", "Maul"]
}, {
    "name": "Fu Shiren",
    "ldr": "42",
    "war": "61",
    "int": "28",
    "pol": "19",
    "chr": "12",
    "total": "162",
	"skills": ["Missile"]
}, {
    "name": "Fu Tong",
    "ldr": "65",
    "war": "72",
    "int": "46",
    "pol": "47",
    "chr": "63",
    "total": "293",
	"skills": ["Tech", "Stun", "Shout"]
}, {
    "name": "Fu Xun",
    "ldr": "13",
    "war": "10",
    "int": "70",
    "pol": "71",
    "chr": "45",
    "total": "209",
	"skills": ["Trade", "Entice", "Hero"]
}, {
    "name": "Gan Ning",
    "ldr": "88",
    "war": "93",
    "int": "75",
    "pol": "20",
    "chr": "55",
    "total": "331",
	"skills": ["Hire", "Drill", "Charge", "Unison", "Rally", "Surprise", "Distract", "Stun", "Shout", "Scare", "Parry", "Crush", "Maul", "Admiral", "Host"]
}, {
    "name": "Gao Ding",
    "ldr": "55",
    "war": "62",
    "int": "38",
    "pol": "48",
    "chr": "53",
    "total": "256",
	"skills": ["Recover"]
}, {
    "name": "Gao Gan",
    "ldr": "74",
    "war": "59",
    "int": "60",
    "pol": "62",
    "chr": "66",
    "total": "321",
	"skills": ["Repair", "Hire", "Settle", "Stun", "Hero"]
}, {
    "name": "Gao Lan",
    "ldr": "75",
    "war": "82",
    "int": "67",
    "pol": "55",
    "chr": "61",
    "total": "340",
	"skills": ["Drill", "Unison", "Stun", "Scare", "Counter", "Crush"]
}, {
    "name": "Gao Pei",
    "ldr": "66",
    "war": "62",
    "int": "72",
    "pol": "51",
    "chr": "41",
    "total": "292",
	"skills": ["Repair", "Missile", "Geo"]
}, {
    "name": "Gao Rou",
    "ldr": "56",
    "war": "44",
    "int": "73",
    "pol": "82",
    "chr": "76",
    "total": "331",
	"skills": ["Order", "Blunder", "Hero"]
}, {
    "name": "Gao Sheng",
    "ldr": "63",
    "war": "73",
    "int": "40",
    "pol": "21",
    "chr": "22",
    "total": "219",
	"skills": ["Parry"]
}, {
    "name": "Gao Shun",
    "ldr": "89",
    "war": "85",
    "int": "51",
    "pol": "42",
    "chr": "67",
    "total": "334",
	"skills": ["Drill", "Charge", "Surprise", "Stun", "Shout", "Parry", "Crush", "Maul"]
}, {
    "name": "Gao Xiang",
    "ldr": "68",
    "war": "67",
    "int": "51",
    "pol": "43",
    "chr": "54",
    "total": "283",
	"skills": ["Repair", "Missile", "Scare"]
}, {
    "name": "Gong Du",
    "ldr": "55",
    "war": "72",
    "int": "25",
    "pol": "23",
    "chr": "32",
    "total": "207",
	"skills": ["Recover"]
}, {
    "name": "Gong Zhi",
    "ldr": "45",
    "war": "59",
    "int": "61",
    "pol": "63",
    "chr": "52",
    "total": "280",
	"skills": ["Repair", "Missile", "Blunder"]
}, {
    "name": "Gongsun Du",
    "ldr": "69",
    "war": "67",
    "int": "71",
    "pol": "67",
    "chr": "19",
    "total": "293",
	"skills": ["Farm", "Missile", "Blunder", "Entice"]
}, {
    "name": "Gongsun Fan",
    "ldr": "77",
    "war": "66",
    "int": "63",
    "pol": "57",
    "chr": "61",
    "total": "324",
	"skills": ["Hire", "Unison", "Blunder"]
}, {
    "name": "Gongsun Gong",
    "ldr": "40",
    "war": "24",
    "int": "64",
    "pol": "61",
    "chr": "47",
    "total": "236",
	"skills": ["Trade", "Confuse", "Fault"]
}, {
    "name": "Gongsun Kang",
    "ldr": "74",
    "war": "60",
    "int": "68",
    "pol": "70",
    "chr": "57",
    "total": "329",
	"skills": ["Order", "Settle", "Entice"]
}, {
    "name": "Gongsun Xu",
    "ldr": "60",
    "war": "69",
    "int": "53",
    "pol": "61",
    "chr": "62",
    "total": "305",
	"skills": ["Order", "Missile", "Surprise"]
}, {
    "name": "Gongsun Yuan",
    "ldr": "67",
    "war": "69",
    "int": "58",
    "pol": "50",
    "chr": "51",
    "total": "295",
	"skills": ["Tech", "Charge", "Blunder", "Confuse", "Recover"]
}, {
    "name": "Gongsun Yue",
    "ldr": "72",
    "war": "71",
    "int": "48",
    "pol": "53",
    "chr": "65",
    "total": "309",
	"skills": ["Drill", "Charge", "Recover"]
}, {
    "name": "Gongsun Zan",
    "ldr": "85",
    "war": "84",
    "int": "67",
    "pol": "66",
    "chr": "79",
    "total": "381",
	"skills": ["Tech", "Repair", "Drill", "Charge", "Unison", "Rally", "Surprise", "Stun", "Recover", "Scare", "Crush", "Maul"]
}, {
    "name": "Gu Tan",
    "ldr": "33",
    "war": "21",
    "int": "69",
    "pol": "79",
    "chr": "75",
    "total": "277",
	"skills": ["Farm", "Blunder", "Hero"]
}, {
    "name": "Gu Yong",
    "ldr": "43",
    "war": "18",
    "int": "81",
    "pol": "94",
    "chr": "78",
    "total": "314",
	"skills": ["Trade", "Tech", "Order", "Settle", "Blunder", "Plead", "Fault", "Hero"]
}, {
    "name": "Guan Hai",
    "ldr": "71",
    "war": "80",
    "int": "14",
    "pol": "6",
    "chr": "25",
    "total": "196",
	"skills": ["Charge", "Surprise", "Stun", "Shout", "Counter", "Crush"]
}, {
    "name": "Guan Jing",
    "ldr": "35",
    "war": "50",
    "int": "73",
    "pol": "68",
    "chr": "51",
    "total": "277",
	"skills": ["Trade", "Missile", "Blunder", "Entice", "Warlord"]
}, {
    "name": "Guan Ping",
    "ldr": "77",
    "war": "81",
    "int": "69",
    "pol": "55",
    "chr": "75",
    "total": "357",
	"skills": ["Order", "Drill", "Missile", "Unison", "Distract", "Entice", "Shout", "Parry", "Crush"]
}, {
    "name": "Guanqiu Dian",
    "ldr": "63",
    "war": "58",
    "int": "68",
    "pol": "70",
    "chr": "58",
    "total": "317",
	"skills": ["Order", "Blunder"]
}, {
    "name": "Guanqiu Jian",
    "ldr": "79",
    "war": "74",
    "int": "51",
    "pol": "58",
    "chr": "53",
    "total": "315",
	"skills": ["Farm", "Tech", "Order", "Missile", "Surprise", "Entice", "Recover", "Parry"]
}, {
    "name": "Guanqiu Xiu",
    "ldr": "58",
    "war": "63",
    "int": "35",
    "pol": "38",
    "chr": "51",
    "total": "245",
	"skills": ["Settle"]
}, {
    "name": "Guan Suo",
    "ldr": "72",
    "war": "82",
    "int": "55",
    "pol": "49",
    "chr": "70",
    "total": "328",
	"skills": ["Unison", "Distract", "Recover", "Counter", "Crush", "Maul"]
}, {
    "name": "Guan Tong",
    "ldr": "64",
    "war": "58",
    "int": "60",
    "pol": "62",
    "chr": "72",
    "total": "316",
	"skills": ["Repair"]
}, {
    "name": "Guan Xing",
    "ldr": "76",
    "war": "86",
    "int": "63",
    "pol": "52",
    "chr": "72",
    "total": "349",
	"skills": ["Order", "Charge", "Unison", "Stun", "Recover", "Scare", "Counter", "Maul"]
}, {
    "name": "Guan Yi",
    "ldr": "43",
    "war": "65",
    "int": "49",
    "pol": "48",
    "chr": "63",
    "total": "268",
	"skills": ["Order", "Missile", "Rally", "Stun"]
}, {
    "name": "Guan Yu",
    "ldr": "96",
    "war": "97",
    "int": "76",
    "pol": "64",
    "chr": "93",
    "total": "426",
	"skills": ["Trade", "Hire", "Drill", "Charge", "Unison", "Settle", "Rally", "Surprise", "Distract", "Stun", "Entice", "Recover", "Shout", "Scare", "Parry", "Counter", "Maul", "Awe", "Warlord", "Host"]
}, {
    "name": "Guo Huai",
    "ldr": "86",
    "war": "77",
    "int": "82",
    "pol": "75",
    "chr": "78",
    "total": "398",
	"skills": ["Repair", "Order", "Hire", "Charge", "Unison", "Settle", "Rally", "Distract", "Stun", "Entice", "Geo", "Shout", "Crush", "Spy"]
}, {
    "name": "Guo Jia",
    "ldr": "52",
    "war": "12",
    "int": "97",
    "pol": "82",
    "chr": "80",
    "total": "323",
	"skills": ["Tech", "Blunder", "Entice", "Confuse", "Fault", "Argue", "Incite", "Warlord", "Hero", "Spy", "Host"]
}, {
    "name": "Guo Ma",
    "ldr": "68",
    "war": "71",
    "int": "49",
    "pol": "30",
    "chr": "50",
    "total": "268",
	"skills": ["Hire", "Confuse", "Scare", "Parry"]
}, {
    "name": "Guo Si",
    "ldr": "66",
    "war": "76",
    "int": "18",
    "pol": "11",
    "chr": "13",
    "total": "184",
	"skills": ["Charge", "Scare", "Parry"]
}, {
    "name": "Guo Tu",
    "ldr": "51",
    "war": "50",
    "int": "82",
    "pol": "70",
    "chr": "28",
    "total": "281",
	"skills": ["Blunder", "Entice", "Fault", "Warlord"]
}, {
    "name": "Guo Yi",
    "ldr": "19",
    "war": "23",
    "int": "75",
    "pol": "74",
    "chr": "28",
    "total": "219",
	"skills": ["Blunder", "Entice"]
}, {
    "name": "Guo Youzhi",
    "ldr": "15",
    "war": "10",
    "int": "60",
    "pol": "74",
    "chr": "60",
    "total": "219",
	"skills": ["Farm", "Hero"]
}, {
    "name": "Guo Yuan",
    "ldr": "52",
    "war": "21",
    "int": "71",
    "pol": "88",
    "chr": "74",
    "total": "306",
	"skills": ["Farm", "Trade", "Tech", "Order", "Hero"]
}, {
    "name": "Han Dang",
    "ldr": "76",
    "war": "86",
    "int": "59",
    "pol": "53",
    "chr": "67",
    "total": "341",
	"skills": ["Tech", "Order", "Charge", "Unison", "Stun", "Scare", "Parry", "Counter", "Maul", "Admiral"]
}, {
    "name": "Han De",
    "ldr": "62",
    "war": "79",
    "int": "24",
    "pol": "15",
    "chr": "50",
    "total": "230",
	"skills": ["Hire", "Recover", "Maul"]
}, {
    "name": "Han Fu",
    "ldr": "18",
    "war": "10",
    "int": "29",
    "pol": "63",
    "chr": "59",
    "total": "179",
	"skills": ["Farm"]
}, {
    "name": "Han Hao",
    "ldr": "72",
    "war": "71",
    "int": "71",
    "pol": "87",
    "chr": "66",
    "total": "367",
	"skills": ["Farm", "Tech", "Repair", "Missile", "Settle", "Distract", "Entice", "Shout"]
}, {
    "name": "Han Juzi",
    "ldr": "53",
    "war": "59",
    "int": "30",
    "pol": "41",
    "chr": "54",
    "total": "237",
	"skills": ["Crush"]
}, {
    "name": "Han Song",
    "ldr": "28",
    "war": "18",
    "int": "72",
    "pol": "74",
    "chr": "58",
    "total": "250",
	"skills": ["Tech", "Confuse", "Maze", "Plead", "Warlord"]
}, {
    "name": "Han Sui",
    "ldr": "85",
    "war": "72",
    "int": "75",
    "pol": "65",
    "chr": "80",
    "total": "377",
	"skills": ["Trade", "Hire", "Charge", "Surprise", "Crush", "Plead", "Warlord"]
}, {
    "name": "Han Xian",
    "ldr": "69",
    "war": "67",
    "int": "35",
    "pol": "36",
    "chr": "48",
    "total": "255",
	"skills": ["Hire", "Crush"]
}, {
    "name": "Han Xuan",
    "ldr": "20",
    "war": "33",
    "int": "6",
    "pol": "3",
    "chr": "1",
    "total": "63",
	"skills": []
}, {
    "name": "Han Yin",
    "ldr": "27",
    "war": "24",
    "int": "68",
    "pol": "59",
    "chr": "60",
    "total": "238",
	"skills": ["Confuse"]
}, {
    "name": "Han Zhong",
    "ldr": "66",
    "war": "67",
    "int": "20",
    "pol": "14",
    "chr": "12",
    "total": "179",
	"skills": ["Crush"]
}, {
    "name": "Hao Meng",
    "ldr": "57",
    "war": "66",
    "int": "41",
    "pol": "35",
    "chr": "33",
    "total": "232",
	"skills": ["Charge", "Shout", "Crush"]
}, {
    "name": "Hao Zhao",
    "ldr": "88",
    "war": "77",
    "int": "78",
    "pol": "63",
    "chr": "68",
    "total": "374",
	"skills": ["Repair", "Order", "Drill", "Charge", "Missile", "Settle", "Distract", "Stun", "Recover", "Shout", "Spy"]
}, {
    "name": "He Jin",
    "ldr": "40",
    "war": "39",
    "int": "7",
    "pol": "39",
    "chr": "71",
    "total": "196",
	"skills": []
}, {
    "name": "He Qi",
    "ldr": "83",
    "war": "73",
    "int": "72",
    "pol": "59",
    "chr": "66",
    "total": "353",
	"skills": ["Order", "Hire", "Missile", "Unison", "Surprise", "Blunder", "Geo", "Recover"]
}, {
    "name": "He Yan",
    "ldr": "6",
    "war": "27",
    "int": "72",
    "pol": "68",
    "chr": "3",
    "total": "176",
	"skills": ["Blunder", "Fault", "Argue"]
}, {
    "name": "He Yi",
    "ldr": "55",
    "war": "69",
    "int": "37",
    "pol": "10",
    "chr": "16",
    "total": "187",
	"skills": ["Shout"]
}, {
    "name": "He Zhi",
    "ldr": "18",
    "war": "38",
    "int": "29",
    "pol": "33",
    "chr": "15",
    "total": "133",
	"skills": ["Trade"]
}, {
    "name": "Hou Cheng",
    "ldr": "76",
    "war": "75",
    "int": "64",
    "pol": "58",
    "chr": "60",
    "total": "333",
	"skills": ["Order", "Charge", "Surprise", "Recover", "Counter"]
}, {
    "name": "Hou Xuan",
    "ldr": "56",
    "war": "66",
    "int": "35",
    "pol": "55",
    "chr": "46",
    "total": "258",
	"skills": ["Charge", "Parry"]
}, {
    "name": "Hu Ban",
    "ldr": "57",
    "war": "56",
    "int": "59",
    "pol": "48",
    "chr": "62",
    "total": "282",
	"skills": ["Order", "Missile"]
}, {
    "name": "Hu Che Er",
    "ldr": "28",
    "war": "85",
    "int": "41",
    "pol": "2",
    "chr": "24",
    "total": "180",
	"skills": ["Stun", "Shout", "Scare", "Parry", "Spy", "Host"]
}, {
    "name": "Hu Chuquan",
    "ldr": "69",
    "war": "65",
    "int": "16",
    "pol": "26",
    "chr": "66",
    "total": "242",
	"skills": ["Hire", "Charge", "Counter"]
}, {
    "name": "Hu Fen",
    "ldr": "71",
    "war": "76",
    "int": "50",
    "pol": "46",
    "chr": "52",
    "total": "295",
	"skills": ["Tech", "Charge", "Unison", "Shout", "Scare"]
}, {
    "name": "Hu Ji",
    "ldr": "58",
    "war": "42",
    "int": "68",
    "pol": "72",
    "chr": "66",
    "total": "306",
	"skills": ["Order", "Missile", "Geo"]
}, {
    "name": "Hu Lie",
    "ldr": "77",
    "war": "69",
    "int": "76",
    "pol": "66",
    "chr": "68",
    "total": "356",
	"skills": ["Repair", "Charge", "Distract", "Stun"]
}, {
    "name": "Hu Zhen",
    "ldr": "65",
    "war": "77",
    "int": "13",
    "pol": "14",
    "chr": "9",
    "total": "178",
	"skills": ["Charge", "Stun", "Crush"]
}, {
    "name": "Hu Zhi",
    "ldr": "73",
    "war": "50",
    "int": "75",
    "pol": "79",
    "chr": "72",
    "total": "349",
	"skills": ["Farm", "Tech", "Order", "Settle", "Confuse", "Geo"]
}, {
    "name": "Hu Zun",
    "ldr": "72",
    "war": "78",
    "int": "52",
    "pol": "49",
    "chr": "60",
    "total": "311",
	"skills": ["Repair", "Drill", "Charge", "Scare", "Parry", "Host"]
}, {
    "name": "Hua He",
    "ldr": "19",
    "war": "22",
    "int": "75",
    "pol": "75",
    "chr": "72",
    "total": "263",
	"skills": ["Farm", "Confuse"]
}, {
    "name": "Hua Xin",
    "ldr": "11",
    "war": "35",
    "int": "84",
    "pol": "80",
    "chr": "8",
    "total": "218",
	"skills": ["Trade", "Awe", "Fault", "Hero", "Host"]
}, {
    "name": "Hua Xiong",
    "ldr": "81",
    "war": "93",
    "int": "52",
    "pol": "39",
    "chr": "57",
    "total": "322",
	"skills": ["Drill", "Charge", "Surprise", "Recover", "Shout", "Scare", "Crush", "Maul"]
}, {
    "name": "Huan Fan",
    "ldr": "22",
    "war": "16",
    "int": "80",
    "pol": "72",
    "chr": "55",
    "total": "245",
	"skills": ["Farm", "Blunder", "Warlord"]
}, {
    "name": "Huan Jie",
    "ldr": "12",
    "war": "25",
    "int": "67",
    "pol": "79",
    "chr": "68",
    "total": "251",
	"skills": ["Tech", "Blunder", "Plead", "Hero"]
}, {
    "name": "Huang Chong",
    "ldr": "68",
    "war": "64",
    "int": "74",
    "pol": "69",
    "chr": "65",
    "total": "340",
	"skills": ["Repair", "Rally", "Recover"]
}, {
    "name": "Huang Gai",
    "ldr": "79",
    "war": "83",
    "int": "69",
    "pol": "68",
    "chr": "81",
    "total": "380",
	"skills": ["Order", "Hire", "Missile", "Rally", "Surprise", "Stun", "Entice", "Recover", "Scare", "Crush", "Admiral"]
}, {
    "name": "Huang Hao",
    "ldr": "1",
    "war": "2",
    "int": "36",
    "pol": "4",
    "chr": "3",
    "total": "46",
	"skills": []
}, {
    "name": "Huang Luan",
    "ldr": "63",
    "war": "75",
    "int": "6",
    "pol": "25",
    "chr": "36",
    "total": "205",
	"skills": ["Missile", "Surprise", "Scare", "Counter"]
}, {
    "name": "Huang Quan",
    "ldr": "76",
    "war": "62",
    "int": "83",
    "pol": "71",
    "chr": "79",
    "total": "371",
	"skills": ["Tech", "Repair", "Missile", "Settle", "Distract", "Blunder", "Awe", "Fault", "Warlord", "Hero"]
}, {
    "name": "Huang Zhong",
    "ldr": "86",
    "war": "94",
    "int": "66",
    "pol": "58",
    "chr": "74",
    "total": "378",
	"skills": ["Drill", "Charge", "Missile", "Unison", "Settle", "Surprise", "Stun", "Recover", "Shout", "Scare", "Parry", "Counter", "Crush"]
}, {
    "name": "Huang Zu",
    "ldr": "74",
    "war": "65",
    "int": "57",
    "pol": "44",
    "chr": "30",
    "total": "270",
	"skills": ["Tech", "Repair", "Missile", "Entice", "Admiral"]
}, {
    "name": "Huangfu Song",
    "ldr": "93",
    "war": "62",
    "int": "78",
    "pol": "45",
    "chr": "82",
    "total": "360",
	"skills": ["Order", "Hire", "Unison", "Settle", "Distract", "Stun", "Recover", "Hero", "Spy"]
}, {
    "name": "Huo Jun",
    "ldr": "76",
    "war": "65",
    "int": "71",
    "pol": "64",
    "chr": "70",
    "total": "346",
	"skills": ["Repair", "Order", "Missile", "Settle", "Stun", "Geo"]
}, {
    "name": "Huo Yi",
    "ldr": "71",
    "war": "67",
    "int": "70",
    "pol": "71",
    "chr": "74",
    "total": "353",
	"skills": ["Repair", "Order", "Missile", "Entice", "Recover"]
}, {
    "name": "Ji Ling",
    "ldr": "78",
    "war": "81",
    "int": "58",
    "pol": "50",
    "chr": "59",
    "total": "326",
	"skills": ["Repair", "Drill", "Charge", "Unison", "Distract", "Stun", "Scare", "Counter", "Maul"]
}, {
    "name": "Jia Chong",
    "ldr": "33",
    "war": "32",
    "int": "88",
    "pol": "88",
    "chr": "8",
    "total": "249",
	"skills": ["Trade", "Awe", "Fault", "Incite", "Warlord", "Hero", "Spy"]
}, {
    "name": "Jia Fan",
    "ldr": "59",
    "war": "60",
    "int": "73",
    "pol": "64",
    "chr": "61",
    "total": "317",
	"skills": ["Order", "Settle", "Blunder", "Confuse", "Spy"]
}, {
    "name": "Jia Hua",
    "ldr": "50",
    "war": "66",
    "int": "40",
    "pol": "29",
    "chr": "53",
    "total": "238",
	"skills": ["Repair", "Confuse"]
}, {
    "name": "Jia Kui",
    "ldr": "75",
    "war": "62",
    "int": "80",
    "pol": "86",
    "chr": "78",
    "total": "381",
	"skills": ["Farm", "Tech", "Repair", "Order", "Unison", "Settle", "Distract", "Stun", "Geo", "Plead", "Refute", "Hero"]
}, {
    "name": "Jia Xu",
    "ldr": "81",
    "war": "45",
    "int": "98",
    "pol": "84",
    "chr": "56",
    "total": "364",
	"skills": ["Tech", "Repair", "Missile", "Settle", "Surprise", "Distract", "Blunder", "Entice", "Confuse", "Geo", "Awe", "Fault", "Argue", "Incite", "Warlord", "Hero", "Spy"]
}, {
    "name": "Jian Yong",
    "ldr": "22",
    "war": "33",
    "int": "66",
    "pol": "71",
    "chr": "74",
    "total": "266",
	"skills": ["Trade", "Rally", "Blunder", "Fault", "Spy", "Host"]
}, {
    "name": "Jiang Ban",
    "ldr": "56",
    "war": "73",
    "int": "66",
    "pol": "41",
    "chr": "52",
    "total": "288",
	"skills": ["Blunder", "Maul"]
}, {
    "name": "Jiang Bin",
    "ldr": "30",
    "war": "28",
    "int": "67",
    "pol": "74",
    "chr": "71",
    "total": "270",
	"skills": ["Repair", "Rally"]
}, {
    "name": "Jiang Gan",
    "ldr": "9",
    "war": "7",
    "int": "69",
    "pol": "62",
    "chr": "47",
    "total": "194",
	"skills": ["Confuse", "Spy"]
}, {
    "name": "Jiang Ji",
    "ldr": "50",
    "war": "42",
    "int": "87",
    "pol": "77",
    "chr": "55",
    "total": "311",
	"skills": ["Farm", "Blunder", "Entice", "Fault", "Argue", "Warlord", "Hero", "Spy"]
}, {
    "name": "Jiang Qin",
    "ldr": "78",
    "war": "87",
    "int": "58",
    "pol": "52",
    "chr": "78",
    "total": "353",
	"skills": ["Order", "Hire", "Charge", "Unison", "Surprise", "Recover", "Shout", "Counter", "Crush", "Admiral"]
}, {
    "name": "Jiang Shu",
    "ldr": "55",
    "war": "72",
    "int": "35",
    "pol": "33",
    "chr": "22",
    "total": "217",
	"skills": ["Confuse", "Scare"]
}, {
    "name": "Jiang Wan",
    "ldr": "74",
    "war": "39",
    "int": "85",
    "pol": "93",
    "chr": "81",
    "total": "372",
	"skills": ["Farm", "Trade", "Tech", "Order", "Rally", "Blunder", "Fault", "Argue", "Hero", "Admiral"]
}, {
    "name": "Jiang Wei",
    "ldr": "91",
    "war": "89",
    "int": "90",
    "pol": "68",
    "chr": "77",
    "total": "415",
	"skills": ["Tech", "Repair", "Drill", "Charge", "Missile", "Unison", "Settle", "Surprise", "Stun", "Confuse", "Recover", "Shout", "Parry", "Maul", "Awe", "Plead", "Refute", "Warlord"]
}, {
    "name": "Jiang Yiqu",
    "ldr": "72",
    "war": "60",
    "int": "62",
    "pol": "50",
    "chr": "57",
    "total": "301",
	"skills": ["Hire", "Unison", "Settle"]
}, {
    "name": "Jiao Yi",
    "ldr": "54",
    "war": "65",
    "int": "55",
    "pol": "32",
    "chr": "57",
    "total": "263",
	"skills": ["Farm"]
}, {
    "name": "Jin Xuan",
    "ldr": "53",
    "war": "69",
    "int": "16",
    "pol": "29",
    "chr": "42",
    "total": "209",
	"skills": ["Charge"]
}, {
    "name": "Jin Yi",
    "ldr": "18",
    "war": "40",
    "int": "63",
    "pol": "65",
    "chr": "67",
    "total": "253",
	"skills": ["Order", "Hero"]
}, {
    "name": "Jinhuan Sanjie",
    "ldr": "64",
    "war": "76",
    "int": "19",
    "pol": "17",
    "chr": "44",
    "total": "220",
	"skills": ["Charge", "Crush", "Maul"]
}, {
    "name": "Ju Hu",
    "ldr": "57",
    "war": "53",
    "int": "67",
    "pol": "66",
    "chr": "71",
    "total": "314",
	"skills": ["Trade", "Blunder"]
}, {
    "name": "Ju Shou",
    "ldr": "79",
    "war": "37",
    "int": "88",
    "pol": "90",
    "chr": "76",
    "total": "370",
	"skills": ["Farm", "Tech", "Repair", "Settle", "Blunder", "Entice", "Plead", "Fault", "Warlord", "Hero"]
}, {
    "name": "Kan Ze",
    "ldr": "34",
    "war": "48",
    "int": "83",
    "pol": "88",
    "chr": "73",
    "total": "326",
	"skills": ["Trade", "Entice", "Confuse", "Aero", "Plead", "Fault", "Argue", "Incite", "Hero", "Spy"]
}, {
    "name": "Ke Bineng",
    "ldr": "77",
    "war": "69",
    "int": "52",
    "pol": "59",
    "chr": "68",
    "total": "325",
	"skills": ["Tech", "Charge", "Surprise", "Recover", "Scare", "Parry"]
}, {
    "name": "King Duosi",
    "ldr": "54",
    "war": "60",
    "int": "70",
    "pol": "57",
    "chr": "51",
    "total": "292",
	"skills": ["Repair", "Missile", "Settle", "Entice", "Geo", "Fault", "Warlord"]
}, {
    "name": "King Midang",
    "ldr": "59",
    "war": "69",
    "int": "15",
    "pol": "32",
    "chr": "48",
    "total": "223",
	"skills": ["Hire", "Charge", "Shout"]
}, {
    "name": "King Mulu",
    "ldr": "66",
    "war": "72",
    "int": "23",
    "pol": "5",
    "chr": "30",
    "total": "196",
	"skills": ["Hire", "Unison", "Aero", "Shout", "Crush", "Maul", "Host"]
}, {
    "name": "Kong Rong",
    "ldr": "30",
    "war": "11",
    "int": "74",
    "pol": "78",
    "chr": "60",
    "total": "253",
	"skills": ["Repair", "Order", "Plead", "Refute", "Fault", "Hero"]
}, {
    "name": "Kong Zhou",
    "ldr": "26",
    "war": "13",
    "int": "68",
    "pol": "77",
    "chr": "67",
    "total": "251",
	"skills": ["Trade", "Fault", "Hero"]
}, {
    "name": "Kuai Liang",
    "ldr": "69",
    "war": "37",
    "int": "88",
    "pol": "82",
    "chr": "66",
    "total": "342",
	"skills": ["Trade", "Tech", "Repair", "Missile", "Settle", "Distract", "Entice", "Confuse", "Geo", "Plead", "Refute", "Fault", "Warlord", "Hero"]
}, {
    "name": "Kuai Yue",
    "ldr": "49",
    "war": "33",
    "int": "84",
    "pol": "87",
    "chr": "71",
    "total": "324",
	"skills": ["Farm", "Tech", "Order", "Rally", "Blunder", "Fault", "Argue", "Warlord", "Hero"]
}, {
    "name": "Lei Bo",
    "ldr": "63",
    "war": "71",
    "int": "34",
    "pol": "8",
    "chr": "7",
    "total": "183",
	"skills": ["Recover"]
}, {
    "name": "Lei Tong",
    "ldr": "70",
    "war": "75",
    "int": "41",
    "pol": "34",
    "chr": "50",
    "total": "270",
	"skills": ["Charge", "Recover", "Scare"]
}, {
    "name": "Leng Bao",
    "ldr": "70",
    "war": "82",
    "int": "69",
    "pol": "38",
    "chr": "21",
    "total": "280",
	"skills": ["Charge", "Unison", "Surprise", "Entice", "Geo", "Recover", "Scare", "Counter"]
}, {
    "name": "Li Dian",
    "ldr": "77",
    "war": "77",
    "int": "80",
    "pol": "72",
    "chr": "61",
    "total": "367",
	"skills": ["Tech", "Repair", "Drill", "Missile", "Unison", "Settle", "Surprise", "Stun", "Entice", "Geo", "Parry", "Plead"]
}, {
    "name": "Li Feng",
    "ldr": "56",
    "war": "50",
    "int": "68",
    "pol": "75",
    "chr": "66",
    "total": "315",
	"skills": ["Farm", "Rally", "Blunder"]
}, {
    "name": "Li Feng (2)",
    "ldr": "23",
    "war": "25",
    "int": "71",
    "pol": "72",
    "chr": "66",
    "total": "257",
	"skills": ["Farm", "Hero"]
}, {
    "name": "Li Feng (3)",
    "ldr": "72",
    "war": "77",
    "int": "50",
    "pol": "24",
    "chr": "53",
    "total": "276",
	"skills": ["Drill", "Charge", "Settle", "Stun"]
}, {
    "name": "Li Hui",
    "ldr": "76",
    "war": "60",
    "int": "77",
    "pol": "76",
    "chr": "72",
    "total": "361",
	"skills": ["Farm", "Tech", "Order", "Missile", "Rally", "Stun", "Geo", "Plead", "Fault"]
}, {
    "name": "Li Jue",
    "ldr": "70",
    "war": "74",
    "int": "23",
    "pol": "2",
    "chr": "10",
    "total": "179",
	"skills": ["Charge", "Maul"]
}, {
    "name": "Li Kan",
    "ldr": "59",
    "war": "67",
    "int": "33",
    "pol": "36",
    "chr": "34",
    "total": "229",
	"skills": ["Charge", "Shout"]
}, {
    "name": "Li Ru",
    "ldr": "66",
    "war": "29",
    "int": "93",
    "pol": "76",
    "chr": "35",
    "total": "299",
	"skills": ["Trade", "Tech", "Missile", "Settle", "Distract", "Blunder", "Entice", "Confuse", "Geo", "Awe", "Fault", "Incite", "Warlord", "Spy"]
}, {
    "name": "Li Sheng",
    "ldr": "13",
    "war": "26",
    "int": "32",
    "pol": "71",
    "chr": "55",
    "total": "197",
	"skills": ["Trade", "Blunder"]
}, {
    "name": "Li Su",
    "ldr": "48",
    "war": "61",
    "int": "64",
    "pol": "30",
    "chr": "26",
    "total": "229",
	"skills": ["Trade", "Blunder", "Spy"]
}, {
    "name": "Li Tong",
    "ldr": "75",
    "war": "84",
    "int": "52",
    "pol": "49",
    "chr": "54",
    "total": "314",
	"skills": ["Hire", "Charge", "Surprise", "Recover", "Shout", "Parry", "Maul"]
}, {
    "name": "Li Yan",
    "ldr": "84",
    "war": "83",
    "int": "80",
    "pol": "81",
    "chr": "52",
    "total": "380",
	"skills": ["Farm", "Tech", "Repair", "Order", "Unison", "Settle", "Stun", "Geo", "Recover", "Parry", "Counter", "Crush", "Host"]
}, {
    "name": "Li Yi",
    "ldr": "62",
    "war": "77",
    "int": "21",
    "pol": "18",
    "chr": "17",
    "total": "195",
	"skills": ["Charge", "Stun", "Counter", "Crush"]
}, {
    "name": "Liang Gang",
    "ldr": "62",
    "war": "70",
    "int": "42",
    "pol": "27",
    "chr": "53",
    "total": "254",
	"skills": ["Hire", "Unison", "Recover"]
}, {
    "name": "Liang Xi",
    "ldr": "67",
    "war": "49",
    "int": "73",
    "pol": "90",
    "chr": "84",
    "total": "363",
	"skills": ["Farm", "Trade", "Repair", "Order", "Settle", "Blunder", "Geo"]
}, {
    "name": "Liang Xing",
    "ldr": "58",
    "war": "65",
    "int": "22",
    "pol": "21",
    "chr": "27",
    "total": "193",
	"skills": ["Charge", "Maul"]
}, {
    "name": "Liang Xu",
    "ldr": "56",
    "war": "62",
    "int": "66",
    "pol": "67",
    "chr": "60",
    "total": "311",
	"skills": ["Repair"]
}, {
    "name": "Liao Hua",
    "ldr": "70",
    "war": "71",
    "int": "64",
    "pol": "49",
    "chr": "65",
    "total": "319",
	"skills": ["Unison", "Counter"]
}, {
    "name": "Liao Li",
    "ldr": "14",
    "war": "19",
    "int": "68",
    "pol": "79",
    "chr": "25",
    "total": "205",
	"skills": ["Trade", "Blunder", "Confuse"]
}, {
    "name": "Ling Cao",
    "ldr": "75",
    "war": "79",
    "int": "42",
    "pol": "36",
    "chr": "54",
    "total": "286",
	"skills": ["Hire", "Charge", "Stun", "Recover", "Shout", "Parry"]
}, {
    "name": "Ling Tong",
    "ldr": "77",
    "war": "88",
    "int": "56",
    "pol": "50",
    "chr": "71",
    "total": "342",
	"skills": ["Drill", "Charge", "Unison", "Surprise", "Stun", "Shout", "Scare", "Parry", "Crush", "Maul"]
}, {
    "name": "Liu Ba",
    "ldr": "13",
    "war": "22",
    "int": "74",
    "pol": "78",
    "chr": "58",
    "total": "245",
	"skills": ["Trade", "Tech", "Blunder", "Confuse", "Fault", "Argue", "Hero"]
}, {
    "name": "Liu Bao",
    "ldr": "62",
    "war": "67",
    "int": "48",
    "pol": "52",
    "chr": "63",
    "total": "292",
	"skills": ["Charge"]
}, {
    "name": "Liu Bei",
    "ldr": "78",
    "war": "72",
    "int": "73",
    "pol": "78",
    "chr": "99",
    "total": "400",
	"skills": ["Farm", "Hire", "Unison", "Rally", "Shout", "Host"]
}, {
    "name": "Liu Biao",
    "ldr": "53",
    "war": "31",
    "int": "71",
    "pol": "84",
    "chr": "83",
    "total": "322",
	"skills": ["Farm", "Rally", "Fault", "Argue", "Hero"]
}, {
    "name": "Liu Chan",
    "ldr": "3",
    "war": "5",
    "int": "9",
    "pol": "4",
    "chr": "64",
    "total": "85",
	"skills": ["Host"]
}, {
    "name": "Liu Chen",
    "ldr": "45",
    "war": "58",
    "int": "65",
    "pol": "62",
    "chr": "75",
    "total": "305",
	"skills": ["Order", "Rally", "Plead"]
}, {
    "name": "Liu Cheng",
    "ldr": "46",
    "war": "69",
    "int": "29",
    "pol": "35",
    "chr": "55",
    "total": "234",
	"skills": ["Order"]
}, {
    "name": "Liu Dai",
    "ldr": "53",
    "war": "63",
    "int": "34",
    "pol": "52",
    "chr": "37",
    "total": "239",
	"skills": ["Trade", "Charge", "Hero"]
}, {
    "name": "Liu Du",
    "ldr": "25",
    "war": "15",
    "int": "23",
    "pol": "51",
    "chr": "52",
    "total": "166",
	"skills": ["Farm"]
}, {
    "name": "Liu Feng",
    "ldr": "77",
    "war": "79",
    "int": "48",
    "pol": "58",
    "chr": "77",
    "total": "339",
	"skills": ["Repair", "Drill", "Charge", "Unison", "Surprise", "Stun", "Counter", "Crush", "Maul"]
}, {
    "name": "Liu Fu",
    "ldr": "54",
    "war": "50",
    "int": "73",
    "pol": "87",
    "chr": "84",
    "total": "348",
	"skills": ["Farm", "Tech", "Repair", "Order", "Rally", "Geo"]
}, {
    "name": "Liu Kui",
    "ldr": "75",
    "war": "72",
    "int": "66",
    "pol": "49",
    "chr": "63",
    "total": "325",
	"skills": ["Repair", "Missile", "Rally", "Parry", "Maul"]
}, {
    "name": "Liu Lue",
    "ldr": "72",
    "war": "68",
    "int": "59",
    "pol": "49",
    "chr": "52",
    "total": "300",
	"skills": ["Unison", "Scare"]
}, {
    "name": "Liu Pan",
    "ldr": "74",
    "war": "79",
    "int": "48",
    "pol": "46",
    "chr": "53",
    "total": "300",
	"skills": ["Drill", "Unison", "Stun", "Scare", "Parry"]
}, {
    "name": "Liu Pi",
    "ldr": "74",
    "war": "68",
    "int": "51",
    "pol": "34",
    "chr": "55",
    "total": "282",
	"skills": ["Hire", "Charge", "Surprise", "Stun", "Parry"]
}, {
    "name": "Liu Ping",
    "ldr": "65",
    "war": "70",
    "int": "67",
    "pol": "57",
    "chr": "62",
    "total": "321",
	"skills": ["Order", "Unison"]
}, {
    "name": "Liu Qi",
    "ldr": "41",
    "war": "9",
    "int": "54",
    "pol": "73",
    "chr": "73",
    "total": "250",
	"skills": ["Trade", "Hero", "Admiral"]
}, {
    "name": "Liu Shao",
    "ldr": "66",
    "war": "51",
    "int": "73",
    "pol": "82",
    "chr": "65",
    "total": "337",
	"skills": ["Farm", "Blunder", "Fault", "Argue"]
}, {
    "name": "Liu Xian",
    "ldr": "52",
    "war": "61",
    "int": "56",
    "pol": "43",
    "chr": "51",
    "total": "263",
	"skills": ["Drill"]
}, {
    "name": "Liu Xuan",
    "ldr": "9",
    "war": "21",
    "int": "39",
    "pol": "44",
    "chr": "55",
    "total": "168",
	"skills": []
}, {
    "name": "Liu Xun",
    "ldr": "51",
    "war": "64",
    "int": "50",
    "pol": "47",
    "chr": "54",
    "total": "266",
	"skills": ["Tech", "Unison"]
}, {
    "name": "Liu Xun (2)",
    "ldr": "47",
    "war": "57",
    "int": "46",
    "pol": "37",
    "chr": "65",
    "total": "252",
	"skills": ["Trade", "Unison", "Rally", "Hero"]
}, {
    "name": "Liu Yan",
    "ldr": "54",
    "war": "40",
    "int": "79",
    "pol": "81",
    "chr": "85",
    "total": "339",
	"skills": ["Trade", "Hire", "Blunder", "Confuse", "Awe", "Hero", "Spy"]
}, {
    "name": "Liu Ye",
    "ldr": "39",
    "war": "23",
    "int": "93",
    "pol": "75",
    "chr": "71",
    "total": "301",
	"skills": ["Farm", "Tech", "Blunder", "Confuse", "Fault", "Argue", "Warlord", "Hero", "Spy"]
}, {
    "name": "Liu Yong",
    "ldr": "64",
    "war": "65",
    "int": "37",
    "pol": "73",
    "chr": "64",
    "total": "303",
	"skills": ["Farm", "Trade", "Rally", "Blunder", "Hero", "Admiral"]
}, {
    "name": "Liu Yu",
    "ldr": "49",
    "war": "34",
    "int": "70",
    "pol": "79",
    "chr": "92",
    "total": "324",
	"skills": ["Farm", "Order", "Rally", "Entice", "Fault", "Hero"]
}, {
    "name": "Liu Zan",
    "ldr": "74",
    "war": "75",
    "int": "66",
    "pol": "55",
    "chr": "65",
    "total": "335",
	"skills": ["Tech", "Drill", "Unison", "Stun", "Recover", "Scare"]
}, {
    "name": "Liu Zhang",
    "ldr": "18",
    "war": "15",
    "int": "10",
    "pol": "45",
    "chr": "75",
    "total": "163",
	"skills": ["Hero"]
}, {
    "name": "Liu Zong",
    "ldr": "16",
    "war": "20",
    "int": "66",
    "pol": "56",
    "chr": "63",
    "total": "221",
	"skills": ["Tech", "Hero"]
}, {
    "name": "Lou Ban",
    "ldr": "65",
    "war": "76",
    "int": "39",
    "pol": "31",
    "chr": "59",
    "total": "270",
	"skills": ["Hire", "Charge", "Unison", "Surprise", "Crush", "Maul"]
}, {
    "name": "Lou Gui",
    "ldr": "54",
    "war": "19",
    "int": "88",
    "pol": "69",
    "chr": "8",
    "total": "238",
	"skills": ["Tech", "Repair", "Blunder", "Entice", "Geo", "Fault", "Incite", "Warlord"]
}, {
    "name": "Lou Xuan",
    "ldr": "23",
    "war": "20",
    "int": "68",
    "pol": "75",
    "chr": "80",
    "total": "266",
	"skills": ["Farm", "Trade", "Missile", "Entice", "Hero"]
}, {
    "name": "Lu Bu",
    "ldr": "95",
    "war": "100",
    "int": "26",
    "pol": "13",
    "chr": "32",
    "total": "266",
	"skills": ["Charge", "Unison", "Surprise", "Stun", "Recover", "Shout", "Scare", "Parry", "Counter", "Crush", "Maul", "Host"]
}, {
    "name": "Lu Dai",
    "ldr": "83",
    "war": "72",
    "int": "70",
    "pol": "69",
    "chr": "56",
    "total": "350",
	"skills": ["Order", "Hire", "Missile", "Unison", "Blunder", "Stun", "Recover"]
}, {
    "name": "Lu Fan",
    "ldr": "73",
    "war": "55",
    "int": "74",
    "pol": "73",
    "chr": "67",
    "total": "342",
	"skills": ["Trade", "Tech", "Missile", "Entice", "Geo", "Warlord", "Hero", "Admiral"]
}, {
    "name": "Lu Ji",
    "ldr": "12",
    "war": "7",
    "int": "65",
    "pol": "69",
    "chr": "39",
    "total": "192",
	"skills": ["Farm", "Confuse", "Aero", "Fault", "Hero"]
}, {
    "name": "Lu Ju",
    "ldr": "71",
    "war": "58",
    "int": "69",
    "pol": "59",
    "chr": "63",
    "total": "320",
	"skills": ["Trade", "Missile", "Entice", "Admiral"]
}, {
    "name": "Lu Kai",
    "ldr": "65",
    "war": "59",
    "int": "78",
    "pol": "85",
    "chr": "73",
    "total": "360",
	"skills": ["Farm", "Trade", "Missile", "Rally", "Entice", "Fault", "Warlord", "Hero", "Admiral"]
}, {
    "name": "Lu Kai (2)",
    "ldr": "55",
    "war": "30",
    "int": "70",
    "pol": "77",
    "chr": "73",
    "total": "305",
	"skills": ["Farm", "Rally", "Confuse", "Geo"]
}, {
    "name": "Lu Kang",
    "ldr": "91",
    "war": "62",
    "int": "89",
    "pol": "83",
    "chr": "86",
    "total": "411",
	"skills": ["Tech", "Repair", "Order", "Missile", "Unison", "Settle", "Rally", "Distract", "Stun", "Entice", "Plead", "Fault", "Argue", "Warlord", "Hero", "Admiral"]
}, {
    "name": "Lu Kuang",
    "ldr": "55",
    "war": "63",
    "int": "17",
    "pol": "29",
    "chr": "24",
    "total": "188",
	"skills": ["Unison"]
}, {
    "name": "Lu Meng",
    "ldr": "93",
    "war": "81",
    "int": "89",
    "pol": "78",
    "chr": "82",
    "total": "423",
	"skills": ["Tech", "Repair", "Order", "Drill", "Charge", "Unison", "Settle", "Surprise", "Distract", "Stun", "Entice", "Geo", "Recover", "Counter", "Awe", "Warlord", "Admiral", "Spy"]
}, {
    "name": "Lu Qian",
    "ldr": "58",
    "war": "70",
    "int": "61",
    "pol": "70",
    "chr": "58",
    "total": "317",
	"skills": ["Trade", "Order", "Hire", "Missile", "Settle", "Distract", "Blunder", "Entice", "Recover"]
}, {
    "name": "Lu Shu",
    "ldr": "70",
    "war": "55",
    "int": "76",
    "pol": "77",
    "chr": "73",
    "total": "351",
	"skills": ["Farm", "Tech", "Repair", "Unison", "Rally", "Stun", "Confuse", "Hero"]
}, {
    "name": "Lu Su",
    "ldr": "78",
    "war": "59",
    "int": "94",
    "pol": "93",
    "chr": "89",
    "total": "413",
	"skills": ["Farm", "Trade", "Hire", "Unison", "Settle", "Rally", "Blunder", "Entice", "Confuse", "Plead", "Refute", "Fault", "Argue", "Warlord", "Hero"]
}, {
    "name": "Lu Weihuang",
    "ldr": "61",
    "war": "60",
    "int": "28",
    "pol": "39",
    "chr": "40",
    "total": "228",
	"skills": ["Missile"]
}, {
    "name": "Lu Xiang",
    "ldr": "56",
    "war": "69",
    "int": "13",
    "pol": "19",
    "chr": "22",
    "total": "179",
	"skills": ["Order"]
}, {
    "name": "Lu Xun",
    "ldr": "97",
    "war": "66",
    "int": "95",
    "pol": "90",
    "chr": "90",
    "total": "438",
	"skills": ["Farm", "Tech", "Repair", "Hire", "Missile", "Unison", "Settle", "Rally", "Distract", "Stun", "Entice", "Confuse", "Geo", "Recover", "Plead", "Fault", "Argue", "Incite", "Warlord", "Hero", "Admiral", "Spy"]
}, {
    "name": "Lu Zhi",
    "ldr": "88",
    "war": "47",
    "int": "82",
    "pol": "83",
    "chr": "85",
    "total": "385",
	"skills": ["Repair", "Order", "Unison", "Settle", "Rally", "Distract", "Blunder", "Plead", "Refute", "Warlord", "Hero"]
}, {
    "name": "Lun Zhi",
    "ldr": "47",
    "war": "39",
    "int": "74",
    "pol": "63",
    "chr": "62",
    "total": "285",
	"skills": ["Farm", "Settle", "Blunder", "Stun", "Warlord"]
}, {
    "name": "Luo Tong",
    "ldr": "75",
    "war": "57",
    "int": "70",
    "pol": "75",
    "chr": "68",
    "total": "345",
	"skills": ["Farm", "Tech", "Entice", "Plead", "Fault"]
}, {
    "name": "Luo Xian",
    "ldr": "86",
    "war": "67",
    "int": "75",
    "pol": "68",
    "chr": "73",
    "total": "369",
	"skills": ["Tech", "Repair", "Order", "Missile", "Unison", "Settle", "Maul"]
}, {
    "name": "Ma Chao",
    "ldr": "89",
    "war": "96",
    "int": "43",
    "pol": "23",
    "chr": "82",
    "total": "333",
	"skills": ["Hire", "Charge", "Unison", "Rally", "Surprise", "Stun", "Shout", "Scare", "Parry", "Counter", "Crush", "Maul", "Hero", "Host"]
}, {
    "name": "Ma Dai",
    "ldr": "78",
    "war": "85",
    "int": "59",
    "pol": "45",
    "chr": "74",
    "total": "341",
	"skills": ["Tech", "Repair", "Charge", "Unison", "Surprise", "Distract", "Stun", "Entice", "Recover", "Scare", "Counter", "Maul"]
}, {
    "name": "Ma Jun",
    "ldr": "5",
    "war": "8",
    "int": "64",
    "pol": "56",
    "chr": "13",
    "total": "146",
	"skills": ["Tech"]
}, {
    "name": "Ma Liang",
    "ldr": "46",
    "war": "25",
    "int": "84",
    "pol": "91",
    "chr": "86",
    "total": "332",
	"skills": ["Farm", "Trade", "Tech", "Settle", "Blunder", "Plead", "Refute", "Fault", "Argue", "Hero"]
}, {
    "name": "Ma Miao",
    "ldr": "22",
    "war": "17",
    "int": "5",
    "pol": "30",
    "chr": "15",
    "total": "89",
	"skills": []
}, {
    "name": "Ma Su",
    "ldr": "64",
    "war": "65",
    "int": "87",
    "pol": "76",
    "chr": "67",
    "total": "359",
	"skills": ["Tech", "Confuse", "Fault", "Argue", "Incite", "Hero", "Spy"]
}, {
    "name": "Ma Teng",
    "ldr": "82",
    "war": "81",
    "int": "51",
    "pol": "63",
    "chr": "89",
    "total": "366",
	"skills": ["Order", "Hire", "Charge", "Unison", "Rally", "Surprise", "Shout", "Maul", "Hero"]
}, {
    "name": "Ma Tie",
    "ldr": "71",
    "war": "66",
    "int": "60",
    "pol": "47",
    "chr": "59",
    "total": "303",
	"skills": ["Drill", "Charge", "Surprise", "Counter"]
}, {
    "name": "Ma Wan",
    "ldr": "71",
    "war": "70",
    "int": "19",
    "pol": "24",
    "chr": "35",
    "total": "219",
	"skills": ["Repair", "Charge", "Surprise", "Counter"]
}, {
    "name": "Ma Xiu",
    "ldr": "69",
    "war": "73",
    "int": "45",
    "pol": "51",
    "chr": "66",
    "total": "304",
	"skills": ["Order", "Charge", "Surprise", "Maul"]
}, {
    "name": "Ma Zhong",
    "ldr": "66",
    "war": "71",
    "int": "60",
    "pol": "35",
    "chr": "38",
    "total": "270",
	"skills": ["Stun", "Counter"]
}, {
    "name": "Ma Zhong (2)",
    "ldr": "81",
    "war": "73",
    "int": "70",
    "pol": "74",
    "chr": "73",
    "total": "371",
	"skills": ["Order", "Hire", "Missile", "Unison", "Rally", "Distract", "Entice", "Recover"]
}, {
    "name": "Ma Zun",
    "ldr": "39",
    "war": "57",
    "int": "35",
    "pol": "51",
    "chr": "49",
    "total": "231",
	"skills": ["Farm"]
}, {
    "name": "Man Chong",
    "ldr": "87",
    "war": "60",
    "int": "81",
    "pol": "86",
    "chr": "81",
    "total": "395",
	"skills": ["Tech", "Repair", "Order", "Hire", "Missile", "Unison", "Settle", "Distract", "Stun", "Entice", "Confuse", "Awe", "Fault", "Spy"]
}, {
    "name": "Mang Yachang",
    "ldr": "46",
    "war": "78",
    "int": "3",
    "pol": "3",
    "chr": "14",
    "total": "144",
	"skills": ["Charge", "Scare", "Parry"]
}, {
    "name": "Mao Jie",
    "ldr": "65",
    "war": "51",
    "int": "64",
    "pol": "80",
    "chr": "53",
    "total": "313",
	"skills": ["Farm", "Trade", "Blunder", "Entice"]
}, {
    "name": "Meng Da",
    "ldr": "75",
    "war": "74",
    "int": "79",
    "pol": "69",
    "chr": "48",
    "total": "345",
	"skills": ["Trade", "Missile", "Surprise", "Blunder", "Stun", "Recover", "Fault", "Spy"]
}, {
    "name": "Meng Huo",
    "ldr": "79",
    "war": "87",
    "int": "45",
    "pol": "41",
    "chr": "78",
    "total": "330",
	"skills": ["Hire", "Drill", "Charge", "Unison", "Rally", "Shout", "Counter", "Crush", "Maul", "Host"]
}, {
    "name": "Meng You",
    "ldr": "50",
    "war": "68",
    "int": "8",
    "pol": "9",
    "chr": "27",
    "total": "162",
	"skills": ["Shout", "Host"]
}, {
    "name": "Meng Zong",
    "ldr": "48",
    "war": "48",
    "int": "67",
    "pol": "71",
    "chr": "55",
    "total": "289",
	"skills": ["Order", "Blunder"]
}, {
    "name": "Mi Fang",
    "ldr": "57",
    "war": "62",
    "int": "31",
    "pol": "27",
    "chr": "18",
    "total": "195",
	"skills": ["Trade"]
}, {
    "name": "Mi Zhu",
    "ldr": "24",
    "war": "30",
    "int": "72",
    "pol": "83",
    "chr": "82",
    "total": "291",
	"skills": ["Trade", "Rally", "Fault", "Argue", "Hero"]
}, {
    "name": "Mu Shun",
    "ldr": "52",
    "war": "77",
    "int": "14",
    "pol": "18",
    "chr": "25",
    "total": "186",
	"skills": ["Scare", "Crush"]
}, {
    "name": "Ning Sui",
    "ldr": "69",
    "war": "70",
    "int": "74",
    "pol": "37",
    "chr": "52",
    "total": "302",
	"skills": ["Charge", "Stun", "Parry"]
}, {
    "name": "Niu Fu",
    "ldr": "43",
    "war": "63",
    "int": "12",
    "pol": "18",
    "chr": "27",
    "total": "163",
	"skills": ["Charge"]
}, {
    "name": "Niu Jin",
    "ldr": "71",
    "war": "79",
    "int": "40",
    "pol": "38",
    "chr": "42",
    "total": "270",
	"skills": ["Charge", "Stun", "Recover", "Counter", "Maul"]
}, {
    "name": "Ou Xing",
    "ldr": "56",
    "war": "71",
    "int": "31",
    "pol": "29",
    "chr": "40",
    "total": "227",
	"skills": ["Parry"]
}, {
    "name": "Pan Feng",
    "ldr": "57",
    "war": "77",
    "int": "4",
    "pol": "15",
    "chr": "25",
    "total": "178",
	"skills": ["Charge", "Counter", "Crush"]
}, {
    "name": "Pan Jun",
    "ldr": "69",
    "war": "27",
    "int": "67",
    "pol": "88",
    "chr": "21",
    "total": "272",
	"skills": ["Trade", "Tech", "Repair", "Order"]
}, {
    "name": "Pan Lin",
    "ldr": "66",
    "war": "79",
    "int": "8",
    "pol": "19",
    "chr": "31",
    "total": "203",
	"skills": ["Unison", "Parry", "Counter"]
}, {
    "name": "Pan Zhang",
    "ldr": "77",
    "war": "78",
    "int": "69",
    "pol": "34",
    "chr": "7",
    "total": "265",
	"skills": ["Unison", "Surprise", "Stun", "Geo", "Scare", "Parry"]
}, {
    "name": "Pang De",
    "ldr": "79",
    "war": "93",
    "int": "71",
    "pol": "50",
    "chr": "70",
    "total": "363",
	"skills": ["Order", "Drill", "Charge", "Unison", "Settle", "Surprise", "Stun", "Recover", "Scare", "Parry", "Crush"]
}, {
    "name": "Pang Hui",
    "ldr": "68",
    "war": "75",
    "int": "45",
    "pol": "44",
    "chr": "61",
    "total": "293",
	"skills": ["Order", "Missile", "Blunder", "Parry"]
}, {
    "name": "Pang Tong",
    "ldr": "78",
    "war": "36",
    "int": "97",
    "pol": "83",
    "chr": "69",
    "total": "363",
	"skills": ["Tech", "Repair", "Missile", "Settle", "Distract", "Blunder", "Entice", "Confuse", "Aero", "Maze", "Plead", "Refute", "Fault", "Argue", "Warlord", "Hero", "Spy", "Host"]
}, {
    "name": "Pang Xi",
    "ldr": "59",
    "war": "38",
    "int": "69",
    "pol": "74",
    "chr": "65",
    "total": "305",
	"skills": ["Trade", "Repair", "Hire", "Missile", "Entice", "Hero"]
}, {
    "name": "Pei Xu",
    "ldr": "10",
    "war": "11",
    "int": "77",
    "pol": "83",
    "chr": "53",
    "total": "234",
	"skills": ["Trade", "Geo", "Hero"]
}, {
    "name": "Pei Yuanshao",
    "ldr": "50",
    "war": "67",
    "int": "26",
    "pol": "27",
    "chr": "40",
    "total": "210",
	"skills": ["Hire", "Shout"]
}, {
    "name": "Puyang Xing",
    "ldr": "37",
    "war": "37",
    "int": "70",
    "pol": "76",
    "chr": "72",
    "total": "292",
	"skills": ["Farm", "Repair", "Confuse", "Awe", "Hero"]
}, {
    "name": "Qian Hong",
    "ldr": "76",
    "war": "72",
    "int": "66",
    "pol": "64",
    "chr": "58",
    "total": "336",
	"skills": ["Order", "Charge", "Distract", "Blunder", "Geo", "Maul"]
}, {
    "name": "Qiang Duan",
    "ldr": "58",
    "war": "83",
    "int": "9",
    "pol": "11",
    "chr": "29",
    "total": "190",
	"skills": ["Charge", "Counter", "Crush", "Maul"]
}, {
    "name": "Qiao Mao",
    "ldr": "56",
    "war": "52",
    "int": "68",
    "pol": "66",
    "chr": "69",
    "total": "311",
	"skills": ["Farm", "Missile", "Blunder", "Confuse", "Hero"]
}, {
    "name": "Qiao Rui",
    "ldr": "67",
    "war": "69",
    "int": "39",
    "pol": "41",
    "chr": "34",
    "total": "250",
	"skills": ["Farm", "Unison", "Settle", "Blunder", "Counter"]
}, {
    "name": "Qiao Zhou",
    "ldr": "4",
    "war": "9",
    "int": "65",
    "pol": "72",
    "chr": "54",
    "total": "204",
	"skills": ["Aero", "Plead", "Hero"]
}, {
    "name": "Qin Lang",
    "ldr": "57",
    "war": "70",
    "int": "38",
    "pol": "16",
    "chr": "39",
    "total": "220",
	"skills": ["Charge", "Shout"]
}, {
    "name": "Qin Mi",
    "ldr": "12",
    "war": "6",
    "int": "70",
    "pol": "71",
    "chr": "76",
    "total": "235",
	"skills": ["Tech", "Blunder", "Plead"]
}, {
    "name": "Qiu Ben",
    "ldr": "52",
    "war": "41",
    "int": "70",
    "pol": "54",
    "chr": "53",
    "total": "270",
	"skills": ["Blunder"]
}, {
    "name": "Qiu Jian",
    "ldr": "43",
    "war": "56",
    "int": "69",
    "pol": "60",
    "chr": "65",
    "total": "293",
	"skills": ["Blunder", "Confuse", "Spy"]
}, {
    "name": "Qiu Liju",
    "ldr": "80",
    "war": "68",
    "int": "56",
    "pol": "55",
    "chr": "60",
    "total": "319",
	"skills": ["Hire", "Charge", "Unison", "Surprise", "Parry", "Maul"]
}, {
    "name": "Qu Yi",
    "ldr": "83",
    "war": "79",
    "int": "50",
    "pol": "20",
    "chr": "29",
    "total": "261",
	"skills": ["Charge", "Missile", "Surprise", "Shout", "Crush"]
}, {
    "name": "Quan Cong",
    "ldr": "79",
    "war": "70",
    "int": "73",
    "pol": "72",
    "chr": "64",
    "total": "358",
	"skills": ["Repair", "Hire", "Missile", "Unison", "Settle", "Entice", "Recover", "Hero", "Admiral"]
}, {
    "name": "Quan Duan",
    "ldr": "64",
    "war": "65",
    "int": "38",
    "pol": "39",
    "chr": "57",
    "total": "263",
	"skills": ["Repair", "Hero", "Admiral"]
}, {
    "name": "Quan Ji",
    "ldr": "51",
    "war": "69",
    "int": "55",
    "pol": "70",
    "chr": "64",
    "total": "309",
	"skills": ["Order", "Hero"]
}, {
    "name": "Quan Shang",
    "ldr": "5",
    "war": "6",
    "int": "11",
    "pol": "38",
    "chr": "56",
    "total": "116",
	"skills": ["Trade", "Hero", "Spy"]
}, {
    "name": "Quan Wei",
    "ldr": "61",
    "war": "66",
    "int": "45",
    "pol": "34",
    "chr": "56",
    "total": "262",
	"skills": ["Repair", "Scare", "Hero"]
}, {
    "name": "Quan Yi",
    "ldr": "60",
    "war": "62",
    "int": "37",
    "pol": "46",
    "chr": "54",
    "total": "259",
	"skills": ["Blunder", "Hero"]
}, {
    "name": "Sha Moke",
    "ldr": "62",
    "war": "84",
    "int": "27",
    "pol": "13",
    "chr": "46",
    "total": "232",
	"skills": ["Hire", "Charge", "Shout", "Parry", "Counter", "Crush", "Host"]
}, {
    "name": "Shan Jing",
    "ldr": "70",
    "war": "63",
    "int": "44",
    "pol": "48",
    "chr": "55",
    "total": "280",
	"skills": ["Repair", "Hire", "Charge", "Parry"]
}, {
    "name": "Shao Ti",
    "ldr": "22",
    "war": "16",
    "int": "78",
    "pol": "65",
    "chr": "59",
    "total": "240",
	"skills": ["Spy"]
}, {
    "name": "Shen Dan",
    "ldr": "56",
    "war": "62",
    "int": "54",
    "pol": "58",
    "chr": "45",
    "total": "275",
	"skills": ["Trade"]
}, {
    "name": "Shen Pei",
    "ldr": "83",
    "war": "61",
    "int": "83",
    "pol": "73",
    "chr": "70",
    "total": "370",
	"skills": []
}, {
    "name": "Shen Yi",
    "ldr": "57",
    "war": "61",
    "int": "59",
    "pol": "57",
    "chr": "47",
    "total": "281",
	"skills": []
}, {
    "name": "Shen Ying",
    "ldr": "76",
    "war": "81",
    "int": "61",
    "pol": "44",
    "chr": "68",
    "total": "330",
	"skills": []
}, {
    "name": "Sheng Man",
    "ldr": "61",
    "war": "69",
    "int": "66",
    "pol": "51",
    "chr": "58",
    "total": "305",
	"skills": []
}, {
    "name": "Shi Bao",
    "ldr": "71",
    "war": "67",
    "int": "58",
    "pol": "53",
    "chr": "62",
    "total": "311",
	"skills": []
}, {
    "name": "Shi Hui",
    "ldr": "69",
    "war": "64",
    "int": "44",
    "pol": "31",
    "chr": "54",
    "total": "262",
	"skills": []
}, {
    "name": "Shi Kuang",
    "ldr": "58",
    "war": "45",
    "int": "64",
    "pol": "58",
    "chr": "64",
    "total": "289",
	"skills": []
}, {
    "name": "Shi Shuo",
    "ldr": "36",
    "war": "66",
    "int": "44",
    "pol": "26",
    "chr": "49",
    "total": "221",
	"skills": []
}, {
    "name": "Shi Xie",
    "ldr": "53",
    "war": "31",
    "int": "76",
    "pol": "80",
    "chr": "86",
    "total": "326",
	"skills": []
}, {
    "name": "Shi Yi",
    "ldr": "48",
    "war": "36",
    "int": "67",
    "pol": "74",
    "chr": "69",
    "total": "294",
	"skills": []
}, {
    "name": "Shi Zhi",
    "ldr": "63",
    "war": "58",
    "int": "51",
    "pol": "52",
    "chr": "46",
    "total": "270",
	"skills": []
}, {
    "name": "Shi Zuan",
    "ldr": "61",
    "war": "71",
    "int": "54",
    "pol": "48",
    "chr": "15",
    "total": "249",
	"skills": []
}, {
    "name": "Sima Fu",
    "ldr": "72",
    "war": "35",
    "int": "77",
    "pol": "79",
    "chr": "87",
    "total": "350",
	"skills": []
}, {
    "name": "Sima Lang",
    "ldr": "20",
    "war": "24",
    "int": "69",
    "pol": "83",
    "chr": "85",
    "total": "281",
	"skills": []
}, {
    "name": "Sima Shi",
    "ldr": "80",
    "war": "64",
    "int": "87",
    "pol": "85",
    "chr": "79",
    "total": "395",
	"skills": []
}, {
    "name": "Sima Wang",
    "ldr": "70",
    "war": "59",
    "int": "81",
    "pol": "64",
    "chr": "9",
    "total": "283",
	"skills": []
}, {
    "name": "Sima Yan",
    "ldr": "73",
    "war": "57",
    "int": "82",
    "pol": "78",
    "chr": "74",
    "total": "364",
	"skills": []
}, {
    "name": "Sima Yi",
    "ldr": "97",
    "war": "63",
    "int": "96",
    "pol": "93",
    "chr": "89",
    "total": "438",
	"skills": []
}, {
    "name": "Sima You",
    "ldr": "68",
    "war": "60",
    "int": "80",
    "pol": "72",
    "chr": "83",
    "total": "363",
	"skills": []
}, {
    "name": "Sima Zhao",
    "ldr": "76",
    "war": "55",
    "int": "89",
    "pol": "90",
    "chr": "80",
    "total": "390",
	"skills": []
}, {
    "name": "Song Qian",
    "ldr": "61",
    "war": "78",
    "int": "44",
    "pol": "39",
    "chr": "64",
    "total": "286",
	"skills": []
}, {
    "name": "Song Xian",
    "ldr": "69",
    "war": "78",
    "int": "36",
    "pol": "28",
    "chr": "29",
    "total": "240",
	"skills": []
}, {
    "name": "Su Fei",
    "ldr": "67",
    "war": "62",
    "int": "67",
    "pol": "66",
    "chr": "66",
    "total": "328",
	"skills": []
}, {
    "name": "Su You",
    "ldr": "51",
    "war": "61",
    "int": "48",
    "pol": "35",
    "chr": "46",
    "total": "241",
	"skills": []
}, {
    "name": "Sui Gu",
    "ldr": "61",
    "war": "72",
    "int": "40",
    "pol": "7",
    "chr": "21",
    "total": "201",
	"skills": []
}, {
    "name": "Sui Yuanjin",
    "ldr": "53",
    "war": "63",
    "int": "38",
    "pol": "21",
    "chr": "45",
    "total": "220",
	"skills": []
}, {
    "name": "Sun Ce",
    "ldr": "95",
    "war": "90",
    "int": "69",
    "pol": "66",
    "chr": "92",
    "total": "412",
	"skills": []
}, {
    "name": "Sun Chen",
    "ldr": "25",
    "war": "40",
    "int": "65",
    "pol": "8",
    "chr": "6",
    "total": "144",
	"skills": []
}, {
    "name": "Sun Deng",
    "ldr": "59",
    "war": "39",
    "int": "79",
    "pol": "74",
    "chr": "84",
    "total": "335",
	"skills": []
}, {
    "name": "Sun Hao",
    "ldr": "13",
    "war": "28",
    "int": "30",
    "pol": "5",
    "chr": "4",
    "total": "80",
	"skills": []
}, {
    "name": "Sun He",
    "ldr": "23",
    "war": "31",
    "int": "67",
    "pol": "73",
    "chr": "70",
    "total": "264",
	"skills": []
}, {
    "name": "Sun Huan",
    "ldr": "79",
    "war": "73",
    "int": "77",
    "pol": "68",
    "chr": "78",
    "total": "375",
	"skills": []
}, {
    "name": "Sun Ji",
    "ldr": "62",
    "war": "65",
    "int": "52",
    "pol": "60",
    "chr": "66",
    "total": "305",
	"skills": []
}, {
    "name": "Sun Jian",
    "ldr": "98",
    "war": "89",
    "int": "77",
    "pol": "72",
    "chr": "91",
    "total": "427",
	"skills": []
}, {
    "name": "Sun Jiao",
    "ldr": "77",
    "war": "60",
    "int": "69",
    "pol": "71",
    "chr": "75",
    "total": "352",
	"skills": []
}, {
    "name": "Sun Jing",
    "ldr": "66",
    "war": "51",
    "int": "75",
    "pol": "74",
    "chr": "71",
    "total": "337",
	"skills": []
}, {
    "name": "Sun Jun",
    "ldr": "67",
    "war": "72",
    "int": "68",
    "pol": "28",
    "chr": "10",
    "total": "245",
	"skills": []
}, {
    "name": "Sun Kuang",
    "ldr": "42",
    "war": "52",
    "int": "47",
    "pol": "64",
    "chr": "56",
    "total": "261",
	"skills": []
}, {
    "name": "Sun Lang",
    "ldr": "34",
    "war": "46",
    "int": "33",
    "pol": "43",
    "chr": "42",
    "total": "198",
	"skills": []
}, {
    "name": "Sun Li",
    "ldr": "76",
    "war": "81",
    "int": "62",
    "pol": "75",
    "chr": "74",
    "total": "368",
	"skills": []
}, {
    "name": "Sun Liang",
    "ldr": "24",
    "war": "10",
    "int": "74",
    "pol": "76",
    "chr": "69",
    "total": "253",
	"skills": []
}, {
    "name": "Sun Qian",
    "ldr": "30",
    "war": "35",
    "int": "72",
    "pol": "87",
    "chr": "88",
    "total": "312",
	"skills": []
}, {
    "name": "Sun Quan",
    "ldr": "76",
    "war": "68",
    "int": "83",
    "pol": "89",
    "chr": "94",
    "total": "410",
	"skills": []
}, {
    "name": "Sun Shao",
    "ldr": "82",
    "war": "78",
    "int": "73",
    "pol": "68",
    "chr": "73",
    "total": "374",
	"skills": []
}, {
    "name": "Sun Xin",
    "ldr": "68",
    "war": "70",
    "int": "38",
    "pol": "40",
    "chr": "35",
    "total": "251",
	"skills": []
}, {
    "name": "Sun Xiu",
    "ldr": "57",
    "war": "42",
    "int": "79",
    "pol": "75",
    "chr": "83",
    "total": "336",
	"skills": []
}, {
    "name": "Sun Xiu (2)",
    "ldr": "55",
    "war": "52",
    "int": "53",
    "pol": "58",
    "chr": "67",
    "total": "285",
	"skills": []
}, {
    "name": "Sun Yi",
    "ldr": "72",
    "war": "68",
    "int": "57",
    "pol": "63",
    "chr": "59",
    "total": "319",
	"skills": []
}, {
    "name": "Sun Yi (2)",
    "ldr": "69",
    "war": "75",
    "int": "26",
    "pol": "15",
    "chr": "30",
    "total": "215",
	"skills": []
}, {
    "name": "Sun Yu",
    "ldr": "75",
    "war": "64",
    "int": "68",
    "pol": "72",
    "chr": "73",
    "total": "352",
	"skills": []
}, {
    "name": "Sun Zhen",
    "ldr": "64",
    "war": "71",
    "int": "48",
    "pol": "42",
    "chr": "54",
    "total": "279",
	"skills": []
}, {
    "name": "Sun Zhong",
    "ldr": "65",
    "war": "73",
    "int": "37",
    "pol": "6",
    "chr": "11",
    "total": "192",
	"skills": []
}, {
    "name": "Ta Dun",
    "ldr": "84",
    "war": "82",
    "int": "61",
    "pol": "36",
    "chr": "57",
    "total": "320",
	"skills": []
}, {
    "name": "Taishi Ci",
    "ldr": "81",
    "war": "90",
    "int": "67",
    "pol": "59",
    "chr": "79",
    "total": "376",
	"skills": []
}, {
    "name": "Taishi Xiang",
    "ldr": "57",
    "war": "66",
    "int": "50",
    "pol": "61",
    "chr": "58",
    "total": "292",
	"skills": []
}, {
    "name": "Tan Xiong",
    "ldr": "59",
    "war": "73",
    "int": "17",
    "pol": "19",
    "chr": "36",
    "total": "204",
	"skills": []
}, {
    "name": "Tang Bin",
    "ldr": "70",
    "war": "74",
    "int": "62",
    "pol": "52",
    "chr": "60",
    "total": "318",
	"skills": []
}, {
    "name": "Tang Zi",
    "ldr": "63",
    "war": "71",
    "int": "50",
    "pol": "54",
    "chr": "63",
    "total": "301",
	"skills": []
}, {
    "name": "Tao Jun",
    "ldr": "64",
    "war": "65",
    "int": "58",
    "pol": "52",
    "chr": "53",
    "total": "292",
	"skills": []
}, {
    "name": "Tao Qian",
    "ldr": "50",
    "war": "33",
    "int": "65",
    "pol": "65",
    "chr": "77",
    "total": "290",
	"skills": []
}, {
    "name": "Teng Xiu",
    "ldr": "35",
    "war": "20",
    "int": "44",
    "pol": "72",
    "chr": "62",
    "total": "233",
	"skills": []
}, {
    "name": "Teng Yin",
    "ldr": "32",
    "war": "41",
    "int": "71",
    "pol": "76",
    "chr": "64",
    "total": "284",
	"skills": []
}, {
    "name": "Tian Chou",
    "ldr": "68",
    "war": "64",
    "int": "72",
    "pol": "73",
    "chr": "74",
    "total": "351",
	"skills": []
}, {
    "name": "Tian Feng",
    "ldr": "60",
    "war": "32",
    "int": "93",
    "pol": "87",
    "chr": "62",
    "total": "334",
	"skills": []
}, {
    "name": "Tian Kai",
    "ldr": "71",
    "war": "63",
    "int": "57",
    "pol": "59",
    "chr": "62",
    "total": "312",
	"skills": []
}, {
    "name": "Tian Xu",
    "ldr": "47",
    "war": "61",
    "int": "55",
    "pol": "19",
    "chr": "7",
    "total": "189",
	"skills": []
}, {
    "name": "Tian Yu",
    "ldr": "80",
    "war": "62",
    "int": "83",
    "pol": "72",
    "chr": "75",
    "total": "372",
	"skills": []
}, {
    "name": "Wan Yu",
    "ldr": "20",
    "war": "18",
    "int": "66",
    "pol": "62",
    "chr": "16",
    "total": "182",
	"skills": []
}, {
    "name": "Wang Can",
    "ldr": "6",
    "war": "4",
    "int": "82",
    "pol": "84",
    "chr": "57",
    "total": "233",
	"skills": []
}, {
    "name": "Wang Chang",
    "ldr": "75",
    "war": "61",
    "int": "70",
    "pol": "83",
    "chr": "78",
    "total": "367",
	"skills": []
}, {
    "name": "Wang Dun",
    "ldr": "60",
    "war": "65",
    "int": "41",
    "pol": "62",
    "chr": "53",
    "total": "281",
	"skills": []
}, {
    "name": "Wang Fu",
    "ldr": "52",
    "war": "43",
    "int": "78",
    "pol": "75",
    "chr": "73",
    "total": "321",
	"skills": []
}, {
    "name": "Wang Hun",
    "ldr": "75",
    "war": "77",
    "int": "72",
    "pol": "74",
    "chr": "70",
    "total": "368",
	"skills": []
}, {
    "name": "Wang Ji",
    "ldr": "78",
    "war": "75",
    "int": "74",
    "pol": "76",
    "chr": "75",
    "total": "378",
	"skills": []
}, {
    "name": "Wang Jing",
    "ldr": "64",
    "war": "62",
    "int": "67",
    "pol": "75",
    "chr": "77",
    "total": "345",
	"skills": []
}, {
    "name": "Wang Jun",
    "ldr": "81",
    "war": "71",
    "int": "79",
    "pol": "70",
    "chr": "78",
    "total": "379",
	"skills": []
}, {
    "name": "Wang Kang",
    "ldr": "69",
    "war": "58",
    "int": "53",
    "pol": "69",
    "chr": "61",
    "total": "310",
	"skills": []
}, {
    "name": "Wang Kuang",
    "ldr": "64",
    "war": "57",
    "int": "64",
    "pol": "67",
    "chr": "79",
    "total": "331",
	"skills": []
}, {
    "name": "Wang Lang",
    "ldr": "46",
    "war": "34",
    "int": "76",
    "pol": "81",
    "chr": "49",
    "total": "286",
	"skills": []
}, {
    "name": "Wang Lei",
    "ldr": "29",
    "war": "30",
    "int": "74",
    "pol": "77",
    "chr": "72",
    "total": "282",
	"skills": []
}, {
    "name": "Wang Ling",
    "ldr": "73",
    "war": "60",
    "int": "71",
    "pol": "84",
    "chr": "75",
    "total": "363",
	"skills": []
}, {
    "name": "Wang Men",
    "ldr": "64",
    "war": "67",
    "int": "32",
    "pol": "40",
    "chr": "52",
    "total": "255",
	"skills": []
}, {
    "name": "Wang Ping",
    "ldr": "83",
    "war": "76",
    "int": "76",
    "pol": "56",
    "chr": "50",
    "total": "341",
	"skills": []
}, {
    "name": "Wang Qi",
    "ldr": "70",
    "war": "66",
    "int": "63",
    "pol": "76",
    "chr": "73",
    "total": "348",
	"skills": []
}, {
    "name": "Wang Rong",
    "ldr": "60",
    "war": "36",
    "int": "72",
    "pol": "56",
    "chr": "48",
    "total": "272",
	"skills": []
}, {
    "name": "Wang Shuang",
    "ldr": "61",
    "war": "89",
    "int": "18",
    "pol": "20",
    "chr": "24",
    "total": "212",
	"skills": []
}, {
    "name": "Wang Su",
    "ldr": "35",
    "war": "21",
    "int": "80",
    "pol": "78",
    "chr": "76",
    "total": "290",
	"skills": []
}, {
    "name": "Wang Tao",
    "ldr": "48",
    "war": "44",
    "int": "70",
    "pol": "54",
    "chr": "60",
    "total": "276",
	"skills": []
}, {
    "name": "Wang Wei",
    "ldr": "61",
    "war": "65",
    "int": "60",
    "pol": "54",
    "chr": "64",
    "total": "304",
	"skills": []
}, {
    "name": "Wang Xiang",
    "ldr": "25",
    "war": "19",
    "int": "65",
    "pol": "76",
    "chr": "84",
    "total": "269",
	"skills": []
}, {
    "name": "Wang Xiu",
    "ldr": "53",
    "war": "27",
    "int": "76",
    "pol": "78",
    "chr": "65",
    "total": "299",
	"skills": []
}, {
    "name": "Wang Ye",
    "ldr": "32",
    "war": "6",
    "int": "46",
    "pol": "72",
    "chr": "50",
    "total": "206",
	"skills": []
}, {
    "name": "Wang Yun",
    "ldr": "27",
    "war": "5",
    "int": "73",
    "pol": "78",
    "chr": "77",
    "total": "260",
	"skills": []
}, {
    "name": "Wang Zhong",
    "ldr": "42",
    "war": "58",
    "int": "21",
    "pol": "29",
    "chr": "20",
    "total": "170",
	"skills": []
}, {
    "name": "Wei Guan",
    "ldr": "69",
    "war": "45",
    "int": "81",
    "pol": "78",
    "chr": "37",
    "total": "310",
	"skills": []
}, {
    "name": "Wei Miao",
    "ldr": "58",
    "war": "62",
    "int": "60",
    "pol": "56",
    "chr": "65",
    "total": "301",
	"skills": []
}, {
    "name": "Wei Xu",
    "ldr": "70",
    "war": "79",
    "int": "27",
    "pol": "33",
    "chr": "31",
    "total": "240",
	"skills": []
}, {
    "name": "Wei Yan",
    "ldr": "85",
    "war": "92",
    "int": "69",
    "pol": "43",
    "chr": "34",
    "total": "323",
	"skills": []
}, {
    "name": "Wei You",
    "ldr": "33",
    "war": "28",
    "int": "77",
    "pol": "73",
    "chr": "66",
    "total": "277",
	"skills": []
}, {
    "name": "Wei Zhao",
    "ldr": "18",
    "war": "20",
    "int": "68",
    "pol": "73",
    "chr": "68",
    "total": "247",
	"skills": []
}, {
    "name": "Wen Chou",
    "ldr": "82",
    "war": "95",
    "int": "24",
    "pol": "23",
    "chr": "47",
    "total": "271",
	"skills": []
}, {
    "name": "Wen Hu",
    "ldr": "65",
    "war": "74",
    "int": "45",
    "pol": "32",
    "chr": "58",
    "total": "274",
	"skills": []
}, {
    "name": "Wen Hui",
    "ldr": "42",
    "war": "40",
    "int": "78",
    "pol": "85",
    "chr": "73",
    "total": "318",
	"skills": []
}, {
    "name": "Wen Pin",
    "ldr": "82",
    "war": "84",
    "int": "62",
    "pol": "66",
    "chr": "70",
    "total": "364",
	"skills": []
}, {
    "name": "Wen Qin",
    "ldr": "74",
    "war": "83",
    "int": "43",
    "pol": "32",
    "chr": "18",
    "total": "250",
	"skills": []
}, {
    "name": "Wen Yang",
    "ldr": "78",
    "war": "91",
    "int": "61",
    "pol": "43",
    "chr": "68",
    "total": "341",
	"skills": []
}, {
    "name": "Wu Anguo",
    "ldr": "68",
    "war": "84",
    "int": "43",
    "pol": "33",
    "chr": "27",
    "total": "255",
	"skills": []
}, {
    "name": "Wu Ban",
    "ldr": "75",
    "war": "72",
    "int": "57",
    "pol": "51",
    "chr": "67",
    "total": "322",
	"skills": []
}, {
    "name": "Wu Can",
    "ldr": "69",
    "war": "41",
    "int": "78",
    "pol": "72",
    "chr": "68",
    "total": "328",
	"skills": []
}, {
    "name": "Wu Gang",
    "ldr": "49",
    "war": "34",
    "int": "61",
    "pol": "66",
    "chr": "72",
    "total": "282",
	"skills": []
}, {
    "name": "Wu Jing",
    "ldr": "73",
    "war": "60",
    "int": "57",
    "pol": "67",
    "chr": "69",
    "total": "326",
	"skills": []
}, {
    "name": "Wu Ju",
    "ldr": "49",
    "war": "63",
    "int": "32",
    "pol": "52",
    "chr": "48",
    "total": "244",
	"skills": []
}, {
    "name": "Wu Lan",
    "ldr": "63",
    "war": "80",
    "int": "34",
    "pol": "36",
    "chr": "51",
    "total": "264",
	"skills": []
}, {
    "name": "Wu Tugu",
    "ldr": "74",
    "war": "89",
    "int": "1",
    "pol": "2",
    "chr": "19",
    "total": "185",
	"skills": []
}, {
    "name": "Wu Yan",
    "ldr": "67",
    "war": "73",
    "int": "46",
    "pol": "48",
    "chr": "63",
    "total": "297",
	"skills": []
}, {
    "name": "Wu Yan (2)",
    "ldr": "73",
    "war": "68",
    "int": "76",
    "pol": "67",
    "chr": "65",
    "total": "349",
	"skills": []
}, {
    "name": "Wu Yi",
    "ldr": "85",
    "war": "71",
    "int": "71",
    "pol": "70",
    "chr": "77",
    "total": "374",
	"skills": []
}, {
    "name": "Wu Zhi",
    "ldr": "17",
    "war": "34",
    "int": "64",
    "pol": "56",
    "chr": "9",
    "total": "180",
	"skills": []
}, {
    "name": "Xi Zheng",
    "ldr": "7",
    "war": "6",
    "int": "63",
    "pol": "73",
    "chr": "61",
    "total": "210",
	"skills": []
}, {
    "name": "Xi Zhicai",
    "ldr": "24",
    "war": "5",
    "int": "86",
    "pol": "73",
    "chr": "55",
    "total": "243",
	"skills": []
}, {
    "name": "Xiahou Ba",
    "ldr": "80",
    "war": "85",
    "int": "77",
    "pol": "57",
    "chr": "61",
    "total": "360",
	"skills": []
}, {
    "name": "Xiahou De",
    "ldr": "59",
    "war": "64",
    "int": "32",
    "pol": "41",
    "chr": "51",
    "total": "247",
	"skills": []
}, {
    "name": "Xiahou Dun",
    "ldr": "87",
    "war": "89",
    "int": "61",
    "pol": "76",
    "chr": "87",
    "total": "400",
	"skills": []
}, {
    "name": "Xiahou En",
    "ldr": "53",
    "war": "59",
    "int": "50",
    "pol": "53",
    "chr": "71",
    "total": "286",
	"skills": []
}, {
    "name": "Xiahou He",
    "ldr": "50",
    "war": "54",
    "int": "72",
    "pol": "75",
    "chr": "66",
    "total": "317",
	"skills": []
}, {
    "name": "Xiahou Hui",
    "ldr": "53",
    "war": "51",
    "int": "75",
    "pol": "73",
    "chr": "69",
    "total": "321",
	"skills": []
}, {
    "name": "Xiahou Mao",
    "ldr": "15",
    "war": "7",
    "int": "5",
    "pol": "20",
    "chr": "3",
    "total": "50",
	"skills": []
}, {
    "name": "Xiahou Shang",
    "ldr": "78",
    "war": "68",
    "int": "79",
    "pol": "66",
    "chr": "59",
    "total": "350",
	"skills": []
}, {
    "name": "Xiahou Wei",
    "ldr": "71",
    "war": "70",
    "int": "51",
    "pol": "58",
    "chr": "64",
    "total": "314",
	"skills": []
}, {
    "name": "Xiahou Xuan",
    "ldr": "53",
    "war": "39",
    "int": "77",
    "pol": "94",
    "chr": "64",
    "total": "327",
	"skills": []
}, {
    "name": "Xiahou Yuan",
    "ldr": "92",
    "war": "91",
    "int": "56",
    "pol": "61",
    "chr": "78",
    "total": "378",
	"skills": []
}, {
    "name": "Xiang Chong",
    "ldr": "74",
    "war": "59",
    "int": "76",
    "pol": "67",
    "chr": "71",
    "total": "347",
	"skills": []
}, {
    "name": "Xiang Lang",
    "ldr": "28",
    "war": "15",
    "int": "71",
    "pol": "74",
    "chr": "70",
    "total": "258",
	"skills": []
}, {
    "name": "Xie Jing",
    "ldr": "66",
    "war": "76",
    "int": "34",
    "pol": "32",
    "chr": "43",
    "total": "251",
	"skills": []
}, {
    "name": "Xin Chang",
    "ldr": "51",
    "war": "29",
    "int": "46",
    "pol": "70",
    "chr": "68",
    "total": "264",
	"skills": []
}, {
    "name": "Xin Pi",
    "ldr": "38",
    "war": "25",
    "int": "78",
    "pol": "83",
    "chr": "76",
    "total": "300",
	"skills": []
}, {
    "name": "Xin Ping",
    "ldr": "71",
    "war": "54",
    "int": "74",
    "pol": "75",
    "chr": "67",
    "total": "341",
	"skills": []
}, {
    "name": "Xing Daorong",
    "ldr": "59",
    "war": "80",
    "int": "44",
    "pol": "12",
    "chr": "6",
    "total": "201",
	"skills": []
}, {
    "name": "Xu Gong",
    "ldr": "47",
    "war": "65",
    "int": "61",
    "pol": "52",
    "chr": "65",
    "total": "290",
	"skills": []
}, {
    "name": "Xu Huang",
    "ldr": "89",
    "war": "89",
    "int": "74",
    "pol": "52",
    "chr": "73",
    "total": "377",
	"skills": []
}, {
    "name": "Xu Jing",
    "ldr": "4",
    "war": "4",
    "int": "67",
    "pol": "78",
    "chr": "69",
    "total": "222",
	"skills": []
}, {
    "name": "Xu Miao",
    "ldr": "55",
    "war": "32",
    "int": "70",
    "pol": "84",
    "chr": "80",
    "total": "321",
	"skills": []
}, {
    "name": "Xu Rong",
    "ldr": "82",
    "war": "73",
    "int": "64",
    "pol": "47",
    "chr": "45",
    "total": "311",
	"skills": []
}, {
    "name": "Xu Sheng",
    "ldr": "87",
    "war": "81",
    "int": "77",
    "pol": "62",
    "chr": "70",
    "total": "377",
	"skills": []
}, {
    "name": "Xu Shu",
    "ldr": "80",
    "war": "64",
    "int": "94",
    "pol": "80",
    "chr": "81",
    "total": "399",
	"skills": []
}, {
    "name": "Xu Yi",
    "ldr": "51",
    "war": "74",
    "int": "15",
    "pol": "16",
    "chr": "47",
    "total": "203",
	"skills": []
}, {
    "name": "Xu You",
    "ldr": "36",
    "war": "24",
    "int": "84",
    "pol": "60",
    "chr": "13",
    "total": "217",
	"skills": []
}, {
    "name": "Xu Zhi",
    "ldr": "54",
    "war": "80",
    "int": "24",
    "pol": "18",
    "chr": "43",
    "total": "219",
	"skills": []
}, {
    "name": "Xu Zhu",
    "ldr": "67",
    "war": "96",
    "int": "36",
    "pol": "21",
    "chr": "58",
    "total": "278",
	"skills": []
}, {
    "name": "Xue Cong",
    "ldr": "24",
    "war": "12",
    "int": "65",
    "pol": "77",
    "chr": "60",
    "total": "238",
	"skills": []
}, {
    "name": "Xue Xu",
    "ldr": "10",
    "war": "16",
    "int": "77",
    "pol": "76",
    "chr": "41",
    "total": "220",
	"skills": []
}, {
    "name": "Xun Yi",
    "ldr": "16",
    "war": "11",
    "int": "73",
    "pol": "75",
    "chr": "74",
    "total": "249",
	"skills": []
}, {
    "name": "Xun You",
    "ldr": "73",
    "war": "25",
    "int": "94",
    "pol": "88",
    "chr": "86",
    "total": "366",
	"skills": []
}, {
    "name": "Xun Yu",
    "ldr": "48",
    "war": "18",
    "int": "96",
    "pol": "99",
    "chr": "93",
    "total": "354",
	"skills": []
}, {
    "name": "Yan Baihu",
    "ldr": "67",
    "war": "69",
    "int": "24",
    "pol": "20",
    "chr": "33",
    "total": "213",
	"skills": []
}, {
    "name": "Yan Gang",
    "ldr": "74",
    "war": "63",
    "int": "41",
    "pol": "50",
    "chr": "51",
    "total": "279",
	"skills": []
}, {
    "name": "Yan Jun",
    "ldr": "16",
    "war": "1",
    "int": "70",
    "pol": "84",
    "chr": "76",
    "total": "247",
	"skills": []
}, {
    "name": "Yan Liang",
    "ldr": "83",
    "war": "94",
    "int": "41",
    "pol": "34",
    "chr": "52",
    "total": "304",
	"skills": []
}, {
    "name": "Yan Pu",
    "ldr": "31",
    "war": "28",
    "int": "82",
    "pol": "78",
    "chr": "69",
    "total": "288",
	"skills": []
}, {
    "name": "Yan Rou",
    "ldr": "74",
    "war": "50",
    "int": "70",
    "pol": "73",
    "chr": "80",
    "total": "347",
	"skills": []
}, {
    "name": "Yan Xiang",
    "ldr": "29",
    "war": "27",
    "int": "69",
    "pol": "74",
    "chr": "62",
    "total": "261",
	"skills": []
}, {
    "name": "Yan Xing",
    "ldr": "70",
    "war": "86",
    "int": "38",
    "pol": "33",
    "chr": "50",
    "total": "277",
	"skills": []
}, {
    "name": "Yan Yan",
    "ldr": "79",
    "war": "82",
    "int": "69",
    "pol": "65",
    "chr": "74",
    "total": "369",
	"skills": []
}, {
    "name": "Yan Yu",
    "ldr": "59",
    "war": "64",
    "int": "60",
    "pol": "56",
    "chr": "20",
    "total": "259",
	"skills": []
}, {
    "name": "Yan Zheng",
    "ldr": "50",
    "war": "58",
    "int": "38",
    "pol": "31",
    "chr": "4",
    "total": "181",
	"skills": []
}, {
    "name": "Yang Ang",
    "ldr": "65",
    "war": "70",
    "int": "39",
    "pol": "34",
    "chr": "42",
    "total": "250",
	"skills": []
}, {
    "name": "Yang Bo",
    "ldr": "38",
    "war": "57",
    "int": "10",
    "pol": "17",
    "chr": "14",
    "total": "136",
	"skills": []
}, {
    "name": "Yang Chou",
    "ldr": "51",
    "war": "67",
    "int": "43",
    "pol": "16",
    "chr": "13",
    "total": "190",
	"skills": []
}, {
    "name": "Yang Feng",
    "ldr": "67",
    "war": "63",
    "int": "34",
    "pol": "28",
    "chr": "58",
    "total": "250",
	"skills": []
}, {
    "name": "Yang Feng (2)",
    "ldr": "54",
    "war": "58",
    "int": "48",
    "pol": "40",
    "chr": "37",
    "total": "237",
	"skills": []
}, {
    "name": "Yang Fu",
    "ldr": "68",
    "war": "55",
    "int": "85",
    "pol": "81",
    "chr": "77",
    "total": "366",
	"skills": []
}, {
    "name": "Yang Hong",
    "ldr": "19",
    "war": "17",
    "int": "76",
    "pol": "60",
    "chr": "51",
    "total": "223",
	"skills": []
}, {
    "name": "Yang Hu",
    "ldr": "87",
    "war": "65",
    "int": "87",
    "pol": "85",
    "chr": "90",
    "total": "414",
	"skills": []
}, {
    "name": "Yang Huai",
    "ldr": "63",
    "war": "69",
    "int": "65",
    "pol": "63",
    "chr": "47",
    "total": "307",
	"skills": []
}, {
    "name": "Yang Ji",
    "ldr": "69",
    "war": "63",
    "int": "71",
    "pol": "68",
    "chr": "71",
    "total": "342",
	"skills": []
}, {
    "name": "Yang Qiu",
    "ldr": "66",
    "war": "67",
    "int": "61",
    "pol": "57",
    "chr": "38",
    "total": "289",
	"skills": []
}, {
    "name": "Yang Ren",
    "ldr": "71",
    "war": "78",
    "int": "56",
    "pol": "43",
    "chr": "54",
    "total": "302",
	"skills": []
}, {
    "name": "Yang Song",
    "ldr": "2",
    "war": "4",
    "int": "32",
    "pol": "37",
    "chr": "2",
    "total": "77",
	"skills": []
}, {
    "name": "Yang Xin",
    "ldr": "60",
    "war": "67",
    "int": "63",
    "pol": "56",
    "chr": "63",
    "total": "309",
	"skills": []
}, {
    "name": "Yang Xiu",
    "ldr": "10",
    "war": "7",
    "int": "83",
    "pol": "79",
    "chr": "44",
    "total": "223",
	"skills": []
}, {
    "name": "Yang Yi",
    "ldr": "68",
    "war": "44",
    "int": "82",
    "pol": "79",
    "chr": "17",
    "total": "290",
	"skills": []
}, {
    "name": "Yang Zhao",
    "ldr": "65",
    "war": "61",
    "int": "67",
    "pol": "70",
    "chr": "55",
    "total": "318",
	"skills": []
}, {
    "name": "Yang Zuo",
    "ldr": "54",
    "war": "62",
    "int": "37",
    "pol": "36",
    "chr": "45",
    "total": "234",
	"skills": []
}, {
    "name": "Yi Ji",
    "ldr": "31",
    "war": "23",
    "int": "75",
    "pol": "85",
    "chr": "86",
    "total": "300",
	"skills": []
}, {
    "name": "Yin Damu",
    "ldr": "6",
    "war": "10",
    "int": "37",
    "pol": "50",
    "chr": "56",
    "total": "159",
	"skills": []
}, {
    "name": "Yin Mo",
    "ldr": "11",
    "war": "15",
    "int": "65",
    "pol": "77",
    "chr": "62",
    "total": "230",
	"skills": []
}, {
    "name": "Yin Shang",
    "ldr": "49",
    "war": "46",
    "int": "57",
    "pol": "68",
    "chr": "53",
    "total": "273",
	"skills": []
}, {
    "name": "Yong Kai",
    "ldr": "73",
    "war": "67",
    "int": "59",
    "pol": "44",
    "chr": "50",
    "total": "293",
	"skills": []
}, {
    "name": "Yu Fan",
    "ldr": "34",
    "war": "43",
    "int": "86",
    "pol": "81",
    "chr": "39",
    "total": "283",
	"skills": []
}, {
    "name": "Yu Fuluo",
    "ldr": "72",
    "war": "68",
    "int": "8",
    "pol": "34",
    "chr": "64",
    "total": "246",
	"skills": []
}, {
    "name": "Yu Jin",
    "ldr": "85",
    "war": "77",
    "int": "72",
    "pol": "63",
    "chr": "47",
    "total": "344",
	"skills": []
}, {
    "name": "Yu Quan",
    "ldr": "65",
    "war": "76",
    "int": "42",
    "pol": "37",
    "chr": "68",
    "total": "288",
	"skills": []
}, {
    "name": "Yu She",
    "ldr": "62",
    "war": "79",
    "int": "26",
    "pol": "23",
    "chr": "29",
    "total": "219",
	"skills": []
}, {
    "name": "Yu Si",
    "ldr": "70",
    "war": "33",
    "int": "79",
    "pol": "71",
    "chr": "72",
    "total": "325",
	"skills": []
}, {
    "name": "Yuan Shang",
    "ldr": "66",
    "war": "70",
    "int": "50",
    "pol": "44",
    "chr": "79",
    "total": "309",
	"skills": []
}, {
    "name": "Yuan Shao",
    "ldr": "80",
    "war": "69",
    "int": "76",
    "pol": "77",
    "chr": "91",
    "total": "393",
	"skills": []
}, {
    "name": "Yuan Shu",
    "ldr": "52",
    "war": "66",
    "int": "72",
    "pol": "17",
    "chr": "44",
    "total": "251",
	"skills": []
}, {
    "name": "Yuan Tan",
    "ldr": "62",
    "war": "68",
    "int": "30",
    "pol": "40",
    "chr": "57",
    "total": "257",
	"skills": []
}, {
    "name": "Yuan Xi",
    "ldr": "69",
    "war": "54",
    "int": "68",
    "pol": "70",
    "chr": "66",
    "total": "327",
	"skills": []
}, {
    "name": "Yuan Yao",
    "ldr": "44",
    "war": "42",
    "int": "45",
    "pol": "50",
    "chr": "59",
    "total": "240",
	"skills": []
}, {
    "name": "Yuan Yi",
    "ldr": "57",
    "war": "38",
    "int": "73",
    "pol": "76",
    "chr": "69",
    "total": "313",
	"skills": []
}, {
    "name": "Yuan Yin",
    "ldr": "26",
    "war": "15",
    "int": "39",
    "pol": "45",
    "chr": "43",
    "total": "168",
	"skills": []
}, {
    "name": "Yue Chen",
    "ldr": "72",
    "war": "75",
    "int": "41",
    "pol": "49",
    "chr": "57",
    "total": "294",
	"skills": []
}, {
    "name": "Yue Jin",
    "ldr": "80",
    "war": "85",
    "int": "53",
    "pol": "45",
    "chr": "70",
    "total": "333",
	"skills": []
}, {
    "name": "Yue Jiu",
    "ldr": "56",
    "war": "68",
    "int": "58",
    "pol": "39",
    "chr": "52",
    "total": "273",
	"skills": []
}, {
    "name": "Zang Ba",
    "ldr": "73",
    "war": "72",
    "int": "49",
    "pol": "56",
    "chr": "69",
    "total": "319",
	"skills": []
}, {
    "name": "Ze Rong",
    "ldr": "62",
    "war": "68",
    "int": "40",
    "pol": "26",
    "chr": "4",
    "total": "200",
	"skills": []
}, {
    "name": "Zhang Bao",
    "ldr": "75",
    "war": "87",
    "int": "49",
    "pol": "45",
    "chr": "60",
    "total": "316",
	"skills": []
}, {
    "name": "Zhang Bao (2)",
    "ldr": "83",
    "war": "69",
    "int": "79",
    "pol": "60",
    "chr": "89",
    "total": "380",
	"skills": []
}, {
    "name": "Zhang Bu",
    "ldr": "32",
    "war": "31",
    "int": "70",
    "pol": "67",
    "chr": "17",
    "total": "217",
	"skills": []
}, {
    "name": "Zhang Cheng",
    "ldr": "75",
    "war": "68",
    "int": "75",
    "pol": "68",
    "chr": "72",
    "total": "358",
	"skills": []
}, {
    "name": "Zhang Fei",
    "ldr": "86",
    "war": "98",
    "int": "33",
    "pol": "22",
    "chr": "44",
    "total": "283",
	"skills": []
}, {
    "name": "Zhang He",
    "ldr": "92",
    "war": "88",
    "int": "72",
    "pol": "54",
    "chr": "72",
    "total": "378",
	"skills": []
}, {
    "name": "Zhang Heng",
    "ldr": "61",
    "war": "66",
    "int": "25",
    "pol": "27",
    "chr": "45",
    "total": "224",
	"skills": []
}, {
    "name": "Zhang Hong",
    "ldr": "24",
    "war": "14",
    "int": "86",
    "pol": "95",
    "chr": "82",
    "total": "301",
	"skills": []
}, {
    "name": "Zhang Hu",
    "ldr": "74",
    "war": "73",
    "int": "44",
    "pol": "46",
    "chr": "56",
    "total": "293",
	"skills": []
}, {
    "name": "Zhang Hua",
    "ldr": "34",
    "war": "26",
    "int": "81",
    "pol": "77",
    "chr": "62",
    "total": "280",
	"skills": []
}, {
    "name": "Zhang Ji",
    "ldr": "77",
    "war": "35",
    "int": "79",
    "pol": "86",
    "chr": "87",
    "total": "364",
	"skills": []
}, {
    "name": "Zhang Ji (2)",
    "ldr": "72",
    "war": "64",
    "int": "55",
    "pol": "57",
    "chr": "65",
    "total": "313",
	"skills": []
}, {
    "name": "Zhang Ji (3)",
    "ldr": "31",
    "war": "27",
    "int": "74",
    "pol": "74",
    "chr": "61",
    "total": "267",
	"skills": []
}, {
    "name": "Zhang Jiao",
    "ldr": "90",
    "war": "27",
    "int": "86",
    "pol": "80",
    "chr": "98",
    "total": "381",
	"skills": []
}, {
    "name": "Zhang Kai",
    "ldr": "36",
    "war": "66",
    "int": "11",
    "pol": "1",
    "chr": "5",
    "total": "119",
	"skills": []
}, {
    "name": "Zhang Liang",
    "ldr": "78",
    "war": "81",
    "int": "69",
    "pol": "53",
    "chr": "85",
    "total": "366",
	"skills": []
}, {
    "name": "Zhang Liao",
    "ldr": "94",
    "war": "92",
    "int": "77",
    "pol": "64",
    "chr": "79",
    "total": "406",
	"skills": []
}, {
    "name": "Zhang Lu",
    "ldr": "48",
    "war": "26",
    "int": "72",
    "pol": "81",
    "chr": "89",
    "total": "316",
	"skills": []
}, {
    "name": "Zhang Mancheng",
    "ldr": "73",
    "war": "83",
    "int": "47",
    "pol": "39",
    "chr": "55",
    "total": "297",
	"skills": []
}, {
    "name": "Zhang Miao",
    "ldr": "53",
    "war": "52",
    "int": "70",
    "pol": "69",
    "chr": "79",
    "total": "323",
	"skills": []
}, {
    "name": "Zhang Nan",
    "ldr": "71",
    "war": "64",
    "int": "38",
    "pol": "43",
    "chr": "53",
    "total": "269",
	"skills": []
}, {
    "name": "Zhang Qiu",
    "ldr": "69",
    "war": "71",
    "int": "47",
    "pol": "30",
    "chr": "45",
    "total": "262",
	"skills": []
}, {
    "name": "Zhang Ren",
    "ldr": "87",
    "war": "86",
    "int": "74",
    "pol": "57",
    "chr": "78",
    "total": "382",
	"skills": []
}, {
    "name": "Zhang Shao",
    "ldr": "7",
    "war": "32",
    "int": "36",
    "pol": "63",
    "chr": "46",
    "total": "184",
	"skills": []
}, {
    "name": "Zhang Song",
    "ldr": "15",
    "war": "12",
    "int": "88",
    "pol": "82",
    "chr": "19",
    "total": "216",
	"skills": []
}, {
    "name": "Zhang Te",
    "ldr": "71",
    "war": "53",
    "int": "74",
    "pol": "67",
    "chr": "69",
    "total": "334",
	"skills": []
}, {
    "name": "Zhang Ti",
    "ldr": "74",
    "war": "49",
    "int": "81",
    "pol": "78",
    "chr": "83",
    "total": "365",
	"skills": []
}, {
    "name": "Zhang Wei",
    "ldr": "73",
    "war": "68",
    "int": "53",
    "pol": "49",
    "chr": "65",
    "total": "308",
	"skills": []
}, {
    "name": "Zhang Wen",
    "ldr": "17",
    "war": "11",
    "int": "68",
    "pol": "77",
    "chr": "77",
    "total": "250",
	"skills": []
}, {
    "name": "Zhang Xiu",
    "ldr": "56",
    "war": "28",
    "int": "74",
    "pol": "77",
    "chr": "73",
    "total": "308",
	"skills": []
}, {
    "name": "Zhang Xiu (2)",
    "ldr": "84",
    "war": "72",
    "int": "62",
    "pol": "41",
    "chr": "60",
    "total": "319",
	"skills": []
}, {
    "name": "Zhang Xun",
    "ldr": "72",
    "war": "67",
    "int": "41",
    "pol": "40",
    "chr": "42",
    "total": "262",
	"skills": []
}, {
    "name": "Zhang Yan",
    "ldr": "82",
    "war": "80",
    "int": "54",
    "pol": "55",
    "chr": "61",
    "total": "332",
	"skills": []
}, {
    "name": "Zhang Yang",
    "ldr": "68",
    "war": "70",
    "int": "68",
    "pol": "60",
    "chr": "67",
    "total": "333",
	"skills": []
}, {
    "name": "Zhang Yi",
    "ldr": "80",
    "war": "74",
    "int": "75",
    "pol": "77",
    "chr": "75",
    "total": "381",
	"skills": []
}, {
    "name": "Zhang Yi (2)",
    "ldr": "77",
    "war": "74",
    "int": "71",
    "pol": "68",
    "chr": "70",
    "total": "360",
	"skills": []
}, {
    "name": "Zhang Ying",
    "ldr": "75",
    "war": "72",
    "int": "34",
    "pol": "35",
    "chr": "53",
    "total": "269",
	"skills": []
}, {
    "name": "Zhang Yun",
    "ldr": "73",
    "war": "68",
    "int": "54",
    "pol": "53",
    "chr": "49",
    "total": "297",
	"skills": []
}, {
    "name": "Zhang Zhao",
    "ldr": "35",
    "war": "9",
    "int": "84",
    "pol": "97",
    "chr": "80",
    "total": "305",
	"skills": []
}, {
    "name": "Zhang Zun",
    "ldr": "65",
    "war": "67",
    "int": "66",
    "pol": "61",
    "chr": "59",
    "total": "318",
	"skills": []
}, {
    "name": "Zhao Fan",
    "ldr": "21",
    "war": "18",
    "int": "33",
    "pol": "60",
    "chr": "56",
    "total": "188",
	"skills": []
}, {
    "name": "Zhao Guang",
    "ldr": "65",
    "war": "67",
    "int": "54",
    "pol": "51",
    "chr": "60",
    "total": "297",
	"skills": []
}, {
    "name": "Zhao Hong",
    "ldr": "57",
    "war": "71",
    "int": "30",
    "pol": "25",
    "chr": "11",
    "total": "194",
	"skills": []
}, {
    "name": "Zhao Lei",
    "ldr": "32",
    "war": "47",
    "int": "69",
    "pol": "72",
    "chr": "71",
    "total": "291",
	"skills": []
}, {
    "name": "Zhao Tong",
    "ldr": "60",
    "war": "64",
    "int": "65",
    "pol": "60",
    "chr": "57",
    "total": "306",
	"skills": []
}, {
    "name": "Zhao Yun",
    "ldr": "91",
    "war": "96",
    "int": "75",
    "pol": "65",
    "chr": "81",
    "total": "408",
	"skills": []
}, {
    "name": "Zhong Hui",
    "ldr": "84",
    "war": "56",
    "int": "91",
    "pol": "79",
    "chr": "57",
    "total": "367",
	"skills": []
}, {
    "name": "Zhong Yao",
    "ldr": "70",
    "war": "26",
    "int": "78",
    "pol": "92",
    "chr": "72",
    "total": "338",
	"skills": []
}, {
    "name": "Zhong Yu",
    "ldr": "27",
    "war": "11",
    "int": "71",
    "pol": "74",
    "chr": "70",
    "total": "253",
	"skills": []
}, {
    "name": "Zhongli Mu",
    "ldr": "84",
    "war": "68",
    "int": "75",
    "pol": "61",
    "chr": "73",
    "total": "361",
	"skills": []
}, {
    "name": "Zhou Ang",
    "ldr": "75",
    "war": "64",
    "int": "64",
    "pol": "61",
    "chr": "59",
    "total": "323",
	"skills": []
}, {
    "name": "Zhou Cang",
    "ldr": "61",
    "war": "84",
    "int": "49",
    "pol": "31",
    "chr": "58",
    "total": "283",
	"skills": []
}, {
    "name": "Zhou Fang",
    "ldr": "56",
    "war": "44",
    "int": "82",
    "pol": "75",
    "chr": "66",
    "total": "323",
	"skills": []
}, {
    "name": "Zhou Tai",
    "ldr": "76",
    "war": "91",
    "int": "50",
    "pol": "37",
    "chr": "61",
    "total": "315",
	"skills": []
}, {
    "name": "Zhou Tai (2)",
    "ldr": "71",
    "war": "63",
    "int": "73",
    "pol": "62",
    "chr": "60",
    "total": "329",
	"skills": []
}, {
    "name": "Zhou Xin",
    "ldr": "67",
    "war": "53",
    "int": "77",
    "pol": "65",
    "chr": "62",
    "total": "324",
	"skills": []
}, {
    "name": "Zhou Yu",
    "ldr": "98",
    "war": "72",
    "int": "96",
    "pol": "81",
    "chr": "93",
    "total": "440",
	"skills": []
}, {
    "name": "Zhou Zhi",
    "ldr": "66",
    "war": "84",
    "int": "42",
    "pol": "29",
    "chr": "44",
    "total": "265",
	"skills": []
}, {
    "name": "Zhu Bao",
    "ldr": "59",
    "war": "72",
    "int": "12",
    "pol": "19",
    "chr": "37",
    "total": "199",
	"skills": []
}, {
    "name": "Zhu Huan",
    "ldr": "85",
    "war": "82",
    "int": "74",
    "pol": "54",
    "chr": "59",
    "total": "354",
	"skills": []
}, {
    "name": "Zhu Ju",
    "ldr": "74",
    "war": "59",
    "int": "73",
    "pol": "68",
    "chr": "72",
    "total": "346",
	"skills": []
}, {
    "name": "Zhu Ling",
    "ldr": "77",
    "war": "70",
    "int": "69",
    "pol": "61",
    "chr": "38",
    "total": "315",
	"skills": []
}, {
    "name": "Zhu Ran",
    "ldr": "86",
    "war": "66",
    "int": "71",
    "pol": "60",
    "chr": "79",
    "total": "362",
	"skills": []
}, {
    "name": "Zhu Rong",
    "ldr": "61",
    "war": "85",
    "int": "28",
    "pol": "22",
    "chr": "74",
    "total": "270",
	"skills": []
}, {
    "name": "Zhu Yi",
    "ldr": "71",
    "war": "68",
    "int": "65",
    "pol": "48",
    "chr": "55",
    "total": "307",
	"skills": []
}, {
    "name": "Zhu Zhi",
    "ldr": "70",
    "war": "58",
    "int": "74",
    "pol": "73",
    "chr": "76",
    "total": "351",
	"skills": []
}, {
    "name": "Zhuge Dan",
    "ldr": "81",
    "war": "71",
    "int": "75",
    "pol": "66",
    "chr": "82",
    "total": "375",
	"skills": []
}, {
    "name": "Zhuge Jin",
    "ldr": "75",
    "war": "35",
    "int": "81",
    "pol": "89",
    "chr": "88",
    "total": "368",
	"skills": []
}, {
    "name": "Zhuge Jing",
    "ldr": "58",
    "war": "65",
    "int": "67",
    "pol": "57",
    "chr": "68",
    "total": "315",
	"skills": []
}, {
    "name": "Zhuge Jun",
    "ldr": "29",
    "war": "30",
    "int": "56",
    "pol": "65",
    "chr": "66",
    "total": "246",
	"skills": []
}, {
    "name": "Zhuge Ke",
    "ldr": "72",
    "war": "46",
    "int": "90",
    "pol": "80",
    "chr": "49",
    "total": "337",
	"skills": []
}, {
    "name": "Zhuge Liang",
    "ldr": "93",
    "war": "37",
    "int": "100",
    "pol": "98",
    "chr": "92",
    "total": "420",
	"skills": []
}, {
    "name": "Zhuge Qiao",
    "ldr": "55",
    "war": "17",
    "int": "77",
    "pol": "67",
    "chr": "75",
    "total": "291",
	"skills": []
}, {
    "name": "Zhuge Shang",
    "ldr": "54",
    "war": "73",
    "int": "55",
    "pol": "55",
    "chr": "68",
    "total": "305",
	"skills": []
}, {
    "name": "Zhuge Xu",
    "ldr": "45",
    "war": "43",
    "int": "27",
    "pol": "48",
    "chr": "50",
    "total": "213",
	"skills": []
}, {
    "name": "Zhuge Zhan",
    "ldr": "68",
    "war": "61",
    "int": "72",
    "pol": "61",
    "chr": "70",
    "total": "332",
	"skills": []
}, {
    "name": "Zou Dan",
    "ldr": "63",
    "war": "71",
    "int": "36",
    "pol": "38",
    "chr": "40",
    "total": "248",
	"skills": []
}, {
    "name": "Zou Jing",
    "ldr": "67",
    "war": "65",
    "int": "66",
    "pol": "54",
    "chr": "68",
    "total": "320",
	"skills": []
}, {
    "name": "Zu Mao",
    "ldr": "70",
    "war": "74",
    "int": "62",
    "pol": "55",
    "chr": "63",
    "total": "324",
	"skills": []
}, {
    "name": "Zuo Yi",
    "ldr": "60",
    "war": "66",
    "int": "51",
    "pol": "47",
    "chr": "56",
    "total": "280",
	"skills": []
});