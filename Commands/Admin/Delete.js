const ownerID = require("../../botconfig.json").ownerID;

module.exports.run = async (bot, message, args) => {
	var can_send = true;
    	
	if(!message.member.hasPermission('MANAGE_MESSAGES')){
		can_send = false;
	}
	if (message.author.id == ownerID){
		can_send = true;
	}
	if (can_send == false){
		return message.reply("Insufficient privileges!");
	}
    if(parseInt(args[0]) > 100) return message.reply("TOO MANY MESSAGES STUPID!");
    message.channel.bulkDelete(parseInt(args[0]) + 1).then(() =>{
    message.channel.send(`Deleted ${args[0]} messages!`).then(message => message.delete({timeout: 4000}));
    }).catch((err) => {
        return message.reply("An error occured");
    })
}

module.exports.help = {
    name: "delete",
    aliases: ["d"],
    desc: "This command will delete a certain amount of messages. To use the command type the prefix + delete then type the # of messages you want deleted. Note: only users with the manage messages permisson are allowed to use this command. Furthermore, the maximum number of messages that are able to be deleted at one time is 99."
}