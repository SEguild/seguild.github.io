var imgCount = 2;
        var dir = '/img/randombg/';
        var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
        var images = new Array
                images[1] = "Emerald_Dream_Post_Card.jpg",
                images[2] = "Guardians_of_the_Dream.jpg",
        document.getElementById("bgImageID").style.backgroundImage = "url(" + dir + images[randomCount] + ")"; 