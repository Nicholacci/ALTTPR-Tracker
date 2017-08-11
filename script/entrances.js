var entrances = new Array;

entrances[0] = {
    name: "Master Sword Pedestal",
	originalname: "Master Sword Pedestal",
    x: "3%",
    y: "6%",
    isOpened: false,
	isImportant: false,
	isFound: false,
	hasItem: 1,
    isAvailable: function(){
		return "unavailable";
    }
};

entrances[1] = {
    name: "Lost Woods Chest Game",
	originalname: "Lost Woods Chest Game",
    x: "10.2%",
    y: "2.5%",
    isOpened: false,
	isImportant: false,
	isFound: false,
	hasItem: 1,
    isAvailable: function(){
		return "available";
		
    }
};

entrances[2] = {
    name: "Mushroom Spot",
	originalname: "Mushroom Spot",
    x: "7%",
    y: "10.2%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
		
    }
};

entrances[3] = {
    name: "Lost Woods Hideout Drop",
	originalname: "Lost Woods Hideout Drop",
    x: "10.3%",
    y: "14.3%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
		
    }
};

entrances[4] = {
    name: "Lost Woods Hideout Door",
	originalname: "Lost Woods Hideout Door",
    x: "10%",
    y: "16.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
		
    }
};

entrances[5] = {
    name: "Lumberjack Tree",
	originalname: "Lumberjack Tree",
    x: "15.9%",
    y: "9%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.agahnim && items.boots )
		return "available";
	return "unavailable";
		
    }
};

entrances[6] = {
    name: "Lumberjack Cave",
	originalname: "Lumberjack Cave",
    x: "17.5%",
    y: "5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
		
    }
};

entrances[7] = {
    name: "Lumberjack House",
	originalname: "Lumberjack House",
    x: "17.7%",
    y: "7.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
		
    }
};

entrances[8] = {
    name: "Ether Tablet",
	originalname: "Ether Tablet",
    x: "22.0%",
    y: "3.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.sword>=2 && items.book && (items.glove||items.shovelflute>1) && (items.mirror || (items.hookshot&&items.hammer)) )
		return "available";
	return "unavailable";
    }
};

entrances[9] = {
    name: "Tower of Hera",
	originalname: "Tower of Hera",
    x: "29%",
    y: "6%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(items.shovelflute<2  && !items.glove)
		return "unavailable";
	if(!items.mirror && !(items.hookshot && items.hammer))
		return "unavailable";
	return "available";		
    }
};

entrances[10] = {
    name: "Death Mountain Bottom Left Passage",
	originalname: "Death Mountain Bottom Left Passage",
    x: "18.5%",
    y: "19.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.glove || items.shovelflute>1 )
		return "available";
	return "unavailable";
    }
};

entrances[11] = {
    name: "Death Mountain Bottom Right Passage",
	originalname: "Death Mountain Bottom Right Passage",
    x: "21.2%",
    y: "20.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.glove || items.shovelflute>1 )
		return "available";
	return "unavailable";
    }
};

entrances[12] = {
    name: "Death Mountain Top Left Passage",
	originalname: "Death Mountain Top Left Passage",
    x: "18.5%",
    y: "17.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.glove || items.shovelflute>1 )
		return "available";
	return "unavailable";
    }
};

entrances[13] = {
    name: "Death Mountain Top Right Passage",
	originalname: "Death Mountain Top Right Passage",
    x: "20.6%",
    y: "15.8%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.glove || items.shovelflute>1 )
		return "available";
	return "unavailable";
    }
};

entrances[14] = {
    name: "Spectacle Rock Cave View Item",
	originalname: "Spectacle Rock Cave View Item",
    x: "25.3%",
    y: "12%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.glove || items.shovelflute>1 )
		return "available";
	return "unavailable";
    }
};

entrances[15] = {
    name: "Spectacle Rock Cave Entrance",
	originalname: "Spectacle Rock Cave Entrance",
    x: "25.3%",
    y: "16.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.glove || items.shovelflute>1 )
		return "available";
	return "unavailable";
    }
};

entrances[16] = {
    name: "Spectacle Rock Cave Exit",
	originalname: "Spectacle Rock Cave Exit",
    x: "23.5%",
    y: "16%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.glove || items.shovelflute>1 )
		return "available";
	return "unavailable";
    }
};

entrances[17] = {
    name: "Spectacle Rock",
	originalname: "Spectacle Rock",
    x: "26.2%",
    y: "10.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(items.glove || items.shovelflute>1)
		if(items.mirror)
			return "available";
		else
			return "possible";
	return "unavailable";
    }
};

entrances[18] = {
    name: "Old Man's Cave Front",
	originalname: "Old Man's Cave Front",
    x: "23.3%",
    y: "24.7%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.glove || items.shovelflute>1 )
		return "available";
	return "unavailable";
    }
};

