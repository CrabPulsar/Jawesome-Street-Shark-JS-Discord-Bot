const Discord = require("discord.js");
const Canvas = require("canvas");

module.exports.run = async (bot, message, args) =>{

    if (args[0].substring(0, 1) == '#') {
        var userColor = `${args[0]}`;
    } else {
        var userColor = `#${args[0]}`
    }
    const canvas = Canvas.createCanvas(3840, 2160);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = `${userColor}`;
    ctx.rect(0, 0, 3840, 2160);
    ctx.fill();
    
    const final = new Discord.MessageAttachment(canvas.toBuffer(), `${userColor}.png`);

    return message.channel.send(final);
}

module.exports.help = {
    name: "color",
    aliases: [],
    desc: "This command will send a color of your choosing. You can send the hexadecimal value with or without the #."
}