const colors = require("../../colors.json");
const client = require("nekos.life");
const neko = new client();

module.exports.run = async (bot, message, args) =>{
let z = await neko.nsfw.feet();
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
    name: "feet",
    aliases: [],
    desc: "This command will send random NSFW anime feet pictures. You can add direct this gif at someone by typing in their @ or simply typing their name."
}