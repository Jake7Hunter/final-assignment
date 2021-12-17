//Song playlist objects
const allSongs = [
    {
      songId: 1,
      image: `adele.jpeg`,
      name: `Love Is A Game`,
      artist: `Adele`,
      length: 378,
      audio: `love-is-a-game.mp3`,
      playing: true,
    }, {
        songId: 2,
        image: `soho-2.jpeg`,
        name: `You're My World (Soho)`,
        artist: `Anya Taylor-Joy`,
        length: 130,
        audio: `you-are-my-world-soho.mp3`,
        playing: false,
      }, {
        songId: 3,
        image: `everybodys-gotta-live.jpeg`,
        name: `Everybody's Gotta Live`,
        artist: `Love`,
        length: 195,
        audio: `everybodys-gotta-live.mp3`,
        playing: false,
      }, {
        songId: 4,
        image: `warning.jpg`,
        name: `Misery`,
        artist: `Green Day`,
        length: 303,
        audio: `misery.mp3`,
        playing: false,
      }, {
        songId: 5,
        image: `soho-3.jpg`,
        name: `Downtown (Uptempo)`,
        artist: `Anya Taylor-Joy`,
        length: 198,
        audio: `downtown-uptempo.mp3`,
        playing: false,
      }, {
        songId: 6,
        image: `land-of-1000-dances.jpg`,
        name: `Land Of 1000 Dances`,
        artist: `The Walker Brothers`,
        length: 141,
        audio: `land-of-1000-dances.mp3`,
        playing: false,
      }, {
        songId: 7,
        image: `soho-3.jpg`,
        name: `You're My World`,
        artist: `Anya Taylor Joy`,
        length: 181,
        audio: `everybodys-gotta-live.mp3`,
        playing: false,
      }, {
        songId: 8,
        image: `heroes.jpg`,
        name: `Heroes`,
        artist: `David Bowie`,
        length: 201,
        audio: `heroes.mp3`,
        playing: false,
    }, {
        songId: 9,
        image: `soho-2.jpeg`,
        name: `Neon`,
        artist: `Stephen Price`,
        length: 305,
        audio: `neon.mp3`,
        playing: false,
    }, {
        songId: 10,
        image: `soho-3.jpg`,
        name: `Downtown (Downtempo)`,
        artist: `Anya Taylor-Joy`,
        length: 321,
        audio: `downtown-downtempo.mp3`,
        playing: false,
    } 
]
    // Append a new list item with the Object data passed to the function
    const appendToList = function(item) {
        document.querySelector(`#playlist`).innerHTML += `
        <article class="song ${(item.playing) ? `playing` : ""}">
            <img src="./assets/covers/${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <h3>${item.artist}</h3>
            <h3>${(item.length/60).toFixed(2)} mins</h3>
            <button id="playButton${item.songId}">Play</button>
        </article>
      `
    }

//Filter songs
const maxLength = 200
const perPage = 3

//Filter each song
allSongs.filter(item => item.length > 200)
//Appends each object to HTML
.forEach(appendToList)


    
    
  //   const song = new Audio()

  //   playButton.addEventListener(`click`, function(event) {
  //     console.log(`playing`)
  //     song.play()  
  // })
    

    