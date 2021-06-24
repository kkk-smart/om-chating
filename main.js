var audio = new Audio('om.mp3');
function play() {
        audio.loop = true;
        audio.play();
}

function pause() {
        audio.pause();       
}

function stop() {
        audio.pause();
        audio.currentTime = 0;   
}