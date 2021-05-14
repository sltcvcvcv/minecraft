const Discord = require("v11-discord.js")
const fetch = require("node-fetch")
const util = require("util")

module.exports = {
	name: "eval",
	permissions: [],
	usage: "<prefix>eval <code>",
	description: "exécute du code en js via une fonction eval()",
	async execute(client, msg, args, se, config){
		const message = msg
		function clean(text) {
  		if (typeof(text) === "string")
    		return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  		else
      		return text;
		}
		const argu = message.content.substring(4 + config.prefix.length)
		
		if(!argu.length > 0) return msg.edit("***un argument est requis pour cette commande !***").catch(e => {})
		
		try {
	      const code = argu;
	      let evaled = eval(code);
	 
	      if (typeof evaled !== "string")
	        evaled = util.inspect(evaled);
	 	
	 		
			message.edit(clean(evaled), {code:"xl"}).catch(async e => {
	      	message.edit(`\`valeur de retour impossible a envoyer:\` \`\`\`xl\n${e}\n\`\`\``).catch(e => {})
	 		
			})
	    } catch (err) {
	    	
			message.edit(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``).catch(async e => {
	      	message.edit(`\`erreur impossible a envoyer:\` \`\`\`xl\n${e}\n\`\`\``).catch(e => {})
	      
			})
	    }
	}
}
