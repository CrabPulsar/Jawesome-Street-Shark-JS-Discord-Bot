const prefix = require('../index')
module.exports.run = async (bot, message, args) =>{
    var initialLength = prefix.currentPrefix.length + 8
    if (prefix.currentPrefix.length > 3) {initialLength + 1}
var msgContent = `${message.content}`.slice(initialLength).toLowerCase().split("");
var msg = [];
counter = 0
top = msgContent.length;
    while(counter < top) {
        if (msgContent[0] == " "){
            msg.push("    ")
        }
    function is_letter(str){return /^[a-z]/.test(str)}
        if (is_letter(msgContent[0]) == true){
            msg.push(":regional_indicator_" + msgContent[0] + ":")
        } else {msg.push(msgContent[0])}
    counter++;
    msgContent.shift();
    }
let send = msg.toString().replace(/,/g, "");
if (send.length == 0){return message.reply("SEND SOMETHING ELSE")}
message.channel.send(send);
message.delete();
}
module.exports.help = {
    name: "emotify",
    aliases: []
}