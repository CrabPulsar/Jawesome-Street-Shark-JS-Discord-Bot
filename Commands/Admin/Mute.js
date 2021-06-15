const color = require('../../Helper Functions/Random Color');
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("NO");
    let target = message.mentions.members.first();
    var time = args[1];
    var unit = `${args[2]}`;
    var messageContent = message.content.split(" ");
    while (messageContent[0] != args[3]) {
        messageContent.shift();
    }
    let reason = messageContent.toString().replace(/,/g, " ");
    if (!args[0]) {
        return message.channel.send("You need to add a name and then a duration")
    }
    if (!args[1]) {
        return message.channel.send("You need to include a duration")
    }
    if (!args[2]) {
        var time = time * 1000;
        var unit = "second(s)";
    }
    if (!args[3]) {
        reason = "No reason given"
    }
    var second = 1000;
    var minute = 60 * second;
    var hour = 60 * minute;
    var day = 24 * hour;
    var week = 7 * day;
    var year = 52 * week;
    switch (unit.toLowerCase()) {
        case 's': var time = time * second; var unit = "second(s)"; break;
        case 'sec': var time = time * second; var unit = "second(s)"; break;
        case 'secs': var time = time * second; var unit = "second(s)"; break;
        case 'second': var time = time * second; var unit = "second(s)"; break;
        case 'seconds': var time = time * second; var unit = "second(s)"; break;
        case 'm': var time = time * time * minute; var unit = "minute(s)"; break;
        case 'min': var time = time * minute; var unit = "minute(s)"; break;
        case 'mins': var time = time * minute; var unit = "minute(s)"; break;
        case 'minute': var time = time * minute; var unit = "minute(s)"; break;
        case 'minutes': var time = time * minute; var unit = "minute(s)"; break;
        case 'h': var time = time * hour; var unit = "hour(s)"; break;
        case 'hour': var time = time * hour; var unit = "hour(s)"; break;
        case 'hours': var time = time * hour; var unit = "hour(s)"; break;
        case 'd': var time = time * day; var unit = "day(s)"; break;
        case 'day': var time = time * day; var unit = "day(s)"; break;
        case 'days': var time = time * day; var unit = "day(s)"; break;
    }
    function setDaysTimeout(callback, days) {
        // 86400 seconds in a day
        let msInDay = 86400 * 1000;
        let dayCount = 0;
        let timer = setInterval(function () {
            dayCount++;  // a day has passed
            if (dayCount === days) {
                clearInterval(timer);
                callback.apply(this, []);
            }
        }, msInDay);
    }
    var role = message.guild.roles.cache.find(role => role.name == 'Muted')
    var id = target.id

    function addRole(user) {
        user.roles.add(role);
    }
    function removeRole(user) {
        user.roles.remove(role);
    }

    const muteMessage = {
        author: {
            name: message.author.tag,
            icon_url: message.author.avatarURL({ dynamic: true })
        },
        color: color.randomColor(),
        fields: [
            { name: 'Member', value: `${target} (${target.id})` },
            { name: "**Action:**", value: "Mute" },
            { name: "**Duration:**", value: `${args[1]} ${unit}` },
            { name: '**Reason:**', value: `${reason}` }
        ],
        timestamp: new Date()
    }

    const unmuteMessage = {
        author: {
            name: message.author.tag,
            icon_url: message.author.avatarURL({ dynamic: true })
        },
        color: color.randomColor(),
        fields: [
            { name: '**Member:**', value: `${target} (${target.id})` },
            { name: '**Action:**', value: 'Un-mute' }
        ],
        timestamp: new Date()
    }

    message.channel.send({ embed: muteMessage })


    bot.users.cache.get(id).send(`You have been muted for *${reason}*`);
    message.delete()

    addRole(target);
    if (time < 2E9) {
        setTimeout(() => {
            removeRole(target)
            bot.users.cache.get(id).send(`You are now unmuted.`);
            message.channel.send({ embed: unmuteMessage })
        }, time)
    } else {
        setDaysTimeout(function () {
            removeRole(target)
            bot.users.cache.get(id).send(`You are now unmuted.`);
            message.channel.send({ embed: unmuteMessage })
        }, args[1])
    }
}
module.exports.help = {
    name: "mute",
    aliases: [],
    desc: "Mutes the user mentioned for a specific amount of time. You can use seconds, minutes, hours, or days. However, the limit is 24.855 days due to the 32 bit integer limit. Not my fault. Ex: jssMUTE @<user> 10 days test."
}
