let Justin = require('./SavedGifs.json').Gifs.Justin;
module.exports.run = async (bot, message, args) => {
    number = Justin.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(Justin[random]);
    message.delete();
}

module.exports.help = {
    name: "justin",
    aliases: [],
    desc: "This command will send random videos and gifs from justin_dastud_bailey92."
}