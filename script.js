let score = 0; // Initialize score globally

// document.onkeydown = function(e) {
//     console.log("Pressed key is: ", e.key);
//     if(e.key==38){
//         dino = document.querySelector('.dino');
//         dino.classList.add('animateDino');
//         setTimeout(() => {
//             dino.classList.remove('animateDino')
//         }, 700);

//     }
// }



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



// if (e.key === 39) {  
//     dino = document.querySelector9('.dino');
//     dinoX =  parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
//     dino.style.left = dinox + 112 + "px";
        
// } this code is for moving forword



document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        const dino = document.querySelector('.dino');
        let dinoX = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';
    }
});


// if (e.key === 37) {  
//     dino = document.querySelector9('.dino');
//     dinoX =  parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
//     dino.style.left = (dinox - 112) + "px";
        
// } this code is for moving backword

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {  // Changed 37 to 'ArrowLeft'
        var dino = document.querySelector('.dino');  // Corrected typo
        var dinoX = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));

        if (!isNaN(dinoX)) {  // Check if dinoX is a number
            dino.style.left = (dinoX - 112) + "px";
        }
    }
});



// this is the code which donot work
// setInterval(() => {
//     dino = document.querySelector('.dino');
//     gameover = document.querySelector('.gameover');
//     obstacle =  document.querySelector('obstacle');

//     dx =parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
//     dy =parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    
//     ox =parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
//     ox =parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
   
//     offsetX = Math.abs(dx-ox);
//     offsetY = Math.abs(dy-oy);
//     console.log(offsetX, offsetY)
//     if(offsetX < 93 && offsetY <52)
//         {
//             gameover.style.visibility = 'visible';
//             obstacle.classList.remove('obstacleAni')
//         }

// }, 100); this code is for moving upward




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
    
    else{
        score += 1;
        updateScore(score);
    }

}, 100);

// function updateScore(score){
//    ServiceWorkerContainer.innerHTML = "Your Score: " + score
// }

function updateScore(score) {
    document.getElementById('scoreCont').innerHTML = "Your Score: " + score;
}

let gameInterval = setInterval(gameLoop, 100);