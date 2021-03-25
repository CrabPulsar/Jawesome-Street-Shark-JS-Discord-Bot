const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const botconfig = require("./botconfig.json");
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

// read Commands folder
const fileDescription = new Map()
const filePath = fs.readdirSync("./commands")
l = filePath.length;
i = 0;
function readFiles(set){
    fs.readdir(`./commands/${set}`, (err, files) => {
        if (err) console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if (jsfile.length <= 0) {
            console.log("Couldnt find any commands!");
            return;
        }
        jsfile.forEach((f) => {
            let props = require(`./commands/${set}/${f}`);
            console.log(`${f} loaded!`);
            fileDescription.set(f.slice(0, -3).toLowerCase(), `${props.help.desc}`)
            if (props.help && props.help.name) {
                bot.commands.set(props.help.name, props);
                props.help.aliases.forEach(aliases => {
                    bot.aliases.set(aliases, props.help.name);
                })
            } else {
                console.error(`file ${f} does not have .help or .help.name property!`);
            }
        });
    });
}
while (i < l){
    readFiles(filePath[0])
    filePath.shift();
    i++;
}
module.exports.fileDescription = fileDescription

// bot online message and activity message
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);
    bot.user.setActivity(`with my bros`);
    const oEmbed = {
        title: "**Jawesome Street Shark Is Now Online**",
        timestamp: new Date(),
        color: "#00a2ff",
        }
    // Remove the comment below if you want to send a message whenver the bot goes online.
    //bot.channels.cache.find(channel => channel.name === 'general').send({embed: oEmbed}).then(message => message.delete({timeout: 10000}));
})

bot.on("message", async message => {

    // check channel type
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;

    // set prefix
    var lower = message.content.toLowerCase();
    if (lower.startsWith(`${botconfig.prefix}`)){
        var prefix = botconfig.prefix
    }else return

    module.exports.currentPrefix = prefix

    // check prefix, define args & command
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd;
    cmd = args.shift().toLowerCase();
    let command;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);

    // run commands
    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    }
    try {
        command.run(bot, message, args);
    } catch (e) {
        return;
    }
})
bot.login(botconfig.token);