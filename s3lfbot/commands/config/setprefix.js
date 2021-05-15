const Discord = require("v11-discord.js")
const fs = require("fs")
module.exports = {
	name: "setprefix",
	usage: "<prefix>setprefix <text>",
	description: "defini ton prefix",
	permissions: [],
	async execute(client, msg, args, se, config){
	    if(!args[0]) return msg.edit("***un prefix est requis !***")
	    
	    config.prefix = args[0]
	    
	    fs.writeFile("./s3lfbot/config.json", JSON.stringify(config, null), (err) => {
	        if(err) logs("g", "error: " + err)
	        msg.edit("***prefix configuré avec succès:*** " + args[0])
	    })
	}
}
