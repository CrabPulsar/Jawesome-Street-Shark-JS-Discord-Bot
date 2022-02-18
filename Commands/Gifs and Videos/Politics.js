let politics = require('./SavedGifs.json').Gifs.Politics;
module.exports.run = async (bot, message, args) => {
    number = politics.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(politics[random]);
    message.delete();
}

module.exports.help = {
    name: "politics",
    aliases: [],
    desc: "This command will send anti-politics gifs."
}