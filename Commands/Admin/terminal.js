const ownerID = require('../../botconfig.json').ownerID;
const child = require("child_process");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != ownerID) {
        return
    }
    var command = args.join(" ");
    child.exec(command, (err, res) => {
        if (err) return console.log(err);
        message.channel.send(res.slice(0, 2000), { code: 'js' })
        })

}
module.exports.help = {
    name: "terminal",
    aliases: ["t"],
    desc: "Let's the bot owner control a terminal."
}