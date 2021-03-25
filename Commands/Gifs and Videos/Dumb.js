module.exports.run = async (bot, message, args) =>{

    message.channel.send("https://cdn.discordapp.com/attachments/448963493715116035/709489651903103078/video0.mov");
    message.delete();
}

module.exports.help = {
    name: "dumb",
    aliases: [],
    desc: "This command sends a video of Takashi 6ix9ine."
}