module.exports.run = async (bot, message, args) =>{
    message.delete();
    message.channel.send(`https://cdn.discordapp.com/attachments/658516463619145749/724768703094456350/Toradora.mp4`);
}

module.exports.help = {
    name: "toradora",
    aliases: ["vsalt"],
    desc: "This command will send the vanilla salt opening that never starts. Created by Tommy Hyland."
}