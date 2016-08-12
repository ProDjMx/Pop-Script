// Pop Script by ProDjMx | ONLY FOR PERSONAL USE

// TODO: Check other TODO lists | Improve /playtowin command | Update the links

// - No Error / Loading Confirmation
setTimeout(function() {
	API.chatLog(" Pop Script Loaded ")
}, 2000); //For personal purposes

// - Var
var adCheck = 0;
var slCheck = 0;
var glCheck = 0;
var arCheck = 0;
var ptwCheck = 0;
var mdjCheck = 0;
var i = 0;
var usrs = API.getUsers();
var usrLvl = API.getUser().level;
var usrId = API.getUser().id;

// - Script        
API.on(API.CHAT_COMMAND, function(cmd) {
	cmd = cmd.split(" ");
	switch (cmd[0]) {
		case "/pscommands":
			//Need to find a way to use properly \n
			null;
			break;
		case "/test":
			if (cmd[1] === "script") {
				null;
				break;
			} else {
				API.chatLog("Pop Script is loaded");
				console.log("Test confirmed");
				break;
			}
		case "/load":
			if (cmd[1].toLowerCase() === "plugspam") {
				if (usrLvl < 4) {
					API.chatLog("Sorry, it requires to be level 4 or above");
					console.error("Not Authorised");
					break;
				} else if (slCheck === 0) {
					$.getScript('');
					slCheck = 1;
					break;
				} else if (slCheck === 1) {
					API.chatLog("plugSpam is already loaded");
					console.error("plugSpam already loaded");
					break;
				}
			} else if (cmd[1].toLowerCase() === "game") {
				if (glCheck === 0) {
					$.getScript('');
					glCheck = 1;
					break;
				} else if (glCheck === 1) {
					API.chatLog("miniGame is already loaded");
					console.error("miniGame already loaded");
					break;
				}
			} else if (cmd[1].toLowerCase() === "autodel") {
				if (adCheck === 0) {
					$.getScript('');
					adCheck = 1;
					break;
				} else if (adCheck === 1) {
					API.chatLog("autoDel is already loaded");
					console.error("autoDel already loaded");
					break;
				}
			} else if (cmd[1].toLowerCase() === "mdj") {
				if (mdjCheck === 0) {
					$.getScript('');
					mdjCheck = 1;
					break;
				} else if (mdjCheck === 1) {
					API.chatLog("mDJ is already loaded");
					console.error("mDJ already loaded");
					break;
				}
			} else if (cmd[1].toLowerCase() === "autorespond") {
				if (arCheck === 0) {
					$.getScript('');
					arCheck = 1;
					break;
				} else if (arCheck === 1) {
					API.chatLog("autoRespond is already loaded");
					console.error("autoRespond already loaded");
					break;
				}
			} else if (cmd[1].toLowerCase() === "all") {
				if (slCheck === 1 || glCheck === 1 || adCheck === 1 || arCheck === 1 || mdjCheck === 1) {
					API.chatLog("Can't be executed because a script already has been loaded");
					console.error("Can't be executed");
					break;
				} else {
					$.getScript(''); // plugSpam
					slCheck = 1;
					$.getScript(''); // miniGame
					glCheck = 1;
					$.getScript(''); // autoDel
					adCheck = 1;
					$.getScript(''); // autoRespond
					arCheck = 1;
					$.getScript(''); // mDJ
					mdjCheck = 1;
					break;
				}
			}
			break;
		case "/id":
			if (cmd[1] === undefined || cmd[1] === null) {
				API.chatLog("Your ID is " + usrId);
				break;
			} else if (usrIdByName(cmd[1]) === undefined) {
				API.chatLog("User not found");
				console.error("User not found");
				break;
			} else {
				API.chatLog(cmd[1] + " ID  is: " + usrIdByName(cmd[1]));
				break;
			}
		case "/playtowin":
			$.getScript('https://dl.dropboxusercontent.com/u/88492635/JS/Pop%20Script/playtowin.js');
			break;
		case "/clap":
			API.sendChat(":clap: :clap: :clap:");
			break;
		case "/promote":
			API.sendChat("Here is the script that I use [Pop Script]: https://github.com/ProDjMx/Pop-Script");
			break;
	}
});

// - Function
function usrIdByName(name) {
	name = name.replace("@", "").toLowerCase();
	for (var i = 0; i < usrs.length; i++) {
		if (name == usrs[i].username.toLowerCase()) {
			return usrs[i].id;
		}
	}
}
