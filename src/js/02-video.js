import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const TIME = "videoplayer-current-time";

player.on('timeupdate', function(currentTime) {
    {
        duration: 61.857
        percent: 0.049
        seconds: 3.034
    }
    localStorage.setItem(TIME, JSON.stringify(currentTime));
    console.log(currentTime.seconds)
    console.log(timeMoment)    
});

const savedTime = JSON.parse(localStorage.getItem(TIME));

console.log(savedTime)
let timeToStart = savedTime.seconds;

player.setCurrentTime(timeToStart).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
