
 const MusicPlayer = document.getElementById("aud");
 
const playBtn = document.getElementById("btnPlay");
const pauseBtn = document.getElementById("btnPause");
const repeatBtn = document.getElementById("btnRepeat");
const shuffleBtn = document.getElementById("btnShuffle");

const divaudioone = document.querySelector('.audio_one');
const divaudiotwo = document.querySelector('.audio_two');
const divaudiothree = document.querySelector('.audio_three');
const audioSrc = [
    "./audios/test_audio_one.mp3",
    "./audios/test_audio_two.mp3",
    "./audios/test_audio_three.mp3"
];
function playaudio() {
    MusicPlayer.play()
}
function shuffle(){
    let random = Math.floor(Math.random()*(2-0+1) + 0)
   MusicPlayer.setAttribute('src',audioSrc[random])
}
function playAudioOne(){
    MusicPlayer.setAttribute('src',audioSrc[0])
    MusicPlayer.play()
}
function playAudiotwo(){
    MusicPlayer.setAttribute('src',audioSrc[1])
    MusicPlayer.play()
}
function playAudiothree(){
    MusicPlayer.setAttribute('src',audioSrc[2])
    MusicPlayer.play()
}
divaudioone.addEventListener('click',playAudioOne);
divaudiotwo.addEventListener('click',playAudiotwo);
divaudiothree.addEventListener('click',playAudiothree);
playBtn.addEventListener("click", playaudio);
pauseBtn.addEventListener("click",()=>{
    MusicPlayer.pause()
    });
repeatBtn.addEventListener("click", function(e){
    MusicPlayer.currentTime = 0;
    MusicPlayer.play();
});
shuffleBtn.addEventListener("click",shuffle);
MusicPlayer.addEventListener("ended", function(e){

    for(let i=0;i<3;i++){
        e.target.src = `${audioSrc[i]}`;
        e.target.play();
    }
});