window.addEventListener('load', function() {
    const sounds = this.document.querySelectorAll('.sound');
    const pads = this.document.querySelectorAll('.pads div');
    const visual = this.document.querySelector('.visual');

    const colors = [
        '#8b0000',
        '#006400',
        '#8b008b',
        '#000080',
        '#008b8b',
        '#b8860b'
    ];
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    // Create Bubbles

    const createBubbles = index => {
        const bubble = this.document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    };
});
