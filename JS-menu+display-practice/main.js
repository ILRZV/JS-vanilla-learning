let liArray = document.querySelectorAll('li');
let treeContainer = document.querySelector('.tree');
treeContainer.onclick = function (event) {
    let tg = event.target;
    if (tg.nodeName != 'SPAN') return;
    let childrenContainer = tg.parentNode.querySelector('ul');
    if (childrenContainer) childrenContainer.hidden = !childrenContainer.hidden;
}



let paneContainer = document.querySelector('.pane-container');
paneContainer.onclick = function (event) {
    let tag = event.target;
    let pane = tag.dataset.div;
    if (pane == undefined) return;
    let div = document.querySelector('.' + pane);
    div.style.display = 'none';
}

let block;
document.onmouseover = function (event) {
    let tg = event.target;
    let text = tg.dataset.tooltip;
    if (!text) return;
    let coords = tg.getBoundingClientRect();
    block = document.createElement('div');
    block.innerHTML = text;
    document.body.append(block);
    block.className = 'tooltip';

    let left = coords.left + (tg.offsetWidth - block.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - block.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + tg.offsetHeight + 5;
    }

    block.style.left = left + 'px';
    block.style.top = top + 'px';
}

document.onmouseout = function (e) {

    if (block) {
        block.remove();
        block = null;
    }

}


let acontent = document.querySelector('#a-content');
acontent.addEventListener('click', function (event) {
    let target = event.target.closest('a');
    if (!target.nodeName == 'A') return;
    let href = target.getAttribute('href');
    let answer = confirm('Do you want to leave this page?');
    if (!answer) {
        event.preventDefault();
    }
});

let tcomand = document.querySelector('#tcomand');
let arrayChild = tcomand.children;
tcomand.addEventListener('click', function (event) {
    let target = event.target;
    if (!event.ctrlKey) {
        for (let i = 0; i < arrayChild.length; i++) {
            arrayChild[i].style.backgroundColor = 'rgb(199, 199, 199)';
        }
    }
    target.style.backgroundColor = 'yellow';
});
tcomand.onmousedown = function() {
    return false;
} 