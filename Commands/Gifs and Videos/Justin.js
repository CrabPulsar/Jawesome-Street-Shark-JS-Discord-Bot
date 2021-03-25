module.exports.run = async (bot, message, args) => {
    
    let Justin = [
        "https://cdn.discordapp.com/attachments/570026973544316928/791529333616279582/LISTEN_CLOSELY.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/792659166783209503/7777777777777.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/792659163633156096/jsutin.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/792658544965058580/justinsad.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/792658766222196756/JUSTIN.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/792658460344582194/HIT_AND_QUIT.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/792658373086412820/CANT_WAKE_UP.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/792664622238531594/MattDaStud.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/792664864027574322/download.mp4"
    ]
        number = Justin.length;
        var random = Math.floor(Math.random() * (number - 1 + 1));
        message.channel.send(Justin[random])
        message.delete();
    }

module.exports.help = {
    name: "justin",
    aliases: [],
    desc: "This command will send random videos from justin_dastud_bailey92."
}