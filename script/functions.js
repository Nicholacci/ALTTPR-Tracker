var rowLength = 7;
var greenpendant = 0;
var pendants = 0;
var crystals = 0;
var medallions = [0,0,0];
var locationsRemaining = 0;
var modeFlag = `null`

function debug() {
	alert(`sure`);
}

// Initialises the item tracker:
function initTracker() {
	document.write(`<table class="tracker" cellpadding="0" cellspacing="0" border="0" align="center">`);
	var itemList = Object.keys(items);
	var i = 0;
	while (i < itemList.length) {
		for (j = 0; j < rowLength; j++) {
			var x = itemList[i];
				// Custom behaviour for crystals/pendants
				if (x.substring(0,4) == `boss`) {
					document.write(`<td style="background-image:url(images/` + x + `.png);" `);
					document.write(`id="` + x + `" `);
					document.write(`class="` + !!items[x] + `" `);
					document.write(`onClick="toggleBoss('` + x + `')">`);
					document.write(`</td>`);
				// Custom behaviour for blank spaces
				} else if (x.substring(0,5) == `blank`) {
					document.write(`<td></td>`);
				// Custom behaviour for medallions
				} else if (x.substring(0,6) == `bombos` || x.substring(0,5) == `ether` || x.substring(0,5) == `quake`) {
					document.write(`<td style="background-image:url(images/` + x + `.png);" `);
					document.write(`id="` + x + `" `);
					document.write(`class="` + !!items[x] + `" `);
					document.write(`onClick="toggleMedallion('` + x + `')">`);
					document.write(`</td>`);
				// Standard behaviour
				} else {
					document.write(`<td style="background-image:url(images/` + x + `.png);" `);
					document.write(`id="` + x + `" `);
					document.write(`class="` + !!items[x] + `" `);
					document.write(`onClick="toggleItem('` + x + `')">`);
					document.write(`</td>`);
				}
			if (++i == itemList.length) {
				break;
			}
		}
		document.write(`</tr>`);
	}
}

// Clicking an item in the tracker:
function toggleItem(label) {

	// For singular items, toggles whether you have the item
	// For items with multiple tiers, cycles through the tiers
	if ((typeof items[label]) == `boolean`) {
		document.getElementById(label).className = (items[label]=!items[label]);
	} else if (++items[label] > itemsMax[label]) {
		items[label] = itemsMin[label];
		document.getElementById(label).style.backgroundImage = (`url(images/` + label + `.png)`);
		if (!items[label]) {
			document.getElementById(label).className = (`false`);
		}
	} else {
		document.getElementById(label).style.backgroundImage = (`url(images/` + label + items[label] + `.png)`);
	    document.getElementById(label).className = (`true`);
	}
	refreshAll();
}

// Clicking a medallion in the tracker:
function toggleMedallion(label) {
	
	// Shift-clicking assigns MM/TR requirements
	if (event.shiftKey) {
		if (++items[label] > itemsMax[label]) {
			items[label] = itemsMin[label];
			document.getElementById(label).style.backgroundImage = (`url(images/` + label + `.png)`);
		} else {
			document.getElementById(label).style.backgroundImage = (`url(images/` + label + items[label] + `.png)`);
			document.getElementById(label).className = (`false`);
		} return
	}
	
	// Toggles medallion off, removes it from MM/TR check
	if (document.getElementById(label).className == (`true`)) {
		medallions[2]--;
		document.getElementById(label).className = (`false`);
		if (items[label] == 3) {
			medallions[0] = 0;
			medallions[1] = 0;
		} else if (items[label] == 1) {
			medallions[0] = 0;
		} else if (items[label] == 2) {
			medallions[1] = 0;
		}

	// Toggles medallion on, adds it to MM/TR check
	} else {
		document.getElementById(label).className = (`true`);
		medallions[2]++;
		if (items[label] == 3) {
			medallions[0] = 1;
			medallions[1] = 1;
		} else if (items[label] == 1) {
			medallions[0] = 1;
		} else if (items[label] == 2) {
			medallions[1] = 1;
		}
	}
	refreshAll();
}

// Clicking a boss prize in the tracker:
function toggleBoss(label) {
	
	// Shift-clicking cycles through crystals/pendants
	if (event.shiftKey) {
		if (++items[label] > itemsMax[label]) {
			items[label] = itemsMin[label];
			document.getElementById(label).style.backgroundImage = (`url(images/` + label + `.png)`);
		} else {
			document.getElementById(label).style.backgroundImage = (`url(images/` + label + items[label] + `.png)`);
			document.getElementById(label).className = (`false`);
		} return
	}
	
	// Toggles whether you've finished the dungeon, adds/removes green pendant and crystals 5 + 6 for loction checks
	if (document.getElementById(label).className == (`true`)) {
		document.getElementById(label).className = (`false`);
		if (items[label] == 3) {
			greenpendant = 0;
			pendants--;
		} else if (items[label] == 1) {
			crystals--;
		} else if (items[label] == 2) {
			pendants--;
		}
	} else {
		document.getElementById(label).className = (`true`);
		if (items[label] == 3) {
			greenpendant = 1;
			pendants++;
		} else if (items[label] == 1) {
			crystals++;
		} else if (items[label] == 2) {
			pendants++;
		}
	}
	refreshAll();
}

