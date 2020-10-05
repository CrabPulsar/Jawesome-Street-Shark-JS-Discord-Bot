module.exports.run = async (bot, message, args) => {
    
    ssgif1 = "https://media.discordapp.net/attachments/448963493715116035/689368574892179494/ripster_rope.gif"
    ssgif2 = "https://media.discordapp.net/attachments/448963493715116035/691651015430242304/SEISMIC_PUNCH.gif"
    ssgif3 = "https://tenor.com/view/good-day-kickback-street-sharks-gif-7228136"
    ssgif4 = "https://tenor.com/view/street-sharks-nice-great-awesome-thumbs-up-gif-12483850"
    ssgif4 = "https://tenor.com/view/street-sharks-rock-music-jam-gif-12483858"
    ssgif5 = "https://media.discordapp.net/attachments/678112706359853093/683537291557601290/BURGER_NEED.gif"
    ssgif6 = "https://media.discordapp.net/attachments/448963493715116035/683901065271574579/jab_eatin.gif"
    ssgif7 = "https://media.discordapp.net/attachments/448963493715116035/691654935661510666/teeth.gif"
    ssgif8 = "https://media.discordapp.net/attachments/448963493715116035/682797624784322655/Streexskate.gif"
    ssgif9 = "https://media.discordapp.net/attachments/448963493715116035/682799802119094298/giphy.gif"
    ssgif10 = "https://media.discordapp.net/attachments/448963493715116035/683901097563521025/EATIN_THE_TV.gif"
    ssgif11 = "https://media.discordapp.net/attachments/448963493715116035/683901097307537499/SHARKBURGER.gif"
    ssgif12 = "https://media.discordapp.net/attachments/448963493715116035/683901066613358642/headbuttin.gif"
    ssgif13 = "https://media.discordapp.net/attachments/448963493715116035/683901097072787483/sharks_headin_out.gif"
    ssgif14 = "https://tenor.com/view/street-sharks-gif-3535055"
    ssgif15 = "https://tenor.com/view/pool-billiards-streetsharks-gif-7228105"
    ssgif16 = "https://tenor.com/view/party-the-crew-street-sharks-gif-7228140"
    ssgif17 = "https://tenor.com/view/street-sharks-intro-theme-gif-3483850"
    ssgif18 = "https://tenor.com/view/street-sharks-intro-theme-gif-3483850"
    ssgif19 = "https://tenor.com/view/street-sharks-intro-theme-gif-3483850"
        number = 19;
        var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        switch(random){
            case 1: message.channel.send(ssgif1); break;
            case 2: message.channel.send(ssgif2); break;
            case 3: message.channel.send(ssgif3); break;
            case 4: message.channel.send(ssgif4); break;
            case 5: message.channel.send(ssgif5); break;
            case 6: message.channel.send(ssgif6); break;
            case 7: message.channel.send(ssgif7); break;
            case 8: message.channel.send(ssgif8); break;
            case 9: message.channel.send(ssgif9); break;
            case 10: message.channel.send(ssgif10); break;
            case 11: message.channel.send(ssgif11); break;
            case 12: message.channel.send(ssgif12); break;
            case 13: message.channel.send(ssgif13); break;
            case 14: message.channel.send(ssgif14); break;
            case 15: message.channel.send(ssgif15); break;
            case 16: message.channel.send(ssgif16); break;
            case 17: message.channel.send(ssgif17); break;
            case 18: message.channel.send(ssgif18); break;
            case 19: message.channel.send(ssgif19); break;
        }
        message.delete();
    }

module.exports.help = {
    name: "gif",
    aliases: []
}