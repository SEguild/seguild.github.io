// Get the modal
var aberrusModal = document.getElementById("aberrusModal");

// Get the button that opens the modal
var aberrusButton = document.getElementById("aberrusBossOrderButton");

// Get the <span> element that closes the modal
var aberrusSpan = document.getElementsByClassName("aberrusClose")[0];

// When the user clicks on the button, open the modal
aberrusButton.onclick = function() {
  aberrusModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
aberrusSpan.onclick = function() {
  aberrusModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    aberrusModal.style.display = "none";
  }
}