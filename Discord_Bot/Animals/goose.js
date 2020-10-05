const colors = require("../colors.json");
const client = require("nekos.life");
const image = new client();

module.exports.run = async (bot, message, args) =>{
let z = await image.sfw.goose();
const nekoEmbed = {
color: colors["black"],
image: z,
timestamp: new Date(),
footer: {
    text: `Honk`
}
};
message.channel.send({embed: nekoEmbed});
message.delete();
}

module.exports.help = {
    name: "goose",
    aliases: []
}