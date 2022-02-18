let vince = require('./SavedGifs.json').Gifs.Vince;
module.exports.run = async (bot, message, args) => {
    number = vince.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(vince[random]);
    message.delete();
}

module.exports.help = {
    name: "vince",
    aliases: [],
    desc: "This command will send random memes of Vince Mcmahon."
}