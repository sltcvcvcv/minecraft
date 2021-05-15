const Discord = require("v11-discord.js")
const fs = require("fs")
module.exports = {
	name: "setcolor",
	usage: "<prefix>setcolor <couleur>",
	description: "defini ta couleur de ton embed",
	permissions: [],
	async execute(client, msg, args, se, config){
	    if(!args[0]) return msg.edit("***une couleur est requise !***")
	    
	    config.embed.color = args[0]
	    
	    fs.writeFile("./s3lfbot/config.json", JSON.stringify(config, null), (err) => {
	        if(err) logs("g", "error: " + err)
	        msg.edit("***couleur configurée avec succès:*** " + args[0])
	    })
	}
}