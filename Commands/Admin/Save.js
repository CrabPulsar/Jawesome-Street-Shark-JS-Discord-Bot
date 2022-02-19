const botconfig = require("../../botconfig.json");
const index = require("../../index.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != botconfig.ownerID) return
    var msg = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}: ${message.content.slice(index.currentPrefix.length + 5)}\n`;
    if (fs.existsSync("./Logs/saveLogs.txt")) {
        fs.appendFile('./Logs/saveLogs.txt', msg, function (err) {
            if (err) throw err;
        });
    } else{
        fs.mkdir("./Logs", (err) => {
            if (err){
                return console.log(err);
            }
        });
        fs.writeFile('./Logs/saveLogs.txt', msg, function (err) {
            if (err) throw err;
        });
    }


    message.delete()
    message.reply(`Successfully saved ${msg}`)
}

module.exports.help = {
    name: "save",
    aliases: [],
    desc: "Saves user input."
}