function create_div() {
    let new_div = 0;
    for (let i = 0; i < 24; i++){
        new_div = document.createElement('div');
        new_div.className = 'popit';
        new_div.setAttribute('onclick', 'magic(this)');
        document.body.append(new_div);
    }
}
function magic(m) {
    m.style.backgroundColor = 'darkgray';
    m.style.border = '1px solid darkgray'
    let new_div = document.createElement('div');
    new_div.className = 'popit';
    new_div.setAttribute('onclick', 'magic(this)');
    document.body.append(new_div);
}