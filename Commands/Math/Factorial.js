module.exports.run = async (bot, message, args) =>{
amount = args[0];
if(parseInt(amount) > 170) return message.reply("TOO HIGH TO CALCULATE!");
    var factor = function(number){
    var end = 1;
    var count;
    for (count = number; count > 1; count--){
        end *= count;
        // message.channel.send(end);
    }
    return end;
    };
    message.channel.send(factor(amount));
    
}

module.exports.help = {
    name: "factorial",
    aliases: ["fac"],
    desc: "This command will compute the factorial of whole numbers under 170."
}