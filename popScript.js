// - No Error Confirmation
setTimeout(function(){
    API.chatLog(" Pop Script Loaded ")
}, 2000); //For personal purposes

// - Var
// Found on internet
var fullUrl = document.location.href;
var emplacement = document.location.href.substring(fullUrl.lastIndexOf( "/" )+1 );
// ---
var slCheck = 0;
var glCheck = 0;
var usrLvl = API.getUser().level;
var usrId = API.getUser().id;

// - Script
API.on(API.CHAT_COMMAND, function(cmd){
	if (cmd.toLowerCase() == "/pscommands") {
		//Need to find a way to use properly \n
		null;
	} else if (cmd.toLowerCase() == "/loadplugspam") {
		if (usrLvl < 4) {
			API.chatLog("Sorry, it requires to be level 4 or above");
		} else if (slCheck === 0) {
			$.getScript('https://dl.dropboxusercontent.com/u/88492635/Pop%20Script/plugSpam.js');
			slCheck = 1;
		} else if (slCheck === 1) {
			API.chatLog("plugSpam is already loaded");
		}
	} else if (cmd.toLowerCase() == "/id") {
		API.chatLog("Your ID is " + usrId);
	} else if (cmd.toLowerCase() == "/loadgame") {
		if (glCheck === 0) {
			$.getScript('https://dl.dropboxusercontent.com/u/88492635/Pop%20Script/miniGame.js');
			glCheck = 1;
		} else if (glCheck === 1) {
			API.chatLog("miniGame is already loaded");
		}
	}
});
