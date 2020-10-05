module.exports.run = async (bot, message, args) =>{
 a = "https://media.discordapp.net/attachments/570026973544316928/735636850336727161/NO_NSFW_IN_GENERAL.gif";
 b =  "https://media.discordapp.net/attachments/658516463619145749/727981466952400987/image0-5-1.gif";
 number = 2;
 var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
 switch(random){
     case 1: message.channel.send(a); break;
     case 2: message.channel.send(b); break;
     }
 message.delete();
}

module.exports.help = {
    name: "nsfw",
    aliases: []
}