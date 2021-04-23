const colors = require("../../colors.json");
const desc = require("../../index.js");
const prefix = require("../../index.js");
module.exports.run = async (bot, message, args) =>{
    if (!args[0]){
        return message.reply("What command do you need help with? Try using jssc to see the list of recognized commands.")
    }
    var initialLength = prefix.currentPrefix.length
    var input = `${message.content}`.toLowerCase().slice(initialLength + 4).trim()
    if (!desc.fileDescription.get(input)){
        return message.reply("Unrecognized command!")
    }
    const embed = {};
    number = 14
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
    switch(random){
        case 1: embed.color = `${colors["black"]}`; break;
        case 2: embed.color = `${colors["white"]}`; break;
        case 3: embed.color = `${colors["gray"]}`; break;
        case 4: embed.color = `${colors["brown"]}`; break;
        case 5: embed.color = `${colors["gold"]}`; break;
        case 6: embed.color = `${colors["green"]}`; break;
        case 7: embed.color = `${colors["red"]}`; break;
        case 8: embed.color = `${colors["blue"]}`; break;
        case 9: embed.color = `${colors["purple"]}`; break;
        case 10: embed.color = `${colors["yellow"]}`; break;
        case 11: embed.color = `${colors["orange"]}`; break;
        case 12: embed.color = `${colors["hotpink"]}`; break;
        case 13: embed.color = `${colors["cream"]}`; break;
        case 14: embed.color = `${colors["kewl green"]}`; break;
    }
    embed.fields = [{name: `**${input.toUpperCase()}**`, value: desc.fileDescription.get(input)}];
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
