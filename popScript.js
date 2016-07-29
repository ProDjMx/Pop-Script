setTimeout(function(){
    API.chatLog(" Personal script loaded correctly ")
}, 2000);

// Found on internet
var fullUrl = document.location.href;
var emplacement = document.location.href.substring(fullUrl.lastIndexOf( "/" )+1 );
// ---

API.on(API.CHAT_COMMAND, function(cmd){
    if(cmd.toLowerCase() == "/loadplugspam"){
        $.getScript('https://cdn.rawgit.com/ProDjMx/Pop-Script/master/plugSpam.js');
    }
})
