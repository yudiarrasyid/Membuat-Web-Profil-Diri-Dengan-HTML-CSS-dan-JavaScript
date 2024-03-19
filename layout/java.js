const txtElement = ['Selamat Datang', 'Salam Kenal'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function looping() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(looping, 500);


})();