entrances[19] = {
    name: "Old Man's Cave Back",
	originalname: "Old Man's Cave Back",
    x: "27.8%",
    y: "18%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.glove || items.shovelflute>1 )
		return "available";
	return "unavailable";
    }
};

entrances[20] = {
    name: "Floating Island",
	originalname: "Floating Island",
    x: "41.5%",
    y: "3.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if((items.glove || items.shovelflute>1) && (items.hookshot || (items.hammer && items.mirror)) )
			if(items.mirror && items.moonpearl && items.glove==2)
				return "available";
			else
				return "possible";
		return "unavailable";
	}
};

entrances[21] = {
    name: "Paradox Cave Top",
	originalname: "Paradox Cave Top",
    x: "44%",
    y: "8%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( (items["glove"] || items.shovelflute>1) && (items["hookshot"] || (items["mirror"]&&items["hammer"])) )
		return "available";
	return "unavailable";
		
    }
};

entrances[22] = {
    name: "Paradox Cave Middle",
	originalname: "Paradox Cave Middle",
    x: "43.8%",
    y: "16.2%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( (items["glove"] || items.shovelflute>1) && (items["hookshot"] || (items["mirror"]&&items["hammer"])) )
		return "available";
	return "unavailable";
		
    }
};

entrances[23] = {
    name: "Paradox Cave Bottom",
	originalname: "Paradox Cave Bottom",
    x: "44%",
    y: "23%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( (items["glove"] || items.shovelflute>1) && (items["hookshot"] || (items["mirror"]&&items["hammer"])) )
		return "available";
	return "unavailable";
		
    }
};

entrances[24] = {
    name: "Hookshot Fairy Fountain",
	originalname: "Hookshot Fairy Fountain",
    x: "43%",
    y: "16.2%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( (items["glove"] || items.shovelflute>1) && (items["hookshot"] || (items["mirror"]&&items["hammer"])) )
		return "available";
	return "unavailable";
		
    }
};

entrances[25] = {
    name: "Pitfall Fairy Fountain Top",
	originalname: "Pitfall Fairy Fountain Top",
    x: "41.9%",
    y: "13.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( (items["glove"] || items.shovelflute>1) && (items["hookshot"] || (items["mirror"]&&items["hammer"])) )
		return "available";
	return "unavailable";
		
    }
};

entrances[26] = {
    name: "Pitfall Fairy Fountain Bottom",
	originalname: "Pitfall Fairy Fountain Bottom",
    x: "41.9%",
    y: "15.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( (items["glove"] || items.shovelflute>1) && (items["hookshot"] || (items["mirror"]&&items["hammer"])) )
		return "available";
	return "unavailable";
		
    }
};

entrances[27] = {
    name: "Spiral Cave Entrance",
	originalname: "Spiral Cave Entrance",
    x: "40.8%",
    y: "11%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if ( (items["glove"] || items.shovelflute>1) && (items["hookshot"] || (items["mirror"]&&items["hammer"])))
		return "available";
	return "unavailable";
    }
};

entrances[28] = {
    name: "Spiral Cave Exit",
	originalname: "Spiral Cave Exit",
    x: "40.8%",
    y: "15%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if ( (items["glove"] || items.shovelflute>1) && (items["hookshot"] || (items["mirror"]&&items["hammer"])))
		return "available";
	return "unavailable";
    }
};

entrances[29] = {
    name: "Mimic Cave",
	originalname: "Mimic Cave",
    x: "43.1%",
    y: "11%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(!items.moonpearl || !items.hammer || items.glove!=2 || !items.somaria || !items.mirror)
			return "unavailable";
		// Medallion Check
		if(!items.bombos && !items.ether && !items.quake)
			return "unavailable";
		if((medallions[1]==1 && !items.bombos) || (medallions[1]==2 && !items.ether) || (medallions[1]==3 && !items.quake))
			return "unavailable";
		if(medallions[1]==0 && !(items.bombos && items.ether && items.quake))
			return "possible";

		if(items.firerod)
			return "available";
		return "possible";
    }
};

entrances[30] = {
    name: "Waterfall of Wishing",
	originalname: "Waterfall of Wishing",
    x: "45.9%",
    y: "15%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.flippers)
			return "available";
		return "glitchable"
	}
};

entrances[31] = {
    name: "King Zora",
	originalname: "King Zora",
    x: "49%",
    y: "15%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.flippers || items.glove>0)
			return "available";
		return "glitchable"
	}
};

entrances[32] = {
    name: "Zora's Ledge",
	originalname: "Zora's Ledge",
    x: "49%",
    y: "17%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.flippers)
			return "available";
		return "possible";
    }
};

