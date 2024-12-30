const ownerID = require("../../botconfig.json").ownerID;

module.exports.run = async (bot, message, args) =>{
    var can_send = false;
    if ((message.author.id == ownerID) || (message.member.hasPermission('ADMINISTRATOR'))){
        can_send = true;
    } else{
        return message.reply("Insufficient privileges!");
    }
    const m = await message.channel.send("Ping");
    m.edit(`My ping is: ${m.createdTimestamp - message.createdTimestamp}ms`);

}

module.exports.help = {
    name: "ping",
    aliases: [],
    desc: "This command will send the bot's current ping."
}