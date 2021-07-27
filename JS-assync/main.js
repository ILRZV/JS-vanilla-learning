let showBtn = document.querySelector('.show_button');
let dropdownContent = document.querySelector('.dropdown_content');


showBtn.addEventListener('click', function () {
    if (dropdownContent.style.display == 'none') {
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }
})

window.addEventListener('click', function (event) {
    let target = event.target;
    if (target.className != 'show_button') {
        dropdownContent.style.display = 'none';

    }
})

function filterFunction() {
    let input = document.querySelector('#myInput');
    let filter = input.value.toUpperCase();
    let a = dropdownContent.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

let container = document.querySelector('.container');

let scrollArrow = document.createElement('div');
scrollArrow.className = 'scrollArrow';
scrollArrow.innerHTML = "&#9650";
document.body.prepend(scrollArrow);

scrollArrow.onclick = function (event) {
    window.scrollTo(0, 0);
}

function makeBlock(name, text, link) {
    let r = document.createElement('div');
    let nameContainer = document.createElement('h4');
    let textContainer = document.createElement('p');
    let linkContainer = document.createElement('a');
    let button = document.createElement('button');
    nameContainer.textContent = name;
    textContainer.innerHTML = text;
    linkContainer.textContent = link;
    button.textContent = 'Add to cart'
    nameContainer.setAttribute('class', 'blockTitle');
    textContainer.setAttribute('class', 'blockText');
    linkContainer.setAttribute('class', 'blockLink');
    button.setAttribute('class', 'blockButton');
    r.append(nameContainer);
    r.append(textContainer);
    r.append(linkContainer);
    r.append(button);
    r.setAttribute('class', 'rond');
    container.append(r);
}

function makeCartBlock(name, text, link) {
    let r = document.createElement('div');
    let nameContainer = document.createElement('h4');
    let textContainer = document.createElement('p');
    let linkContainer = document.createElement('a');
    nameContainer.textContent = name;
    textContainer.innerHTML = text;
    linkContainer.textContent = link;
    nameContainer.setAttribute('class', 'blockTitle');
    textContainer.setAttribute('class', 'blockText');
    linkContainer.setAttribute('class', 'blockLink');
    r.append(nameContainer);
    r.append(textContainer);
    r.append(linkContainer);
    r.setAttribute('class', 'rond');
    container.append(r);
}


fetchUrl("https://rakuten_webservice-rakuten-marketplace-item-ranking-v1.p.rapidapi.com/services/api/IchibaItem/Ranking/20170628");

function fetchUrl(url) {
    fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "1d7002d083msh695e03dcabd9c6dp189c3fjsnd4b4f9c299e5",
                "x-rapidapi-host": "rakuten_webservice-rakuten-marketplace-item-ranking-v1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(json => {
            for (let i = 1; i < json.Items.length; i++) {
                makeBlock(json.Items[i].Item.itemName.substr(0, 30), `<img src="${json.Items[i].Item.mediumImageUrls[0].imageUrl}" alt="" width="150px" height="150px">`, json.Items[i].Item.itemPrice + '¥');
            }
        })
        .catch(err => {
            console.error(err);
        });
}
newScroll('https://rakuten_webservice-rakuten-marketplace-item-ranking-v1.p.rapidapi.com/services/api/IchibaItem/Ranking/20170628?page=');

function newScroll(url) {
    window.onscroll = scrollFunction;
    let page = 2;

    function scrollFunction() {
        if (pageYOffset > document.documentElement.clientHeight) {
            scrollArrow.style.visibility = 'visible';
        }
        if (pageYOffset < document.documentElement.clientHeight) {
            scrollArrow.style.visibility = 'hidden';
        }
        let maxScroll = document.body.scrollHeight - document.documentElement.clientHeight;
        if (maxScroll - pageYOffset < 200) {
            fetchUrl(url + page);
            console.log(url)
            page++;
        }

    }
}

window.addEventListener('click', sortedNemPage);

function sortedNemPage(event) {
    let target = event.target;
    if (target.closest('nav') && target.dataset.category) {
        let category = target.dataset.category;
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        if (category == 0) {
            fetchUrl('https://rakuten_webservice-rakuten-marketplace-item-ranking-v1.p.rapidapi.com/services/api/IchibaItem/Ranking/20170628');

            newScroll('https://rakuten_webservice-rakuten-marketplace-item-ranking-v1.p.rapidapi.com/services/api/IchibaItem/Ranking/20170628?page=')
            return;
        }

        if (category == 1) {
            fetchUrl('https://rakuten_webservice-rakuten-marketplace-item-ranking-v1.p.rapidapi.com/services/api/IchibaItem/Ranking/20170628?sex=1');

            newScroll('https://rakuten_webservice-rakuten-marketplace-item-ranking-v1.p.rapidapi.com/services/api/IchibaItem/Ranking/20170628?sex=1&page=')
            return;
        }

        if (category == 2) {
            fetchUrl('https://rakuten_webservice-rakuten-marketplace-item-ranking-v1.p.rapidapi.com/services/api/IchibaItem/Ranking/20170628?sex=0');

            newScroll('https://rakuten_webservice-rakuten-marketplace-item-ranking-v1.p.rapidapi.com/services/api/IchibaItem/Ranking/20170628?sex=0&page=')
            return;
        }


    }
}

window.addEventListener('click', localStorageAdd);
let p = sessionStorage.length;
let storageCounter = document.querySelector('.cart');
storageCounter.textContent = p;
let sum = 0;

function localStorageAdd(event) {
    if (event.target.className == 'blockButton') {
        let target = event.target.closest('.rond');
        let saveObj = {};
        let childArray = target.childNodes;
        for (let i = 0; i < childArray.length; i++) {
            saveObj[i] = childArray[i].innerHTML;
        }
        sum += +saveObj[2].slice(0, -1);
        sessionStorage.setItem(p, JSON.stringify(saveObj));
        storageCounter.textContent = sessionStorage.length - 1;
        p++;
    }

    if (event.target.className == 'header-marks' || event.target.closest('.header-marks')) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        window.onscroll = function () {};
        console.log(sessionStorage)
        for (let i = 0; i < sessionStorage.length - 1; i++) {
            let saveObj = JSON.parse(sessionStorage.getItem(i));
            makeCartBlock(saveObj[0], saveObj[1], saveObj[2]);
        }
        showSum();
    }
}

function showSum() {
    let sumContainer = document.createElement('div');
    let sumText = document.createElement('span');
    let sumValue = document.createElement('span')
    let clearButton = document.createElement('button');
    sumText.textContent = 'Your sum: ';
    sumValue.textContent = sum;
    clearButton.textContent = 'Clear cart';
    sumText.setAttribute('class', 'sumText');
    sumValue.setAttribute('class', 'sumValue');
    clearButton.setAttribute('class', 'clearButton');
    sumContainer.append(sumText);
    sumContainer.append(sumValue);
    sumContainer.append(clearButton);
    sumContainer.setAttribute('class', 'sumContainer ');
    container.append(sumContainer);

    clearButton.onclick = function () {
        sessionStorage.clear();
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        storageCounter.textContent = 0;
        p = 0;
        sum = 0;
    }
}