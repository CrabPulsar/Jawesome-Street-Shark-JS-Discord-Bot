module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return;
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    message.channel.send("Uptime: `" + days + " Day(s), " + hours + " Hour(s), " + minutes + " Minutes(s), " + seconds + " Second(s) " + "`")
}

module.exports.help = {
        name: "uptime",
        aliases: [],
        desc: "Sends the amount of time that the bot has been running."
}