const colors = require("../../colors.json");
const client = require("nekos.life");
const neko = new client();

module.exports.run = async (bot, message, args) =>{
let z = await neko.nsfw.spank();
const nekoEmbed = {
color: colors["black"],
image: z,
timestamp: new Date(),
footer: {
    text: `slap`
}
};
if(args[0]){
    nekoEmbed.description = `${message.author.username} spanks at ${args[0]}`;
}else {
    nekoEmbed.description = `${message.author.username} spanks everyone`;
}
message.channel.send({embed: nekoEmbed});
message.delete();
}

module.exports.help = {
    name: "spank",
    aliases: [],
    desc: "This command will send random anime spanking gifs. You can add direct this gif at someone by typing in their @ or simply typing their name."
}