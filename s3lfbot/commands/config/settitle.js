const Discord = require("v11-discord.js")
const fs = require("fs")
module.exports = {
	name: "settitle",
	usage: "<prefix>settitle <texte/reset>",
	description: "defini ton titre de ton embed",
	permissions: [],
	async execute(client, msg, args, se, config){
	    if(!args[0]) return msg.edit("***un texte est requis !***")
	    
	    if(args[0] === "reset")
	        config.embed.title = null
	   else
	    config.embed.title = args.join(" ")
	    
	    fs.writeFile("./s3lfbot/config.json", JSON.stringify(config, null), (err) => {
	        if(err) logs("g", "error: " + err)
	        if(args[0] === "reset")
	            msg.edit("***titre reset avec succès***")
	        else
	            msg.edit("***titre configuré avec succès:*** " + args.join(" "))
	    })
	}
}