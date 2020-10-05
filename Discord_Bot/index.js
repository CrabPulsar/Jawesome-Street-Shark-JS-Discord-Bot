const Discord = require('discord.js');
const bot = new Discord.Client({ disableEveryone: true });
const botconfig = require("./botconfig.json");
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

// read Admin Commands folder
fs.readdir("./Admin Commands", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commads!");
        return;
    }
    jsfile.forEach((f) => {
        let props = require(`./Admin Commands/${f}`);
        console.log(`${f} loaded!`);
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(aliases => {
                bot.aliases.set(aliases, props.help.name);
            })
        } else {
            console.error(`file ${f} does not have .help or .help.name property!`);
        }
    });
})

// read commands folder
fs.readdir("./Commands/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commads!");
        return;
    }
    jsfile.forEach((f) => {
        let props = require(`./Commands/${f}`);
        console.log(`${f} loaded!`);
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(aliases => {
                bot.aliases.set(aliases, props.help.name);
            })
        } else {
            console.error(`file ${f} does not have .help or .help.name property!`);
        }
    });
})

// read Animals folder
fs.readdir("./Animals/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commands!");
        return;
    }
    jsfile.forEach((f) => {
        let props = require(`./Animals/${f}`);
        console.log(`${f} loaded!`);
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(aliases => {
                bot.aliases.set(aliases, props.help.name);
            })
        } else {
            console.error(`file ${f} does not have .help or .help.name property!`);
        }
    });
})

// read Anime folder
fs.readdir("./Anime/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find any commands!");
        return;
    }
    jsfile.forEach((f) => {
        let props = require(`./Anime/${f}`);
        console.log(`${f} loaded!`);
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(aliases => {
                bot.aliases.set(aliases, props.help.name);
            })
        } else {
            console.error(`file ${f} does not have .help or .help.name property!`);
        }
    });
})

// read Fun folder
fs.readdir("./Fun/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commands!");
        return;
    }
    jsfile.forEach((f) => {
        let props = require(`./Fun/${f}`);
        console.log(`${f} loaded!`);
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(aliases => {
                bot.aliases.set(aliases, props.help.name);
            })
        } else {
            console.error(`file ${f} does not have .help or .help.name property!`);
        }
    });
})

// read Math folder
fs.readdir("./Math/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commands!");
        return;
    }
    jsfile.forEach((f) => {
        let props = require(`./Math/${f}`);
        console.log(`${f} loaded!`);
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(aliases => {
                bot.aliases.set(aliases, props.help.name);
            })
        } else {
            console.error(`file ${f} does not have .help or .help.name property!`);
        }
    });
})

// read Music folder
fs.readdir("./Music/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commands!");
        return;
    }
    jsfile.forEach((f) => {
        let props = require(`./Music/${f}`);
        console.log(`${f} loaded!`);
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(aliases => {
                bot.aliases.set(aliases, props.help.name);
            })
        } else {
            console.error(`file ${f} does not have .help or .help.name property!`);
        }
    });
})

// read Test folder
fs.readdir("./Test/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commands!");
        return;
    }
    jsfile.forEach((f) => {
        let props = require(`./Test/${f}`);
        console.log(`${f} loaded!`);
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(aliases => {
                bot.aliases.set(aliases, props.help.name);
            })
        } else {
            console.error(`file ${f} does not have .help or .help.name property!`);
        }
    });
})

// bot online message and activity message
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);
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
    bot.channels.cache.find(channel => channel.name === 'general').send({embed: oEmbed}).then(message => message.delete({timeout: 10000}));
})

bot.on("message", async message => {

    // check channel type
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;

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