let button = document.querySelector('#click-button');
button.onclick = showMenu;
let ishide = true;
let menu = document.createElement('div');
menu.innerHTML = 'First <br> second <br> third'
button.appendChild(menu);
menu.style.display = 'none';
function showMenu() {
    if (ishide) {
        menu.style.display = 'block';
        ishide = false;
    } else {
        menu.style.display = 'none';
        ishide = true;  
    }
}

let removePar1 = document.querySelector('.remove-button1');
let par1 = document.querySelector('.pane1');
removePar1.onclick = function() {
    par1.style.display = 'none';
}
let removePar2 = document.querySelector('.remove-button2');
let par2 = document.querySelector('.pane2');
removePar2.onclick = function() {
    par2.style.display = 'none';
}
let removePar3 = document.querySelector('.remove-button3');
let par3 = document.querySelector('.pane3');
removePar3.onclick = function() {
    par3.style.display = 'none';
}