//Get DOM Elements
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const bar = document.getElementById('bar');
const timer1 = document.getElementById('timer1');

//Functions of Event Listeners
//Function to change from pause to play and vice versa on click
function toggleVideo()
{
    if(video.paused)
    {
        video.play();
    }
    else
    {
        video.pause();
    }
}
//Function to change play and pause icons
function toggleBtn()
{
    if(video.paused)
    {
       play.innerHTML = '<i class="far fa-play-circle fa-3x"></i> ';
    }
    else
    {
        play.innerHTML = '<i class="far fa-pause-circle fa-3x"></i>' ;
    }
}
//Function to updateTime in Progress Bar
function updateTime()
{
    bar.value = (video.currentTime / video.duration) * 100;
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10)
    {
       mins = '0' + String(mins);
    }
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10)
    {
       secs = '0' + String(secs);
    }
    timer1.innerHTML = `${mins}:${secs}`;
}
//Function to stop Video on clicking on Stop Icon
function stopVideo()
{
    video.pause();
    video.currentTime = 0;
}
//Function to update to Video Progress Time
function setVideoProgress()
{
    video.currentTime = (+bar.value * video.duration)/100;
}

//Creating Event Listeners
//1. For Video Player
video.addEventListener('click',toggleVideo);
video.addEventListener('play',toggleBtn);
video.addEventListener('pause',toggleBtn);
video.addEventListener('timeupdate',updateTime);
//2. For Play Button
play.addEventListener('click',toggleVideo);
//3. For Stop Button
stop.addEventListener('click',stopVideo);
//4. For Progress Bar
bar.addEventListener('change',setVideoProgress);