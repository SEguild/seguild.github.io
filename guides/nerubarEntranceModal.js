var nerubarEntranceModal = document.getElementById("nerubarEntranceModal");
var nerubarEntrance = document.getElementById("nerubarEntranceButton");
var nerubarEntranceSpan = document.getElementsByClassName(
    "nerubarEntranceClose"
)[0];

nerubarEntrance.onclick = function () {
    nerubarEntranceModal.style.display = "block";
};

nerubarEntranceSpan.onclick = function () {
    nerubarEntranceModal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == nerubarEntranceModal) {
        nerubarEntranceModal.style.display = "none";
    }
};
