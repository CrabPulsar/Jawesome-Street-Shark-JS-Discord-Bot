const prefix = require('../index')
module.exports.run = async (bot, message, args) =>{
    var counter = args[args.length - 1];
    function is_numeric(str){return /^\d+$/.test(str)}
    if (is_numeric(counter) == false) {return message.reply("HOW MANY?")}
    if(counter > 50) return message.reply("TOO MANY MESSAGES STUPID!");
    var initialLength = prefix.currentPrefix.length + 5
    if (prefix.currentPrefix.length > 3) {
        initialLength + 1
    }
    var content = `${message.content}`.slice(initialLength, -2).trim()
    while(counter > 0) {
        message.channel.send(content);
        counter--
    }
    message.delete();
    }
    
    module.exports.help = {
        name: "spam",
        aliases: []
    }