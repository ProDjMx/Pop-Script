// PlayToWin by ProDjMx
// NOTE: setTimeout function are here to prevent spaming plug servers
// TODO: Find a way to reload the script once the game is done | Create a french version | Optimize the entire script

// - Var
var gamemode;
var nbMax;
var nbMin;
var nbSlt;
var i;
var msgToDel = [];
var usrId = API.getUser().id;
var rnCheck = 0;

if (rnCheck === 1 || rnCheck === 2 /* || rnCheck === 2 */) {
	API.chatLog("Sorry, a game is already started");
	console.error("A game is already started");
} else {
	API.chatLog("Game Modes available:");
	API.chatLog("- RN: Random Number");
	API.chatLog("-! More should be coming soon !-");
	gamemode = prompt("Choose the game mode (enter the first two letters given)");
	if (gamemode === null || gamemode === undefined) {
		API.chatLog("Game cancelled");
	} else if (gamemode.toLowerCase() !== "rn" /* && gamemode.toLowerCase() !== */) {
		alert("This Gamemode is not recognized");
		console.error("Gamemode not recognized");
		API.sendChat("/playtowin")
	} else if (gamemode.toLowerCase() === "rn") {
		nbMin = Number(prompt("Enter the minimum number that the player(s) could have to guess"));
		nbMax = Number(prompt("Enter the maximum number that the player(s) could have to guess"));
		if (isNaN(nbMax) === true || isNaN(nbMin) === true || nbMin >= nbMax || nbMax === undefined || nbMin === undefined || nbMax === null || nbMin === null) {
			API.chatLog("Unexpected error");
			console.error("Unexpected error");
		} else {
			nbSlt = Math.floor((nbMax-nbMin)*Math.random())+nbMin;
			rnCheck = 1;
			API.sendChat("/me [Starting Game] The first person to guess the number is taking the spot number 1 in the wait list");
			setTimeout(function() {
				API.sendChat("The number minimum is " +nbMin+ " and the maximum one is " +nbMax+ ", type any number respecting that!");
			}, 500);
			API.chatLog("Solution is " +nbSlt+ ". You can't participate!");
		}
	}
}

API.on(API.CHAT, function(msg){
	if(rnCheck === 1) {
		if (msg.uid === usrId) {
			msgToDel.push(msg.cid);
		} else if (isNaN(msg.message) === false) {
			if (msg.message < nbMin || msg.message > nbMax) {
				msgToDel.push(msg.cid);
			} else if (msg.message < nbSlt) {
				API.sendChat("@"+msg.un+ ": " +msg.message+ " is too small");
				msgToDel.push(msg.cid);
			} else if (msg.message > nbSlt) {
				API.sendChat("@"+msg.un+ ": " +msg.message+ " is too big");
				msgToDel.push(msg.cid);
			} else if (msg.message == nbSlt) {
				rnCheck = 2;
				API.sendChat(":loudspeaker: Congrats! @" +msg.un+ " found the number! It was " +nbSlt+ "!");
				msgToDel.push(msg.cid);
				setTimeout(function(){
					if (checkWl(msg.uid) === true) {
						API.moderateMoveDJ(msg.uid, 1);
					} else {
						API.moderateAddDJ(msg.uid);
						API.moderateMoveDJ(msg.uid, 1);
					}
					API.sendChat("[Game Over] All the messages related to the game are going to be deleted! :warning:");
					setTimeout(function() {
						while (i < msgToDel.length) {
							API.moderateDeleteChat(msgToDel[i]);
							i++;
						}
						msgToDel = [];
					}, 6000);
					rnCheck = 0;
				}, 1000);
			}
		}
	} else if (rnCheck === 2 && msg.uid === usrId) {
		msgToDel.push(msg.cid);
	}
});

// - Function(s)
function checkWl(id){
	usrInWl = API.getWaitList();
	for (i = 0; i < usrInWl.length; i++) {
		if (id == usrInWl[i].id) {
			return true;
		}
	}
	return false;
}
