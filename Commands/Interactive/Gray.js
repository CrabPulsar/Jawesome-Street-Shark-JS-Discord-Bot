module.exports.run = async (bot, message, args) =>{
var gray = "https://cdn.discordapp.com/attachments/570026973544316928/748340991433637999/unknown.png"
    message.channel.send(gray);
    message.channel.send(gray);
    message.channel.send(gray);
    message.channel.send(gray);
    message.channel.send(gray);
    message.delete();
}

module.exports.help = {
    name: "gray",
    aliases: [],
    desc: "Sends 5 gray images that will 'clear' the chat."
}