var nerubarModal = document.getElementById("nerubarModal");
var nerubarButton = document.getElementById("nerubarBossOrderButton");
var nerubarSpan = document.getElementsByClassName("nerubarClose")[0];

nerubarButton.onclick = function () {
    nerubarModal.style.display = "block";
};

nerubarSpan.onclick = function () {
    nerubarModal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == nerubarModal) {
        nerubarModal.style.display = "none";
    }
};
