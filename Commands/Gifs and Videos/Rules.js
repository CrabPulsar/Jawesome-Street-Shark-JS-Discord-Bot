let rules = require('./SavedGifs.json').Gifs.Rules;
module.exports.run = async (bot, message, args) => {    
    number = rules.length;
    var random = Math.floor(Math.random() * (number - 1 + 1));
    message.channel.send(rules[random]);
    message.delete();
}

module.exports.help = {
    name: "rules",
    aliases: [],
    desc: "Sends gifs with funny rules on them. These rules are jokes and not to be taken seriously."
}