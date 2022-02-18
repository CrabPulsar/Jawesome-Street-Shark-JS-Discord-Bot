let nsfw = require('./SavedGifs.json').Gifs.NSFW;
module.exports.run = async (bot, message, args) =>{
    number = nsfw.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(nsfw[random]);
    message.delete();
}

module.exports.help = {
    name: "nsfw",
    aliases: [],
    desc: "This command will send random anti-NSFW gifs."
}