entrances[33] = {
    name: "Kakariko Fortune Teller",
	originalname: "Kakariko Fortune Teller",
    x: "10.3%",
    y: "34%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[34] = {
    name: "Pegasus Rocks",
	originalname: "Pegasus Rocks",
    x: "20.5%",
    y: "31%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(items.boots)
			return "available";
		return "unavailable";

    }
};

entrances[35] = {
    name: "Sanctuary",
	originalname: "Sanctuary",
    x: "24%",
    y: "29%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[36] = {
    name: "Sewers Drop",
	originalname: "Sewers Drop",
    x: "26.8%",
    y: "30.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.glove)
			return "available";
		return "unavailable";
    }
};

entrances[37] = {
    name: "Graveyard Ledge",
	originalname: "Graveyard Ledge",
    x: "29.5%",
    y: "29%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( dwaccess() && items.mirror )
		return "available";
	return "unavailable";
    }
};

entrances[38] = {
    name: "King's Tomb",
	originalname: "King's Tomb",
    x: "31%",
    y: "31%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(!items["boots"])
			return "unavailable";
		if ( (dwaccess() && items["mirror"]) || items["glove"]==2 )
			return "available";
		return "unavailable";
    }
};

entrances[39] = {
    name: "Graveyard Fairy Fountain Door",
	originalname: "Graveyard Fairy Fountain Door",
    x: "34.3%",
    y: "29.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[40] = {
    name: "Graveyard Fairy Fountain Drop",
	originalname: "Graveyard Fairy Fountain Drop",
    x: "33%",
    y: "33%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[41] = {
    name: "Potion Shop",
	originalname: "Potion Shop",
    x: "41%",
    y: "35%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[42] = {
    name: "Kakariko Well Drop",
	originalname: "Kakariko Well Drop",
    x: "2%",
    y: "44.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[43] = {
    name: "Kakariko Well Door",
	originalname: "Kakariko Well Door",
    x: "3%",
    y: "44.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[44] = {
    name: "Blind's Hideout",
	originalname: "Blind's Hideout",
    x: "7.3%",
    y: "44%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[45] = {
    name: "Old Lady's House Left",
	originalname: "Old Lady's House Left",
    x: "8.5%",
    y: "44%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[46] = {
    name: "Old Lady's House Right",
	originalname: "Old Lady's House Right",
    x: "9.5%",
    y: "44%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[47] = {
    name: "Red Roof House Left",
	originalname: "Red Roof House Left",
    x: "3.5%",
    y: "48%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[48] = {
    name: "Bottle Merchant",
	originalname: "Bottle Merchant",
    x: "5.5%",
    y: "48.3%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[49] = {
    name: "Red Roof House Right",
	originalname: "Red Roof House Right",
    x: "11.3%",
    y: "49.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[50] = {
    name: "Chicken House",
	originalname: "Chicken House",
    x: "5.8%",
    y: "55%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[51] = {
    name: "Sick Kid",
	originalname: "Sick Kid",
    x: "8.8%",
    y: "55%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
	
    }
};

entrances[52] = {
    name: "Blue Roof House Right",
	originalname: "Blue Roof House Right",
    x: "11%",
    y: "55%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[53] = {
    name: "Doorless Shed",
	originalname: "Doorless Shed",
    x: "2.3%",
    y: "60.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (items.bombs) {
			return "available"
		}
		return "unavailable"	
    }
};

entrances[54] = {
    name: "Kakariko Shop",
	originalname: "Kakariko Shop",
    x: "6.4%",
    y: "60%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[55] = {
    name: "Tavern Top",
	originalname: "Tavern Top",
    x: "8.8%",
    y: "58%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[56] = {
    name: "Tavern Bottom",
	originalname: "Tavern Bottom",
    x: "9%",
    y: "61.3%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[57] = {
    name: "Blacksmith",
	originalname: "Blacksmith",
    x: "16.1%",
    y: "55%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[58] = {
    name: "Magic Bat Drop",
	originalname: "Magic Bat Drop",
    x: "17.5%",
    y: "58.0%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.hammer || (items.glove==2 && items.mirror && items.moonpearl))
			return "available";
		return "unavailable";
    }
};

entrances[59] = {
    name: "Magic Bat Door",
	originalname: "Magic Bat Door",
    x: "16.5%",
    y: "58%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[60] = {
    name: "Secret Passage Door",
	originalname: "Secret Passage Door",
    x: "28.5%",
    y: "44.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[61] = {
    name: "Secret Passage Drop",
	originalname: "Secret Passage Drop",
    x: "30.7%",
    y: "43.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[62] = {
    name: "Hyrule Castle Entrance",
	originalname: "Hyrule Castle Entrance",
    x: "26%",
    y: "46%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[63] = {
    name: "Hyrule Castle Left Battlement",
	originalname: "Hyrule Castle Battlements West",
    x: "23.4%",
    y: "41%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (!items.mirror) {
			return "unavailable"}
		if (items.agahnim || (items.moonpearl && (items.glove==2 && (items.hookshot || items.flippers)) || (items.glove>0 && items.hammer))){
		return "available"}
	return "unavailable"
    }
};

