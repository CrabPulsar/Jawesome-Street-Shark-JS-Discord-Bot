module.exports.run = async (bot, message, args) => {
    
    let zeb = [
        "https://cdn.discordapp.com/attachments/570026973544316928/736822986165846036/Worshiping_Zeb_Atlas.mp4", // Matt
        "https://cdn.discordapp.com/attachments/570026973544316928/736486101505802290/Worshiping_Zeb_Atlas.mp4",
        "https://cdn.discordapp.com/attachments/743290160908861490/744288959886262452/video0.mp4",
        "https://media.discordapp.net/attachments/743183223336468565/744353947476819978/ZAB.ASSFUCK2.gif",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284710430539818/zeb2.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284711466795008/zeb1.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284713354887168/zeb3.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284714985684992/zeb4.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284716563005450/zeb5.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284717586808842/zeb6.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284719419981894/zeb7.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284721252761660/zeb8.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284722623381504/zeb9.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284724187856916/zeb10.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284752432562186/zeb12.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284760603721758/zeb11.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284766123556885/zeb13.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284769046724648/zeb14.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284772330078278/zeb15.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284775078264832/zeb16.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284777426157588/zeb17.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284780219695124/zeb18.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284781759397918/zeb19.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284784254615552/zeb20.jpg",
        "https://cdn.discordapp.com/attachments/570026973544316928/765284896176078858/zeb_montage.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/766071310781906954/HAPPY_BIRTHDAY_ZEB.mp4",
        "https://cdn.discordapp.com/attachments/570026973544316928/767491149099171850/ZEB_ATLAS_FOLSOM_PRISON_BLUES_PT.2.mp4",
        "https://cdn.discordapp.com/attachments/743185003210604605/777250905506447370/zeb-atlas-jake-cruise.png",
        "https://cdn.discordapp.com/attachments/743183223336468565/783056259305308160/16f1621fd0441ca2e80e13fde771095d9d6c6770.png",
        "https://pbs.twimg.com/media/ChnV2-tWsAAbqmJ.jpg",
        "https://cdn.discordapp.com/attachments/743183223336468565/808436386122039316/crazy_david.png",
        "https://media.discordapp.net/attachments/743183223336468565/808410416438312980/2047f65711054d15ff888b1e16ebf5cd.gif",
        "https://cdn.discordapp.com/attachments/449029431231643668/692418009733529670/CHRISTMAS_ZEB.jpg",
        "https://media.discordapp.net/attachments/743183223336468565/752688234261381197/sfwzeb.gif",
        "https://cdn.discordapp.com/attachments/743183223336468565/840831527742210058/captionasdgqaggg.png"
    ]
        number = zeb.length;
        var random = Math.floor(Math.random() * (number - 1 + 1));
        message.channel.send(zeb[random])
        message.delete();
    }

module.exports.help = {
    name: "zeb",
    aliases: [],
    desc: "This command will send random memes of Zeb Atlas."
}
