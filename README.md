# Puppeteer

Ça y est!

J'ai réussi à récupérer ce que je voulais sans passer par l'inspecteur d'élement.

Je récupère sur **Spotify** le nom d'une playlist, les titres et les artistes en format JSON :

```javascript
{
  "lofi hip hop": [
    {
      "name": "being with u is nice",
      "artist": [
        "ocha",
        "biosphere"
      ]
    },
    {
      "name": "Lost and Confused",
      "artist": [
        "E-Clips"
      ]
    },
    {
      "name": "growing up",
      "artist": [
        "Rook1e",
        "biosphere"
      ]
    },
    {
      "name": "Where Is He",
      "artist": [
        "Celestial Alignment"
      ]
    },
    {
      "name": "fall in love",
      "artist": [
        "coldbrew"
      ]
    },
    {
      "name": "1k",
      "artist": [
        "Ameba"
      ]
    },
    {
      "name": "Maturity",
      "artist": [
        "Soulitune"
      ]
    },
    {
      "name": "In Our Dreams",
      "artist": [
        "Consumer"
      ]
    },
    {
      "name": "sunken place",
      "artist": [
        "tawnbei"
      ]
    },
    {
      "name": "Hopeful",
      "artist": [
        "ZENDR"
      ]
    },
    {
      "name": "Lonely Days",
      "artist": [
        "Florito"
      ]
    },
    {
      "name": "Chill Mode - SpoonBeats",
      "artist": [
        "SpoonBeats",
        "Slowet Beats"
      ]
    },
    {
      "name": "Feel the Rain",
      "artist": [
        "E-Clips"
      ]
    },
    {
      "name": "poetry after sunset while the world sleeps",
      "artist": [
        "kretzschã‚¯ãƒ¬ãƒ„"
      ]
    },
    {
      "name": "where the sun shines",
      "artist": [
        "Rook1e",
        "Cloudchord"
      ]
    },
    {
      "name": "it's been too long",
      "artist": [
        "tysu",
        "omarr"
      ]
    },
    {
      "name": "Come Back Home",
      "artist": [
        "Jmss",
        "BIDÃ˜"
      ]
    },
    {
      "name": "Waited Years to Leave",
      "artist": [
        "Behind Clouds"
      ]
    },
    {
      "name": "The Soulmate",
      "artist": [
        "evoH"
      ]
    },
    {
      "name": "Save Yourself",
      "artist": [
        "Sxul"
      ]
    },
    {
      "name": "Snow Beers",
      "artist": [
        "Cold Glow"
      ]
    },
    {
      "name": "lillies",
      "artist": [
        "linanthem"
      ]
    },
    {
      "name": "Natural.",
      "artist": [
        "Akira Gautama"
      ]
    },
    {
      "name": "Endless",
      "artist": [
        "Chiccote'S Beats"
      ]
    },
    {
      "name": "things will change",
      "artist": [
        "Rook1e",
        "Kupla"
      ]
    },
    {
      "name": "Train to Inazawa",
      "artist": [
        "Ageturner"
      ]
    },
    {
      "name": "I Just Wanna Be With You",
      "artist": [
        "ProdbyTobi"
      ]
    },
    {
      "name": "dreamer",
      "artist": [
        "VNPR"
      ]
    },
    {
      "name": "Nope",
      "artist": [
        "Bokki"
      ]
    },
    {
      "name": "bedtime stories",
      "artist": [
        "Rook1e",
        "Casual Shifuku"
      ]
    },
    {
      "name": "83",
      "artist": [
        "Kr0w"
      ]
    },
    {
      "name": "Tea or Coffee?",
      "artist": [
        "Byte"
      ]
    },
    {
      "name": "Bonsai",
      "artist": [
        "Styn",
        "Sebastian Kamae",
        "Sleepermane"
      ]
    },
    {
      "name": "Kombucha",
      "artist": [
        "Oatmello"
      ]
    },
    {
      "name": "leveled",
      "artist": [
        "lost.mind"
      ]
    },
    {
      "name": "Heart Mending",
      "artist": [
        "Akira Gautama"
      ]
    },
    {
      "name": "acai bowls on huntington beach",
      "artist": [
        "Rook1e",
        "Oatmello"
      ]
    },
    {
      "name": "Deep in the Forest",
      "artist": [
        "Ageturner"
      ]
    },
    {
      "name": "Your Voice Is in My Head",
      "artist": [
        ".Uzu"
      ]
    },
    {
      "name": "Calm",
      "artist": [
        "Aireey",
        "Tobi"
      ]
    },
    {
      "name": "how you make me feel",
      "artist": [
        "Rook1e",
        "Burbank"
      ]
    },
    {
      "name": "breathe slow",
      "artist": [
        "Rook1e",
        "Meltycanon"
      ]
    },
    {
      "name": "Not Your Fault",
      "artist": [
        "Tundra Beats"
      ]
    },
    {
      "name": "Winter Breeze",
      "artist": [
        "SPEECHLESS"
      ]
    },
    {
      "name": "Childhood Memories",
      "artist": [
        "Bamf"
      ]
    },
    {
      "name": "Pink Flowers",
      "artist": [
        "Chrle"
      ]
    },
    {
      "name": "Solitude",
      "artist": [
        "Druid"
      ]
    },
    {
      "name": "walks along the promenade",
      "artist": [
        "Rook1e",
        "aimless"
      ]
    },
    {
      "name": "just you",
      "artist": [
        "Ameba"
      ]
    },
    {
      "name": "Outside",
      "artist": [
        "Lofty",
        "E I S U",
        "AYEON"
      ]
    },
    {
      "name": "Smile",
      "artist": [
        "MFakka",
        "johto"
      ]
    },
    {
      "name": "weekend dreaming",
      "artist": [
        "kretzschã‚¯ãƒ¬ãƒ„"
      ]
    },
    {
      "name": "Roses",
      "artist": [
        "Ameba"
      ]
    },
    {
      "name": "They Sleep",
      "artist": [
        "Cezhu"
      ]
    },
    {
      "name": "New Dawn",
      "artist": [
        "Jack Dean"
      ]
    },
    {
      "name": "Frostbite",
      "artist": [
        "Cheeki"
      ]
    },
    {
      "name": "pastel skies",
      "artist": [
        "Rook1e",
        "Tomcbumpz"
      ]
    },
    {
      "name": "stew",
      "artist": [
        "Oatmello"
      ]
    },
    {
      "name": "Everything",
      "artist": [
        "Cezhu"
      ]
    },
    {
      "name": "a perfect day",
      "artist": [
        "tysu"
      ]
    },
    {
      "name": "I Sleep",
      "artist": [
        "No Spirit"
      ]
    },
    {
      "name": "delicate memories",
      "artist": [
        "Rook1e",
        "Letjoux"
      ]
    },
    {
      "name": "Sleeping Giant",
      "artist": [
        "Druid"
      ]
    },
    {
      "name": "Bloom",
      "artist": [
        ".ihaveaface",
        "Sebastian Kamae"
      ]
    },
    {
      "name": "Bird Cage",
      "artist": [
        "Technicyan"
      ]
    },
    {
      "name": "roses",
      "artist": [
        "linanthem"
      ]
    },
    {
      "name": "Snow Days",
      "artist": [
        "Chrle"
      ]
    },
    {
      "name": "thanks for all the adventures",
      "artist": [
        "Rook1e",
        "Barnes Blvd."
      ]
    },
    {
      "name": "Sunday Kinda Vibe.",
      "artist": [
        "Stxnx"
      ]
    },
    {
      "name": "Bipolar",
      "artist": [
        "xJK."
      ]
    },
    {
      "name": "All Day",
      "artist": [
        "mvnitou"
      ]
    },
    {
      "name": "Lost in Thought",
      "artist": [
        "E-Clips"
      ]
    },
    {
      "name": "I've Got My Eye on You",
      "artist": [
        "omarr"
      ]
    },
    {
      "name": "Lost",
      "artist": [
        "Tundra Beats"
      ]
    }
  ]
}
```
