// plugSpam by ProDjMx
var plugSpam, nbSpam, msgSpam;

API.chatLog("plugSpam Loaded");
console.log("Type /spam to get started or /stopspam to stop the spam")

API.on(API.CHAT_COMMAND, function(trigger) {
    if(trigger == "/spam"){
        console.log("Initializing the spam");
        msgSpam = prompt("Which message do you want to spam?");
        if (msgSpam === null) {
            console.log("Spam cancelled");
            API.chatLog("Spam cancelled");
        } else {
            nbSpam = Number(prompt("How many times do you want to spam it?"));
            if (isNaN(nbSpam) !== false || nbSpam === 0) {
                alert("Sorry, this is not valid");
                console.log("Spam cancelled");
                API.chatLog("Spam cancelled");
            } else if (nbSpam > 10) {
                if (API.hasPermission(user.id, API.ROLE.BOUNCER)) {
                    nbSpam = nbSpam + 1;
                    console.log("Spam started");
                    API.chatLog("Spam started");
                    startSpam(msgSpam, nbSpam);
                } else {
                    alert("Sorry, you are not authorized to go over 10 messages");
                    console.log("Spam cancelled");
                    API.chatLog("Spam cancelled");
                }
            } else {
                nbSpam = nbSpam + 1;
                console.log("Spam started");
                API.chatLog("Spam started");
                startSpam(msgSpam, nbSpam);
            }
        }
    } else if (trigger == "/stopspam") {
        stopSpam();
    }
});


function startSpam(message, number){ 
    plugSpam = setInterval(function(){
        number--;
        if (0 < number) {
            API.sendChat(message);
        } else {
            stopSpam();
        }
    }, 500);
}

function stopSpam(){
    clearInterval(plugSpam);
    console.log("Spam finished");
    API.chatLog("Spam finished");
}
