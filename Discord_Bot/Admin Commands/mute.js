module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("NO");
var person = args[0]
var time = args[1]
var duration = `${args[2]}`
if (!args[0]){
    return message.channel.send("You need to add a name and then a duration")
}
if (!args[1]){
    return message.channel.send("You need to include a duration")
}
if (!args[2]){
    var time = time * 1000;
    var unit = "second(s)";
}
var second = 1000;
var minute = 60 * second;
var hour = 60 * minute;
var day = 24 * hour;
switch(duration.toLowerCase()){
    case 's': var time = time * second; var unit = "second(s)"; break;
    case 'sec': var time = time *second; var unit = "second(s)"; break;
    case 'secs': var time = time *second; var unit = "second(s)"; break;
    case 'second': var time = time * second; var unit = "second(s)"; break;
    case 'seconds': var time = time * second; var unit = "second(s)"; break;
    case 'm': var time = time * time * minute; var unit = "minute(s)"; break;
    case 'min': var time = time * minute; var unit = "minute(s)"; break;
    case 'mins': var time = time * minute; var unit = "minute(s)"; break;
    case 'minute': var time = time * minute; var unit = "minute(s)"; break;
    case 'minutes': var time = time * minute; var unit = "minute(s)"; break;
    case 'h': var time = time * hour; var unit = "hour(s)"; break;
    case 'hour': var time = time * hour; var unit = "hour(s)"; break;
    case 'hours': var time = time * hour; var unit = "hour(s)"; break;
    case 'd': var time = time * day; var unit = "day(s)"; break;
    case 'day': var time = time * day; var unit = "day(s)"; break;
    case 'days': var time = time * day; var unit = "day(s)"; break;
}
if (time > 2147483647){
    return message.channel.send("Too long")
}
var role = message.guild.roles.cache.find(role => role.name == 'Muted')
let member = message.mentions.members.first();
function function1() {
    member.roles.add(role);
    message.channel.send(`Muted ${args[0]} for ${args[1]} ${unit}`)
    message.delete()    
}

function function2() {
message.channel.send(person + ", you are now unmuted");
member.roles.remove(role);
}

function1();
setTimeout(function2, time);
}

module.exports.help = {
    name: "mute",
    aliases: []
}