const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('../../package.json');
const byteInfo = require('../../Helper Functions/formatBytes');
const botconfig = require('../../botconfig.json')
const { utc } = require('moment');
const os = require('os');

module.exports.run = async (bot, message, args) => {
    const core = os.cpus()[0];
    const embed = new MessageEmbed()
        .setThumbnail(message.author.avatarURL({ dynamic: true }))
        .setColor(message.guild.me.displayHexColor || 'BLUE')
        .addField('General', [
            `**❯ Client:** ${message.author.tag} (${message.author.id})`,
            `**❯ Servers:** ${bot.guilds.cache.size.toLocaleString()} `,
            `**❯ Users:** ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
            `**❯ Channels:** ${bot.channels.cache.size.toLocaleString()}`,
            `**❯ Creation Date:** ${utc(message.author.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
            `**❯ Node.js:** ${process.version}`,
            `**❯ Version:** v${version}`,
            `**❯ Discord.js:** v${djsversion}`,
            `**❯ Prefix:** ${botconfig.prefix}`
        ])
    if (message.author.id === botconfig.ownerID) {
            embed.addField('System', [
            `**❯ Platform:** ${process.platform}`,
            `**❯ CPU:**`,
            `\u3000 Cores: ${os.cpus().length}`,
            `\u3000 Model: ${core.model}`,
            `\u3000 Speed: ${core.speed} MHz`,
            `**❯ Memory:**`,
            `\u3000 Total: ${byteInfo.formatBytes(process.memoryUsage().heapTotal)}`,
            `\u3000 Used: ${byteInfo.formatBytes(process.memoryUsage().heapUsed)}`
        ])
    }
    embed.setTimestamp();
    message.channel.send(embed);
}

module.exports.help = {
    name: "Botinfo",
    aliases: ["bot"],
    desc: "Displays information about the bot."
}

// Code used from this github: https://github.com/MenuDocs/Discord.js-v12-Tutorials