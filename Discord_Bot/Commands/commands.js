const colors = require("../colors.json");

module.exports.run = async (bot, message, args) =>{
const Comembed = {
            title: "Commands",
            fields: [
              {name: "**SFW Anime Commands:**",
              value: "- Hug\n- Kiss\n- Neko\n- Nekogif\n- Rananime {r}\n- Slap\n- Tickle\n- Waifu {w}"},
              {name: "**NSFW Anime Commands:**",
              value: "- Anal\n- Feet\n- Feetgif\n- Rananimensfw {rn}\n- Spank"},
              {name: "**Management:**",
              value: "- Commands {c}\n- Delete (#<100) {d}\n- Mute\n- Roles\n- Unmute\n- Ping"},
              {name: "**Fun:**",
              value: "- Cat\n- Dog\n- Emotify\n- Goose\n- Gif\n- Hello\n- Images {i}\n- Jawesome\n- NSFW\n- Spam\n- Userinfo {ui}\n- Zeb"},
              {name: "**Math:**",
              value: "- Factorial {fac}"}
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
    aliases: ["c"]
}
  