entrances[64] = {
    name: "Agahnim's Tower",
	originalname: "Agahnim's Tower",
    x: "25.8%",
    y: "42%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (!items.mirror) {
			return "unavailable"}
		if (items.agahnim || (items.moonpearl && (items.glove==2 && (items.hookshot || items.flippers)) || (items.glove>0 && items.hammer))){
		return "available"}
	return "unavailable"
    }
};


entrances[65] = {
    name: "Hyrule Castle Right Battlement",
	originalname: "Hyrule Castle Right Battlement",
    x: "28.5%",
    y: "41%",
    isOpened: false,
    isAvailable: function(){
		if (!items.mirror) {
			return "unavailable"}
		if (items.agahnim || (items.moonpearl && (items.glove==2 && (items.hookshot || items.flippers)) || (items.glove>0 && items.hammer))){
		return "available"}
	return "unavailable"
    }
};


entrances[66] = {
    name: "Sahasrahla",
	originalname: "Sahasrahla",
    x: "41.4%",
    y: "46%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "unavailable";
    }
};

entrances[67] = {
    name: "Eastern Palace",
	originalname: "Eastern Palace",
    x: "48.9%",
    y: "41%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "available";
    }
};

entrances[68] = {
    name: "Maze Race",
	originalname: "Maze Race",
    x: "2.5%",
    y: "72%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[69] = {
    name: "Maze Race House Left",
	originalname: "Maze Race House Left",
    x: "6.5%",
    y: "73.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if( items.mirror && (dwaccess() || (items.agahnim && items.moonpearl && items.hammer)) )
			return "available";
		return "unavailable";
    }
};

entrances[70] = {
    name: "Maze Race House Right",
	originalname: "Maze Race House Right",
    x: "8%",
    y: "73.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[71] = {
    name: "Library",
	originalname: "Library",
    x: "8.5%",
    y: "67.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[72] = {
    name: "Kakariko Chest Game",
	originalname: "Kakariko Chest Game",
    x: "11.7%",
    y: "72%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[73] = {
    name: "Flute Spot",
	originalname: "Flute Spot",
    x: "15.5%",
    y: "67.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.shovelflute == 1 || items.shovelflute == 3)
			return "available";
		return "unavailable";
	}
};

entrances[74] = {
    name: "Pegasus Rocks Fairy Fountain",
	originalname: "Pegasus Rocks Fairy Fountain",
    x: "24.5%",
    y: "68%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(items.boots)
			return "available";
		return "unavailable";

    }
};

entrances[75] = {
    name: "Link's House",
	originalname: "Link's House",
    x: "28.3%",
    y: "70.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[76] = {
    name: "Lake Hylia Fortune Teller",
	originalname: "Lake Hylia Fortune Teller",
    x: "33.4%",
    y: "82%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[77] = {
    name: "Lake Hylia Shop",
	originalname: "Lake Hylia Shop",
    x: "37.2%",
    y: "78.8%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[78] = {
    name: "Eastern Great Fairy",
	originalname: "Eastern Great Fairy",
    x: "42%",
    y: "66.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[79] = {
    name: "]-Shaped Fairy Fountain",
	originalname: "]-Shaped Fairy Fountain",
    x: "49.8%",
    y: "72%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[80] = {
    name: "Desert Palace Left",
	originalname: "Desert Palace Left",
    x: "2.7%",
    y: "82%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(items.shovelflute>1 && items.glove==2 && items.mirror)
		return "available";
	return "unavailable";
    }
};

entrances[81] = {
    name: "Desert Ledge",
	originalname: "Desert Ledge",
    x: "2%",
    y: "93%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(items.shovelflute>1 && items.glove==2 && items.mirror)
		return "available";
	return "possible";
    }
};

entrances[82] = {
    name: "Desert Palace Entrance",
	originalname: "Desert Palace Entrance",
    x: "4.6%",
    y: "82%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(items.book)
		return "available";
	return "unavailable";
    }
};

entrances[83] = {
    name: "Desert Palace Boss",
	originalname: "Desert Palace Boss",
    x: "4.6%",
    y: "78%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(items.shovelflute>1 && items.glove==2 && items.mirror)
		return "available";
	return "unavailable";
    }
};

entrances[84] = {
    name: "Desert Palace Right",
	originalname: "Desert Palace Right",
    x: "6.5%",
    y: "82%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	return "possible";
    }
};

