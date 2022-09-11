let badWord = document.querySelector('.writeProhibitedWord') as HTMLInputElement;
let add = document.querySelector('.addProhibitedWord') as HTMLButtonElement;
let reset = document.querySelector('.resetProhibitedWord') as HTMLButtonElement;
let cenzor = document.querySelector('.cenzor') as HTMLButtonElement;
let text = document.querySelector('.writeText') as HTMLTextAreaElement;
let prohibitedWords = document.querySelector('.prohibitedWords') as HTMLSpanElement;
let arr: any[] = [];
add.addEventListener('click', function () {
    if (badWord.value == '') {
        badWord.placeholder = 'Please, write a word!';
        badWord.style.border = '1px solid red';
    }
    else {
        prohibitedWords.textContent += `${badWord.value},`;
        arr.push(badWord.value);
        badWord.value = '';
        badWord.placeholder = 'Word here...';
        badWord.style.border = 'none';

    }
});
reset.addEventListener('click', function () {
    prohibitedWords.textContent = '';
    arr = [];
    text.value = '';
});
cenzor.addEventListener('click', function () {
    let newArr: any[] = text.value.split(' ').map((elem: any): Array<any> => {
        return arr.includes(elem) ? '*'.repeat(elem.length) : elem;
    });
    text.value = newArr.join(' ');
})

