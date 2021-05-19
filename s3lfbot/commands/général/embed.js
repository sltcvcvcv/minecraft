const Discord = require("v11-discord.js")

module.exports = {
	name: "embed",
	usage: "<prefix>embed (text)",
	description: "crée un joli embed !",
	permissions: ["EMBED_LINKS"],
	async execute(client, msg, args, se, config, logs) { msg.edit(se().setDescription(args.join(" ") || "voilà un joli exemple d'embed")).catch(e => logs("y", "error: " + e)) }
}
