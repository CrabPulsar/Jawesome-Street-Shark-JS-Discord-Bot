const Discord = require('discord.js');
module.exports.run = async (bot, message, args) =>{
    let embed = new Discord.MessageEmbed();
    if(!args[0]) {
        embed.setTitle('Your Avatar');
        embed.setDescription(`Links:\n[png](${message.author.displayAvatarURL({format: "png", size: 2048})}) | [jpg](${message.author.displayAvatarURL({format: "jpg", size: 2048})}) | [gif](${message.author.displayAvatarURL({format: "gif", size: 2048, dynamic: true})}) | [webp](${message.author.displayAvatarURL({format: "webp", size: 2048})})`);
        embed.setColor(0x00008b);
        embed.setTimestamp();
        embed.setFooter(message.author.username);
        embed.setImage(message.author.displayAvatarURL({size: 2048, dynamic: true}));
        message.channel.send(embed);
    } else {
        let user = message.mentions.users.first();
        embed.setTitle(`‹${user.username}›'s Avatar`);
        embed.setDescription(`Links:\n[png](${user.displayAvatarURL({format: "png", size: 2048})}) | [jpg](${user.displayAvatarURL({format: "jpg", size: 2048})}) | [gif](${user.displayAvatarURL({format: "gif", size: 2048, dynamic: true})}) | [webp](${user.displayAvatarURL({format: "webp", size: 2048})})`);
        embed.setColor(0x8b0000);
        embed.setTimestamp();
        embed.setFooter(user.username);
        embed.setImage(bot.users.cache.get(user.id).displayAvatarURL({size: 2048, dynamic: true}));
        message.channel.send(embed);
    }
    message.delete();
    }
        module.exports.help = {
        name: "avatar",
        aliases: ["pfp"],
        desc: "Sends the user's profile picture."
    }