let tomb = ["https://i.imgur.com/ZgtyKUH.jpg", "https://i.imgur.com/v4dEQj4.jpg", "https://i.imgur.com/VCBTlgM.jpg", "https://i.imgur.com/hdJ0Ymp.jpg", "https://i.imgur.com/iaXToAf.jpg", "https://i.imgur.com/L1g2exm.jpg", "https://i.imgur.com/peqE3FH.jpg", "https://i.imgur.com/EWzdYpu.jpg"]
function start() {
    let rand = Math.floor(Math.random()*tomb.length);
    pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": tomb[rand],
        "autoLoad": true
    });
}