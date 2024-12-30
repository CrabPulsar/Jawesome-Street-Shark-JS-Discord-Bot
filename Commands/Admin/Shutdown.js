const ownerID = require('../../botconfig.json')
module.exports.run = async (bot, message, args) => {
    if (message.author.id != ownerID){
        return
    } else {
        message.delete();
        const Embed = {
            title: "**Jawesome Street Shark Is Now Offline**",
            timestamp: new Date(),
            color: "#00a2ff",
            footer: {
                text: `${message.author.username}`,
                icon_url: message.author.avatarURL({dynamic: true})
              }
        }
        await message.channel.send({embed: Embed})
        process.exit();
    }
    }
    module.exports.help = {
        name: "shutdown",
        aliases: [],
        desc: "Shutdown the bot."
    }