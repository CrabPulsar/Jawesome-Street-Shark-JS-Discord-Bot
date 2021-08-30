const prefix = require('../../index')
const colors = require("../../colors.json");
const Scraper = require('images-scraper');
const google = new Scraper({puppeteer: {headless: true}, args: ['--no-sandbox', '--disable-setupid-sandbox']});
module.exports.run = async (bot, message, args) =>{

    var initialLength = prefix.currentPrefix.length
    if (prefix.currentPrefix.length > 3){
        initialLength + 1
    }
    var msgContent = `${message.content}`.slice(initialLength).trim()
    if (msgContent.startsWith('images')){
        msgContent = msgContent.slice(7)
    } else {
        msgContent = msgContent.slice(2)
    }
    function is_number(str){
        return /[0-9]/.test(str)
    }
    if (is_number(args[args.length - 1]) == true){
        var top = args[args.length - 1];
        var amount = args[args.length - 1];
        var search = msgContent.slice(0, -top.length).trim();
        } else {
        var top = 1;
        var amount = 1;
        var search = msgContent;
    }
    console.log(`${new Date().toLocaleDateString()} @ ${new Date().toLocaleTimeString()}: ${message.author.username} searched for \x1b[31m${search}\x1b[0m \x1b[34m${amount}\x1b[0m`);
    if(parseInt(amount) > 200) {
        return message.reply("TOO MANY IMAGES STUPID!");
    }
    const m = await message.channel.send("*Loading!!!*");
    const results = await google.scrape(search, amount);
    counter = 0;
    while(counter < top) {
        if(counter == results.length){
            message.channel.send("No more images are available. Found " + results.length + " images out of " + amount)
            break;
        };
        var pic = results[counter];     
        const iEmbed = {
            color: colors["hotpink"],
            image: pic
        };
        counter++;
        try {
            message.channel.send({embed: iEmbed})
        }
        catch(err){
            console.log(err)
        }
    }
    m.delete();
    message.delete();
}
module.exports.help = {
    name: "images",
    aliases: ["i"],
    desc: "This command will Google whatever you want and any number of images (20 or less). If the thing you are searching for is more than one word, DO NOT USE SPACES. Use underscores. EX: Jawesome_Street_Shark 20 This will search for the first 20 images of Jawesome Street Shark on Google. This command is pretty slow to use. The more images that you request, the longer it will take to send them all."
}

// In "node_modules\images-scraper\src\google\scraper.js" comment line number 44 if you don't want it to print to the console. I already have this file printing to the console, so if you don't want lots of spam I recommend doing it.
