const colors = require("../colors.json");
const client = require("nekos.life");
const image = new client();

module.exports.run = async (bot, message, args) =>{
let z = await image.sfw.slap();
const nekoEmbed = {
color: colors["red"],
image: z,
timestamp: new Date(),
footer: {
    text: `BAKA`
}
};
if(args[0]){
    nekoEmbed.description = `${message.author.username} slaps ${args[0]}`;
}else {
    nekoEmbed.description = `${message.author.username} slaps everyone`;
}
message.channel.send({embed: nekoEmbed});
message.delete();
}

module.exports.help = {
    name: "slap",
    aliases: []
}