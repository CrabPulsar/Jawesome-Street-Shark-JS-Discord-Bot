const colors = require("../colors.json");
const client = require("nekos.life");
const image = new client();

module.exports.run = async (bot, message, args) =>{
let z = await image.sfw.waifu();
const nekoEmbed = {
color: colors["purple"],
image: z,
timestamp: new Date(),
footer: {
    text: `Enjoy the waifu`
}
};
message.channel.send({embed: nekoEmbed});
message.delete();
}

module.exports.help = {
    name: "waifu",
    aliases: ["w"]
}