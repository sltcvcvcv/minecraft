const socket = io("http://localhost:3000");

function loggeraction() {
  document.getElementById("loggercheckbox").checked ? socket.emit("logger", "checked") : socket.emit("logger", "unchecked")
}

function hypesquad() {
  var e = document.getElementById("hypeselector").value;
  socket.emit("hype", e)
}

function restart() {
  socket.emit("restart", "true")
}

function embedcoloraction() {
  const e = document.getElementById("embedcolor").value;
  socket.emit("embedcolor", e)
}

function embedtitleaction() {
  const e = document.getElementById("embedtitle").value;
  socket.emit("embedtitle", e)
}

function embedimageaction() {
  const e = document.getElementById("embedimage").value;
  socket.emit("embedimage", e)
}

function embedfooteraction() {
  const e = document.getElementById("embedfooter").value;
  socket.emit("embedfooter", e)
}

function mentionaction() {
  document.getElementById("nomention").checked ? socket.emit("mention", "checked") : socket.emit("mention", "unchecked")
}

function claimeraction() {
  document.getElementById("claimer").checked ? socket.emit("claimer", "checked") : socket.emit("claimer", "unchecked")
}

function theme() {
  socket.emit("them", document.getElementById("themeselector").value)
}

function autotextaction() {
  socket.emit("autotext", document.getElementById("autotexttext").value)
}
document.getElementById("afkreasont").addEventListener("change", (e => {
  socket.emit("afkreason", e.target.value)
})), document.getElementById("prefixtext").addEventListener("change", (e => {
  socket.emit("prefix", e.target.value)
})), document.getElementById("twitchtext").addEventListener("change", (e => {
  socket.emit("twitch", e.target.value)
}));

function danger(type) {
  if(!type) return;
  switch(type) {
    case "resetemail":
      socket.emit("danger", "resetemail")
      break;
  }
}

function resettoken(action) {
  if(action == "deploy") {
    document.getElementById("pass").innerHTML = `            <div class="mb-3" style="padding-top: 10px" id="pass">
    <label  class="form-label">Your Discord Password</label>
    <input type="password" class="form-control" id="passworddiscord">
  </div>
  <button id="zgeg1" onclick="danger('resettoken')" class="btn btn-primary">Submit</button>
  <button id="zgeg2" onclick="resettoken('cancel')" class="btn btn-primary">Cancel</button>`
  } else if(action == 'cancel') {
    document.getElementById('pass').innerHTML = '<p id="pass"></p>';
    document.getElementById('zgeg2').innerHTML = '';
    document.getElementById('zgeg1').innerHTML = '';
  }
}