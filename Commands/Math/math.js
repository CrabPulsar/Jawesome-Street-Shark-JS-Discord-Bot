const math = require('mathjs');
const Discord = require('discord.js');
const colors = require('../../colors.json');
module.exports.run = async (bot, message, args) =>{
    
if (!args[0]) return message.reply("Provide a question???");
let resp;
try{
    resp = math.evaluate(args.join(" "))
} catch (e) {
    return message.reply("Use a *valid* question")
}
const embed = new Discord.MessageEmbed()
.setColor(colors['good_orange'])
.setTitle('Calculator')
.addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
.addField('Answer', `\`\`\`css\n${resp}\`\`\``)
message.channel.send(embed)
}
    
    module.exports.help = {
        name: "math",
        aliases: ["m"],
        desc: "Calculates the basic mathematical functions and can do derivatives."
    }