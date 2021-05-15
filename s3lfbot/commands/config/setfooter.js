const Discord = require("v11-discord.js")
const fs = require("fs")
module.exports = {
	name: "setfooter",
	usage: "<prefix>setfooter <texte/reset>",
	description: "defini ton texte de footer de ton embed",
	permissions: [],
	async execute(client, msg, args, se, config){
	    if(!args[0]) return msg.edit("***un texte est requis !***")
	    
	    if(args[0] === "reset")
	        config.embed.footer = null
	   else
	    config.embed.footer = args.join(" ")
	    
	    fs.writeFile("./s3lfbot/config.json", JSON.stringify(config, null), (err) => {
	        if(err) logs("g", "error: " + err)
	        if(args[0] === "reset")
	            msg.edit("***footer reset avec succès***")
	        else
	            msg.edit("***footer configuré avec succès:*** " + args.join(" "))
	    })
	}
}