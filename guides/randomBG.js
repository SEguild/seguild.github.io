var dir = "/img/war_within/";
var images = new Array(
    "WoW_The_War_Within_BetaArt_Horiz_3840x2160.png",
    "WoW_The_War_Within_Concept_Azj-Kahet.jpg",
    "WoW_The_War_Within_Concept_IsleofDorn.jpg",
    "WoW_The_War_Within_Concept_Hallowfall.jpg",
    "WoW_The_War_Within_Concept_Industry_Postcard.jpg",
    "WoW_The_War_Within_Destruction_Key_Art_full.png",
    "WoW_The_War_Within_Key_Art_Horizontal.jpg",
    "WoW_The_War_Within_Threads_of_Destiny_Wallpaper_Xal_008_3840x2160.png",
    "WoW_The_War_Within_Threads_of_Destiny_Wallpaper_Xal_012_3840x2160.png",
    "WoW_TWW_Cinematic_Still_Anduin.jpg",
    "WoW_TWW_Cinematic_Still_Silithus.jpg"
);

var randomCount = Math.round(Math.random() * (images.length - 1));

document.getElementById("bgImageID").style.backgroundImage =
    "url(" + dir + images[randomCount] + ")";
