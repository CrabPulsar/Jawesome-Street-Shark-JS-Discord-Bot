const colors = require("../colors.json");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) =>{
const embed = {};
      number = 14
      var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
      switch(random){
        case 1: embed.color = `${colors["black"]}`; break;
        case 2: embed.color = `${colors["white"]}`; break;
        case 3: embed.color = `${colors["gray"]}`; break;
        case 4: embed.color = `${colors["brown"]}`; break;
        case 5: embed.color = `${colors["gold"]}`; break;
        case 6: embed.color = `${colors["green"]}`; break;
        case 7: embed.color = `${colors["red"]}`; break;
        case 8: embed.color = `${colors["blue"]}`; break;
        case 9: embed.color = `${colors["purple"]}`; break;
        case 10: embed.color = `${colors["yellow"]}`; break;
        case 11: embed.color = `${colors["orange"]}`; break;
        case 12: embed.color = `${colors["hotpink"]}`; break;
        case 13: embed.color = `${colors["cream"]}`; break;
        case 14: embed.color = `${colors["kewl green"]}`; break;
      }
      if (!args[0]){
          args[0] = `zzzzz`;
    };
    // I'm aware of how bad this is. Please don't roast me. It was the easiest way to do it.
    switch(args[0].toLowerCase()){
       case `anal`: embed.fields = [{name: "Anal", value: "This command will send random NSFW anal gifs. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "none"}];
          embed.title = ""; break;
        case `feet`: embed.fields = [{name: "Feet", value: "This command will send random NSFW anime feet pictures. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `feetgif`: embed.fields = [{name: "Feetgif", value: "This command will send random NSFW anime feet gifs. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `hug`: embed.fields = [{name: "Hug", value: "This command will send random anime hugging gifs. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `kiss`: embed.fields = [{name: "Kiss", value: "This command will send random anime kissing gifs. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `neko`: embed.fields = [{name: "Neko", value: "This command will send random anime catgirl pictures. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `nekogif`: embed.fields = [{name: "Nekogif", value: "This command will send random anime catgirl gifs. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `rananime`: embed.fields = [{name: "Rananame", value: "A.K.A Random Anime. This command will send random anime images. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "r"}];
            embed.title = ""; break;
        case `rananimensfw`: embed.fields = [{name: "Rananamensfw", value: "A.K.A Random Anime NSFW. This command will send random NSFW anime images. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "rn"}];
            embed.title = ""; break;
        case `spank`: embed.fields = [{name: "Spank", value: "This command will send random anime spanking gifs. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `tickle`: embed.fields = [{name: "Tickle", value: "This command will send random anime tickling gifs. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `waifu`: embed.fields = [{name: "Waifu", value: "This command will send random anime waifus. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "w"}];
            embed.title = ""; break;
        case `delete`: embed.fields = [{name: "Delete", value: "This command will delete a certain amount of messages. To use the command type the prefix + delete then type the # of messages you want deleted. Note: only users with the manage messages permisson are allowed to use this command. Furthermore, the maximum number of messages that are able to be deleted at one time is 99."}, {name: "**Aliases**", value: "d"}];
            embed.title = ""; break;
        case `gif`: embed.fields = [{name: "Gif", value: "This command will send a random street sharks gif."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `goose`: embed.fields = [{name: "Goose", value: "This command will send random pictures or gifs of geese."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `hello`: embed.fields = [{name: "Hello", value: "This command will reply to the user with Hello Friend. Sidenote: this is more of a test command."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;            
        case `help`: embed.fields = [{name: "Help", value: "Help"}, {name: "**Help**", value: "Help"}];
            embed.title = "Help"; break;
        case `jawesome`: embed.fields = [{name: "Jawesome", value: "This command will send the jawesome gif."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `commands`: embed.fields = [{name: "Commands", value: "This command will send a list of all current commands available."}, {name: "**Aliases**", value: "c"}];
            embed.title = ""; break;
        case `ping`: embed.fields = [{name: "Ping", value: "This command will send the bot's current ping."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `userinfo`: embed.fields = [{name: "Userinfo", value: "Thiscommand will send the user's discord information."}, {name: "**Aliases**", value: "ui"}];
            embed.title = ""; break;
        case `join`: embed.fields = [{name: "Join", value: "This command will make the bot join the voice channel that the user is in. Sidenote: this is mainly for testing."}, {name: "**Aliases**", value: "j"}];
            embed.title = ""; break;
        case `zzzzz`:  embed.fields = [{name: "Help", value: "To use the help command, use the prefix + the name of the command that you need help with. If you also need help finding commands, just use the prefix + commands or prefix + c"}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `images`:  embed.fields = [{name: "Images", value: "This command will Google whatever you want and any number of images (20 or less). If the thing you are searching for is more than one word, DO NOT USE SPACES. Use underscores. EX: Jawesome_Street_Shark 20 This will search for the first 20 images of Jawesome Street Shark on Google. This command is pretty slow to use. The more images that you request, the longer it will take to send them all."}, {name: "**Aliases**", value: "i"}];
             embed.title = ""; break;
        case `factorial`:  embed.fields = [{name: "Factorial", value: "This command will compute the factorial of whole numbers under 170."}, {name: "**Aliases**", value: "fac"}];
            embed.title = ""; break;
        case `spam`:  embed.fields = [{name: "Spam", value: "This command will repeat the message you put in and the amount, however there is a 50 message limit. EX: Jawesome 10 ===> Jawesome Jawesome Jawesome Jawesome Jawesome Jawesome Jawesome Jawesome Jawesome Jawesome"}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `cat`:  embed.fields = [{name: "Cat", value: "This command will return random images of cats along with their breed and temperance. (This command is powered by https://api.thecatapi.com)"}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `dog`:  embed.fields = [{name: "Dog", value: "This command will return random images of dogs along with their breed, the reason they were bred, and thier temperance. (This command is powered by https://api.thedogapi.com)"}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `nsfw`:  embed.fields = [{name: "NSFW", value: "This command will send one of two anti-NSFW gifs."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `zeb`:  embed.fields = [{name: "Zeb", value: "This command will send random videos of Zeb Atlas."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `slap`:  embed.fields = [{name: "Slap", value: "This command will send random SFW slaping gifs. You can add direct this gif at someone by typing in their @ or simply typing their name."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `emotify`:  embed.fields = [{name: "Emotify", value: "Changes the input into emojis"}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `mute`:  embed.fields = [{name: "Mute", value: "**ADMIN'S ONLY**\nMutes the user mentioned for a specific amount of time. You can use seconds, minutes, hours, or days. However, the limit is 24.855 days due to the 32 bit integer limit. Not my fault. Ex: jssMUTE @Jawesome Street Shark 10 days."}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `unmute`:  embed.fields = [{name: "Unmute", value: "**ADMIN'S ONLY**\nUnmutes the user mentioned"}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
        case `math`:  embed.fields = [{name: "Math", value: "Calculates the basic mathematical functions and can do derivatives"}, {name: "**Aliases**", value: "none"}];
            embed.title = ""; break;
            }

    message.channel.send({embed: embed});
    message.delete();
    }

module.exports.help = {
    name: "help",
    aliases: ["h"]
}
