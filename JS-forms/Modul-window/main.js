let prompt = document.querySelector('#prompt-form-container');
prompt.style.visibility = 'hidden';

let start = document.querySelector('#start-button');
start.onclick = function () {
    prompt.style.visibility = 'visible';
}

let cancelButton = prompt.forms.prompt-form.elements.cancel;
console.log(cancelButton);