const prefix = require('../../index')
module.exports.run = async (bot, message, args) =>{
    var initialLength = prefix.currentPrefix.length + 5
    if (prefix.currentPrefix.length > 3) {
        initialLength + 1
    }
    var counter = args[args.length - 1];
    function is_numeric(str){return /^\d+$/.test(str)}
    if (is_numeric(counter) == false) {
        var counter = 1;
        content = `${message.content}`.slice(initialLength).trim()
    } else {
        content = `${message.content}`.slice(initialLength, -counter.length).trim()
    }
    if(counter > 200) return message.reply("TOO MANY MESSAGES STUPID!");
    while(counter > 0) {
        message.channel.send(content);
        counter--
    }
    message.delete();
    }
module.exports.help = {
    name: "spam",
    aliases: [],
    desc: "This command will repeat the message you put in and the amount, however there is a 50 message limit. EX: Jawesome 10 ===> Jawesome Jawesome Jawesome Jawesome Jawesome Jawesome Jawesome Jawesome Jawesome Jawesome."
}