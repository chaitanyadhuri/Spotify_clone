//Variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));



let songs = [{
    songsName: "sairat",
    filPath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
},
{
    songsName: "sairat",
    filPath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
},
{
    songsName: "sairat",
    filPath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
},
{
    songsName: "sairat",
    filPath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
},
{
    songsName: "sairat",
    filPath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
},
{
    songsName: "sairat",
    filPath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
}, {
    songsName: "sairat",
    filPath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
},
{
    songsName: "sairat",
    filPath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
},
{
    songsName: "sairat",
    filPath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
},
{
    songsName: "op",
    filPath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
},];

songItems.forEach((element, i) => {
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songsName;
});

// audioElement.play()
//play song
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");

        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    })
})

document.getElementById("next").addEventListener("click", () => {
    if (songIndex >=   10) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})
