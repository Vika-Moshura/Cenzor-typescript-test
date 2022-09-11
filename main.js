let badWord = document.querySelector('.writeProhibitedWord');
let add = document.querySelector('.addProhibitedWord');
let reset = document.querySelector('.resetProhibitedWord');
let cenzor = document.querySelector('.cenzor');
let text = document.querySelector('.writeText');
let prohibitedWords = document.querySelector('.prohibitedWords');
let arr = [];
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
    let newArr = text.value.split(' ').map((elem) => {
        return arr.includes(elem) ? '*'.repeat(elem.length) : elem;
    });
    text.value = newArr.join(' ');
});
