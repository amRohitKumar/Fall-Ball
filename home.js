const btn = document.getElementById('start');

btn.addEventListener('click', () => {
    const lvl1 = document.getElementById('lvl1');
    const lvl2 = document.getElementById('lvl2');
    const lvl3 = document.getElementById('lvl3');
    if(lvl1.checked){
        console.log("1");
        localStorage.setItem("barsSpeed", "0.7");
    }
    if(lvl2.checked){
        console.log("2");
        localStorage.setItem("barsSpeed", "0.85");
    }
    if(lvl3.checked){
        console.log("3");
        localStorage.setItem("barsSpeed", "1");
    }
    window.location.replace("./index.html");
})
