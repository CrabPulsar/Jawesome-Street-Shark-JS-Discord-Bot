const random = require("../../Helper Functions/Random Color");
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
              value: "• Assad\n• Cyberpunk {2077}\n• Dumb\n• Gif\n• Jawesome\n• Justin\n• NSFW\n• Politics\n• Rules\n• SecretSide {ss}\n• Today\n• Turkey\n• Vince\n• Zeb",
              inline: true},
              {name: "**Interactive:**",
              value: "• Avatar\n• Color\n• Emotify\n• Gelbooru {g}\n• Gray\n• Hello\n• Help\n• Images {i}\n• Spam\n• Userinfo {ui}",
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
      Comembed.color = `${random.randomColor()}`;
      message.channel.send({embed: Comembed});
      message.delete();
    }

module.exports.help = {
    name: "commands",
    aliases: ["c"],
    desc: "This command will send a list of all current commands available."
}
