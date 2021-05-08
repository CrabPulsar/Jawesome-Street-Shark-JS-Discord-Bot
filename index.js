const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const botconfig = require("./botconfig.json");
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

// read Commands folder
const namedFileDescription = new Map()
const aliasFileDescription = new Map()
const filePath = fs.readdirSync("./commands")
function readFiles(set){
    fs.readdir(`./commands/${set}`, (err, files) => {
        if (err) console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if (jsfile.length <= 0) {
            console.log("Couldn't find any commands!");
            return;
        }
        jsfile.forEach((f) => {
            let props = require(`./commands/${set}/${f}`);
            console.log(`${f} loaded!`);
            namedFileDescription.set(f.slice(0, -3).toLowerCase(), `${props.help.desc}`)
            if (props.help.aliases){
                aliasFileDescription.set(`${props.help.aliases}`, `${props.help.desc}`)
            }
            if (props.help && props.help.name) {
                bot.commands.set(props.help.name, props);
                props.help.aliases.forEach(aliases => {
                    bot.aliases.set(aliases, props.help.name);
                })
            } else {
                console.error(`File ${f} does not have .help or .help.name property!`);
            }
        });
    });
}
while (filePath.length > 0){
    readFiles(filePath[0])
    filePath.shift();
}
module.exports.namedFileDescription = namedFileDescription
module.exports.aliasFileDescription = aliasFileDescription

// bot online message and activity message
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);
    // bot.user.setActivity(`with ${bot.guilds.cache.size} servers!`);
    bot.user.setActivity(`with my bros`);
    const oEmbed = {
        title: "**Jawesome Street Shark Is Now Online**",
        timestamp: new Date(),
        color: "#00a2ff",
        footer: {
            text: `CrabPulsar`,
            icon_url: "https://cdn.discordapp.com/avatars/400516451691266059/a_9dbbb94243116b708ec2bd2fe307814b.gif?size=2048"
          }
        }
        
    // If you uncomment the next line, the bot will send a welcome mesaage when it turns on.
    //bot.channels.cache.find(channel => channel.name === 'general').send({embed: oEmbed}).then(message => message.delete({timeout: 10000}));
})

bot.on("message", async message => {

    // check channel type
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;

    // Special Word commands
    number = 99999;
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        switch(random) {case 69: message.channel.send('LET ME TEST MY NEW NERVE GAS'); break;}
        
    if (message.content.toLowerCase().split(/[\s,\?\,\.\'!]+/).some(f => f === 'sissy')){
        message.channel.send("https://cdn.discordapp.com/attachments/658516463619145749/719084583965949972/KNOCKKNOCK.gif").then(message => message.delete({timeout: 6900}))
    }
    if (message.content.toLowerCase().split(/[\s,\?\,\.\'!]+/).some(f => f === 'spewin')){
        message.channel.send("https://media.discordapp.net/attachments/570026973544316928/759833150389485608/SPEWIN.gif").then(message => message.delete({timeout: 6900}))
    }

    // set prefix
    var lower = message.content.toLowerCase();
    if (lower.startsWith(`${botconfig.prefix}`)){
        var prefix = botconfig.prefix} else 
    if (lower.startsWith('<@!712167081046704138>')){
        var prefix = '<@!712167081046704138>'} else
    if (lower.startsWith('<@712167081046704138>')){
        var prefix = '<@712167081046704138>'} else return;

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
