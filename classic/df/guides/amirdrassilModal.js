var amirdrassilModal = document.getElementById("amirdrassilModal");
var amirdrassilButton = document.getElementById("amirdrassilBossOrderButton");
var amirdrassilSpan = document.getElementsByClassName("amirdrassilClose")[0];

amirdrassilButton.onclick = function() {
  amirdrassilModal.style.display = "block";
}

amirdrassilSpan.onclick = function() {
  amirdrassilModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == amirdrassilModal) {
    amirdrassilModal.style.display = "none";
  }
}
