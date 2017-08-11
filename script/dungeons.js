var dungeons = new Array;

dungeons[0] = {
    name: "Eastern Palace",
    x: "46.8%",
    y: "38.8%",
	remaining: 3,
	total: 3,
	image: "chest3.png",
    canGetChest: function() {
		if (items.bow > 1 && items.lantern) {
			return "available";
		} else {
			return "possible";
		}
    }
};

dungeons[1] = {
    name: "Desert Palace",
    x: "3.8%",
    y: "78.4%",
	remaining: 2,
	total: 2,
	image: "chest2.png",
    canGetChest: function() {
		if (!items.book && !(items.shovelflute > 1 && items.glove == 2 && items.mirror)) {
			return "unavailable";
		} else if ((items.boots && (items.firerod || items.lantern) && items.glove) && (items.firerod || items.icerod || items.hammer || items.bow > 1 || items.sword > 0 || items.bombs)) {
			return "available";
		} return "possible";
    }
};

dungeons[2] = {
    name: "Tower of Hera",
    x: "31.0%",
    y: "5.5%",
	remaining: 2,
	total: 2,
	image: "chest2.png",
    canGetChest: function() {
		if (items.shovelflute < 2 && !items.glove) {
			return "unavailable";
		} else if (!items.mirror && !(items.hookshot && items.hammer)) {
			return "unavailable";
		} else if ((items.firerod || items.lantern) && (items.hammer || items.sword >0)) {
			return "available";
		} return "possible";
	}
};

dungeons[3] = {
    name: "Palace of Darkness",
    x: "97.0%",
    y: "40.0%",
	remaining: 5,
	total: 5,
	image: "chest5.png",
    canGetChest: function() {
		if (!items.moonpearl) {
			return "unavailable";
		} else if (!items.agahnim && !(items.hammer && items.glove) && !(items.glove == 2 && items.flippers)) {
			return "unavailable";
		} else if (items.hammer && items.bow > 1) {
			return "available";
		} return "possible";
    }
};

dungeons[4] = {
    name: "Swamp Palace",
    x: "73.5%",
    y: "91.0%",
	remaining: 6,
	total: 6,
	image: "chest6.png",
    canGetChest: function() {
		if (!items.moonpearl || !items.mirror || !items.flippers) {
			return "unavailable";
		} else if (!dwaccess() && !(items.agahnim && items.hammer)) {
			return "unavailable";
		} else if (items.hookshot && items.hammer) {
			return "available"
		} else if (items.hammer && this.remaining > 2) {
			return "possible";
		} else if (!items.hammer && this.remaining == 6) {
			return "possible";
		} return "unavailable";
	}
};

dungeons[5] = {
    name: "Skull Woods",
    x: "53.3%",
    y: "5.4%",
	remaining: 2,
	total: 2,
	image: "chest2.png",
    canGetChest: function() {
		if (!dwaccess()) {
			return "unavailable";
		} else if (items.firerod && items.sword > 0) {
			return "available";
		} return "possible";
    }
};

dungeons[6] = {
    name: "Thieves' Town",
    x: "56.4%",
    y: "47.9%",
    remaining: 4,
	total: 4,
	image: "chest4.png",
    canGetChest: function() {
		if (!dwaccess()) {
			return "unavailable";
		}  else if (this.remaining == 1 && !items.hammer) {
			return "possible";
		} return "available";
    }
};

dungeons[7] = {
    name: "Ice Palace",
    x: "89.8%",
    y: "85.8%",
    remaining: 3,
	total: 3,
	image: "chest3.png",
    canGetChest: function() {
		if (!items.moonpearl || !items.flippers || items.glove != 2) {
			return "unavailable";
		} else if (!items.firerod && !items.bombos) {
			return "unavailable";
		} else if (items.hammer) {
			return "available";
		} return "possible";
    }
};

dungeons[8] = {
    name: "Misery Mire",
    x: "55.8%",
    y: "82.9%",
    remaining: 2,
	total: 2,
	image: "chest2.png",
    canGetChest: function() {
		if (!medallions[0] && medallions[2] < 3){
			return "unavailable";
		} else if (!items.moonpearl || !items.shovelflute > 1 || !items.glove == 2) {
			return "unavailable";
		} else if (!items.boots && !items.hookshot) {
			return "unavailable";
		} else if ((items.firerod || items.lantern) && items.somaria && (items.sword > 0 || items.bow > 1 || items.bombs)) {
			return "available";
		} return "possible";
    }
};

dungeons[9] = {
    name: "Turtle Rock",
    x: "96.9%",
    y: "7.0%",
    image: "boss92.png",
	remaining: 5,
	total: 5,
	image: "chest5.png",
    canGetChest: function() {
		if (!medallions[1] && medallions[2] < 3){
			return "unavailable";
		} else if (!items.moonpearl || !items.hammer || !items.glove == 2 || !items.somaria) {
			return "unavailable";
		} else if (!items.hookshot && !items.mirror) {
			return "unavailable";
		} else if (items.firerod && items.icerod) {
			return "available";
		} return "possible";
    }
};