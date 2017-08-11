var chests = new Array;

chests[0] = {
    name: "King's Tomb",
    x: "30.8%",
    y: "29.6%",
    isOpened: false,
    isAvailable: function() {
		if (!items.boots) {
			return "unavailable";
		} else if ((dwaccess() && items.mirror) || items.glove == 2) {
			return "available";
		} return "unavailable";
    }
};

chests[1] = {
    name: "Swamp Floodgate",
    x: "23.4%",
    y: "93.4%",
    isOpened: false,
    isAvailable: function() {
		return "available";
    }
};

chests[2] = {
    name: "Link's House",
    x: "27.4%",
    y: "67.9%",
    isOpened: false,
    isAvailable: function() {
		return "available";
    }
};

chests[3] = {
    name: "Spiral Cave",
    x: "39.9%",
    y: "9.3%",
    isOpened: false,
    isAvailable: function() {
		if ((items.glove > 0 || items.shovelflute > 1) && (items.hookshot || (items.mirror && items.hammer))) {
			return "available";
		} return "unavailable";
	}
};

chests[4] = {
    name: "Mimic Cave",
    x: "42.6%",
    y: "9.3%",
    isOpened: false,
    isAvailable: function() {
		if (!items.moonpearl || !items.hammer || items.glove!= 2 || !items.somaria || !items.mirror) {
			return "unavailable";
		} else if (!medallions[1] && medallions[2] < 3) {
			return "unavailable";			
		} else if (items.firerod) {
			return "available";
		} return "possible";
    }
};

chests[5] = {
    name: "Kakariko Tavern",
    x: "8.1%",
    y: "57.8%",
    isOpened: false,
    isAvailable: function() {
		return "available";
    }
};

chests[6] = {
    name: "Chicken House",
    x: "4.4%",
    y: "54.2%",
    isOpened: false,
    isAvailable: function() {
		if (!items.bombs) {
			return "unavailable";
		} return "available";
    }
};

chests[7] = {
    name: "Doorless Brewery",
    x: "55.4%",
    y: "57.8%",
    isOpened: false,
    isAvailable: function() {
		if (dwaccess() && items.bombs) {
			return "available";
		} return "unavailable";
    }
};

chests[8] = {
    name: "C-Shaped House",
    x: "60.8%",
    y: "47.9%",
    isOpened: false,
    isAvailable: function() {
		if (dwaccess()) {
			return "available";
		} return "unavailable";
    }
};

chests[9] = {
    name: "Aginah's Cave",
    x: "10.0%",
    y: "82.6%",
    isOpened: false,
    isAvailable: function() {
		if (!items.bombs) {
			return "unavailable";
		} return "available";
    }
};

chests[10] = {
    name: "Mire Shed",
    x: "51.7%",
    y: "79.5%",
    isOpened: false,
    isAvailable: function() {
		if (items.shovelflute > 1 && items.moonpearl && items.glove == 2) {
			return "available";
		} return "unavailable";
    }
};

chests[11] = {
    name: "Superbunny Cave",
    x: "92.8%",
    y: "14.7%",
    isOpened: false,
    isAvailable: function() {
		if (items.glove == 2 && (items.hookshot || (items.mirror && items.hammer))) {
			return "available";
		} return "unavailable";
    }
};

chests[12] = {
    name: "Sahasrahla's Hut",
    x: "40.7%",
    y: "41.4%",
    isOpened: false,
    isAvailable: function() {
		if (!items.bombs) {
			return "unavailable";
		} return "available";
    }
};

chests[13] = {
    name: "Spike Cave",
    x: "78.6%",
    y: "14.9%",
    isOpened: false,
    isAvailable: function() {
		if (!items.moonpearl || !items.glove || !items.hammer) {
			return "unavailable";
		} if (!items.byrna && !items.cape) {
			return "possible"
		} return "available";
    }
};

chests[14] = {
    name: "Kakariko Well",
    x: "1.7%",
    y: "41.0%",
    isOpened: false,
    isAvailable: function() {
		if (!items.bombs) {
			return "possible";
		} return "available";
    }
};

chests[15] = {
    name: "Blind's Hideout",
    x: "6.4%",
    y: "41.0%",
    isOpened: false,
    isAvailable: function() {
		if (!items.bombs) {
			return "possible";
		} return "available";
    }
};