entrances[85] = {
    name: "Checkerboard Cave",
	originalname: "Checkerboard Cave",
    x: "9.7%",
    y: "79.4%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.shovelflute>1 && items.glove==2 && items.mirror )
		return "available";
	return "unavailable";
    }
};

entrances[86] = {
    name: "Aginah's Cave",
	originalname: "Aginah's Cave",
    x: "11%",
    y: "84%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[87] = {
    name: "South of Grove",
	originalname: "South of Grove",
    x: "14.5%",
    y: "84%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( items.mirror && (dwaccess() || (items.agahnim && items.moonpearl && items.hammer)) )
		return "available";
	return "unavailable";
    }
};

entrances[88] = {
    name: "Bombos Tablet",
	originalname: "Bombos Tablet",
    x: "11.8%",
    y: "93.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if( (dwaccess() || (items.agahnim && items.moonpearl && items.hammer)) && items.mirror && items.sword>=2 && items.book )
		return "available";
	return "unavailable";
    }
};

entrances[89] = {
    name: "Desert Great Fairy",
	originalname: "Desert Great Fairy",
    x: "15%",
    y: "91%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[90] = {
    name: "Desert Thief's Hideout",
	originalname: "Desert Thief's Hideout",
    x: "16.5%",
    y: "97.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if( items.glove>0 )
			return "available";
		return "unavailable";
    }
};

entrances[91] = {
    name: "Swamp Floodgate",
	originalname: "Swamp Floodgate",
    x: "24.4%",
    y: "96%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[92] = {
    name: "Sunken Treasure",
	originalname: "Sunken Treasure",
    x: "23.4%",
    y: "95%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "possible";
    }
};

entrances[93] = {
    name: "Swamp Great Fairy",
	originalname: "Swamp Great Fairy",
    x: "31%",
    y: "80%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (items.bombs){
			return "available"}
		return "unavailable"
    }
};

entrances[94] = {
    name: "Mini Moldorm Cave",
	originalname: "Mini Moldorm Cave",
    x: "33.5%",
    y: "96%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (items.bombs){
			return "available"}
		return "unavailable"
    }
};

entrances[95] = {
    name: "Pond of Happiness",
	originalname: "Pond of Happiness",
    x: "40.6%",
    y: "87%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.flippers)
			return "available";
		return "glitchable"
	}
};

entrances[96] = {
    name: "Ice Rod Cave",
	originalname: "Ice Rod Cave",
    x: "45.7%",
    y: "78.8%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (items.bombs){
			return "available"}
		return "unavailable"
    }
};
entrances[97] = {
    name: "Ice Rod Cave Annex",
	originalname: "Ice Rod Cave Annex",
    x: "46.7%",
    y: "78.8%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "available";
    }
};

entrances[98] = {
    name: "Lake Thief's Hideout",
	originalname: "Lake Thief's Hideout",
    x: "46.2%",
    y: "80.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.glove>0)
			return "available";
	return "unavailable";
    }
};

entrances[99] = {
    name: "Skull Woods Boss",
	originalname: "Skull Woods Boss",
    x: "52.8%",
    y: "7%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess() && items.firerod)
			return "possible";
		return "unavailable"
    }
};

entrances[100] = {
    name: "Skull Woods Back Left Entrance",
	originalname: "Skull Woods Back Left Entrance",
    x: "53.8%",
    y: "15%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "possible";
		return "unavailable"
    }
};

entrances[101] = {
    name: "Skull Woods Back Drop",
	originalname: "Skull Woods Back Drop",
    x: "57%",
    y: "10%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "possible";
		return "unavailable"
    }
};

entrances[102] = {
    name: "Skull Woods Back Right Entrance",
	originalname: "Skull Woods Back Right Entrance",
    x: "58.2%",
    y: "16%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};


entrances[103] = {
    name: "Skull Woods Front Entrance",
	originalname: "Skull Woods Front Entrance",
    x: "60.1%",
    y: "16.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};

entrances[104] = {
    name: "Skull Woods Hidden Drop",
	originalname: "Skull Woods Hidden Drop",
    x: "60.5%",
    y: "14.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};

entrances[105] = {
    name: "Skull Woods Left Drop",
	originalname: "Skull Woods Left Drop",
    x: "58.8%",
    y: "19.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};

entrances[106] = {
    name: "Skull Woods Right Drop",
	originalname: "Skull Woods Right Drop",
    x: "60.8%",
    y: "18.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};

entrances[107] = {
    name: "Dark Lumberjack Shop",
	originalname: "Dark Lumberjack Shop",
    x: "67.7%",
    y: "7%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};

entrances[108] = {
    name: "Bumper Cave Top",
	originalname: "Bumper Cave Top",
    x: "68.5%",
    y: "17%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "possible"
    }
};

entrances[109] = {
    name: "Bumper Cave Bottom",
	originalname: "Bumper Cave Bottom",
    x: "68.8%",
    y: "19.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};

entrances[110] = {
    name: "Lake Hylia Island",
	originalname: "Lake Hylia Island",
    x: "37%",
    y: "85%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.flippers)
			if( items.moonpearl && items.mirror && (items.agahnim || items.glove==2 || (items.glove&&items.hammer)) )
				return "available";
			else
				return "possible";
		else if (items.agahnim && items.mirror)
			return "glitchable"
		return "unavailable";
	}
};

entrances[111] = {
    name: "Under The Bridge",
	originalname: "Under The Bridge",
    x: "36%",
    y: "71%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.flippers)
			return "available";
		return "glitchable"
	}
};

entrances[112] = {
    name: "Death Mountain Great Fairy",
	originalname: "Death Mountain Great Fairy",
    x: "71.2%",
    y: "21%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (items.glove>0){
			return "available"}
		return "unavailable"
	}
};

entrances[113] = {
    name: "Spike Cave",
	originalname: "Spike Cave",
    x: "79.5%",
    y: "16%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (items.glove>0){
			return "available"}
		return "unavailable"
	}
};

