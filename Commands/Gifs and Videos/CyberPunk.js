module.exports.run = async (bot, message, args) => {
    
    let CP = [
        "https://cdn.discordapp.com/attachments/570026973544316928/785270822973210634/075587e6eed9c9f1c133bf566044b97a4911411c0136bea585deeab07c6241d6_1.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/785761035202199562/Keanu_Reeves_-_Cyberpunk_2077.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/828192129179844628/146f06393d23ee16c87f5a1cadac288fb13988ca90cbd8ec4f10be9929a52e82_1.mp4"
    ]
        number = CP.length;
        var random = Math.floor(Math.random() * (number - 1 + 1));
        message.channel.send(CP[random])
        message.delete();
    }

module.exports.help = {
    name: "cyberpunk",
    aliases: ["2077"],
    desc: "This command will send a random video of Keanu Reeves in Cyberpunk 2077."
}
