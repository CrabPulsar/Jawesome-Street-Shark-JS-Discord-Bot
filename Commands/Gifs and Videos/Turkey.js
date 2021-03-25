module.exports.run = async (bot, message, args) => {
    
    let turkey = [
        "https://tenor.com/view/turkey-man-facepaint-talking-car-kaan-ozdil-gif-17518689",
        "https://tenor.com/view/turkey-man-angry-turkish-man-funny-kung-fu-smash-gif-17733744",
        "https://media.discordapp.net/attachments/719372088938463336/725610003133759518/turkey_compressed.gif",
        "https://tenor.com/view/turkey-man-watermelon-bare-hands-smashing-fruits-gif-17356089",
        "https://media.discordapp.net/attachments/719372088938463336/722872843754536990/turkey-phone.gif",
        "https://media.discordapp.net/attachments/369847818455744522/721264258062614599/image0-15.gif",
        "https://tenor.com/view/pov-tik-tok-me-entering-your-moms-room-turkish-turkey-gif-16788956",
        "https://media.discordapp.net/attachments/570026973544316928/721197509514625084/turkey-man-building-drop-fall.gif",
        "https://tenor.com/view/turkey-tiktok-kaan-ozdil-smash-gif-17416135",
        "https://tenor.com/view/turkey-man-sleep-kaan-ozdil-turkey-flag-gif-17358943",
        "https://tenor.com/view/turkish-man-big-pizza-scream-angry-gif-16886138",
        "https://tenor.com/view/turkey-shirt-man-out-of-the-car-gif-17186523",
        "https://tenor.com/view/ray-william-johnson-turkish-turkey-angry-man-gif-17112765",
        "https://tenor.com/view/turkey-turkish-man-midget-midget-spin-wholesome-gif-17133614",
        "https://tenor.com/view/turkey-turkish-man-spin-midget-push-gif-17089704",
        "https://media.discordapp.net/attachments/570026973544316928/705231053438058590/TURKEY_POOL.gif",
        "https://media.discordapp.net/attachments/570026973544316928/705204413735895200/TURKISH_ARM_WRESTLE.gif",
        "https://media.discordapp.net/attachments/570026973544316928/705200184602263662/TURKY_MAN_WALK_FAST.gif",
        "https://media.discordapp.net/attachments/570026973544316928/705227709059432458/TURKY_CAR.gif",
        "https://media.discordapp.net/attachments/675766819688153116/704407234251063326/image0.gif",
        "https://media.discordapp.net/attachments/675766819688153116/704410891776688149/image0.gif",
        "https://media.discordapp.net/attachments/675766819688153116/704410865973067876/image0.gif",
        "https://media.discordapp.net/attachments/448963493715116035/695396006187237436/tukey_man.gif"
    ]
        number = turkey.length;
        var random = Math.floor(Math.random() * (number - 1 + 1));
        message.channel.send(turkey[random])
        message.delete();
    }

module.exports.help = {
    name: "turkey",
    aliases: [],
    desc: "This command will send random gifs of Kaanozdil."
}