entrances[114] = {
    name: "Ganon's Tower",
	originalname: "Ganon's Tower",
    x: "79.1%",
    y: "6%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (!dwaccess()){
			return "unavailable"}
		else
			if ((items.hammer && items.glove==2) && (items.hookshot || items.mirror)){
				return "available"}
		return "possible"
    }
};

entrances[115] = {
    name: "Hookshot Cave Back",
	originalname: "Hookshot Cave Back",
    x: "91%",
    y: "3.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "possible";
    }
};

entrances[116] = {
    name: "Hookshot Cave Front",
	originalname: "Hookshot Cave Front",
    x: "92.5%",
    y: "8%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (!dwaccess()){
			return "unavailable"}
		else
			if ((items.hammer && items.glove==2) && (items.hookshot || items.mirror)){
				return "available"}
		return "possible"
    }
};

entrances[117] = {
    name: "Superbunny Cave Top",
	originalname: "Superbunny Cave Top",
    x: "94%",
    y: "8%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (!dwaccess()){
			return "unavailable"}
		else
			if ((items.hammer && items.glove==2) && (items.hookshot || items.mirror)){
				return "available"}
		return "possible"
    }
};

entrances[118] = {
    name: "Superbunny Cave Bottom",
	originalname: "Superbunny Cave Bottom",
    x: "93%",
    y: "16.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if ((items.hookshot && items.glove==2) || (items.mirror && items.glove==2 && items.hammer)){
			return "available"}
		return "unavailable";
	}
};

entrances[119] = {
    name: "Death Mountain Shop",
	originalname: "Death Mountain Shop",
    x: "94%",
    y: "16.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if ((items.hookshot && items.glove==2) || (items.mirror && items.glove==2 && items.hammer)){
			return "available"}
		return "unavailable";
	}
};

entrances[120] = {
    name: "Turtle Rock",
	originalname: "Turtle Rock",
    x: "98%",
    y: "10%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(!items.moonpearl || !items.hammer || items.glove!=2)
			return "unavailable";
		if(!items.hookshot && !items.mirror)
			return "unavailable";
		// Medallion Check
		if(!items.bombos && !items.ether && !items.quake)
			return "unavailable";
		if((medallions[1]==1 && !items.bombos) || (medallions[1]==2 && !items.ether) || (medallions[1]==3 && !items.quake))
			return "unavailable";
		if(medallions[1]==0 && !(items.bombos && items.ether && items.quake))
			return "possible";
		return "available";
	}
};

entrances[121] = {
    name: "Turtle Rock Ledge",
	originalname: "Turtle Rock Ledge",
    x: "91%",
    y: "11%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "possible";
    }
};

entrances[122] = {
    name: "Turtle Rock Big Key",
	originalname: "Turtle Rock Big Key",
    x: "93%",
    y: "11%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "possible";
    }
};

entrances[123] = {
    name: "Turtle Rock Eye Bridge",
	originalname: "Turtle Rock Eye Bridge",
    x: "92%",
    y: "13.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "possible";
    }
};

