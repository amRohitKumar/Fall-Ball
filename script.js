const character = document.getElementById('character');
const game = document.getElementById('game');
const scoerBoard = document.getElementById('scoreBoard');
const dot = document.getElementById('dot');
let interval;
let both = 0;
let counter = 0;
var currentBlocks = [];
let characterSpeed = 2;
let barsSpeed = parseFloat(localStorage.getItem("barsSpeed"));

let lvlDes;
if(barsSpeed === 0.7){
    lvlDes = "EASY";
}
else if(barsSpeed === 0.85){
    lvlDes = "MEDIUM";
}
else if(barsSpeed === 1){
    lvlDes = "HARD";
}

function moveLeft() {
    const left = parseInt(window.getComputedStyle(character).getPropertyValue('left')); 
    if(left > 0){
        character.style.left = left - characterSpeed + "px";
        dot.classList.remove('stop');
        dot.classList.remove('frotate');
        dot.classList.add('brotate');
    }
}

function moveRight() {
    const left = parseInt(window.getComputedStyle(character).getPropertyValue('left')); 
    if(left < 380){
        character.style.left = left + characterSpeed + "px";
        dot.classList.remove('stop');
        dot.classList.remove('brotate');
        dot.classList.add('frotate');
    }
}

document.addEventListener("keydown", function (evt) {
    if(both == 0){
        both++;
        if(evt.key === "ArrowLeft"){
           interval = setInterval(moveLeft, 1);
        }
        else if(evt.key === "ArrowRight"){
            interval = setInterval(moveRight,1);
        } 
    }
});

document.addEventListener("keyup", function (evt) {
    console.log("fired");
    dot.classList.add('stop');
    clearInterval(interval);
    both = 0;
});

var blocks = setInterval(() => {
    const blockLast = document.getElementById('block'+ (counter-1));
    const holeLast = document.getElementById('hole' + (counter-1));
    
    if(counter > 0){
        var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue('top'));
    }
    if(blockLastTop < 400 || counter == 0){
        const block = document.createElement('div');
        const hole = document.createElement('div');
        block.classList.add("block");
        hole.classList.add("hole");
        block.id = "block"+counter;
        hole.id = "hole" + counter;
        block.style.top = blockLastTop + 100 + "px";
        hole.style.top = holeLastTop + 100 + "px";
        let random = Math.floor((Math.random()*360)+1);
        hole.style.left = `${random}px`;
        
        game.appendChild(block);
        game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
    }

    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var characterTop = parseFloat(window.getComputedStyle(character).getPropertyValue("top"));
    let drop = 0;
    if(characterTop <= 0){
        alert("Game over. Score : " + (counter -9));
        clearInterval(blocks);
        window.location.replace("./home.html");
    }
    for(var i = 0; i < currentBlocks.length; i++){
        let curr = currentBlocks[i];
        let ihole = document.getElementById("hole"+curr);
        let iblock = document.getElementById("block"+curr);
        let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue('top'));
        let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue('left'));
        iblock.style.top = iblockTop - barsSpeed + "px";
        ihole.style.top = iblockTop - barsSpeed + "px";

        if(iblockTop < -20){
            currentBlocks.shift();
            iblock.remove();
            ihole.remove();
        }

        if(iblockTop - 20 <= characterTop && iblockTop > characterTop){
            drop++;
            if(iholeLeft <=  characterLeft && iholeLeft+20 >= characterLeft){
                drop = 0;
            }
        }
    }
    if(drop === 0){
        if(characterTop < 480){
            character.style.top = characterTop + 2 + "px";
        }
    }
    else{
        character.style.top = characterTop - barsSpeed + "px";
    }
    scoerBoard.innerHTML = `Score : ${counter-9}, MODE: ${lvlDes}`;
    
}, 1);

