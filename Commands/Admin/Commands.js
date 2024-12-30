const random = require("../../Helper Functions/Random Color");
module.exports.run = async (bot, message, args) =>{
const Comembed = {
            title: "Commands",
            fields: [
              {name: "**Admin:**",
              value: "• Botinfo {bot}\n• Commands {c}\n• Delete {d}\n• Mute\n• Ping\n• Roles\n• ServerInfo {si}\n• Unmute\n• Uptime",
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
              inline: true},

              {name: "**Music:**",
              value: "• Clip\n• Clips\n• Invite\n• Loop {l}\n• Lyrics {ly}\n• Move {mv}\n• Np\n• Pause\n• Play {p}\n• Playlist {pl}\n• Pruning\n• Queue {q}\n• Remove {rm}\n• Resume {r}\n• Search\n• Shuffle\n• Skip {s}\n• Skipto {st}\n• Stop\n• Volume {v}",
              inline: true
              },

              {name: "**SFW Anime Commands:**",
              value: "• Hug\n• Kiss\n• Neko\n• Nekogif\n• Rananime {r}\n• Slap\n• Tickle\n• Toradora {vsalt}\n• Waifu {w}",
              inline: true},
              
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