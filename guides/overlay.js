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
            "- 2 Phases.<br/>",
            "- [P1] Kill treant adds, then heal them up - keep healing.<br/>",
            "- [P1] Use the seed in the middle: clear the room of fire voids.<br/>",
            "- [P1] Kill roots, heal them up.<br/>",
            "- [Tank] Charge on tank - move far.<br/>",
            "- [Intermission] 40% HP or after 3 ultimates: Survive the damage.<br/>",
            "- [P2] [SOFT ENRAGE] Kill Boss, cannot clear fire voids anymore.<br/>",
            "- [P2] CC (Kill) fire treants coming from outside.<br/>",
            "- [P2] [Tank] Tankhit debuff: can not be healed, leech life from nearby teammates.<br/>",
        ],
        hc: [
            "- [HC] [P1] Orbs spawn around boss, soak for buff.<br/>",
            "- [HC] [P1] Seed can only be used once per player. Rotation needed.<br/>",
            "- [HC] [P1] Roots have to be sprayed by seed to be able to be attacked.<br/>",
            "- [HC] [P1] [Tank] Charge now deals raidwide damage.<br/>",
        ],
        mythic: [
            "- [Mythic] 3-Player-Chain needed for seed, only the last can clear.<br/>",
        ],
    },
    nymue: {
        boss: "Boss: Nymue, Weaver of the Cycle <br/>",
        abilities: [
            "- 1 phase with intermissions.<br/>",
            "- [P1] Only boss.<br/>",
            "- [P1] Dodge laser lines.<br/>",
            "- [P1] Soak small flowers 24/7.<br/>",
            "- [P1] [Tank] Bomb debuff: places void, move to edges.<br/>",
            "- [Intermission] At 100 energy: Split raid in 2 groups, each group has to deal with an add.<br/>",
            "- [Intermission] Do not move the add over lines.<br/>",
        ],
        hc: [
            "- [HC] Other people also get the tank bomb debuff.<br/>",
            "- [HC] Bomb explosion leaves impassable zones.<br/>",
        ],
        mythic: [
            "- [Mythic] [Intermission] One more add spawns, can only be killed once per player.<br/>",
            "- [Mythic] New priority soak-flower.",
        ],
    },
    smolderon: {
        boss: "Boss: Smolderon <br/>",
        abilities: [
            "- 1 phase with intermissions.<br/>",
            "- Only boss.<br/>",
            "- Raid is randomly split in 2 groups. Groups are reversed after each mechanic.<br/>",
            "- Group 1: Small circle on each player: Split, do not stack.<br/>",
            "- Group 2: No circle, soak big tank circle.<br/>",
            "- [Intermission] [Healer] At 0 energy: Massive raidwide damage.<br/>",
            "- [Intermission] Soak orbs (stackable hps+dps buff), dodge fire.<br/>",
        ],
        hc: [
            "- [HC] Group 1: Small circles also spawn 3 laser pillars - dodge.<br/>",
            "- [HC] [Tank] After tank soak: bomb debuff that does raidwide damage, move far.<br/>",
            "- [HC] [Softenrage] After 4th intermission.<br/>",
        ],
        mythic: [
            "- [Mythic] 3 Orbs spawn that each fixate on a player. Stagger explosions, do not overlap.<br/>",
        ],
    },
    tindral: {
        boss: "Boss: Tindral Sageswift, Seer of the Flame <br/>",
        abilities: [
            "- 3 phases.<br/>",
            "- [P1] Moonkin abilities.<br/>",
            "- [P2] Treant abilities.<br/>",
            "- [P3] All abilities.<br/>",
            "- Move out with debuff, dispel creates big fire void.<br/>",
            "- Roots: stack close, AoE roots.<br/>",
            "- Seeds: Soak.<br/>",
            "- [Tank] Big mushrooms, soak every other.<br/>",
            "- [Intermissions] Dragonriding: The raid needs to collect 10 green orbs while flying to the next platform.<br/>",
        ],
        hc: [
            "- [HC] Seeds: soaking seeds increases damage taken by seeds.<br/>",
        ],
        mythic: [
            "- [Mythic] In P1/P2/P3 Boss drops 4 feathers. Soak and fly up, soak red orb, fly into roots and explode.<br/>",
        ],
    },
    fyrakk: {
        boss: "Boss: Fyrakk <br/>",
        abilities: [
            "- [P1] Drop debuff close to existing fire.<br/>",
            "- [P1] Ability: Dream rend: move far.<br/>",
            "- [P2] [Intermission] At 70%, destroy boss shield, soak fire orbs before they hit the boss.<br/>",
            "- [P2] [Healer] Heal ghosts before they reach the tree.<br/>",
            "- [P3] Seeds can not take fire damage or they explode in massive raidwide damage.<br/>",
            "- [P3] [Softenrage] Ability: Apocalypse Roar: Seeds: Use 1 seed to survive.<br/>",
        ],
        hc: [
            "- [HC] Ability Blaze: Random player get hit by a line of fire - others: dodge.<br/>",
        ],
        mythic: [
            "- [Mythic] Big tree add spawns with ghosts, needs to be healed up.<br/>",
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
