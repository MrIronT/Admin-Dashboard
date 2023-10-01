document.getElementById('menu-btn').onclick = function(){
    let menuSide = document.getElementById('menu');
        menuSide.style.visibility = 'visible';
}

document.getElementById('close-btn').onclick = function(){
    let menuSide = document.getElementById('menu');
        menuSide.style.visibility = 'hidden';
}