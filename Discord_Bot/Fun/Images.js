const prefix = require('../index')
const colors = require("../colors.json");
const Scraper = require('images-scraper');
const google = new Scraper({puppeteer: {headless: false,}});
module.exports.run = async (bot, message, args) =>{

var initialLength = prefix.currentPrefix.length
if (prefix.currentPrefix.length > 3) {initialLength + 1}
var msgContent = `${message.content}`.slice(initialLength).trim()
if (msgContent.startsWith('images')) {msgContent = msgContent.slice(7)} else {msgContent = msgContent.slice(2)}
function is_number(str){return /[0-9]/.test(str)}
        if (is_number(args[args.length - 1]) == true){
            var top = args[args.length - 1];
            var amount = args[args.length - 1];
            var search = msgContent.slice(0, -2).trim();
            } else {
            var top = 1;
            var amount = 1;
            var search = msgContent;
        }
console.log(message.author.username + ` searched for ` +  search + ` ` + amount);
if(parseInt(amount) > 50) return message.reply("TOO MANY IMAGES STUPID!");
const m = await message.channel.send("*Loading!!!*");
const results = await google.scrape(search, amount);
counter = 0
    while(counter < top) {
        var pic = results[counter];     
    const iEmbed = {
        color: colors["hotpink"],
        image: pic
    };
    counter++;
message.channel.send({embed: iEmbed});
}
m.delete();
message.delete();}
module.exports.help = {
    name: "images",
    aliases: ["i"]
}