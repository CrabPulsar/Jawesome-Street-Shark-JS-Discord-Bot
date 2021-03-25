module.exports.run = async (bot, message, args) => {
    
    let vince = [
        "https://tenor.com/view/when-the-money-vince-mcmahon-big-chungus-wwe-gif-16018373",
        "https://tenor.com/view/vince-mc-mahon-falling-in-chair-surprised-wwe-gif-7810711",
        "https://cdn.discordapp.com/attachments/743183995973402756/784944124498935828/women.webm",
        "https://tenor.com/view/vince-goodnight-gif-5098627"
    ]
        number = vince.length;
        var random = Math.floor(Math.random() * (number - 1 + 1));
        message.channel.send(vince[random])
        message.delete();
    }

module.exports.help = {
    name: "vince",
    aliases: [],
    desc: "This command will send random memes of Vince Mcmahon."
}