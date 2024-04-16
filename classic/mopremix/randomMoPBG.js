var imgCount = 2;
        var dir = '/img/classic/mopremix/';
        var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
        var images = new Array
                images[1] = "mopremix_login.webp",
                images[2] = "mopremix_ship.jpg",
        document.getElementById("bgImageID").style.backgroundImage = "url(" + dir + images[randomCount] + ")"; 