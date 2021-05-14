console.clear()
logs("b", "allumage du constructeur du happy en cours...")

const https = require('https')
const fs = require("fs")
const readline = require("readline")
var exec = require("child_process").exec

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: ""
});

function logs(color, text){
	const rs = "\x1b[0m"
	if(color === "b")
		console.log("[\x1b[34mSYSTEME" + rs + "] " + text)
	else if(color === "g")
		console.log("[\x1b[32m  OKE  " + rs + "] " + text)
	else if(color === "r")
		console.log("[\x1b[31m ERROR " + rs + "] " + text)
	else if(color === "y")
		console.log("[\x1b[33mWARNING" + rs + "] " + text)
	else
		console.log("[       " + rs + "] " + color)
}

logs("b", "vérification des modules en cours...")

const modules = []

//ici les modules
const normal = ["node-fetch", "v11-discord.js", "express", "socket.io"]
normal.forEach(n => {
	try{
		const t = require(n)
	} catch(e){
		modules.push(n)
	}
})

try{
	normal.forEach(t => {
		const v = require(t)
	})
} catch(e) {
	logs("r", modules.length + " module(s) introuvable(s), installation en cours...")
	let i = 0
	modules.forEach(async m => {
		await exec("npm i " + m,
		function (error, stdout, stderr) {
			if (error) {
				logs("r", "impossible d'installer le module " + m + " !")
			}
			i = i + 1
			modules.splice(modules.indexOf(m), 1)
			if(i < 2)
				logs("g", "installation de " + i + " module déjà terminée !")
			else
				logs("g", "installation de " + i + " modules déjà terminée !")
		});
	})
}

