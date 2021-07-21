let container = document.querySelector('.gameContainer');
let arrayElements = document.querySelectorAll('.gameBlock');
let numArray = [];

for (let i = 0; i < 16; i++) {
    numArray.push(i);
}

numArray.sort(() => Math.random() - 0.5);

for (let i = 0; i < 16; i++) {
    if (numArray[i] == 0) {
        arrayElements[i].style.backgroundColor = 'grey';
    }
    arrayElements[i].textContent = numArray[i];
}

container.onmousedown = function (event) {

    let target = event.target;
    let targetArrayNum, greyArrayNum;
    for (let i = 0; i < 16; i++) {
        if (target.textContent == arrayElements[i].textContent) {
            targetArrayNum = i;
        }
        if (arrayElements[i].style.backgroundColor == 'grey') {
            greyArrayNum = i;
        }
    }
    if (target.className == 'gameHost' || target.className == 'gameContainer' || target.style.backgroundColor == 'grey' ||
        ((greyArrayNum - targetArrayNum != 1) && (greyArrayNum - targetArrayNum != -1) && (greyArrayNum - targetArrayNum != 4) && (greyArrayNum - targetArrayNum != -4))) {
        return;
    }
    let startLeft = target.getBoundingClientRect().left;
    let startTop = target.getBoundingClientRect().top;
    target.style.position = 'absolute';
    target.style.zIndex = '100';
    let shiftX = event.clientX - target.getBoundingClientRect().left;
    let shiftY = event.clientY - target.getBoundingClientRect().top;
    let elementBelow;
    container.addEventListener('mousemove', movement);

    function movement(e) {
        container.style.cursor = 'not-allowed';
        moveAt(e.pageX, e.pageY);
        target.style.visibility = 'hidden';
        elementBelow = document.elementFromPoint(e.pageX, e.pageY);
        let changePos, greyPos;
        for (let i = 0; i < 16; i++) {
            if (arrayElements[i].textContent == target.textContent) {
                changePos = i;
            }
            if (arrayElements[i].textContent == elementBelow.textContent) {
                greyPos = i;
            }
        }
        if (elementBelow.style.backgroundColor == 'grey' && ((greyPos - changePos == 1) || (greyPos - changePos == -1) || (greyPos - changePos == 4) || (greyPos - changePos == -4))) container.style.cursor = 'pointer';
        target.style.visibility = 'visible';
    }

    function moveAt(pageX, pageY) {
        target.style.left = pageX - shiftX + 'px';
        target.style.top = pageY - shiftY + 'px';
    }
    container.onmouseup = function () {
        container.removeEventListener('mousemove', movement);
        target.style.zIndex = 1;

        let changePos = 0,
            greyPos = 0;
        for (let i = 0; i < 16; i++) {
            if (arrayElements[i].textContent == target.textContent) {
                changePos = i;
            }
            if (arrayElements[i].textContent == elementBelow.textContent) {
                greyPos = i;
            }
        }
        if ((greyPos - changePos == 1) || (greyPos - changePos == -1) || (greyPos - changePos == 4) || (greyPos - changePos == -4)) {
            if (elementBelow.style.backgroundColor == 'grey') {

                let mid = arrayElements[changePos].textContent;
                arrayElements[changePos].textContent = arrayElements[greyPos].textContent;
                arrayElements[greyPos].textContent = mid;
                arrayElements[changePos].style.backgroundColor = 'grey';
                arrayElements[greyPos].style.backgroundColor = 'aquamarine';
            }
        }
        target.style.left = startLeft + 'px';
        target.style.top = startTop + 'px';

        let opos = 0;
        let flag = false;
        for (let i = 0; i < 16; i++) {
            if (arrayElements[i].textContent != opos) {
                flag = false;
                break;
            }
            
            opos++;
            flag = true;
        }
        if (flag) {
            alert('congratulations');
        }
        container.style.cursor = 'default';
    }


}