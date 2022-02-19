const ownerID = require('../../botconfig.json').ownerID;
module.exports.run = async (bot, message, args) => {
    if (message.author.id != ownerID){
        return
    } else {
        message.delete();
        await message.channel.send({embed: Embed})
        process.exit();
    }
    }
    module.exports.help = {
        name: "shutdown",
        aliases: [],
        desc: "Shutdown the bot."
    }