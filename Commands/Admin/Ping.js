module.exports.run = async (bot, message, args) =>{
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("NO");
    const m = await message.channel.send("Ping");
    m.edit(`My ping is: ${m.createdTimestamp - message.createdTimestamp}ms`);

}

module.exports.help = {
    name: "ping",
    aliases: [],
    desc: "This command will send the bot's current ping."
}