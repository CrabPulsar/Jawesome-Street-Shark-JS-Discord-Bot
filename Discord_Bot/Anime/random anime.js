const Discord = require("discord.js");
const colors = require("../colors.json");
const randomanime = require("random-anime");
const client = new Discord.Client();

module.exports.run = async (bot, message, args) =>{
const anime = randomanime.anime();
const embed = {
color: colors["hotpink"],
image: {url: anime},
timestamp: new Date(),
footer: {
    text: `Waifu O'clock`
}
};
if(args[0]){
    embed.description = `${message.author.username} shares a waifu with ${args[0]}`;
}else {
    embed.description = `${message.author.username} shares a waifu`;
}
message.channel.send({embed: embed});
message.delete();
}

module.exports.help = {
    name: "rananime",
    aliases: ["r"]
}