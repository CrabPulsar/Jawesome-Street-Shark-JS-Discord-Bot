const SavedGifs = require("./SavedGifs.json");
module.exports.run = async (bot, message, args) => {
    number = SavedGifs.Gifs.CyberPunk.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(SavedGifs.Gifs.CyberPunk[random]);
    message.delete();
}

module.exports.help = {
    name: "cyberpunk",
    aliases: ["2077"],
    desc: "This command will send a random video of Keanu Reeves in Cyberpunk 2077."
}