// Initialises the map with item locations for standard modes:
function initStandardMap() {
	modeFlag = `standard`;
	document.write(`<div class="smallmap">`);

	// Plots out locations from chests.js:
	for (i = 0; i < chests.length; i++) {
		document.write(`<span style="background-image:url(images/poi.png);" id="chest` + i + `" onClick="toggleChest(` + i + `)" onMouseover="highlight(` + i + `)" onMouseout="unhighlight(` + i + `)"></span>`);
		document.getElementById(`chest` + i).style.left = chests[i].x;
		document.getElementById(`chest` + i).style.top = chests[i].y;
		
		if (chests[i].isOpened) {
			document.getElementById(`chest` + i).className = `chest opened`;
		} else {
			document.getElementById(`chest` + i).className = `chest ` + chests[i].isAvailable();
		}
	}

	// Plots out dungeon locations from dungeons.js
	for (i = 0; i < dungeons.length; i++) {
		document.write(`<span style="background-image:url(images/` + dungeons[i].image + `)" id="dungeon` + i + `" onclick="toggleDungeon(` + i + `)" onMouseover="highlightDungeon(` + i + `)" onMouseout="unhighlightDungeon(` + i + `)"></span>`);
		document.getElementById(`dungeon` + i).style.left = dungeons[i].x;
		document.getElementById(`dungeon` + i).style.top = dungeons[i].y;
		document.getElementById(`dungeon` + i).className = `dungeon ` + dungeons[i].canGetChest();
	}

	document.write(`</div>`);
	document.write(`<span id="caption">&nbsp</span>`);
}

// Initialize the map with entrances for entrance shuffle mode:
function initEntranceMap() {
	modeFlag = `entrance`;
	document.write(`<div class="largemap">`);
	
	// Plots out entrances from entrances.js
	for (i = 0; i < entrances.length; i++) {
		document.write(`<span style="background-image:url(images/poi.png);" id="entrance`+ i + `" onClick="toggleEntrance(` + i + `)" onMouseover="highlight(` + i + `)" onMouseout="unhighlight(` + i + `)"></span>`);
		document.getElementById(`entrance` + i).style.left = entrances[i].x;
		document.getElementById(`entrance` + i).style.top = entrances[i].y;
		
		if (entrances[i].isOpened) {
			document.getElementById(`entrance` + i).className = `entrance opened`;
		} else {
			document.getElementById(`entrance` + i).className = `entrance ` + entrances[i].isAvailable();
		}
	}
	
	document.write(`</div>`);
	document.write(`<span id="caption">&nbsp</span>`);
	
}

// Clicking on an item location on the map in standard modes:
function toggleChest(x) {
    chests[x].isOpened = !chests[x].isOpened;
	// Changes the colour of locations on the map
    if (chests[x].isOpened) {
		document.getElementById(`chest` + x).className = "chest opened";
    } else {
		document.getElementById(`chest` + x).className = "chest " + chests[x].isAvailable();
	}
	refreshAll();
}

// Event of clicking an entrance on the map in entrance shuffle mode:
function toggleEntrance(x) {
	if (event.shiftKey) {
		var cave = prompt("Change entrance name", entrances[x].name);
		if (cave === null) {
			entrances[x].name = entrances[x].originalname;
			entrances[x].isImportant = false;
			refreshEntrances();
		} else {
			entrances[x].isImportant = true;
			entrances[x].name = cave;
			refreshEntrances();
		}
	} else {
		entrances[x].isOpened = !entrances[x].isOpened;
		refreshEntrances();			
	}
}

// Clicking on a dungeon:
function toggleDungeon(x) {
	if (--dungeons[x].remaining == 0) {
		document.getElementById("dungeon" + x).style.backgroundImage = ("url(images/poi.png)");
		document.getElementById("dungeon" +x).className = "dungeon opened";
	} else if (dungeons[x].remaining < 0) {
		dungeons[x].remaining = dungeons[x].total;
		document.getElementById("dungeon" + x).style.backgroundImage = ("url(images/chest" + dungeons[x].remaining + ".png)");
				document.getElementById("dungeon" +x).className = "dungeon " + dungeons[x].canGetChest();
	} else {
		document.getElementById("dungeon" + x).style.backgroundImage = ("url(images/chest" + dungeons[x].remaining + ".png)");
	}
	for (k = 0; k < dungeons.length; k++) {
		if (document.getElementById("dungeon" +k).className != "dungeon opened") {
			document.getElementById("dungeon" + k).className = "dungeon " + dungeons[k].canGetChest();
		}
	}	
}


