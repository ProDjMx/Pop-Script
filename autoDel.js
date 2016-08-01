//AutoDel created by ProDjMx | Highly helped by Wibla to get it working
var nickToDel;
var idToDel;
var users;
var senderID;
var vlrs;
var delCheck = 0;

API.chatLog("AutoDel Loaded");
console.log("Type /del + nickname to start or /del to stop");

function getUserId(nick){
	var usrs = API.getUsers();
	nick = nick.toLowerCase();
	for (var i = 0; i < usrs.length; i++) {
      if (nick == usrs[i].rawun.toLowerCase()){
				return usrs[i];
			}
	}
}

API.on(API.CHAT_COMMAND, function(cmd){
	vlrs = cmd.split(" ");
	if (vlrs[0] === "/del") {
		if (vlrs[1] === undefined && delCheck === 1) {
			delCheck = 0;
			idToDel = null;
			API.chatLog("AutoDel stopped");
		} else if (vlrs[1] === undefined && delCheck === 0) {
			console.error("AutoDel isn't running");
		} else {
			nickToDel = vlrs[1].replace("@", "");
			idToDel = getUserId(nickToDel).id;
			delCheck = 1;
			API.chatLog("AutoDel started against " + nickToDel);
		}
	}
});

API.on(API.CHAT, function(msg){
	senderID = Number(msg.uid);
	if (delCheck === 1 && idToDel === senderID) {
		API.moderateDeleteChat(msg.cid);
	}
});
