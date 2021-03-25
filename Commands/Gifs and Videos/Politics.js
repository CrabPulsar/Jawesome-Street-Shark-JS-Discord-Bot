module.exports.run = async (bot, message, args) => {
    
    let gifs = [
        "https://media.discordapp.net/attachments/459845122067005440/737120456670445678/image0.gif",
        "https://media.discordapp.net/attachments/763527340797722654/768103925836415006/image0-15.gif",
        "https://media.discordapp.net/attachments/763527340797722654/768703837837328395/image0-14.gif",
        "https://cdn.discordapp.com/attachments/570026973544316928/775897677904084992/Democrat.gif"
    ]
        number = gifs.length;
        var random = Math.floor(Math.random() * (number - 1 + 1));
        message.channel.send(gifs[random])
        message.delete();
    }

module.exports.help = {
    name: "politics",
    aliases: [],
    desc: "This command will send anti-politics gifs."
}