const colors = require("../colors.json");
const client = require("nekos.life");
const neko = new client();

module.exports.run = async (bot, message, args) =>{
let z = await neko.sfw.tickle();
const nekoEmbed = {
color: colors["brown"],
image: z,
timestamp: new Date(),
footer: {
    text: `Tickle time`
}
};
if(args[0]){
    nekoEmbed.description = `${message.author.username} tickles ${args[0]}`;
}else {
    nekoEmbed.description = `${message.author.username} tickles everyone`;
}
message.channel.send({embed: nekoEmbed});
message.delete();
}

module.exports.help = {
    name: "tickle",
    aliases: []
}