const ownerID = require("../../botconfig.json").ownerID;
const child = require("child_process");

module.exports.run = async (bot, message, args) => {
	if(message.author.id != ownerID){
		return
	}
	var command = args.join(" ");
	try{
		child.exec(command, (err, res) => {
			if(err) return console.log(err);
			message.channel.send(res.slice(0, 1999));
		})	
	}
	catch(err){
		message.reply(err);
	}
}
module.exports.help = {
    name: "terminal",
    aliases: ["t"],
    desc: ""
}