chests[16] = {
    name: "Hype Cave",
    x: "80.0%",
    y: "77.1%",
    isOpened: false,
    isAvailable: function() {
		if (!dwaccess() && (!items.agahnim || !items.moonpearl || !items.hammer)) {
			return "unavailable";
		} if (!items.bombs) {
			return "possible";
		} return "available";
    }
};

chests[17] = {
    name: "Paradox Cave",
    x: "41.4%",
    y: "17.1%",
    isOpened: false,
    isAvailable: function() {
		if ((items.glove || items.shovelflute>1) && (items.hookshot || (items.mirror && items.hammer))) {
			return "available";
		} return "unavailable";
    }
};

chests[18] = {
    name: "Pegasus Rocks",
    x: "19.5%",
    y: "29.3%",
    isOpened: false,
    isAvailable: function() {
		if (items.boots) {
				return "available";
		} return "unavailable";
    }
};

chests[19] = {
    name: "Mini Moldorm Cave",
    x: "32.6%",
    y: "93.4%",
    isOpened: false,
    isAvailable: function() {
		if (!items.bombs) {
			return "unavailable";
		} return "available";
    }
};

chests[20] = {
    name: "Ice Rod Cave",
    x: "44.7%",
    y: "76.9%",
    isOpened: false,
    isAvailable: function() {
		if (!items.bombs) {
			return "unavailable";
		} return "available";
    }
};

chests[21] = {
    name: "Hookshot Cave Bottom Chest",
    x: "91.6%",
    y: "8.6%",
    isOpened: false,
    isAvailable: function() {
		if (items.moonpearl && items.glove == 2 && (items.hookshot || (items.mirror && items.hammer && items.boots))) {
			return "available";
		} return "unavailable";
    }
};

chests[22] = {
    name: "Hookshot Cave",
    x: "91.6%",
    y: "3.4%",
    isOpened: false,
    isAvailable: function() {
		if (items.moonpearl && items.glove == 2 && items.hookshot) {
			return "available";
		} return "unavailable";
    }
};

chests[23] = {
    name: "Chest Game",
    x: "52.1%",
    y: "46.4%",
    isOpened: false,
    isAvailable: function() {
		if (dwaccess()) {
			return "available";
		} return "unavailable";
    }
};

chests[24] = {
    name: "Bottle Merchant",
    x: "4.5%",
    y: "46.8%",
    isOpened: false,
    isAvailable: function() {
		return "available";
    }
};

chests[25] = {
    name: "Sahasrahla",
    x: "40.7%",
    y: "46.7%",
    isOpened: false,
    isAvailable: function() {
		if (greenpendant == 1) {
			return "available";
		} return "unavailable";
    }
}

chests[26] = {
    name: "Stumpy",
    x: "65.5%",
    y: "68.6%",
    isOpened: false,
    isAvailable: function() {
		if (dwaccess() || (items.agahnim && items.moonpearl && items.hammer)) {
			return "available";
		} return "unavailable";
    }
};

chests[27] = {
    name: "Sick Kid",
    x: "7.8%",
    y: "52.1%",
    isOpened: false,
    isAvailable: function() {
		if (items.bottle) {
			return "available";
		} return "unavailable";
    }
};

chests[28] = {
    name: "Purple Chest",
    x: "65.2%",
    y: "52.2%",
    isOpened: false,
    isAvailable: function() {
		if (items.moonpearl && items.glove == 2 && chests[60].isOpened) {
			return "available";
		} return "unavailable";
    }
};

chests[29] = {
    name: "Under The Bridge",
    x: "35.4%",
    y: "69.7%",
    isOpened: false,
    isAvailable: function() {
		if (items.flippers) {
			return "available";
		} return "unavailable";
    }
};

chests[30] = {
    name: "Ether Tablet",
    x: "21.0%",
    y: "3.0%",
    isOpened: false,
    isAvailable: function() {
		if ((items.glove || items.shovelflute > 1) && (items.mirror || (items.hookshot && items.hammer))) {
			if (items.book && items.sword > 1) {
				return "available";
			} if (items.book) {
				return "possible";
			}
		} return "unavailable";
    }
};

chests[31] = {
    name: "Bombos Tablet",
    x: "11.0%",
    y: "92.2%",
    isOpened: false,
    isAvailable: function() {
		if ((dwaccess() || (items.agahnim && items.moonpearl && items.hammer)) && items.mirror) {
			if (items.book && items.sword > 1) {
				return "available";
			} if (items.book) {
				return "possible";
			}
		} return "unavailable";
    }
};

