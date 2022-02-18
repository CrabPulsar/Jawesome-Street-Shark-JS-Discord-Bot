let zeb = require('./SavedGifs.json').Gifs.Zeb;
module.exports.run = async (bot, message, args) => {
    number = zeb.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(zeb[random]);
    message.delete();
}

module.exports.help = {
    name: "zeb",
    aliases: [],
    desc: "This command will send random memes of Zeb Atlas."
}