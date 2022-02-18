let turkey = require('./SavedGifs.json').Gifs.Turkey;
module.exports.run = async (bot, message, args) => {
    number = turkey.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(turkey[random]);
    message.delete();
}

module.exports.help = {
    name: "turkey",
    aliases: [],
    desc: "This command will send random gifs of Kaanozdil."
}