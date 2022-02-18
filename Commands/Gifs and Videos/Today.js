module.exports.run = async (bot, message, args) => {
    var d = new Date();
    var n = d.getDay();
    switch (n) {
        case 0: var gif = "Sunday"; break;
        case 1: var gif = "Monday"; break;
        case 2: var gif = "Tuesday"; break;
        case 3: Wednesday = [
            "https://cdn.discordapp.com/attachments/364177901249101826/763457267890389042/WINCHESTER-WEDNESDAY.mp4",
            "https://tenor.com/view/redo-of-redo-of-healer-redo-anime-gif-gif-20069525"
        ]
            Wednumber = Wednesday.length;
            var random = Math.floor(Math.random() * (Wednumber - 1 + 1));
            var gif = Wednesday[random];
            break;
        case 4: Thursday = [
            "https://cdn.discordapp.com/attachments/322193555152175114/768730392245043230/FireGatorThursday.mov",
            "https://tenor.com/view/thirsty-thursday-drinking-yummy-tasty-in-your-face-gif-17059507"
        ];
            Thurnumber = Thursday.length;
            var random = Math.floor(Math.random() * (Thurnumber - 1 + 1));
            var gif = Thursday[random];
            break;
        case 5: var gif = "Friday"; break;
        case 6: Saturday = [
            "https://cdn.discordapp.com/attachments/403698796099272704/779764864175702066/video0.mp4"
        ]
            Satnumber = Saturday.length;
            var random = Math.floor(Math.random() * (Satnumber - 1 + 1));
            var gif = Saturday[random];
            break;
    }
    message.channel.send(gif)
    message.delete();
}
module.exports.help = {
    name: "today",
    aliases: [],
    desc: "This command will send a meme related to the current day of the week."
}