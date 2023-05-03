// Get the modal
var vaultModal = document.getElementById("vaultModal");

// Get the button that opens the modal
var vaultButton = document.getElementById("vaultBossOrderButton");

// Get the <span> element that closes the modal
var vaultSpan = document.getElementsByClassName("vaultClose")[0];

// When the user clicks on the button, open the modal
vaultButton.onclick = function() {
  vaultModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
vaultSpan.onclick = function() {
  vaultModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    vaultModal.style.display = "none";
  }
}