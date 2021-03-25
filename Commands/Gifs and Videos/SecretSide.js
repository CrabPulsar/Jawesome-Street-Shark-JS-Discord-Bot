module.exports.run = async (bot, message, args) =>{

    ssLyrics = [
    "https://media.discordapp.net/attachments/743183223336468565/762553109577728020/cooltext363841644467259.gif",
    "https://media.discordapp.net/attachments/743183223336468565/762553127181484032/cooltext363841735985152.gif", 
    "https://media.discordapp.net/attachments/743183223336468565/762553143497064469/cooltext363841765214306.gif"];
    number = 2
    var random = Math.floor(Math.random() * (number - 1 + 1) + 1);
    switch(random){
    case 1: message.channel.send(ssLyrics[0]);
            message.channel.send(ssLyrics[1]);
            message.channel.send(ssLyrics[2]); break;
    case 2: message.channel.send("https://media.discordapp.net/attachments/743337406853546024/755548327680016535/aaaaaaaaaa.gif")
}
    message.delete();
}

module.exports.help = {
    name: "secretside",
    aliases: ["ss"],
    desc: "This command will send random Secret Side gifs or videos."
}