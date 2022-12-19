import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(updateCurTime, 300))

function updateCurTime (e){
    localStorage.setItem(TIME, JSON.stringify(e.seconds));
}

const savedTime = JSON.parse(localStorage.getItem(TIME));

if (savedTime) {
    player.setCurrentTime(savedTime)
}
