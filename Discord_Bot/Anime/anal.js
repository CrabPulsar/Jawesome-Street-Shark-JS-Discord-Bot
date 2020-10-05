const Discord = require("discord.js");
const colors = require("../colors.json");
const client = require("nekos.life");
const image = new client();

module.exports.run = async (bot, message, args) =>{
let z = await image.nsfw.anal();
const nekoEmbed = {
color: colors["kewl green"],
image: z,
timestamp: new Date(),
footer: {
    text: `Enjoy the waifu`
}
};
if(args[0]){
     nekoEmbed.description = `${message.author.username} anally fucks ${args[0]}`;
}else {
    nekoEmbed.description = `${message.author.username} anally fucks everyone`;
}
message.channel.send({embed: nekoEmbed});
message.delete();
}

module.exports.help = {
    name: "anal",
    aliases: []
}