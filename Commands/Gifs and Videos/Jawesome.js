var JAW = `https://media.discordapp.net/attachments/448963493715116035/682799802119094298/giphy.gif`

module.exports.run = async (bot, message, args) =>{

    message.channel.send(JAW);
    message.delete();
}

module.exports.help = {
    name: "jawesome",
    aliases: ["jaw"],
    desc: "This command will send the jawesome gif."
}