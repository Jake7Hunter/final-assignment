//Imports
import { allSongs } from "./data.js"

//Filter Form shortcut
const filterForm = document.querySelector(`#filter`)
//Main variables for player
let playingIndex = 0
const song = new Audio()
song.src = `/assets/music/${allSongs[playingIndex].audio}`
const playButton = document.querySelector(`#playSong`)
const playPrevious = document.querySelector(`#previousSong`)
const playNext = document.querySelector(`#nextSong`)
const playlistEle = document.querySelector(`#playlist`)
const songVol = document.querySelector(`#songVol`)
const currentSong = document.querySelector(`#currentSong`)
const currentSongInfo = function(){
currentSong.innerHTML = `<h2 class"currentSong">Current Song: ${allSongs[playingIndex].name}</h2> <h3 class="artist">By: ${allSongs[playingIndex].artist}</h3>`
}

//Print results on page load
window.addEventListener(`load`, function(event, item) {
  filterAndPrint()
});

//Creating UI elements

//Filter form
filterForm.addEventListener(`input`, function(event) {
  //Stop for from refreshing
  event.preventDefault()

  //Run filters and print results
  filterAndPrint()
})

// Append a new list item with the Object data passed to the function
const appendToList = function(item) {
    document.querySelector(`#playlist`).innerHTML += `
    <article class="song ${(item.playing) ? `playing` : ""}">
        <img data-index="${item.songId}" src="./assets/covers/${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <h3>${item.artist}</h3>
        <h3>${(item.length/60).toFixed(2)} mins</h3>  
    </article>
  `
}

//Filter each item and them to the playlist
const filterAndPrint = function() {
  //Filter songs
  const nameSearch = filterForm.querySelector(`#songName`).value || ``

  //Sets playlist to blank to refrain from unwanted adding
  document.querySelector(`#playlist`).innerHTML = ``
  //Create list in HTML after filters run
  allSongs
  //Filter by search
  .filter(item => item.name.toUpperCase().includes(nameSearch.toUpperCase())
  ||item.artist.toUpperCase().includes(nameSearch.toUpperCase()))
  //Appends each object to HTML
  .forEach(appendToList)
}

//Music Player

//Click play/pause button to start/stop song
playButton.addEventListener(`click`, function(event){
  if (song.paused){
    song.play();
    playButton.textContent = `⏸`
  } else{
    song.pause()
    playButton.textContent = `▶️`
  }
  //Display current song info
  currentSongInfo()
})

//Click "next" button to go to the next song 
playNext.addEventListener(`click`, function(event){
  playingIndex = ((playingIndex + 1) > (allSongs.length - 1)) ? 0 : playingIndex + 1
  //If song is already playing, continue playing
  if (!song.paused) {
    song.src = `/assets/music/${allSongs[playingIndex].audio}`
    song.play()
  } else {
    song.src = `/assets/music/${allSongs[playingIndex].audio}`
  }
  //Display current song info
  currentSongInfo()
})

//Click "previous" button to go to last song
playPrevious.addEventListener(`click`, function(event){
  playingIndex = ((playingIndex - 1) > (allSongs.length - 1)) ? 0 : playingIndex - 1
  //if song is already playing, continue playing
  if (!song.paused) {
    song.src = `/assets/music/${allSongs[playingIndex].audio}`
    song.play()
  } else {
    song.src = `/assets/music/${allSongs[playingIndex].audio}`
  }
  //Display current song info
  currentSongInfo()
})

//On song end, play next song
song.addEventListener(`ended`, function(event){
  playingIndex = ((playingIndex + 1) > (allSongs.length - 1)) ? 0 : playingIndex + 1
  //If song is already playing, continue playing
  song.src = `/assets/music/${allSongs[playingIndex].audio}`
  song.play()
  currentSongInfo()
})

//Change songs volume level
songVol.addEventListener(`input`, function(event){
  song.volume = songVol.value
})

//Click individual songs to have them play
playlistEle.addEventListener(`click`, function(event){
  const songToPlay = event.target

  if (songToPlay.matches(`img`)){
    playingIndex = Number(songToPlay.dataset.index)
    song.src = `/assets/music/${allSongs[playingIndex].audio}`
    song.play()
    playButton.textContent = `⏸`
  }
  //Display current song info
  currentSongInfo()
})