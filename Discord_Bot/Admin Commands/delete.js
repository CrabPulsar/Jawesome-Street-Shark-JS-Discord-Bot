module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("NO");
    if(parseInt(args[0]) > 99) return message.reply("TOO MANY MESSAGES STUPID!");
    
    message.channel.bulkDelete(parseInt(args[0]) + 1).then(() =>{
    message.channel.send(`Deleted ${args[0]} messages!`).then(message => message.delete({timeout: 4000}));
    }).catch((err) => {
        return message.reply("An error occured");
    })
}

module.exports.help = {
    name: "delete",
    aliases: ["d"]
}