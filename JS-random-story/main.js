const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);
function result() {
    let newStory = storyText;
    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);
    let storyArray = newStory.split(':');
    for (let i = 0; i < storyArray.length; i++) {
        if (storyArray[i] == 'insertx') {
            storyArray[i] = xItem;
        }
        if (storyArray[i] == 'inserty') {
            storyArray[i] = yItem;
        }
        if (storyArray[i] == 'insertz') {
            storyArray[i] = zItem;
        }
    }
    newStory = storyArray.join('');

    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
    }
    if (document.getElementById("rus").checked) {
        let weight = Math.round(300 * 0.453592);
        let temperature = Math.round((94 - 32) * 5 / 9);
        newStory = newStory.replace('94 fahrenheit', temperature + ' celsium');
        newStory = newStory.replace('300 pounds', weight + ' kilogramm');
    }
    console.log(newStory);

     story.textContent = newStory;
     story.style.visibility = 'visible';
}