entrances[124] = {
    name: "Outcast Fortune Teller",
	originalname: "Outcast Fortune Teller",
    x: "60.3%",
    y: "33.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};

entrances[125] = {
    name: "Dark World Sanctuary",
	originalname: "Dark World Sanctuary",
    x: "74%",
    y: "28.8%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};
entrances[126] = {
    name: "Dark Potion Shop",
	originalname: "Dark Potion Shop",
    x: "91.3%",
    y: "35%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};

entrances[127] = {
    name: "Catfish",
	originalname: "Catfish",
    x: "95.5%",
    y: "19%",
    isOpened: false,
	isImportant: false,
	isAvailable: function(){
		if(items.moonpearl && items.glove && (items.agahnim || items.hammer || (items.glove==2 && items.flippers)))
			return "available";
		return "unavailable"
    }
};


entrances[128] = {
    name: "Chest Game",
	originalname: "Chest Game",
    x: "53.4%",
    y: "48.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};

entrances[129] = {
    name: "C-Shaped house",
	originalname: "C-Shaped house",
    x: "61.2%",
    y: "50%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};

entrances[130] = {
    name: "Doorless Brewery",
	originalname: "Doorless Brewery",
    x: "56.5%",
    y: "60%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess() && items.bombs)
			return "available";
		return "unavailable"
    }
};

entrances[131] = {
    name: "Thieves' Town",
	originalname: "Thieves' Town",
    x: "57.2%",
    y: "50.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};


entrances[132] = {
    name: "Hammer Peg House",
	originalname: "Hammer Peg House",
    x: "61.1%",
    y: "54.9%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess() && items.hammer)
			return "available";
		return "unavailable"
    }
};

entrances[133] = {
    name: "Specialty Shop",
	originalname: "Specialty Shop",
    x: "67.5%",
    y: "47%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "available";
		return "unavailable"
    }
};


entrances[134] = {
    name: "Purple Chest",
	originalname: "Purple Chest",
    x: "66.2%",
    y: "54%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if (!entrances[158].isOpened)
		return "unavailable";
	if(items.moonpearl && items.glove==2)
		return "available";
	return "unavailable";
    }
};

entrances[135] = {
    name: "Ganon Drop",
	originalname: "Ganon Drop",
    x: "75.7%",
    y: "42.6%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (dwaccess())
			return "possible";
		return "unavailable"
    }
};

entrances[136] = {
    name: "Ganon Escape",
	originalname: "Ganon Escape",
    x: "72.5%",
    y: "50.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		return "possible";
    }
};

entrances[137] = {
    name: "Pyramid Fairy",
	originalname: "Pyramid Fairy",
    x: "74.5%",
    y: "50.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(!items.moonpearl)
			return "unavailable";
		if(items.hammer && (items.agahnim || items.glove))
			return "available";
		if(items.agahnim && items.mirror && steve())
			return "available";
		return "unavailable";
    }
};

entrances[138] = {
    name: "Dancing Tree's Cave",
	originalname: "Dancing Tree's Cave",
    x: "93.3%",
    y: "52%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(dwaccess() || items.agahnim)
		return "available";
	return "unavailable";
    }
};

entrances[139] = {
    name: "Palace of Darkness",
	originalname: "Palace of Darkness",
    x: "98.8%",
    y: "41.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.moonpearl && ((items.glove>0 && items.hammer) || (items.agahnim) || (items.glove==2 && items.flippers)))
			return "available";
		return "unavailable";
	}
};

entrances[140] = {
    name: "Pyramid",
	originalname: "Pyramid",
    x: "79.8%",
    y: "47%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if( items.agahnim || (items.glove&&items.hammer&&items.moonpearl) || (items.glove==2&&items.moonpearl&&items.flippers) )
			return "available";
		return "unavailable";
    }
};

entrances[141] = {
    name: "Archery Game",
	originalname: "Archery Game",
    x: "61.6%",
    y: "72%",
    isOpened: false,
	isImportant: false,
	isAvailable: function(){
		if(dwaccess() || (items.agahnim && items.moonpearl && items.hammer))
			return "available";
		return "unavailable";
    }
};

entrances[142] = {
    name: "Stumpy",
	originalname: "Stumpy",
    x: "66.3%",
    y: "70%",
    isOpened: false,
	isImportant: false,
	isAvailable: function(){
		if(dwaccess() || (items.agahnim && items.moonpearl && items.hammer))
			return "available";
		return "unavailable";
    }
};
entrances[143] = {
    name: "DW Pegasus Rocks Fairy Fountain",
	originalname: "DW Pegasus Rocks Fairy Fountain",
    x: "74.5%",
    y: "67%",
    isOpened: false,
	isImportant: false,
	isAvailable: function(){
		if((dwaccess() || (items.agahnim && items.moonpearl && items.hammer)) && items.boots)
			return "available";
		return "unavailable";
    }
};

entrances[144] = {
    name: "Bomb Shop",
	originalname: "Bomb Shop",
    x: "78.2%",
    y: "70.8%",
    isOpened: false,
	isImportant: false,
	isAvailable: function(){
		if(dwaccess() || (items.agahnim && items.moonpearl && items.hammer))
			return "available";
		return "unavailable";
    }
};

entrances[145] = {
    name: "Palace of Darkness Great Fairy",
	originalname: "Palace of Darkness Great Fairy",
    x: "92%",
    y: "66.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(dwaccess() || items.agahnim)
			return "available";
		return "unavailable";
    }
};

