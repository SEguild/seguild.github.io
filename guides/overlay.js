let boss = "";

const overlayMap = {
    gnarlRoot: {
        boss: "Boss: Gnarlroot <br/>",
        abilities: [
            "- Ability: Flaming Pestilence - Spawns lashers adds in AoE line.<br/>",
            "- [Individual] Ability: Controlled Burn - Marks players with AoE circle. Drops fire pool. Pools stay until intermission.<br/>",
            "- [Healer] Ability: Tortured Scream - Raidwide 10s DoT.<br/>",
            "- [Tank] Ability: Dreadfire Barrage - Physical and shadow damage. Stacks Shadowflame vulnerability.<br/>",
            "- [Intermission] Start: Kill all adds. Gnarlroot spawns roots. Boss sets players on fire - touch the roots to burn them.<br/>",
            "- [Intermission] End: Intermission ends when all roots are burned. Boss takes 100% more damage for 20s.<br/>",
        ],
        hc: [
            "- [HC Changes]: Adds do not spawn automatically. Use Controlled Burn to activate them.<br/>",
            "- [HC Changes]: [Intermission] - Players need to set themselves on fire (soak) to be able to burn the roots.<br/>",
        ],
        mythic: [
            "- [Mythic Changes] Spawns two treants on each add wave. Spread & interrupt.<br/>",
            "- [Mythic Changes] [Intermission] - More roots, missing [HC Changes] soak causes raidwide damage.<br/>",
        ],
    },
    igira: {
        boss: "Boss: Igira <br/><br/>",
        abilities: [],
        hc: [],
        mythic: [],
    },
    volcoross: {
        boss: "Boss: Volcoross <br/><br/>",
        abilities: [],
        hc: [],
        mythic: [],
    },
    councilOfDreams: {
        boss: "Boss: Council of Dreams <br/><br/>",
        abilities: [],
        hc: [],
        mythic: [],
    },
    larodar: {
        boss: "Boss: Larodar, Keeper of the Flame <br/><br/>",
        abilities: [],
        hc: [],
        mythic: [],
    },
    nymue: {
        boss: "Boss: Nymue, Weaver of the Cycle <br/><br/>",
        abilities: [],
        hc: [],
        mythic: [],
    },
    smolderon: {
        boss: "Boss: Smolderon <br/><br/>",
        abilities: [],
        hc: [],
        mythic: [],
    },
    tindral: {
        boss: "Boss: Tindral Sageswift, Seer of the Flame <br/><br/>",
        abilities: [],
        hc: [],
        mythic: [],
    },
    fyrakk: {
        boss: "Boss: Fyrakk <br/>",
        abilities: ["- Abilities: Unknown.<br/>"],
        hc: ["- [HC Changes] Unknown.<br/>"],
        mythic: ["- [Mythic Changes] Unknown.<br/>"],
    },
};

function openOverlay(param) {
    boss = param;
    document.getElementById("abilityOverlay").style.display = "block";
    document.getElementById("bossAbilities").innerHTML =
        overlayMap[param].boss +
        "<br/>" +
        overlayMap[param].abilities.reduce((acc, cur) => acc + cur, "") +
        "<br/>" +
        overlayMap[param].hc.reduce((acc, cur) => acc + cur, "") +
        "<br/>" +
        overlayMap[param].mythic.reduce((acc, cur) => acc + cur, "");
}

function closeOverlay() {
    document.getElementById("abilityOverlay").style.display = "none";
    document.getElementById("bossAbilities").innerHTML = "";
}