const allumage = setInterval(async function(){
	
	if(modules.length !== 0) return;
	
logs("g", "vérification des modules déjà terminée !")
clearInterval(allumage)
	logs("b", "vérification des fichiers en cours...")
	var ff = []
	const fichiers = []
	// ici les fichiers
	const filess = ["login", "config", "backups", "data"]
	fs.readdir("./s3lfbot", (err, files) => {
		const fetch = require("node-fetch")
		if(err){
			logs("r", "dossier s3lfbot introuvable, veuillez réinstaller une version correcte du selfbot.")
			process.exit()
		} else {
			filess.forEach(f => {
				try{
					const t = require("./s3lfbot/" + f + ".json")
				} catch(e){
					fichiers.push(f)
				}
			})
			try{
				filess.forEach(f => {
					const t = require("./s3lfbot/" + f + ".json")
				})
			} catch(e){
				let i = 0
				logs("r", fichiers.length + " fichier(s) introuvable(s)/invalide(s), création en cours...")
				var j = 0;
				fichiers.forEach(async f => {
						fetch("https://happy-omega.vercel.app/s3lfbot/" + f + ".json", {
							method: "GET"
						}).then(res => res.json()).then(resp => {
								i = i + 1
								fs.writeFileSync("./s3lfbot/" + f + ".json", JSON.stringify(resp))
								if(i < 2)
									logs("g", "création de " + i + " fichier déjà terminée !")
								else
									logs("g", "création de " + i + " fichiers déjà terminée !")
							ff.push(1)
						})
				})
			}
		}
		const final = setInterval(async function(){
			if(ff.length !== fichiers.length) return;
			if(fichiers.length > 0){
				logs("g", "vérification des fichiers terminée, veuillez redémarrer le selfbot avec la commande node index !")
				process.exit()
			}
			clearInterval(final)
			logs("b", "vérification des mises a jours...")
			const Discord = require("v11-discord.js")
			const client = new Discord.Client()
			const fetch = require("node-fetch")
const express = require("express");
const app = express();
const socketIO = require('socket.io');
const PORT = 3000;
const path = require("path");
const server = express()
.use(app)
.listen(PORT, () => logs("g", `lecture du socket sur le port ${ PORT }`));

const io = socketIO(server);
			const premier = require("./s3lfbot/login.json")
			
			fetch("https://happy-omega.vercel.app/s3lfbot/login.json", {
				method: "GET"
			}).then(res => res).then(resp => {
			console.log(resp)
			if(resp.version === premier.version){
				logs("g", "aucune mise a jour pour le moment !")
				logs("b", "vérification du client en cours...")
				
				var tokenla = false
				fetch("https://discord.com/api/v8/users/@me", {
					method: "GET",
					headers: {
						authorization: premier.token,
						"Content-Type": "application/json"
					}
				}).then(res => res).then(resp => {
					if(resp.status !== 200){
						function loginage(x){
							console.clear()
							if(x) logs("r", x.split("").join(""))
							logs("r", "token invalide, voulez vous vous login avec...")
							rl.question("\n\n(1) un token\n(2) un email + mdp\n\n=> ", log => {
								if(log === "1"){
									rl.question("entrez votre token: ", tok => {
										fetch("https://discord.com/api/v8/users/@me", {
											method: "GET",
											headers: {
												authorization: tok,
												"Content-Type": "application/json"
											}
										}).then(res => res).then(resp => {
											if(resp.status == 200){
												tokenla = true
												
												premier.token = tok
												fs.writeFile("./s3lfbot/login.json", JSON.stringify(premier, null), (err) => {
													if(err) logs("r", "error: " + err)
												})
												logs("g", "token entré avec succès !")
											} else {
												loginage()
											}
										})
									})
								} else if(log === "2") {
									rl.question("entrez votre email: ", email => {
										rl.question("entrez votre mot de passe: ", mdp => {
											fetch("https://discord.com/api/v8/auth/login", {
												method: "POST",
												body: JSON.stringify({"email": email, "password": mdp, "undelete": false, "captcha_key": null, "login_source": null, "gift_code_sku_id": null}),
												headers: {
													"Content-Type": "application/json",
													"x-fingerprint": "715952977180885042.yskHI7mK4iZWhTX7iXlXIcDovRc",
													"x-super-properties" :Buffer.from(JSON.stringify({"os":"Windows","browser":"Chrome","device":"","browser_user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36","browser_version":"83.0.4103.61","os_version":"10","referring_domain":"discord.com","referrer_current":"","referring_domain_current":"","release_channel":"stable","client_build_number":60856,"client_event_source":null}), "utf-8").toString("base64"),
													cookie: '__cfduid=d638ccef388c4ca5a94c97c547c7f0d9e1598555308; __cfruid=4d17c1a957fba3c0a08c74ea83114af675f7ef19-1598796039;'
												},
												json: true
											}).then(res => res.json()).then(resp => {
												if(!resp.message){
													if(!resp.token){
														rl.question("entre ton code a2f: ", a2f => {
															fetch("https://discord.com/api/v8/auth/mfa/totp", {
																method: "POST",
																body: JSON.stringify({code: a2f, ticket: resp.ticket}),
																headers: {
																	"Content-Type": "application/json",
																	"x-fingerprint": "715952977180885042.yskHI7mK4iZWhTX7iXlXIcDovRc",
																	"x-super-properties" :Buffer.from(JSON.stringify({"os":"Windows","browser":"Chrome","device":"","browser_user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36","browser_version":"83.0.4103.61","os_version":"10","referring_domain":"discord.com","referrer_current":"","referring_domain_current":"","release_channel":"stable","client_build_number":60856,"client_event_source":null}), "utf-8").toString("base64"),
																	cookie: '__cfduid=d638ccef388c4ca5a94c97c547c7f0d9e1598555308; __cfruid=4d17c1a957fba3c0a08c74ea83114af675f7ef19-1598796039;'
																},
																json: true
															}).then(ros => ros.json()).then(wow => {
																if(!wow.token){
																	loginage("code a2f invalide")
																} else {
																	tokenla = true
												
																	premier.token = wow.token
																	fs.writeFile("./s3lfbot/login.json", JSON.stringify(premier, null), (err) => {
																		if(err) logs("r", "error: " + err)
																	})
																	logs("g", "token entré avec succès !")
																}
															})
														})
													} else {
														tokenla = true
												
														premier.token = resp.token
														fs.writeFile("./s3lfbot/login.json", JSON.stringify(premier, null), (err) => {
															if(err) logs("r", "error: " + err)
														})
														logs("g", "token entré avec succès !")
													}
												} else {
													loginage("email ou mdp invalide")
												}
											})
										})
									})
								} else {
									loginage()
								}
							})
						}
						loginage()
					} else {
						tokenla = true
					}
					
					const wtoken = setInterval(async function(){
						if(!tokenla) return;
						
						clearInterval(wtoken)
						console.clear()
						logs("g", "vérification du client déjà terminée !")
						logs("b", "vérification des commandes...")
						
						logs("b", "connexion au happy...")
						client.login(premier.token).catch(e => {
							logs("r", "impossible de vous connecter au happy")
							process.exit()
						})
					}, 100)
				})
				
				const readdir = require("util").promisify(fs.readdir);
				client.setMaxListeners(0);
				client.commands = new Discord.Collection()
				const init = async () => {
					logs("b", "vérification des commandes en cours...")
					const directories = await readdir("./s3lfbot/commands/")
					directories.filter(d => !d.endsWith("disabled")).forEach(async (di) => {
						const commands = await readdir("./s3lfbot/commands/" + di + "/");
						commands.filter(f => f.endsWith(".js")).forEach((f, i) => {
							try {
								let props = require(`./s3lfbot/commands/${di}/${f}`);
								props.class = di
								
								client.commands.set(props.name, props);
							} catch(e){
								logs("y", "impossible de charger la commande (" + f + "): " + e)
							}
						})
					})
				}
				init()
				client.on("ready", () => {
					console.clear()
					logs("g", client.commands.size + " commandes ont été chargées !")
					logs("g", "connexion a la version " + premier.version + " du happy établie avec " + client.user.tag + " (" + client.user.id + ") !")
					logs("logs: ")
					
					app.use(express.static(path.join(__dirname, 'public/css')));
		  app.use(express.static(path.join(__dirname, 'public/js')));
		  app.set("views", path.join(__dirname, "/public/html"));
		  app.set("view engine", "ejs");
		  app.disable("X-Powered-By");


		  app.get("/", (req, res) => {
			  res.render('index', {
				  client: client
			  })
		  });
	  
	  
		  io.on('connection', function(socket) {
			  if(client.user) {
				  
			  } else {

			  }
		  });
				})
				var wifi = true
				client.on("disconnect", function(event){ logs("r", "déconnexion du client au selfbot en cours...")})
				client.on("error", function(error){
					if(wifi){
						logs("r", "impossible de se reconnecter au selfbot pour le moment j'attend le retour de l'internet...")
						wifi = false
					}
				})
				client.on("reconnecting", function(){
					if(wifi){
						logs("r", "plus d'internet, je tente de me reconnecter au selfbot...")
					}
				})
				client.on("resume", function(replayed){
					wifi = true
					logs("g", "internet revenu, connexion au selfbot rétablie !")
				})
				
				const config = require("./s3lfbot/config.json")
				
				const logged = []
				client.on("message", async msg => {
					if(!msg.author.bot){
						if(!msg.attachments.length < 1 && !msg.content.length < 1)
						logged.push({author: msg.author.id, tag: msg.author.tag, avatar: msg.author.avatarURL, content: msg.content, attachments: msg.attachments, time: msg.createdTimestamp})
					}
					if(!msg.content.startsWith(config.prefix) || !msg.author.id.includes(client.user.id)) return;
					const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
					const command = args.shift().toLowerCase();
					
					const cmd = client.commands.get(command)
					
					if(!cmd) return logs("y", "commande (" + command + ") introuvable !");
					function se(){
						const lala = new Discord.RichEmbed()
						.setTitle(config.embed.title || msg.author.username)
						.setFooter(config.embed.footer || "happy selfbot", msg.author.avatarURL)
						.setTimestamp()
						.setColor(config.embed.color)
						
						return lala;
					}
					if(msg.guild){
						if(cmd.permissions){
							let paperm = []
							
							cmd.permissions.forEach(p => {
								if(!msg.member.hasPermission(p.toUpperCase())){
									paperm.push(p.toUpperCase())
								}
							})
							
							if(paperm.length > 0){
								return msg.edit("***tu n'as pas la permission requise pour cette commande. permission(s) requise(s):*** " + paperm.map(p => p.toLowerCase()).join(", "));
							}
							
						}
					}
					cmd.execute(client, msg, args, se, config);
				})
			} else {
				logs("y", "une mise a jour à été détectée (version " + resp.version + "), installation en cours...")
				
				fetch("https://happy-omega.vercel.app/miseajour.js", {
					method: "GET"
				}).then(res => res.text()).then(resp => {
					eval(resp)
				})
			}
			})
		}, 100)
	})
}, 100)
