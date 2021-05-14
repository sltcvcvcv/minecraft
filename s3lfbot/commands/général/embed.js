const Discord = require("v11-discord.js")

module.exports = {
	name: "embed",
	usage: "<prefix>embed (text)",
	description: "crée un joli embed !",
	permissions: ["EMBED_LINKS"],
	async execute(client, msg, args, se){
		const embed = se()
		.setDescription(args.join(" ") || "voilà un joli exemple d'embed")
		
		msg.edit(embed)
	}
}
