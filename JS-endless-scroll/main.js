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
    nameContainer.textContent = name;
    textContainer.textContent = text;
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
for (let i = 0; i < 30; i++) {
    makeBlock('TestTitle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, inventore. Iure magnam modi inventore alias, dolores repudiandae deserunt neque facilis', 'some');
}

window.addEventListener('scroll', scrollFunction);


function scrollFunction() {
    if (pageYOffset > document.documentElement.clientHeight) {
        scrollArrow.style.visibility = 'visible';
    }
    if (pageYOffset < document.documentElement.clientHeight) {
        scrollArrow.style.visibility = 'hidden';
    }
    let maxScroll = document.body.scrollHeight - document.documentElement.clientHeight;
    if (maxScroll - pageYOffset < 200) {
        for (let i = 0; i < 30; i++) {
            makeBlock('TestTitle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, inventore. Iure magnam modi inventore alias, dolores repudiandae deserunt neque facilis', 'some');
        }
    }
}