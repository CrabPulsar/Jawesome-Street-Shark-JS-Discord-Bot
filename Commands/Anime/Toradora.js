module.exports.run = async (bot, message, args) =>{
    message.delete();
    message.channel.send(`https://cdn.discordapp.com/attachments/570026973544316928/837192547053862912/Toradora_Ending_But_It_Never_Fully_Starts.mp4`);
}

module.exports.help = {
    name: "toradora",
    aliases: ["vsalt"],
    desc: "This command will send the vanilla salt opening that never starts. Created by Tommy Hyland."
}