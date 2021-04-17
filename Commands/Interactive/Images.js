const prefix = require('../../index')
const colors = require("../../colors.json");
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
    try{
            message.channel.send({embed: iEmbed})
    } catch(e){
            console.log("Error finding picture.")
    }
m.delete();
message.delete();}
module.exports.help = {
    name: "images",
    aliases: ["i"],
    desc: "This command will Google whatever you want and any number of images (20 or less). If the thing you are searching for is more than one word, DO NOT USE SPACES. Use underscores. EX: Jawesome_Street_Shark 20 This will search for the first 20 images of Jawesome Street Shark on Google. This command is pretty slow to use. The more images that you request, the longer it will take to send them all."
}
