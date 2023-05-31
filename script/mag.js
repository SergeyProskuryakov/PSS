var all_sum = [];

class Tovar {
    constructor(name, color, opis){
        this.name = name;
        this.color = color;
        this.opis = opis;
    }
}
var vet = new Tovar('Веточка', 'коричневая', 'сухая');
var bum = new Tovar('Бумажка', 'серая', 'мятая');
var tuch = new Tovar('Тучка', 'белая', 'воздушная');

function opisanie(){
    let tbl = document.createElement('table');
    document.appendChild(tbl);
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let txt = document.createTextNode(vet['name']);
    let zap = tbl.appendChild(tr); // ???
    zap = tr.appendChild(td);
    zap = td.appendChild(txt);
    txt = document.createTextNode(vet['color']);
    zap = tr.appendChild(td);
    zap = td.appendChild(txt);
    txt = document.createTextNode(vet['opis']);
    zap = tr.appendChild(td);
    zap = td.appendChild(txt);
    txt = document.createTextNode(bum['name']);
    zap = tbl.appendChild(tr);
    zap = tr.appendChild(td);
    zap = td.appendChild(txt);
    txt = document.createTextNode(bum['color']);
    zap = tr.appendChild(td);
    zap = td.appendChild(txt);
    txt = document.createTextNode(bum['opis']);
    zap = tr.appendChild(td);
    zap = td.appendChild(txt);
    txt = document.createTextNode(tuch['name']);
    zap = tbl.appendChild(tr);
    zap = tr.appendChild(td);
    zap = td.appendChild(txt);
    txt = document.createTextNode(tuch['color']);
    zap = tr.appendChild(td);
    zap = td.appendChild(txt);
    txt = document.createTextNode(tuch['opis']);
    zap = tr.appendChild(td);
    zap = td.appendChild(txt);
}

function func_vet() {
    let kol_vetok = document.getElementById('vetka').value;
    let cena_vetok = document.getElementById('cena_vet').innerHTML;
    let sum_vetok = cena_vetok * kol_vetok;
    document.getElementById('kol_vet').innerHTML = kol_vetok;
    document.getElementById('sum_vet').innerHTML = sum_vetok;
    all_sum.push(sum_vetok);
    document.getElementById('itogo').innerHTML = itogo(all_sum); 
}

function func_bum() {
    let kol_bumajek = document.getElementById('bumajka').value;
    let cena_bumajek = document.getElementById('cena_bum').innerHTML;
    let sum_bumajek = cena_bumajek * kol_bumajek;
    document.getElementById('kol_bum').innerHTML = kol_bumajek;
    document.getElementById('sum_bum').innerHTML = sum_bumajek;
    all_sum.push(sum_bumajek);
    document.getElementById('itogo').innerHTML = itogo(all_sum); 
}

function func_tuch() {
    let kol_tuchek = document.getElementById('tuchka').value;
    let cena_tuchek = document.getElementById('cena_tuch').innerHTML;
    let sum_tuchek = cena_tuchek * kol_tuchek;
    document.getElementById('kol_tuch').innerHTML = kol_tuchek;
    document.getElementById('sum_tuch').innerHTML = sum_tuchek;
    all_sum.push(sum_tuchek);
    document.getElementById('itogo').innerHTML = itogo(all_sum); 
}

function itogo(all_sum) {
    let sum = 0;
    let i = 0;
    while (i < all_sum.length) {
        sum += all_sum[i];
        i += 1;
    }
    return sum;
}
function del_vet(){
    let tr_vet = document.querySelector('#tr_vet');
    tr_vet.remove();
    all_sum.remove(sum_vetok); // ne rabotaet
}
function del_bum(){
    let tr_bum = document.querySelector('#tr_bum');
    tr_bum.remove();
    all_sum.remove(sum_bumajek); // ne rabotaet
}
function del_tuch(){
    let tr_tuch = document.querySelector('#tr_tuch');
    tr_tuch.remove();
    all_sum.remove(sum_tuchek); // ne rabotaet
}