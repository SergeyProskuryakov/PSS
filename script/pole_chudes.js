function proverka() {
    let slovo = 'слово';
    let bukva = document.querySelector('#buk').value;
    let i = 0;
    while (i < 5) {
        if (slovo[i] == bukva){
            let txt = document.querySelector('#zv' + i);
            txt.value = bukva;
        }
        i++;
    }
}