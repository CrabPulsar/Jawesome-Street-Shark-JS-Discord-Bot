module.exports.run = async (bot, message, args) =>{
 zeb =  "https://cdn.discordapp.com/attachments/570026973544316928/736486101505802290/Worshiping_Zeb_Atlas.mp4";
 zeb1 = "https://cdn.discordapp.com/attachments/743290160908861490/744288959886262452/video0.mp4"
 zeb2 = "https://media.discordapp.net/attachments/743183223336468565/744353947476819978/ZAB.ASSFUCK2.gif"
 number = 3;
 var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
 switch(random){
     case 1: message.channel.send(zeb); break;
     case 2: message.channel.send(zeb1); break;
     case 3: message.channel.send(zeb2); break; 
    }
 message.delete();
}

module.exports.help = {
    name: "zeb",
    aliases: []
}