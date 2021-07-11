let word = prompt('Enter your word:', '');
let array = word.split('');
let answer = [];
let remainingLetters = array.length;
for(let le in array) {
    answer.push('_');
}

while(remainingLetters > 0) {
    let letter = prompt("If you want to exit, press cancel \n" + answer,'');
    if(letter == null) break;
    if(letter.length > 1) {
      alert('It must be one letter');
      continue;
    }
    for(let i = 0; i < array.length; i++) {
      console.log(letter == array[i]);
      if(letter == array[i]) {
        if(answer[i] != array[i]){
          answer[i] = array[i];
          remainingLetters--;
        }
      }
    }
}
alert("Congratulations:  " + answer.join(''));