let gif = require('./SavedGifs.json').Gifs.Gif;
module.exports.run = async (bot, message, args) => {
    number = gif.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(gif[random]);
    message.delete();
}
    module.exports.help = {
    name: "gif",
    aliases: [],
    desc: "This command will send a random street sharks gif."
}