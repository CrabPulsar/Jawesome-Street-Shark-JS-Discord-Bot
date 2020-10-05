module.exports.run = async (bot, message, args) =>{

    const m = await message.channel.send("Ping");
    m.edit(`My ping is: ${m.createdTimestamp - message.createdTimestamp}ms`);

}

module.exports.help = {
    name: "ping",
    aliases: []
}