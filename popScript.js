setTimeout(function(){
    API.chatLog(" Pop Script Loaded ")
}, 2000);

// Found on internet
var fullUrl = document.location.href;
var emplacement = document.location.href.substring(fullUrl.lastIndexOf( "/" )+1 );
// ---
var lvl = API.getUser().level;

API.on(API.CHAT_COMMAND, function(cmd){
    if(cmd.toLowerCase() == "/loadplugspam"){
      if (lvl < 20){ /* For test purpose */
        API.chatLog("Sorry, it requires to be level 4 or above");
      } else {
        $.getScript('https://cdn.rawgit.com/ProDjMx/Pop-Script/master/plugSpam.js');
      }
    }
})
