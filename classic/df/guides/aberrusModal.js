var aberrusModal = document.getElementById("aberrusModal");
var aberrusButton = document.getElementById("aberrusBossOrderButton");
var aberrusSpan = document.getElementsByClassName("aberrusClose")[0];

aberrusButton.onclick = function() {
  aberrusModal.style.display = "block";
}

aberrusSpan.onclick = function() {
  aberrusModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == aberrusModal) {
    aberrusModal.style.display = "none";
  }
}
