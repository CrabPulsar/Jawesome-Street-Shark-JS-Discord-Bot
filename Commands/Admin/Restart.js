const open = require('open');
const botconfig = require('../../botconfig.json').ownerID;

module.exports.run = async (bot, message, args) => {
if (message.author.id != botconfig.ownerID){
    return
}
message.delete()
await open('../../Jawesome Bot.bat', {wait: false})
setTimeout((function() {
    return process.exit();
}), 2200);
}
module.exports.help = {
    name: "restart",
    aliases: [],
    desc: "Restarts the bot"
}
