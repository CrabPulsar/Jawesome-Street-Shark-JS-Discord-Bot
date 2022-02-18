let VC = require("./SavedGifs.json").Gifs.VC;
module.exports.run = async (bot, message, args) => {
    number = VC.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(VC[random]);
    message.delete();
}

module.exports.help = {
    name: "vc",
    aliases: [],
    desc: "This command will send a random gif telling the users to join the voice channel."
}