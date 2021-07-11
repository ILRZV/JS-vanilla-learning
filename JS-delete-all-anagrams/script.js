
function aclean(arr) {
    let m = new Set();
    let answer = [];
    for (let value of arr) {
        value = value.toLowerCase();
        let arr = value.split('');
        arr.sort();
        let strArr = arr.join();
        if(m.has(strArr)) {
            continue;
        } else {    
        m.add(strArr);
        answer.push(value);
        }
    }
    return answer;
  }

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let set = new Set();

console.log( aclean(arr) );
