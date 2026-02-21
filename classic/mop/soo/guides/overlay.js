const overlayMap = {
    TBD: {
        boss: "Boss: Fyrakk <br/>",
        abilities: [
            "- [P1] ABC.<br/>",
            "- [P1] XYZ.<br/>",
        ],
        hc: [
            "- [HC] Ability X: Do Y.<br/>",
        ],
        mythic: [
            "- [Mythic] This changed.<br/>",
        ],
    },
};

function openOverlay(boss) {
    document.getElementById("abilityOverlay").style.display = "block";
    document.getElementById("bossAbilities").innerHTML =
        overlayMap[boss].boss +
        "<br/>" +
        overlayMap[boss].abilities.reduce((acc, cur) => acc + cur, "") +
        "<br/>" +
        overlayMap[boss].hc.reduce((acc, cur) => acc + cur, "") +
        "<br/>" +
        overlayMap[boss].mythic.reduce((acc, cur) => acc + cur, "");
}

function closeOverlay() {
    document.getElementById("abilityOverlay").style.display = "none";
    document.getElementById("bossAbilities").innerHTML = "";
}
