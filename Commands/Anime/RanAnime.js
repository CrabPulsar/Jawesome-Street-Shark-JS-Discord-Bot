const colors = require("../../colors.json");
const randomanime = require("random-anime");

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
    aliases: ["r"],
    desc: "A.K.A Random Anime. This command will send random anime images. You can add direct this gif at someone by typing in their @ or simply typing their name."
}