const index = require("../../index.js");
const random = require('../../Helper Functions/Random Color');
module.exports.run = async (bot, message, args) =>{
    if (!args[0]){
        return message.reply("What command do you need help with? Try using jssc to see the list of recognized commands. You can also use jsshelp <name of command> to get help on a specific command.")
    }
    var initialLength = index.currentPrefix.length
    var input = `${message.content}`.toLowerCase().slice(initialLength + 4).trim()
    x = 0
    y = 0
    if (!index.namedFileDescription.get(input)){
        x = x + 1
    }
    if (!index.aliasFileDescription.get(input)){
        y = y + 1
    }
    if (x && y >= 1){
        return message.reply("Unrecognized command!");
    } else if (x >= 1){
        var description = index.aliasFileDescription.get(input);
    } else if (y >= 1){
        var description = index.namedFileDescription.get(input);
    }
    const embed = {};
    embed.color = `${random.randomColor()}`;
    embed.fields = [{name: `**${input.toUpperCase()}**`, value: description}];
    embed.timestamp = new Date(),
    embed.footer = {text: `Requested by ${message.author.username}`, icon_url: message.author.displayAvatarURL({dynamic: true})}
    message.channel.send({embed: embed});
    message.delete();
}
module.exports.help = {
    name: "help",
    aliases: [],
    desc: "help"
}
