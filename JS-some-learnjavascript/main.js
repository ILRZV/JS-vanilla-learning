let container = document.querySelector('.paragraphContainer');
let link = document.querySelector('.paragraphLink');

let tooltipElem;
document.onmouseover = function (event) {
    // let target = event.target;
    // let tooltipHtml = target.dataset.tooltip;
    // if(!tooltipHtml) {
    //     let relativeTarget = target.parentNode;
    //     while(relativeTarget) {
    //         console.log(relativeTarget);
    //         if(relativeTarget != '#document' && relativeTarget.dataset.tooltip) {
    //             target = relativeTarget;
    //             tooltipHtml = target.dataset.tooltip;
    //             break;
    //         }
    //         relativeTarget = relativeTarget.parentNode;
    //     }
    //     if(!relativeTarget) return;
    // }
    // if(!tooltipHtml) {
    //     return;
    // }
    let anchorElem = event.target.closest('[data-tooltip]');

    if (!anchorElem) return;
    let target = anchorElem;
    let tooltipHtml = target.dataset.tooltip;

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();
    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) {
        left = 0;
    }
    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = 0;
    }
    console.log(left, top);
    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
}

document.onmouseout = function (event) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
}

let dropfield = document.querySelector('.dropField');
let dropitem = document.querySelector('.dropItem');

function makeMove(pageX) {
    dropitem.style.left = pageX + 'px';
}

function moveOn(event) {
    if (event.pageX > dropfield.offsetWidth - 10) {
        return;
    }
    makeMove(event.pageX);
}

dropfield.addEventListener('mousemove', moveOn);

runOnKeys(
    () => alert("Привет!"),
    "KeyQ",
    "KeyW"
);
let keysOn = {};

function runOnKeys(func, ...args) {
    document.addEventListener('keydown', checkKeys);

    function checkKeys(event) {
        keysOn[event.code] = true;

        for(let i = 0; i < args.length; i++) {
            if(keysOn[args[i]] != true) {
                return;
            } 
        }
        func();
        keysOn = {};
    }

    document.addEventListener('keyup', deleteKeys);

    function deleteKeys(event) {
        keysOn[event.code] = false;
    }
}
//document.addEventListener('keydown', run);