// Highlights a location and shows the name as caption:
function highlight(x) {
	if (modeFlag == `standard`) {
		document.getElementById(`chest` + x).style.backgroundImage = "url(images/highlighted.png)";
		document.getElementById("caption").innerHTML = chests[x].name;
	} else if (modeFlag == `entrance`) {
		document.getElementById(`entrance` + x).style.backgroundImage = "url(images/highlighted.png)";
		document.getElementById("caption").innerHTML = entrances[x].name;
	}
}
// Removes highlight on location:
function unhighlight(x) {
	if (modeFlag == `standard`) {
		document.getElementById(`chest` + x).style.backgroundImage = "url(images/poi.png)";
		document.getElementById("caption").innerHTML = "&nbsp;";
	} else if (modeFlag == `entrance`) {
		document.getElementById(`entrance` + x).style.backgroundImage = "url(images/poi.png)";
		document.getElementById("caption").innerHTML = "&nbsp;";
	}
}


// Changed from highlighting due to using dungeon locations as chest counters; for now, just display's the dungeon name as a caption:
function highlightDungeon(x){
    document.getElementById("caption").innerHTML = dungeons[x].name;
}

// As above:
function unhighlightDungeon(x){
    document.getElementById("caption").innerHTML = "&nbsp;";
}



// Refresh entrance colours:
function refreshEntrances() {
	for (i = 0; i < entrances.length; i++) {
		if (entrances[i].isOpened) {
			document.getElementById(`entrance` + i).className = "entrance opened";
		} else if (entrances[i].isImportant) {
				document.getElementById(`entrance` + i).className = "entrance important";
		} else {
				document.getElementById(`entrance` + i).className = "entrance " + entrances[i].isAvailable();
		}
	}
}

// Refresh chest colours:
function refreshChests() {
	for (i = 0; i < chests.length; i++) {
		if (chests[i].isOpened) {
			document.getElementById(`chest` + i).className = "chest opened";
		} else if (chests[i].isImportant) {
				document.getElementById(`chest` + i).className = "chest important";
		} else {
				document.getElementById(`chest` + i).className = "chest " + chests[i].isAvailable();
		}
	}
}

// Refresh dungeon colours:
function refreshDungeons() {
	for (i = 0; i < dungeons.length; i++) {
		if (dungeons[i].remaining == 0) {
			document.getElementById(`dungeon`+i).className = "dungeon opened";
		} else {
				document.getElementById(`dungeon`+i).className = "dungeon " + dungeons[i].canGetChest();
		}
	}
}

// Refresh all based on mode:
function refreshAll() {
	if (modeFlag == `standard`) {
		refreshChests();
		refreshDungeons();
	} else if (modeFlag == `entrance`) {
		refreshEntrances();
	}
}

// Defines whether you have access to the dark world beyond the pyramid area
function dwaccess() {
    if (!items.moonpearl) {
		return false;
    } if (items.glove == 2 || (items.glove && items.hammer)) {
		return true;
	} return items.agahnim && items.hookshot && (items.hammer || items.glove || items.flippers);
}

/*$( function() {
	$("#dialog").dialog({
		dialogClass: "no-close",
		autoOpen: false,
		width: 600,
		closeOnEscape: true,
		draggable: false,
		resizable: false,
		position: {my: "center bottom-300", at: "center bottom", of: window},
		buttons: {
			"OK": function() {
				x = $(this).data("selectedEntrance");
				if (!entrances[x].isImportant) {
					entrances[x].isImportant = true;
				}
				entrances[x].name = document.getElementById("entrancecaption").value;
				if (entrances[x].name = entrances[x].originalname) {
					alert();
				}
				$(this).dialog("close");
			},
			"Cancel": function() {
				entrances[$(this).data("selectedEntrance")].name = entrances[$(this).data("selectedEntrance")].originalname;
				entrancesRefresh();
				$(this).dialog("close");
			}
		}
	})
});

for (k = 0; k < entrances.length; k++) {
	options.push(entrances[k].name);
}
options.sort();

// Populate list with options:
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    document.getElementById("entrancecaption").innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
	
} 


// Sets a shuffled location as found and visited
function entranceFound(x) {
	for (k = 0; k < entrances.length; k++) {
		if (entrances[k].originalname == x) {
			entrances[k].isFound = !entrances[k].isFound;
		}
	}
}

function entranceNot(x) {
	for (k = 0; k < entrances.length; k++) {
		if (entrances[k].originalname == x) {
			if (entrances[k].isFound) {
				entrances[k].name = 'NOT ' + entrances[k].originalname;
			} else if (!entrances[k].isFound) {
				entrances[k].name = entrances[k].originalname;
			}
		}
	}
	
	

.data(`selectedEntrance`, x)
.dialog(`open`);
document.getElementById(`entrancecaption`).value = entrances[x].name;



		// Update locations remaining counter
		locationsRemaining = 0;
		for (i = 0; i < entrances.length; i++) {
			if (!entrances[i].isFound) {
				if (entrances[i].hasItem) {
					++locationsRemaining;
				}
			}
		}
		document.getElementById("locations").innerHTML = 'Item locations remaining: ' + locationsRemaining;
*/