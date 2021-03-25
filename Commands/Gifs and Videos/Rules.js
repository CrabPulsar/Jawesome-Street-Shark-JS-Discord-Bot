module.exports.run = async (bot, message, args) => {
    
    let rules = [
        "https://media.discordapp.net/attachments/570026973544316928/756977275135590420/read_rules.gif",
        "https://media.discordapp.net/attachments/752274680936792244/753615992357388418/image0.gif",
        "https://media.discordapp.net/attachments/570026973544316928/762412068187537418/CUM_QUOTS.gif",
        "https://media.discordapp.net/attachments/675827487703433217/762412155668135976/DONT_PING_STAFF_FOR_NO_REASON.gif",
        "https://media.discordapp.net/attachments/570026973544316928/762409094036324422/Politics.gif",
        "https://media.discordapp.net/attachments/675827487703433217/762412187057782814/Everyone.gif",
        "https://media.discordapp.net/attachments/322193555152175114/762408328771928094/ADMIN.gif",
        "https://media.discordapp.net/attachments/725218561966211122/763524789113323530/offensive.gif",
        "https://media.discordapp.net/attachments/725218561966211122/763525021489561600/rule_5.gif",
        "https://media.discordapp.net/attachments/459845122067005440/721059428329193502/image0.gif",
        "https://media.discordapp.net/attachments/531606124252626945/734505857106182174/image0.gif",
        "https://cdn.discordapp.com/attachments/459845122067005440/713195126066905200/be_nice.gif",
        "https://media.discordapp.net/attachments/459845122067005440/721564955211464807/rule_dont_harass.gif",
        "https://media.discordapp.net/attachments/689901400238456996/731266273064779906/caption-2.gif",
        "https://media1.tenor.com/images/149456a128ca983806d8af56bdc69505/tenor.gif?itemid=18094162",
        "https://media.discordapp.net/attachments/571955236697014283/757310794265264169/caption-9.gif",
        "https://tenor.com/view/discord-rules-gif-18596987",
        "https://media.discordapp.net/attachments/448963493715116035/732746500999872659/image0-33-1.gif",
        "https://media.discordapp.net/attachments/756610473566273688/756615574443917422/sex.gif",
        "https://tenor.com/view/rule6-discord-rules-rules-rule-six-gif-19069895",
        "https://tenor.com/view/discord-rules-frog-fish-gif-18961280",
        "https://tenor.com/view/discord-rules-rules-lol-gif-18971949",
        "https://tenor.com/view/discord-rules-gif-18521306",
        "https://tenor.com/view/discord-rules-nightexdotexe-discord-rules-channels-gif-18131284",
        "https://tenor.com/view/please-spam-emotes-discord-rules-gif-18136078",
        "https://tenor.com/view/gayrules-gif-18658539",
        "https://tenor.com/view/discord-rules-frog-fish-gif-18961280",
        "https://cdn.discordapp.com/attachments/570026973544316928/784899061982822430/nsfwgif4.gif",
        "https://tenor.com/view/dont-be-toxic-grope-muscle-flex-gif-17645335",
        "https://tenor.com/view/davy-enardo-discord-gif-19344073",
        "https://tenor.com/view/sexy-anime-discord-mod-discord-rules-nsfw-no-nsfw-gif-19626361",
        "https://tenor.com/view/discord-rules-rules-gif-18972022",
        "https://tenor.com/view/discord-dicord-rules-funny-lol-buff-gif-18971981",
        "https://tenor.com/view/rules-discord-gif-18060874",
        "https://tenor.com/view/do-not-question-or-argue-with-mods-discord-moderators-staff-admin-gif-19377282"
    ]
    number = rules.length;
        var random = Math.floor(Math.random() * (number - 1 + 1));
        message.channel.send(rules[random])
        message.delete();
    }

module.exports.help = {
    name: "rules",
    aliases: [],
    desc: "Sends gifs with funny rules on them. These rules are jokes and not to be taken seriously."
}