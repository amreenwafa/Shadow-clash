document.onkeydown = function(e) {
    console.log("Pressed key is: ", e.key);
    if (e.key === "ArrowUp") {  // Use "ArrowUp" instead of 38
        var dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
}


setInterval(() => {
    const dino = document.querySelector('.dino');
    const gameover = document.querySelector('.gameover');
    const obstacle = document.querySelector('.obstacle');

    const dx = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
    const dy = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

    const ox = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    const oy = parseInt(window.getComputedStyle(obstacle).getPropertyValue('top'));

    const offsetX = Math.abs(dx - ox);
    const offsetY = Math.abs(dy - oy);

    console.log(offsetX, offsetY);

    if (offsetX < 93 && offsetY < 52) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    }

}, 100);
