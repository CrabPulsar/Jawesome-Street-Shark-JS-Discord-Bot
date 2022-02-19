module.exports.run = async (bot, message, args) =>{

    calculator = function(num1, type, num2) {
        if (type == '*') return num1 * num2;
        if (type == '-') return num1 - num2;
        if (type == '+') return parseInt(args[0]) + parseInt(args[2]);
        if (type == '/') return num1 / num2;
        if (type == '^') return Math.pow(num1, num2);
        if (args[0].toLowerCase(type) == 'sqrt') return Math.sqrt(type);
        if (args[0].toLowerCase(type) == 'log') return Math.log10(type);
        if (args[0].toLowerCase(type) == 'ln') return Math.log(type);

    }

   if (!args[0]) return message.reply("First #?")
   if (!args[1]) return message.reply("What operator?")
   var output = calculator(args[0], args[1], args[2]);
   if (!output) return message.reply("Second #?") 
   message.channel.send(output);
    (err) => {if(err) message.channel.send(err)}
}
    
    module.exports.help = {
        name: "math2",
        aliases: [],
        desc: "math2"
    }