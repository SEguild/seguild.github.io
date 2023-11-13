const overlayMap = {
    gnarlroot: {
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
            "- [HC] Adds do not spawn automatically. Use Controlled Burn to activate them.<br/>",
            "- [HC] [Intermission] - Players need to set themselves on fire (soak) to be able to burn the roots.<br/>",
        ],
        mythic: [
            "- [Mythic] Spawns two treants on each add wave. Spread & interrupt.<br/>",
            "- [Mythic] [Intermission] - More roots, missing [HC] soaks causes raidwide damage.<br/>",
        ],
    },
    igira: {
        boss: "Boss: Igira <br/><br/>",
        abilities: [
            "- Ability: Blistering Spear - Random player are marked and chained to a weapon - destroy chained weapons.<br/>",
            "- [Intermission] Start at 100 energy: [Healer] High raidwide damage. Soak a weapon (free choice of order) to start next phase. Boss gets abilities depending on soaked weapon.<br/>",
            "- [Tank] Always stack ontop of each other (dual hits).<br/>",
            "- [Weapon - Axe] 1 Tank + 50% Raid. Stack with tankhit. Everyone can only be hit once.<br/>",
            "- [Weapon - Sword] Jumps at second farthest player. Dodge.<br/>",
            "- [Weapon - Dagger] [Healer] Healing absorb on many players. Healed to full explode in small AoE damage -> spread. Fail to heal: Raidwide damage.<br/>",
        ],
        hc: [
            "- [HC] [Weapon - Sword] Also creates lines of explosions to dodge.<br/>",
            "- [HC] [Weapon - Dagger] Heal absorb healed to full create orbs to dodge.<br/>",
            "- [HC] [Intermission] Soaking a weapon creates permanent debuff: 100% more damage taken by soaking a weapon.<br/>",
        ],
        mythic: [
            "- [Mythic] Boss equips two weapons at once.<br/>",
            "- [Mythic] Weapon that are not soaked are equipped.<br/>",
        ],
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
        hc: ["- [HC] Unknown.<br/>"],
        mythic: ["- [Mythic] Unknown.<br/>"],
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
