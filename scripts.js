//Song playlist objects
const allSongs = [
    {
      songId: 1,
      image: `adele.jpeg`,
      name: `Love Is A Game`,
      artist: `Adele`,
      length: `6:30`,
      playing: false,
    }, {
        songId: 2,
        image: `soho-3.jpg`,
        name: `You're My World`,
        artist: `Anya Taylor-Joy`,
        length: `3:04`,
        playing: false,
      }, {
        songId: 2,
        image: `everybodys-gotta-live.jpeg`,
        name: `Everybody's Gotta Live`,
        artist: `Anya Taylor-Joy`,
        length: `3:04`,
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
            <button>Play</button>
        </article>
      `
    }
    
    //Appends each object to HTML
    allSongs.forEach(appendToList)