console.log("Welcome to spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'));
let playSong = Array.from(document.getElementsByClassName('songItemPlay'));
let masterSongName = document.getElementById('masterSongName');



let songs = [
    {songName: "Jawan Prevue Theme", filePath: "songs/1.mp3", coverPath:"covers/cover1.jpg"},
    {songName: "Chaleya Jawan", filePath: "songs/2.mp3", coverPath:"covers/cover2.jpg"},
    {songName: "Chaleya Jawan Arabic", filePath: "songs/3.mp3", coverPath:"covers/cover3.jpg"},
    {songName: "Not Ramaiya Vastavaiya", filePath: "songs/4.mp3", coverPath:"covers/cover4.jpg"},
    {songName: "Zinda Banda", filePath: "songs/5.mp3", coverPath:"covers/cover5.jpg"},
    {songName: "6Jawan Prevue Theme", filePath: "songs/6.mp3", coverPath:"covers/cover6.jpg"},
    {songName: "7Jawan Prevue Theme", filePath: "songs/7.mp3", coverPath:"covers/cover7.jpg"},
    {songName: "8Jawan Prevue Theme", filePath: "songs/8.mp3", coverPath:"covers/cover8.jpg"},
    {songName: "9Jawan Prevue Theme", filePath: "songs/9.mp3", coverPath:"covers/cover9.jpg"},
    {songName: "10Jawan Prevue Theme", filePath: "songs/10.mp3", coverPath:"covers/cover9.jpg"}
]


songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle Play/pause click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
   
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex>=9){
        songIndex=0
    }
    else{
    songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`; 
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0){
        songIndex=0
    }
    else{
    songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`; 
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})