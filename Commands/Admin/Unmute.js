module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("NO");
    if(!args[0]){
        var user = message.author;
    }else {
        var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
    }
    var person = message.guild.member(user);
    const role = message.guild.roles.cache.find(role => role.name === 'Muted')
    var f = person.roles.cache.some(role => role.name === 'Muted')
    if(f == true) {
        message.channel.send(user.username + " is now unmuted").then(message => message.delete({timeout: 4000}));
        person.roles.remove(role);
    } else {
        return message.channel.send(user.username + " is not muted")
    };
    message.delete();
}    
    module.exports.help = {
        name: "unmute",
        aliases: [],
        desc: "Unmutes the user mentioned."
    }