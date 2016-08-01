//Basic miniGame by ProDjMx

// NEED TO BE FIXED
var nbMax, solution, nbTurns, difficulty;
var turnsDone = 0;
var submitted = -1;
var fix = 0;

API.chatLog("miniGame Loaded");
console.log("Start the game by executing /startgame");

API.on(API.CHAT_COMMAND, function(trigger) {
	if (trigger.toLowerCase() == "/startgame") {
		API.chatLog("Game started");
		console.log("Game started");
		difficulty = prompt("Choose the difficulty: Easy | Medium | Hard");
		if (difficulty.toLowerCase() !== "easy" && difficulty.toLowerCase() !== "medium" && difficulty.toLowerCase() !== "hard") {
			API.chatLog("Game interrupted");
			alert("Please choose between Easy, Medium and Hard");
			API.sendChat("/startgame");
		} else if (difficulty.toLowerCase() === "easy"){
			easy();
		} else if (difficulty.toLowerCase() === "medium"){
			medium();
		} else if (difficulty.toLowerCase() === "hard"){
			hard();
		}
	}
});

function easy(){
	nbMax = Number(prompt("Choose the highest number that you could have to find [Max. is 100]"));
	fix = 1;
	if (nbMax > 100 || isNaN(nbMax) !== false) {
		alert("A mistake was made, please try again");
		easy();
		fix = 0;
	} else if (fix === 1) {
		var solution = Math.floor(Math.random() * nbMax) + 1;
		nbTurns = 15;
		turnsDone = 0;
		API.chatLog("You got " +nbTurns+ " turns")
		while (turnsDone < nbTurns && solution !== submitted) {
			if (turnsDone === 0) {
				submitted = Number(prompt("Try with any number between 0 and " + nbMax));
				turnsDone++;
			} else {
				submitted = Number(prompt("Try again with any number between 0 and " + nbMax + ", " + (nbTurns - turnsDone) + " turns remaining"));
				turnsDone++;
			}
			if (submitted < solution) {
				API.chatLog(submitted + " is too small");
			} else if (submitted > solution) {
				API.chatLog(submitted + " is too big");
			}
		}
		if (solution === submitted) {
			alert("Congrats! The answer was " + solution + ", it took you " + turnsDone + " turn(s)");
			API.chatLog("Game finished");
		} else if (turnsDone === nbTurns) {
			alert("Too late! You reached the " + turnsDone + " turn, the answer was " + solution)
			API.chatLog("Game finished");
		}
	}
}

function medium(){
	
}

function hard(){
	
}
// var solution = Math.floor(Math.random() * 100) + 1;
