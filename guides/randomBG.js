var imgCount = 2;
        var dir = '/img/war_within/';
        var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
        var images = new Array
                images[1] = "WoW_The_War_Within_BetaArt_Horiz_3840x2160.jpg",
                images[2] = "WoW_The_War_Within_Concept_Azj-Kahet.jpg",
        document.getElementById("bgImageID").style.backgroundImage = "url(" + dir + images[randomCount] + ")"; 