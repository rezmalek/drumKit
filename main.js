function playSound(e) {
    var audio = document.querySelector(`audio[data-key = '${e.keyCode}']`); // element[] is an attribute selector
    var key = document.querySelector(`.key[data-key = '${e.keyCode}']`);
    if(!audio) return; // stop function from running
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e) {
    // at first we console.log(e) to find out propertyName = 'transform
    if (e.propertyName !== 'transform') return; 
    this.classList.remove('playing');    
};

var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);