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

let prevScore = JSON.parse(window.localStorage.getItem("prevScore"));



// const leftBtn = document.getElementById('left');
// const rightBtn = document.getElementById('right');

// window.mobileCheck = function() {
//     let check = false;
//     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
//     return check;
// };

// let res = mobileCheck();
// console.log(res);
// if(res){
//     // mobile browser
//     leftBtn.addEventListener("touchstart", moveLeft);
//     rightBtn.addEventListener('touchstart', moveRight);
// }
// else{
//     leftBtn.classList.add('hideClas');
//     rightBtn.classList.add('hideClas');
// }


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
    if(left < parseFloat(window.getComputedStyle(game).getPropertyValue('width'))-20){
        character.style.left = left + characterSpeed + "px";
        dot.classList.remove('stop');
        dot.classList.remove('brotate');
        dot.classList.add('frotate');
    }
}

// function stop() {
//     const left = parseInt(window.getComputedStyle(character).getPropertyValue('left')); 
//     if(left < parseFloat(window.getComputedStyle(game).getPropertyValue('width'))-20){
//         character.style.left = left + "px";
//     }
// }

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
    // console.log("fired");
    dot.classList.add('stop');
    clearInterval(interval);
    both = 0;
});

var gameHeight = parseFloat(window.getComputedStyle(game).getPropertyValue('height'));
var gameWidth = parseFloat(window.getComputedStyle(game).getPropertyValue('width'));
// console.log(gameHeight);

var blocks = setInterval(() => {
    const beforeBlockLast = document.getElementById('beforeBlock'+ (counter-1));
    const afterBlockLast = document.getElementById('afterBlock'+ (counter-1));
    // const holeLast = document.getElementById('hole' + (counter-1));
    
    if(counter > 0){
        var beforeBlockLastTop = parseInt(window.getComputedStyle(beforeBlockLast).getPropertyValue("top"));
        var afterBlockLastTop = parseInt(window.getComputedStyle(afterBlockLast).getPropertyValue('top'));
    }
    if(beforeBlockLastTop < gameHeight-100 || counter == 0){
        const beforeBlock = document.createElement('div');
        const afterBlock = document.createElement('div');
        // const hole = document.createElement('div');
        beforeBlock.classList.add("beforeBlock");
        afterBlock.classList.add("afterBlock");
        // hole.classList.add("hole");
        beforeBlock.id = "beforeBlock"+counter;
        afterBlock.id = "afterBlock"+counter;
        // hole.id = "hole" + counter;
        
        beforeBlock.style.top = beforeBlockLastTop + 100 + "px";
        afterBlock.style.top = afterBlockLastTop + 100 + "px";
        // hole.style.top = holeLastTop + 100 + "px";
        let random = Math.floor((Math.random()*(gameWidth-40))+1); // [1, 360]
        // hole.style.left = `${random}px`;
        beforeBlock.style.width = random + "px";
        afterBlock.style.width = (gameWidth - random - 40) + "px";
        afterBlock.style.left = random + 40 + "px";
        
        game.appendChild(beforeBlock);
        game.appendChild(afterBlock);
        // game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
    }

    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var characterTop = parseFloat(window.getComputedStyle(character).getPropertyValue("top"));
    let drop = 0;
    if(characterTop <= 0){
        let fscore = counter - 9;
        alert(`Game over ! Score : ${fscore}. Difficulty: ${lvlDes}`);
        if(lvlDes === "EASY" && prevScore[0] < fscore){
            prevScore[0] = fscore;
        }
        else if(lvlDes === "MEDIUM" && prevScore[1] < fscore){
            prevScore[1] = fscore;
        }
        else if(lvlDes === "HARD" && prevScore[2] < fscore){
            prevScore[2] = fscore;
        }
        let tempArr = JSON.stringify(prevScore);
        window.localStorage.setItem("prevScore", tempArr);
        clearInterval(blocks);
        setInterval(() => {
            window.location.href = "./index.html";
        }, 100);
    }
    for(var i = 0; i < currentBlocks.length; i++){
        let curr = currentBlocks[i];
        // let ihole = document.getElementById("hole"+curr);
        let ibeforeBlock = document.getElementById("beforeBlock"+curr);
        let iafterBlock = document.getElementById("afterBlock"+curr);
        let iblockTop = parseFloat(window.getComputedStyle(ibeforeBlock).getPropertyValue('top'));
        // let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue('left'));
        let ibeforeblockleft = parseFloat(window.getComputedStyle(ibeforeBlock).getPropertyValue('width'));
        ibeforeBlock.style.top = iblockTop - barsSpeed + "px";
        iafterBlock.style.top = iblockTop - barsSpeed + "px";
        // ihole.style.top = iblockTop - barsSpeed + "px";

        if(iblockTop < -20){
            currentBlocks.shift();
            ibeforeBlock.remove();
            iafterBlock.remove();
        }

        if(iblockTop - 20 <= characterTop && iblockTop > characterTop){
            drop++;
            if(ibeforeblockleft <=  characterLeft && ibeforeblockleft+20 >= characterLeft){
                drop = 0;
            }
        }
    }
    if(drop === 0){
        if(characterTop < gameHeight-20){
            character.style.top = characterTop + 2 + "px";
        }
    }
    else{
        character.style.top = characterTop - barsSpeed + "px";
    }
    scoerBoard.innerHTML = `Score : ${counter-9}, MODE: ${lvlDes}`;
    
}, 1);

