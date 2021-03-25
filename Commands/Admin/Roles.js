module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("NO");
var arr = [];
message.guild.roles.cache.forEach(role => arr.push(role.name))
function arrayRemove(arr, value) { 
    return arr.filter(function(ele) {
        return ele != value;
     });
    }
    var result = arrayRemove(arr, "@everyone");
    result.push("everyone")
    result.sort( (a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
    var notUsed = result.toString().replace(/,/g, "");
    if (notUsed.length > 1999) return message.channel.send("You have way too many roles on your stupid server.");
message.channel.send(result)
    }
    module.exports.help = {
        name: "roles",
        aliases: [],
        desc: "Sends a list of all the roles in the server."
    }