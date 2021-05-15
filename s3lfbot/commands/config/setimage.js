const Discord = require("v11-discord.js")
const fs = require("fs")
module.exports = {
	name: "setimage",
	usage: "<prefix>setimage <couleur>",
	description: "defini ton image de ton embed",
	permissions: [],
	async execute(client, msg, args, se, config){
	    if(!args[0]) return msg.edit("***un lien d'image est requis !***")
	    
	    if(args[0] === "reset")
	     config.embed.image = null
	    else
	      config.embed.image = args[0]
	    
	    fs.writeFile("./s3lfbot/config.json", JSON.stringify(config, null), (err) => {
	        if(err) logs("g", "error: " + err)
	        if(args[0] === "reset")
	            msg.edit("***image reset avec succes***")
	        else
	            msg.edit("***image configurée avec succès:*** " + args[0])
	    })
	}
}