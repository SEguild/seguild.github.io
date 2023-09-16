var vaultModal = document.getElementById("vaultModal");
var vaultButton = document.getElementById("vaultBossOrderButton");
var vaultSpan = document.getElementsByClassName("vaultClose")[0];

vaultButton.onclick = function() {
  vaultModal.style.display = "block";
}

vaultSpan.onclick = function() {
  vaultModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == vaultModal) {
    vaultModal.style.display = "none";
  }
}
