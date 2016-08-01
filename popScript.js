// Pop Script by ProDjMx | ONLY FOR PERSONAL USE

// TODO: Improve /id and improve the way to load scripts

// - No Error Confirmation 
setTimeout(function(){
    API.chatLog(" Pop Script Loaded ")
}, 2000); //For personal purposes

// - Var 
// Found on internet
var fullUrl = document.location.href;
var emplacement = document.location.href.substring(fullUrl.lastIndexOf( "/" )+1 );
// ---
var adCheck = 0;
var slCheck = 0;
var glCheck = 0;
var usrLvl = API.getUser().level;
var usrId = API.getUser().id;

// - Script 
API.on(API.CHAT_COMMAND, function(cmd){
	switch(cmd) {
		case "/pscommands" :
			//Need to find a way to use properly \n
			null;
			break;
		case "/test" :
			API.chatLog("Pop script is loaded");
			console.log("Test confirmed");
			break;
		case "/testscript" :
			null;
			break;
		case "/loadplugspam" :
			if (usrLvl < 4) {
				API.chatLog("Sorry, it requires to be level 4 or above");
				console.error("Not Authorised")
			} else if (slCheck === 0) {
				$.getScript('https://dl.dropboxusercontent.com/u/88492635/Pop%20Script/plugSpam.js');
				slCheck = 1;
			} else if (slCheck === 1) {
				API.chatLog("plugSpam is already loaded");
				console.error("plugSpam is already loaded");
			}
			break;
		case "/loadgame":
			if (glCheck === 0) {
				$.getScript('https://dl.dropboxusercontent.com/u/88492635/Pop%20Script/miniGame.js');
				glCheck = 1;
			} else if (glCheck === 1) {
				API.chatLog("miniGame is already loaded");
				console.error("miniGame is already loaded");
			}
			break;
		case "/autodel" :
			if (adCheck === 0){
				$.getScript('https://dl.dropboxusercontent.com/u/88492635/Pop%20Script/autoDel.js');
				adCheck = 1;
			} else if (adCheck === 1){
				API.chatLog("AutoDel is already loaded");
			}
			break;
		case "/id":
			//Needs to be improved
			API.chatLog("Your ID is " + usrId);
			break;
	}
});
