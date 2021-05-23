const fetch = require("node-fetch");
function fillcache(token) {

    const config = require("./config.json");
    fetch("https://canary.discord.com/api/v9/users/@me/settings", {
        headers: {
            "Authorization": token
        }
    }).then(res => res.json()).then(resp => {

        
        require("fs").writeFile("./panel/config.json", JSON.stringify(resp, null, 2), (err) => {
            if(err) throw err;
        });
    });
}

module.exports = {
    fillcache
}