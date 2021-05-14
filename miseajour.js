// ici seront les futurs mise a jours...
premier.version = "^1.0.1"
fs.writeFile("./s3lfbot/login.json", JSON.stringify(premier, null), (err) => {
	if(err) logs("r", "error: " + err)
	logs("g", "mise a jour terminée, relancez le selfbot en tapant node index")
  process.exit()
})
