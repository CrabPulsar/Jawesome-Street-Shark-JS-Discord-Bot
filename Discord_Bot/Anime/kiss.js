const colors = require("../colors.json");
const client = require("nekos.life");
const neko = new client();

module.exports.run = async (bot, message, args) =>{
let z = await neko.sfw.kiss();
const nekoEmbed = {
color: colors["green"],
image: z,
timestamp: new Date(),
footer: {
    text: `SMOOOOCH`
}
};
if(args[0]){
    nekoEmbed.description = `${message.author.username} kisses ${args[0]}`;
}else {
    nekoEmbed.description = `${message.author.username} kisses everyone`;
}
message.channel.send({embed: nekoEmbed});
message.delete();
}

module.exports.help = {
    name: "kiss",
    aliases: []
}