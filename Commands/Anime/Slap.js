const colors = require("../../colors.json");
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
    aliases: [],
    desc: "This command will send a gif of an anime character being slapped. You can add direct this gif at someone by typing in their @ or simply typing their name."
}