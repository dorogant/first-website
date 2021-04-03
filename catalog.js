window.onload = function () {
    var DB = [{
        "name": "God Of War 4",
        "image_url": "images/godofwar.png"
    },
    {
        "name": "Spider-man",
        "image_url": "images/Spiderman.png"
    },
    {
        "name": "The Outer Worlds",
        "image_url": "images/Outer.png"
    },
    {
        "name": "DeathStranding",
        "image_url": "images/DeathStranding.png"
    },
    {
        "name": "Bloodborn",
        "image_url": "images/Bloodborn.jpg"
    },
    {
        "name": "Witcher3",
        "image_url": "images/Witcher3.png"
    },
    {
        "name": "GrandTheftAuto 5",
        "image_url": "images/GTA5.jpg"
    },
    {
        "name": "RedDeadRedemption 2",
        "image_url": "images/RDR2.png"
    },
    {
        "name": "SpiderMan 2",
        "image_url": "images/SpiderMan2.png"
    },
    {
        "name": "Star Wars:Battlefront 2",
        "image_url": "images/battlefront22.jpg"
    },
    {
        "name": "Battlefield 5",
        "image_url": "images/Battlefield V.png"
    },
    {
        "name": "Battlefield 4",
        "image_url": "images/Battlefield4.png"
    },
    {
        "name": "BattleField 1",
        "image_url": "images/BattleField1.png"
    },
    {
        "name": "Hitman 3",
        "image_url": "images/hitman.png"
    },
    {
        "name": "The Last Of Us",
        "image_url": "images/TLOU.png"
    },
    {
        "name": "The Last Of Us 2",
        "image_url": "images/TLOU2.jpg"
    },
    {
        "name": "CALL OF DUTY: COLD WAR",
        "image_url": "images/CALLOFDUTYCOLDWAR.png"
    },
    {
        "name": "Doom Eternal",
        "image_url": "images/DOOMEternal.png"
    },
    {
        "name": "Detroit: Become Human",
        "image_url": "images/Detroit.png"
    },
    {
        "name": "Shadow Of The Tomb Raider",
        "image_url": "images/RiseOfTheTombRider.png"
    },
    {
        "name": "Cyberpunk2077",
        "image_url": "images/Cyberpunk2077.png"
    },
    {
        "name": "",
        "image_url": ""
    },
    {
        "name": "",
        "image_url": ""
    },
    {
        "name": "",
        "image_url": ""
    },
    {
        "name": "",
        "image_url": ""
    },
    ]

    var items = [];

    DB.forEach(element => {

        var number = 1233;
        console.log("name " + number + " was");

        let item = document.createElement("a");
        item.className = "item";
        item.innerHTML =
            '<div class="image">' +
            '<img class="item_image" src="' + element.image_url + '">' +
            '</div>' +
            '<div class="title">' +
            '<h2>' + element.name + '</h2>' +
            '</div>';

        items.push(item);
    });

    //console.log(items);

    var gamesContainer = document.getElementById("gamesContainer");
    items.forEach(item => {
        gamesContainer.appendChild(item);
    });

}