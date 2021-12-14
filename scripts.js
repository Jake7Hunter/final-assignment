//Song playlist objects

const allSongs = [
    {
      songId: 1,
      image: `adele.jpeg`,
      name: `Love Is A Game`,
      artist: `Adele`,
      length: `6:30`,
      audio: `love-is-a-game.mp3`,
      playing: false,
    }, {
        songId: 2,
        image: `soho-2.jpeg`,
        name: `You're My World (Soho)`,
        artist: `Anya Taylor-Joy`,
        length: `2:18`,
        audio: `you-are-my-world-soho.mp3`,
        playing: false,
      }, {
        songId: 3,
        image: `everybodys-gotta-live.jpeg`,
        name: `Everybody's Gotta Live`,
        artist: `Love`,
        length: `3:25`,
        audio: `everybodys-gotta-live.mp3`,
        playing: false,
      }, {
        songId: 4,
        image: `warning.jpg`,
        name: `Misery`,
        artist: `Green Day`,
        length: `5:05`,
        audio: `misery.mp3`,
        playing: false,
      }, {
        songId: 5,
        image: `soho-3.jpg`,
        name: `Downtown (Uptempo)`,
        artist: `Anya Taylor-Joy`,
        length: `3:30`,
        audio: `downtown-uptempo.mp3`,
        playing: false,
      }, {
        songId: 6,
        image: `land-of-1000-dances.jpg`,
        name: `Land Of 1000 Dances`,
        artist: `The Walker Brothers`,
        length: `2:35`,
        audio: `land-of-1000-dances.mp3`,
        playing: false,
      }, {
        songId: 7,
        image: `soho-3.jpg`,
        name: `You're My World`,
        artist: `Anya Taylor Joy`,
        length: `3:02`,
        audio: `everybodys-gotta-live.mp3`,
        playing: false,
      }, {
        songId: 8,
        image: `heroes.jpg`,
        name: `Heroes`,
        artist: `David Bowie`,
        length: `3:36`,
        audio: `heroes.mp3`,
        playing: false,
    }, {
        songId: 9,
        image: `soho-2.jpeg`,
        name: `Neon`,
        artist: `Stephen Price`,
        length: `5:09`,
        audio: `neon.mp3`,
        playing: false,
    }, {
        songId: 10,
        image: `soho-3.jpg`,
        name: `Downtown (Downtempo)`,
        artist: `Anya Taylor-Joy`,
        length: `5:35`,
        audio: `downtown-downtempo.mp3`,
        playing: false,
    }
      
]
    // Append a new list item with the Object data passed to the function
    const appendToList = function(item) {
        document.querySelector(`#playlist`).innerHTML += `
        <article class="song">
            <img src="./assets/covers/${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <h3>${item.artist}</h3>
            <h3>${item.length}</h3>
            <button id="playButton">Play</button>
        </article>
      `
    }
    
    //Appends each object to HTML
    allSongs.forEach(appendToList)


    // const playButton = document.querySelector(`#playButton`)
    // const song = new Audio(`./assets/music/you-are-my-world-soho.mp3`)

    // playButton.addEventListener(`click`, function(event) {
    //     console.log(`playing`)
    //     song.play()  
    // })

    