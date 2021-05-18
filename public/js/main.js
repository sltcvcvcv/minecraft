const socket = io("http://localhost:3000");

function loggeraction() {
  if (document.getElementById("loggercheckbox").checked) {
    socket.emit("logger", "checked");
  } else {
    socket.emit("logger", "unchecked");
  }
}



function restart() {
  socket.emit("restart", "true");
}

function embedcoloraction() {
  const v = document.getElementById("embedcolor").value;
  socket.emit("embedcolor", v);
}
function embedtitleaction() {
  const v = document.getElementById("embedtitle").value;
  socket.emit("embedtitle", v);
}
function embedimageaction() {
  const v = document.getElementById("embedimage").value;
  socket.emit("embedimage", v);
}
function embedfooteraction() {
  const v = document.getElementById("embedfooter").value;
  socket.emit("embedfooter", v);
}

document.getElementById("afkreasont").addEventListener("change", (event) => {
  socket.emit("afkreason", event.target.value);
});

function mentionaction() {
  if (document.getElementById("nomention").checked) {
    socket.emit("mention", "checked");
  } else {
    socket.emit("mention", "unchecked");
  }
}

document.getElementById("prefixtext").addEventListener("change", (event) => {
  socket.emit("prefix", event.target.value);
});
document.getElementById("twitchtext").addEventListener("change", (event) => {
  socket.emit("twitch", event.target.value);
});


function claimeraction() {
  if (document.getElementById("claimer").checked) {
    socket.emit("claimer", "checked");
  } else {
    socket.emit("claimer", "unchecked");
  }
}



function autotextaction() {
  socket.emit("autotext", document.getElementById("autotexttext").value);
}

