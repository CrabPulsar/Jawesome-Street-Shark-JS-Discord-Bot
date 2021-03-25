module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("NO");
    var time = process.uptime();
if (time < 60) {
    message.channel.send(time + " second(s)");
} else if (time >= 60 && time < 3600) {
    var minutes = time/60
    message.channel.send(minutes + " minute(s)");
} else if (time >= 3600 && time < 86400) {
    var hours = time/3600
    message.channel.send(hours + " hour(s)");
} else if (time >= 86400) {
    var days = time/86400
    message.channel.send(days + " day(s)");
}
    }
    module.exports.help = {
        name: "uptime",
        aliases: [],
        desc: "Sends the amount of time that the bot has been running."
    }