const colors = require("../colors.json");
const client = require("nekos.life");
const neko = new client();

module.exports.run = async (bot, message, args) =>{
let z = await neko.nsfw.feetGif();
const nekoEmbed = {
color: colors["red"],
image: z,
timestamp: new Date(),
footer: {
    text: `Enjoy the stench`
}
};
if(args[0]){
    nekoEmbed.description = `${message.author.username} steps on ${args[0]}`;
}else {
    nekoEmbed.description = `${message.author.username} steps on everyone`;
}
message.channel.send({embed: nekoEmbed});
message.delete();
}

module.exports.help = {
    name: "feetgif",
    aliases: []
}