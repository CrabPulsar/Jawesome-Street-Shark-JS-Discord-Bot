const colors = require("../colors.json");
const randomanime = require("random-anime");
module.exports.run = async (bot, message, args) =>{
const anime = randomanime.nsfw();
const embed = {
color: colors["hotpink"],
image: {url: anime},
timestamp: new Date(),
footer: {
    text: `Waifu O'clock`
}
};
if(args[0]){
    embed.description = `${message.author.username} shares an NSFW waifu with ${args[0]}`;
}else {
    embed.description = `${message.author.username} shares an NSFW waifu`;
}
message.channel.send({embed: embed});
message.delete();
}

module.exports.help = {
    name: "rananimensfw",
    aliases: ["rn"]
}