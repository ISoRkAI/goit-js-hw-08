import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
    console.log('played the video!');
});

player.on('timeupdate', function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(`${data.seconds}`))
});
    let saveWTime = localStorage.getItem('videoplayer-current-time')
    const parsTime = JSON.parse(saveWTime)
player.setCurrentTime(Number(parsTime)).then(function (seconds) {
    }).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
            // some other error occurred
            break;
    }
});
    

  
