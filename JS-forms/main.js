let table = document.querySelector('#bagua-table');
let areaTable = null;
let isPressed = false;
let nowTargetTable = null;
table.onclick = function (event) {
    let target = event.target.closest('.okButton, .cancelButton, td');
    let okButton, cancelButton;
    if (!target) {
        console.log('lol');
        return;
    }
    okButton = document.querySelector('.okButton');
    cancelButton = document.querySelector('.cancelButton');
    if (target.className == 'okButton') {
        isPressed = false;
        addText();
    }

    if (target.className == 'cancelButton') {
        isPressed = false;
        cancelAdd();
    }
    if (target.nodeName == 'TD') {
        if (nowTargetTable) return;
        nowTargetTable = target;
        tableClick();
    }


    function addText() {
        nowTargetTable.innerHTML = areaTable.value;
        areaTable.replaceWith(nowTargetTable);
        okButton.remove();
        cancelButton.remove();
        nowTargetTable = null;
    }

    function cancelAdd() {
        areaTable.replaceWith(nowTargetTable);
        okButton.remove();
        cancelButton.remove();
        nowTargetTable = null;
    }


    function tableClick() {
        if (!isPressed) {
            isPressed = true;
            areaTable = document.createElement('textArea');
            areaTable.style.width = 160 + 'px';
            areaTable.style.height = 90 + 'px';
            areaTable.value = target.innerHTML;
            target.replaceWith(areaTable);
            areaTable.focus();
            areaTable.insertAdjacentHTML('afterend', '<button class="okButton">Ok</button> <button class="cancelButton">Cancel</button>');
        }
    }

}

let mouse = document.querySelector('#mouse');

mouse.tabIndex = 1;

mouse.onclick = function () {
    this.style.left = this.getBoundingClientRect().left + 'px';
    this.style.top = this.getBoundingClientRect().top + 'px';

    mouse.style.position = 'fixed';
    mouse.addEventListener('keydown', funcK);

}
mouse.addEventListener('keydown', funcK);

function funcK(event) {
    console.log(event);
    if (event.key == "w") {
        console.log('w');
        mouse.style.top = mouse.getBoundingClientRect().top - 40 + 'px';
    }
    if (event.key == "a") {
        mouse.style.left = mouse.getBoundingClientRect().left - 40 + 'px';
    }
    if (event.key == "s") {

        mouse.style.top = mouse.getBoundingClientRect().top + 40 + 'px';
    }
    if (event.key == "d") {
        mouse.style.left = mouse.getBoundingClientRect().left + 40 + 'px';
    }
}




let moneyBefore = document.querySelector('#money-before');
let moneyAfter = document.querySelector('#money-after');
let greenDiagram = document.querySelector('#height-after');
greenDiagram.style.height = 100 + 'px';

let initial = +document.forms.calculator.elements.money.value;
let years = +document.forms.calculator.elements.months.value/12;
let interests = +document.forms.calculator.elements.interest.value/100;
moneyAfter.innerHTML = Math.round(initial * (1 + interests * years));

let input = document.forms.calculator.elements.money;
input.oninput = function () {
    initial = +this.value;
    moneyBefore.innerHTML = initial;
    moneyAfter.innerHTML = Math.round(initial * (1 + interests * years));
    greenDiagram.style.height = 100 * moneyAfter.innerHTML / initial +'px';
}

input = document.forms.calculator.elements.months;
input.oninput = function () {
    years = +this.value/12;
    moneyAfter.innerHTML = Math.round(initial * (1 + interests * years));
    greenDiagram.style.height = 100 * moneyAfter.innerHTML / initial +'px';
}

input = document.forms.calculator.elements.interest;
input.oninput = function () {
    interests = +this.value/100;
    moneyAfter.innerHTML = Math.round(initial * (1 + interests * years));
    greenDiagram.style.height = 100 * moneyAfter.innerHTML / initial +'px';
}

let result = Math.round(initial * (1 + interests * years));