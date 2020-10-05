const colors = require("../colors.json");
const client = require("nekos.life");
const neko = new client();

module.exports.run = async (bot, message, args) =>{
let z = await neko.sfw.hug();
const nekoEmbed = {
color: colors["blue"],
image: z,
timestamp: new Date(),
footer: {
    text: `Enjoy the hug`
}
};
if(args[0]){
    nekoEmbed.description = `${message.author.username} hugs ${args[0]}`;
}else {
    nekoEmbed.description = `${message.author.username} hugs everyone`;
}
message.channel.send({embed: nekoEmbed});
message.delete();
}

module.exports.help = {
    name: "hug",
    aliases: []
}