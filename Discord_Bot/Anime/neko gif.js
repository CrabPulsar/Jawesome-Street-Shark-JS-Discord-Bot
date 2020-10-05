const colors = require("../colors.json");
const client = require("nekos.life");
const neko = new client();

module.exports.run = async (bot, message, args) =>{
let z = await neko.sfw.nekoGif();
const nekoEmbed = {
color: colors["purple"],
image: z,
timestamp: new Date(),
footer: {
    text: `NYA~~~`
}
};
if(args[0]){
    nekoEmbed.description = `${message.author.username} nyas at ${args[0]}`;
}else {
    nekoEmbed.description = `${message.author.username} nyas at everyone`;
}
message.channel.send({embed: nekoEmbed});
message.delete();
}

module.exports.help = {
    name: "nekogif",
    aliases: []
}