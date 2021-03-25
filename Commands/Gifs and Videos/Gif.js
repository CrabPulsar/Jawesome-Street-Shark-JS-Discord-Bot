module.exports.run = async (bot, message, args) => {

    let gif = [
    "https://media.discordapp.net/attachments/448963493715116035/689368574892179494/ripster_rope.gif",
    "https://media.discordapp.net/attachments/448963493715116035/691651015430242304/SEISMIC_PUNCH.gif",
    "https://tenor.com/view/good-day-kickback-street-sharks-gif-7228136",
    "https://tenor.com/view/street-sharks-nice-great-awesome-thumbs-up-gif-12483850",
    "https://tenor.com/view/street-sharks-rock-music-jam-gif-12483858",
    "https://media.discordapp.net/attachments/678112706359853093/683537291557601290/BURGER_NEED.gif",
    "https://media.discordapp.net/attachments/448963493715116035/683901065271574579/jab_eatin.gif",
    "https://media.discordapp.net/attachments/448963493715116035/691654935661510666/teeth.gif",
    "https://media.discordapp.net/attachments/448963493715116035/682797624784322655/Streexskate.gif",
    "https://media.discordapp.net/attachments/448963493715116035/682799802119094298/giphy.gif",
    "https://media.discordapp.net/attachments/448963493715116035/683901097563521025/EATIN_THE_TV.gif",
    "https://media.discordapp.net/attachments/448963493715116035/683901097307537499/SHARKBURGER.gif",
    "https://media.discordapp.net/attachments/448963493715116035/683901066613358642/headbuttin.gif",
    "https://media.discordapp.net/attachments/448963493715116035/683901097072787483/sharks_headin_out.gif",
    "https://tenor.com/view/street-sharks-gif-3535055",
    "https://tenor.com/view/pool-billiards-streetsharks-gif-7228105",
    "https://tenor.com/view/party-the-crew-street-sharks-gif-7228140",
    "https://tenor.com/view/street-sharks-intro-theme-gif-3483850",
    "https://tenor.com/view/street-sharks-intro-theme-gif-3483850",
    "https://tenor.com/view/street-sharks-intro-theme-gif-3483850"
    ]
    number = gif.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(gif[random])
    message.delete();
}
    module.exports.help = {
    name: "gif",
    aliases: [],
    desc: "This command will send a random street sharks gif."
}