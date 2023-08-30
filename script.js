console.log("Welcome to the world of music");
let index=0;
let audioElement = new Audio('songs1.mp3');
let masterPlay=document.getElementById('masterPlay');
let my_bar = document.getElementById('range10');
let song1 = Array.from(document.getElementsByClassName('song1'))
let songs =[{songName:"Downer at dusk",filePath:"songs1.mp3",coverPath:"Tal.jpg"},
            {songName:"Never Fold",filePath:"songs2.mp3",coverPath:"sidhu-moose.jpg"},
            {songName:"Tere-vaaste",filePath:"songs3.mp3",coverPath:"artworks.jpg"},
            {songName:"Anti-Hero",filePath:"songs4.mp3",coverPath:"taylor-Swift.jpg"},
            {songName:"Demons" ,filePath:"songs5.mp3",coverPath:"Imagine-.jpeg"},
            {songName:"Happier" ,filePath:"songs6.mp3",coverPath:"gettyimages.jpg"},
            {songName:"Face-2-Face" ,filePath:"songs7.mp3",coverPath:"11222.jpg"},
            {songName:"At my wrost" ,filePath:"songs8.mp3",coverPath:"Pink-Sweat.jpg"}
           ]
song1.forEach((element,i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
  
})
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');}
});

// listen to event

audioElement.addEventListener('timeupdate',()=>{
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  my_bar.value=progress;
})


// Updated event listener for the progress bar
my_bar.addEventListener('input', () => {
    const seekTime = (my_bar.value * audioElement.duration) / 100;
    audioElement.currentTime = seekTime;
});


const makeAllPlays = (e) => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        e.target.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays(e);
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});
 document.getElementById('next').addEventListener('click',()=>{
   if(index>=7){
     index=0
   }
  else{
    index +=1;
  }
    audioElement.src = `songs${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
 })
 document.getElementById('previous').addEventListener('click',()=>{
   if(index<=0){
     index = 0
   }
  else{
    index -=1;
  }
    audioElement.src = `songs${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
 })