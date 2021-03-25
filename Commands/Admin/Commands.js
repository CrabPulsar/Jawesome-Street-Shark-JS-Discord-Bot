const colors = require("../../colors.json");

module.exports.run = async (bot, message, args) =>{
const Comembed = {
            title: "Commands",
            fields: [
              {name: "**SFW Anime Commands:**",
              value: "• Hug\n• Kiss\n• Neko\n• Nekogif\n• Rananime {r}\n• Slap\n• Tickle\n• Waifu {w}",
              inline: true},
              {name: "**NSFW Anime Commands:**",
              value: "• Anal\n• Feet\n• Feetgif\n• Rananimensfw {rn}\n• Spank",
              inline: true},
              {name: "**Management:**",
              value: "• Commands {c}\n• Delete (#<100) {d}\n• Mute\n• Ping\n• Roles\n• Unmute\n• Uptime",
              inline: true},
              {name: "**Animals:**",
              value: "• Cat\n• Dog\n• Goose",
              inline: true},
              {name: "**Gifs and Videos:**",
              value: "• Assad\n• Cyberpunk {2077)\n• Dumb\n• Gif\n• Jawesome\n• Justin\n• NoNSFW\n• Politics\n• Rules\n• SecretSide {ss}\n• Today\n• Turkey\n• Vince\n• Zeb",
              inline: true},
              {name: "**Interactive:**",
              value: "• Avatar\n• Color\n• Emotify\n• Gray\n• Hello\n• Help\n• Images {i}\n• Spam\n• Userinfo {ui}",
              inline: true},
              {name: "**Math:**",
              value: "• Factorial {fac}\n• Math {m}",
              inline: true}
            ],
            timestamp: new Date(),
            footer: {
              text: `Requested by ${message.author.username}`,
              icon_url: message.author.avatarURL({dynamic: true})
            }
          };
      number = 14
      var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
      switch(random){
        case 1: Comembed.color = `${colors["black"]}`; break;
        case 2: Comembed.color = `${colors["white"]}`; break;
        case 3: Comembed.color = `${colors["gray"]}`; break;
        case 4: Comembed.color = `${colors["brown"]}`; break;
        case 5: Comembed.color = `${colors["gold"]}`; break;
        case 6: Comembed.color = `${colors["green"]}`; break;
        case 7: Comembed.color = `${colors["red"]}`; break;
        case 8: Comembed.color = `${colors["blue"]}`; break;
        case 9: Comembed.color = `${colors["purple"]}`; break;
        case 10: Comembed.color = `${colors["yellow"]}`; break;
        case 11: Comembed.color = `${colors["orange"]}`; break;
        case 12: Comembed.color = `${colors["hotpink"]}`; break;
        case 13: Comembed.color = `${colors["cream"]}`; break;
        case 14: Comembed.color = `${colors["kewl green"]}`; break;
      }
      message.channel.send({embed: Comembed});
      message.delete();
    }

module.exports.help = {
    name: "commands",
    aliases: ["c"],
    desc: "This command will send a list of all current commands available."
}