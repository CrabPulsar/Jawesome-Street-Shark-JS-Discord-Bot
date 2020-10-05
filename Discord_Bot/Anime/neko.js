const colors = require("../colors.json");
const client = require("nekos.life");
const image = new client();

module.exports.run = async (bot, message, args) =>{
let z = await image.sfw.neko();
const nekoEmbed = {
color: colors["kewl green"],
image: z,
timestamp: new Date(),
footer: {
    text: `nya~~`
}
};
message.channel.send({embed: nekoEmbed});
message.delete();
}

module.exports.help = {
    name: "neko",
    aliases: []
}