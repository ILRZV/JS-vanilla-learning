function createCalendar() {
    let date = new Date();
    date.setDate(1);
    let dayWeek = date.getDay();
    var body = document.body,
        tbl = document.createElement('table');
    tbl.style.width = '100px';
    let maxDay = daysInMonth(date);
    var tr = tbl.insertRow();
    let daysArray = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    for (var j = 0; j < 7; j++) {
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(daysArray[j]));
        td.style.border = '1px solid black';

    }

    let day = 1;
    for (var i = 0; i < 6; i++) {
        var tr = tbl.insertRow();
        if((i * 7 - dayWeek) > maxDay) break;
        for (var j = 0; j < 7; j++) {
            var td = tr.insertCell();
            td.style.border = '1px solid black';
            if ((i * 7 + j) > dayWeek && (i*7 + j - dayWeek - 1) < maxDay) {
                td.appendChild(document.createTextNode(day));
                day++;
                td.style.border = '1px solid black';
            }

        }
    }
    body.appendChild(tbl);
}
createCalendar();

function daysInMonth(date) {
    return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
}

function createTimer() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let div = document.querySelector('.time');
    div.textContent = hours + ':' + minutes + ':' + seconds;
}

setInterval(createTimer, 1000);