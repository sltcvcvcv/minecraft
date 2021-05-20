const socket = io("http://localhost:3000");

    socket.on("newmessage", (data) => {
        document.getElementById("newmessages").innerHTML = `<p id="newmessages">Il y a <strong>${data}</strong> nouveau messages postés entre temps, rafraichissez la page pour les voir !</p>`
    });