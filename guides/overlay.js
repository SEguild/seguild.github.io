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
        boss: "Boss: Igira <br/>",
        abilities: [
            "- [Individual] Ability: Blistering Spear - Random player are marked and chained to a weapon with AoE void - destroy chains.<br/>",
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
        boss: "Boss: Volcoross <br/>",
        abilities: [
            "- Split raid in 2 groups. One group moves clockwise, the other counter-clockwise.<br/>",
            "- [Individual] Ability: Coiling Flames - marks players: move out with AoE circle around them. Circle shrinks and deals increasing damage. Jumps to a new player on expiration.<br/>",
            "- At 100 energy: soak two circles (each group one)<br/>",
            "- [Healer] High raidwide damage after each soak and start of fight for ~5s.<br/>",
            "- [Tank] Ability: Molten Venom - Stacking debuff.<br/>",
            "- [Tank] Ability: Cataclysm Jaws - Taunt BEFORE cast success.<br/>",
            "- [AoE Oneshot] Ability: Scorchtail Crash - Tailstrike (shadow on the ground) oneshots.<br/>",
            "- [SOFT ENRAGE] When platform is completely filled with lava -> damage race.<br/>",
        ],
        hc: [
            "- [HC] Ability: Scorchtail Crash: Additonally creates lava waves on crash.<br/>",
        ],
        mythic: [
            "- [Mythic] Additionally split each group into groups of 5 to soak the Ability: Coiling Flame explosions.<br/>",
            "- [Mythic] Ability: Coiling Flames: On expiration players explode in soakable damage. Always targets 1 melee and 1 range in each group.<br/>",
        ],
    },
    councilOfDreams: {
        boss: "Boss: Council of Dreams <br/>",
        abilities: [
            "- [Council] 3 Bosses, need to die at the same time.<br/>",
            "- [Tank] Only Urctos is tankable.<br/>",
            "- [Pip] [Healer] Ability: Emerald Winds - High raidwide damage and pushback.<br/>",
            "- [Aerwynn] Random poison debuff (dispelable).<br/>",
            "- [Urctos] [Tank] Ability: Agonizing Claws - Massive physical damage. Vulnerability debuff. Tankswap after hit.<br/>",
            "- Every boss has an ultimate. Interruptable by a spell of another boss.<br/>",
            "- [Ultimate - Urctos] Turn Urctos into a duck to stop his channel. A player in duckform has to un-duck next to him.<br/>",
            "- [Ultimate - Aerwynn] Let Urctos charge into Aerwynn to stop the channel. Charge needs to be soaked by everyone.<br/>",
            "- [Ultimate - Pip] Raidwide shield. Stand in a flower to remove the shield before the cast finishes.<br/>",
        ],
        hc: [
            "- [HC] Urctos Charge: Vulnerability debuff. Players cannot soak twice in a row.<br/>",
            "- [HC] [Tank] Urctos Tankhit: Now cleaves frontal.<br/>",
            "- [HC] Polymorphed players turn other players into ducks on un-duck.<br/>",
        ],
        mythic: [
            "- [Mythic] Always two ultimates at the same time, rotation: Urctos+Aerwynn, Aerwynn+Pip, Urctos+Pip<br/>",
            "- [Mythic] [Individual] [Healer] Poison dispel deals massive damage to nearby players.<br/>",
            "- [Mythic] [Ultimate - Pip] Additionally summons tornadoes to dodge.<br/>",
        ],
    },
    larodar: {
        boss: "Boss: Larodar, Keeper of the Flame <br/>",
        abilities: [
            "- 2 phases.<br/>",
            "- [P1] Kill adds, then heal them up.<br/>",
            "- [P1] Use the seed in the middle: clear the room of fire voids.<br/>",
            "- [Intermission] After 3 ultimates or @40% HP: Survive the damage.<br/>",
            "- [P2] [SOFT ENRAGE] Kill Boss, cannot clear fire voids anymore.<br/>",
        ],
        hc: ["- [HC]"],
        mythic: ["- [Mythic]"],
    },
    nymue: {
        boss: "Boss: Nymue, Weaver of the Cycle <br/>",
        abilities: [
            "- 2 phases.<br/>",
            "- [P1] Only boss.<br/>",
            "- [P2] At 100 energy: Split raid in 2 groups, each group has to deal with an add (different abilities).<br/>",
        ],
        hc: ["- [HC]"],
        mythic: ["- [Mythic]"],
    },
    smolderon: {
        boss: "Boss: Smolderon <br/>",
        abilities: [
            "- Pure single target, one phase with intermissions.<br/>",
            "- Raid is randomly split in 2 groups. Groups are reversed after each mechanic.<br/>",
            "- [Intermission] [Healer] At 0 energy: Massive raidwide damage. Soak orbs (stackable hps+dps buff), dodge fire.<br/>",
        ],
        hc: ["- [HC]"],
        mythic: ["- [Mythic]"],
    },
    tindral: {
        boss: "Boss: Tindral Sageswift, Seer of the Flame <br/>",
        abilities: [
            "- 3 phases.<br/>",
            "- [P1] Moonkin abilities.<br/>",
            "- [P2] Treant abilities.<br/>",
            "- [P3] All abilities.<br/>",
            "- [Intermissions] Dragonriding: The raid needs to collect all green orbs while flying to the next platform.<br/>",
        ],
        hc: ["- [HC]"],
        mythic: ["- [Mythic]"],
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
