let container = document.querySelector(".container");

let towers = {
  tower0: document.querySelector(".tower1"),
  tower1: document.querySelector(".tower2"),
  tower2: document.querySelector(".tower3"),
};
let size = 10;

let towersArray = [[], [], []];
const width = 200;
const height = Math.floor(600 / size);
let nextPlankWidthDiff = 0;
let diffSize = Math.floor(width / size);
for (let i = 0; i < size; i++) {
  let pushedTower = Math.floor(Math.random() * 3);
  towersArray[pushedTower].push(size - i - 1);
  let plank = document.createElement("div");
  plank.style.backgroundColor = randomColor();
  plank.style.width = width - nextPlankWidthDiff + "px";
  plank.style.height = height + "px";
  nextPlankWidthDiff += diffSize;
  towers[`tower${pushedTower}`].appendChild(plank);
}
function randomColor() {
  return (
    `rgb(` +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ")"
  );
}
// towersArray = [[8, 7, 2, 0], [9, 4], [6, 5, 3, 1]];
console.log(towersArray);

console.log(findIndexOfArray(0));
function findIndexOfArray(value) {
  for (let i = 0; i < 3; i++) {
    let n = towersArray[i].findIndex((element) => {
      return element == value;
    });
    if (n > -1) {
      // let position = {
      //     arrayNum : i,
      //     positionInArray : n
      // }
      return i;
    }
  }
  return 0;
}

function moveTower(number, towerFrom, towerTo) {
  if (towerFrom == towerTo) {
    return;
  }
  if (number == 1) {
    towersArray[towerTo].push(towersArray[towerFrom].pop());
    return;
  }
  let thirdTowerNum = 3 - towerFrom - towerTo;
  moveTower(number - 1, towerFrom, thirdTowerNum);
  towersArray[towerTo].push(towersArray[towerFrom].pop());
  moveTower(number - 1, thirdTowerNum, towerTo);
}

setTimeout(hanoyTowerResolve, 3000, 1, findIndexOfArray(0));
function hanoyTowerResolve(sizeOfTheTower, fromTower) {
  if (sizeOfTheTower == size) {
    return;
  }
  console.log(sizeOfTheTower);
  let toTower = findIndexOfArray(sizeOfTheTower);
  moveTower(sizeOfTheTower, fromTower, toTower);
  hanoyTowerResolve(sizeOfTheTower + 1, toTower);
  if (sizeOfTheTower == size - 1) console.log(towersArray);
}
