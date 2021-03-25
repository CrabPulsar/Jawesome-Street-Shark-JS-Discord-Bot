module.exports.run = async (bot, message, args) =>{
    nsfw = [
    "https://media.discordapp.net/attachments/570026973544316928/735636850336727161/NO_NSFW_IN_GENERAL.gif",
    "https://media.discordapp.net/attachments/658516463619145749/727981466952400987/image0-5-1.gif"
    ]
    number = nsfw.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(nsfw[random])
    message.delete();
}
module.exports.help = {
    name: "nonsfw",
    aliases: [],
    desc: "This command will send random anti-NSFW gifs."
}