entrances[146] = {
    name: "Parrot's Cave",
	originalname: "Parrot's Cave",
    x: "99.9%",
    y: "72%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(dwaccess() || items.agahnim)
			return "available";
		return "unavailable";
    }
};


entrances[147] = {
    name: "Mire Shed",
	originalname: "Mire Shed",
    x: "52.8%",
    y: "82%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if( items.shovelflute>1 && items.glove==2 )
			return "available";
		return "unavailable";
    }
};


entrances[148] = {
    name: "Misery Mire",
	originalname: "Misery Mire",
    x: "54.5%",
    y: "82.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(!items.moonpearl || items.shovelflute<2 || items.glove!=2)
			return "unavailable";
		// Medallion Check
		if(!items.bombos && !items.ether && !items.quake)
			return "unavailable";
		if((medallions[0]==1 && !items.bombos) || (medallions[0]==2 && !items.ether) || (medallions[0]==3 && !items.quake))
			return "unavailable";
		if(medallions[0]==0 && !(items.bombos && items.ether && items.quake))
			return "possible";
		return "available";
    }
};

entrances[149] = {
    name: "Mire Great Fairy",
	originalname: "Mire Great Fairy",
    x: "56.3%",
    y: "82%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if( items.shovelflute>1 && items.glove==2 )
			return "available";
		return "unavailable";
    }
};

entrances[150] = {
    name: "Wasp's Cave",
	originalname: "Wasp's Cave",
    x: "60.8%",
    y: "84.2%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if( items.shovelflute>1 && items.glove==2 )
			return "available";
		return "unavailable";
    }
};

entrances[151] = {
    name: "Swamp Palace",
	originalname: "Swamp Palace",
    x: "74.4%",
    y: "95.5%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(dwaccess() || (items.agahnim && items.moonpearl && items.hammer))
		return "available";
	return "unavailable";
    }
};

entrances[152] = {
    name: "Hype Cave",
	originalname: "Hype Cave",
    x: "80.8%",
    y: "80%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(items.bombs && (dwaccess() || (items.agahnim && items.moonpearl && items.hammer)))
		return "available";
	return "unavailable";
    }
};

entrances[153] = {
    name: "Ice Lake Shop",
	originalname: "Ice Lake Shop",
    x: "83.3%",
    y: "82%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(items.bombs && (dwaccess() || (items.agahnim && items.moonpearl && items.hammer)))
		return "available";
	return "unavailable";
    }
};

entrances[154] = {
    name: "Ice Palace",
	originalname: "Ice Palace",
    x: "90.7%",
    y: "87.4%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.glove<2)
			return "unavailable";
		if(items.flippers)
			return "available";
		return "glitchable";
	}
};

entrances[155] = {
    name: "Dark Ice Great Fairy",
	originalname: "Dark Ice Great Fairy",
    x: "95.7%",
    y: "78.8%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if ((items.moonpearl && items.bombs && items.flippers) && (items.agahnim || dwaccess()))
			return "available"
		if((items.moonpearl && items.bombs) && (items.agahnim || dwaccess()))
			return "glitchable";
		return "unavailable"
	}
};

entrances[156] = {
    name: "Hand's Cave",
	originalname: "Hand's Cave",
    x: "96.7%",
    y: "78.8%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if(items.flippers && items.moonpearl && (items.agahnim || dwaccess()))
			return "available";
		if((items.agahnim && items.mirror) || dwaccess())
			return "glitchable";
		return "unavailable";
	}
};

entrances[157] = {
    name: "Hidden Cave",
	originalname: "Hidden Cave",
    x: "96%",
    y: "80.6%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if ((items.moonpearl && items.glove>0 && items.flippers) && (items.agahnim || dwaccess()))
			return "available"
		if((items.moonpearl && items.glove>0) && (items.agahnim || dwaccess()))
			return "glitchable";
		return "unavailable"
	}
};

entrances[158] = {
    name: "Blacksmith",
	originalname: "Blacksmith",
    x: "58%",
    y: "68%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
		if (items.moonpearl && items.glove==2)
			return "available";
		return "unavailable";
    }
};

entrances[159] = {
    name: "Hammer Pegs",
	originalname: "Hammer Pegs",
    x: "66.8%",
    y: "62%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(items.moonpearl && items.glove==2 && items.hammer)
		return "available";
	return "unavailable";
    }
};

entrances[160] = {
    name: "Shovel Game",
	originalname: "Shovel Game",
    x: "53.4%",
    y: "71.2%",
    isOpened: false,
	isImportant: false,
    isAvailable: function(){
	if(dwaccess() || (items.agahnim && items.moonpearl))
		return "available";
	return "unavailable";
    }
};