chests[32] = {
    name: "Catfish",
    x: "96.0%",
    y: "17.2%",
    isOpened: false,
    isAvailable: function() {
		if (items.moonpearl && items.glove && (items.agahnim || items.hammer || (items.glove == 2 && items.flippers))) {
			return "available";
		} return "unavailable";
    }
};

chests[33] = {
    name: "King Zora",
    x: "47.5%",
    y: "12.1%",
    isOpened: false,
    isAvailable: function() {
		if (items.flippers || items.glove) {
			return "available";
		} return "unavailable";
    }
};

chests[34] = {
    name: "Old Man",
    x: "20.8%",
    y: "20.4%",
    isOpened: false,
    isAvailable: function() {
		if ((items.glove || items.shovelflute > 1) && items.lantern) {
			return "available";
		} return "unavailable";
    }
};

chests[35] = {
    name: "Potion Shop",
    x: "40.8%",
    y: "32.5%",
    isOpened: false,
    isAvailable: function() {
		if (items.mushpowder == 1 || items.mushpowder == 3) {
			return "available";
		} return "unavailable";
    }
};

chests[36] = {
    name: "Lost Woods Hideout",
    x: "9.4%",
    y: "13.0%",
    isOpened: false,
    isAvailable: function() {
		return "available";
    }
};

chests[37] = {
    name: "Lumberjack Tree",
    x: "15.1%",
    y: "7.6%",
    isOpened: false,
    isAvailable: function() {
		if (items.agahnim && items.boots) {
			return "available";
		} return "possible";
    }
};

chests[38] = {
    name: "Spectacle Rock Cave",
    x: "24.3%",
    y: "14.8%",
    isOpened: false,
    isAvailable: function() {
		if (items.glove || items.shovelflute > 1)
			return "available";
		return "unavailable";
    }
};

chests[39] = {
    name: "South of Grove",
    x: "14.1%",
    y: "84.1%",
    isOpened: false,
    isAvailable: function() {
		if (items.mirror && (dwaccess() || (items.agahnim && items.moonpearl && items.hammer))) {
			return "available";
		} return "unavailable";
    }
};

chests[40] = {
    name: "Graveyard Ledge",
    x: "28.1%",
    y: "27.0%",
    isOpened: false,
    isAvailable: function() {
		if (dwaccess() && items.mirror) {
			return "available";
		} return "unavailable";
    }
};

chests[41] = {
    name: "Checkerboard Cave",
    x: "8.8%",
    y: "77.3%",
    isOpened: false,
    isAvailable: function() {
		if (items.shovelflute > 1 && items.glove == 2 && items.mirror) {
			return "available";
		} return "unavailable";
    }
};

chests[42] = {
    name: "Hammer Pegs",
    x: "65.8%",
    y: "60.1%",
    isOpened: false,
    isAvailable: function() {
		if (items.moonpearl && items.glove == 2 && items.hammer) {
			return "available";
		} return "unavailable";
    }
};

chests[43] = {
    name: "Library",
    x: "7.7%",
    y: "65.9%",
    isOpened: false,
    isAvailable: function() {
		if (items.boots) {
			return "available";
		} return "possible";
    }
};

chests[44] = {
    name: "Mushroom Spot",
    x: "6.2%",
    y: "8.6%",
    isOpened: false,
    isAvailable: function() {
		return "available";
    }
};

chests[45] = {
    name: "Spectacle Rock",
    x: "25.4%",
    y: "8.5%",
    isOpened: false,
    isAvailable: function() {
		if (items.glove || items.shovelflute > 1) {
			if (items.mirror) {
				return "available";
			} else {
				return "possible";
			}
		} return "unavailable";
    }
};

chests[46] = {
    name: "Floating Island",
    x: "40.2%",
    y: "3.0%",
    isOpened: false,
    isAvailable: function() {
		if ((items.glove || items.shovelflute > 1) && (items.hookshot || (items.hammer && items.mirror))) {
			if (items.mirror && items.moonpearl && items.glove == 2) {
				return "available";
			} else {
				return "possible";
			}
		} return "unavailable";
	}
};

chests[47] = {
    name: "Maze Race",
    x: "1.8%",
    y: "69.8%",
    isOpened: false,
    isAvailable: function() {
		return "available";
    }
};

