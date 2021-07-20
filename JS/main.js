const windowOuterWidth = window.outerWidth
const windowOuterHeight = window.outerHeight
console.log(windowOuterHeight + " " + windowOuterWidth);

let n = 30;
let width = Math.floor(windowOuterWidth / n);
let height = width;
let m = Math.floor(windowOuterHeight / width);

let table = tableCreate(n, m);
function tableCreate(m, n) {
    let body = document.body;
    let tbl = document.createElement('table');
    for (let i = 0; i < n; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < m; j++) {
            let td = tr.insertCell();
            td.setAttribute('width', width);
            td.setAttribute('height', width);
            td.appendChild(document.createTextNode(''));
        }
    }
    body.appendChild(tbl);
    return tbl;
}



let dr = document.querySelector('.draw-button');
let drFlag = true;
dr.onclick = function () {
    if(drFlag) {
        draw();
        drFlag = false;
    } else {
        nodraw();
        drFlag = true;
    }
}

function draw() {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let cell = table.rows[i].cells[j];
            cell.onmouseover = function () {
                cell.style.backgroundColor = 'black';
            }
        }
    }
}

function nodraw() {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let cell = table.rows[i].cells[j];
            cell.onmouseover = function () {}
        }
    }
}

let cl = document.querySelector('.clean-button');
cl.onclick = clean;

function clean() {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let cell = table.rows[i].cells[j];
            cell.style.backgroundColor = 'white';
        }
    }
}

let randomizeNum = 100;
let tickMs = 10;

let rndFlag = true;
let rnd = document.querySelector('.random-button');
let intervals = [];
rnd.onclick = function () {
    if(rndFlag) {
        makeRandom();
        rndFlag = false;
    } else {
        resetRandom();
        rndFlag = true;
    }
}

function makeRandom() {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let cell = table.rows[i].cells[j];
            let interval = setInterval(function() {
                let tick = Math.floor(Math.random() * randomizeNum);
                if(tick == 0) {
                    cell.style.backgroundColor = "black";
                } 
                if(tick == 1) {
                    cell.style.backgroundColor = "white";
                }
            }, tickMs);
            intervals.push(intervals);
        }
    }
}
console.log(intervals);
function resetRandom() {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let cell = table.rows[i].cells[j];
            clearInterval(intervals[i*j]);
        }
    }
}
