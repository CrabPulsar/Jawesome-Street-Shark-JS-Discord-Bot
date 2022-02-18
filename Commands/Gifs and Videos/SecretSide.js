let SS = require('./SavedGifs.json').Gifs.SecretSide;
module.exports.run = async (bot, message, args) =>{
    number = SS.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(SS[random]);
    message.delete();
}

module.exports.help = {
    name: "secretside",
    aliases: ["ss"],
    desc: "This command will send random Secret Side gifs or videos."
}