chests[48] = {
    name: "Desert Ledge",
    x: "1.5%",
    y: "91.0%",
    isOpened: false,
    isAvailable: function() {
		if (items.book || (items.shovelflute > 1 && items.glove== 2 && items.mirror)) {
			return "available";
		} return "possible";
    }
};

chests[49] = {
    name: "Lake Hylia Island",
    x: "36.1%",
    y: "82.9%",
    isOpened: false,
    isAvailable: function() {
		if (items.moonpearl && items.mirror && (items.agahnim || items.glove==2 || (items.glove && items.hammer))) {
			return "available";
		} return "possible";
	}
};

chests[50] = {
    name: "Bumper Cave",
    x: "67.1%",
    y: "15.2%",
    isOpened: false,
    isAvailable: function() {
		if (dwaccess()) {
			if (items.cape) {
				return "available";
			} else {
				return "possible";
			}
		} return "unavailable";
    }
};

chests[51] = {
    name: "Pyramid",
    x: "79.0%",
    y: "43.5%",
    isOpened: false,
    isAvailable: function() {
		if (items.agahnim || (items.glove && items.hammer && items.moonpearl) || (items.glove == 2 && items.moonpearl && items.flippers)) {
			return "available";
		} return "unavailable";
    }
};

chests[52] = {
    name: "Digging Game",
    x: "52.9%",
    y: "69.2%",
    isOpened: false,
    isAvailable: function() {
		if (dwaccess() || (items.agahnim && items.moonpearl && items.hammer)) {
			return "available";
		} return "unavailable";
    }
};

chests[53] = {
    name: "Zora's Ledge",
    x: "47.5%",
    y: "17.3%",
    isOpened: false,
    isAvailable: function() {
		if (items.flippers) {
			return "available";
		} if (items.glove) {
			return "possible";
		} return "unavailable";
    }
};

chests[54] = {
    name: "Flute Spot",
    x: "14.4%",
    y: "66.2%",
    isOpened: false,
    isAvailable: function() {
		if (items.shovelflute == 1 || items.shovelflute == 3) {
			return "available";
		} return "unavailable";
	}
};

chests[55] = {
    name: "Sewers Drop",
    x: "26.8%",
    y: "32.4%",
    isOpened: false,
    isAvailable: function() {
		if (items.bombs || items.boots) {
			if (items.glove) {
				return "available";
			} if (items.lantern) {
				return "possible";
			}
		} return "unavailable";
    }
};

chests[56] = {
    name: "Secret Passage",
    x: "29.8%",
    y: "41.8%",
    isOpened: false,
    isAvailable: function() {
		return "available";
    }
};

chests[57] = {
    name: "Hyrule Castle",
    x: "24.9%",
    y: "44.1%",
    isOpened: false,
    isAvailable: function() {
		if (items.lantern) {
			return "available";
		} return "possible";
    }
};

chests[58] = {
    name: "Sanctuary",
    x: "23.0%",
    y: "28.0%",
    isOpened: false,
    isAvailable: function() {
		return "available";
    }
};

chests[59] = {
    name: "Magic Bat",
    x: "16.0%",
    y: "58.0%",
    isOpened: false,
    isAvailable: function() {
		if (items.mushpowder > 1 && (items.hammer || (items.glove == 2 && items.mirror && items.moonpearl))) {
			return "available";
		} return "unavailable";
    }
};

chests[60] = {
    name: "Blacksmith",
    x: "15.2%",
    y: "51.8%",
    isOpened: false,
    isAvailable: function() {
		if (items.moonpearl && items.glove == 2) {
			return "available";
		} return "unavailable";
    }
};

chests[61] = {
    name: "Pyramid Fairy",
    x: "73.5%",
    y: "48.5%",
    isOpened: false,
    isAvailable: function() {
		if (crystals < 2) {
			return "unavailable";
		} else if (items.hammer && (items.agahnim || items.glove)) {
			return "available";
		} else if (items.agahnim && items.mirror && dwaccess()) {
			return "available";
		} return "unavailable";
    }
}


chests[62] = {
    name: "Master Sword Pedestal",
    x: "2.5%",
    y: "3.2%",
    isOpened: false,
    isAvailable: function() {
		if (pendants == 3) {
			return "available";
		} else if (items.book) {
			return "possible";
		} return "unavailable";
    }
}

