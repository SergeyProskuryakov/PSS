// ТАБЛИЦА С ОПИСАНИЕМ
class Tovar {
    constructor(name, color, opis){
        this.name = name;
        this.color = color;
        this.opis = opis;
    }
}
var vet = new Tovar('веточка', 'коричневая', 'сухая');
var bum = new Tovar('бумажка', 'серая', 'мятая');
var tuch = new Tovar('тучка', 'белая', 'воздушная');

function opisanie(){
    // каркас
    const tbl = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    tbl.classList = 'table';
    tbl.append(thead);
    tbl.append(tbody);

    // подключение
    document.body.prepend(tbl);

    // шапка
    const tr_head = document.createElement('tr');
    const th_1 = document.createElement('th');
    const th_2 = document.createElement('th');
    const th_3 = document.createElement('th');
    let txt = document.createTextNode('Название');

    th_1.append(txt);
    txt = document.createTextNode('цвет');
    th_2.append(txt);
    txt = document.createTextNode('состояние');
    th_3.append(txt);
    tr_head.append(th_1);
    tr_head.append(th_2);
    tr_head.append(th_3);
    thead.append(tr_head);

    // веточка
    const tr_vet = document.createElement('tr');
    const td_vet_1 = document.createElement('td');
    const td_vet_2 = document.createElement('td');
    const td_vet_3 = document.createElement('td');
    // 1 ячейка веточки
    txt = document.createTextNode(vet['name']);
    tbody.append(tr_vet);
    tr_vet.append(td_vet_1);
    td_vet_1.append(txt);
    // 2 ячейка веточки
    txt = document.createTextNode(vet['color']);
    tr_vet.append(td_vet_2);
    td_vet_2.append(txt);
    // 3 ячейка веточки
    txt = document.createTextNode(vet['opis']);
    tr_vet.append(td_vet_3);
    td_vet_3.append(txt);
    
    // бумажка
    const tr_bum = document.createElement('tr');
    const td_bum_1 = document.createElement('td');
    const td_bum_2 = document.createElement('td');
    const td_bum_3 = document.createElement('td');
    // 1 ячейка бумажки
    txt = document.createTextNode(bum['name']);
    tbody.append(tr_bum);
    tr_bum.append(td_bum_1);
    td_bum_1.append(txt);
    // 2 ячейка бумажки
    txt = document.createTextNode(bum['color']);
    tr_bum.append(td_bum_2);
    td_bum_2.append(txt);
    // 3 ячейка бумажки
    txt = document.createTextNode(bum['opis']);
    tr_bum.append(td_bum_3);
    td_bum_3.append(txt);

    // тучка
    const tr_tuch = document.createElement('tr');
    const td_tuch_1 = document.createElement('td');
    const td_tuch_2 = document.createElement('td');
    const td_tuch_3 = document.createElement('td');
    // 1 ячейка тучки
    txt = document.createTextNode(tuch['name']);
    tbody.append(tr_tuch);
    tr_tuch.append(td_tuch_1);
    td_tuch_1.append(txt);
    // 2 ячейка тучки
    txt = document.createTextNode(tuch['color']);
    tr_tuch.append(td_tuch_2);
    td_tuch_2.append(txt);
    // 3 ячейка тучки
    txt = document.createTextNode(tuch['opis']);
    tr_tuch.append(td_tuch_3);
    td_tuch_3.append(txt);
}

// КОРЗИНА
var all_sum = {};
function add(input_id) {
    let kol_vetok = document.getElementById('input_id').value;
    let cena_vetok = document.getElementById('cena_' + input_id).innerHTML;
    let sum_vetok = cena_vetok * kol_vetok;
    document.getElementById('kol_' + input_id).innerHTML = kol_vetok;
    document.getElementById('sum_' + input_id).innerHTML = sum_vetok;
    all_sum[input_id] = sum_vetok;
    document.getElementById('itogo').innerHTML = itogo(all_sum); 
    tr_vet.style.display = 'contents';
}

function itogo(all_sum) {
    let sum = 0;
    for (key in all_sum) {
        sum += all_sum[key];
    }
    return sum;
}

function del_vet(){
    let tr_vet = document.querySelector('#tr_vet');
    let sum_vetok = parseInt(document.getElementById('sum_vetka').innerHTML);
    tr_vet.style.display = 'none';
    all_sum['vetka'] = 0;
    document.getElementById('itogo').innerHTML = itogo(all_sum); 
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
// function itogo(all_sum) {
//     let sum = 0;
//     let i = 0;
//     while (i < all_sum.length) {
//         sum += all_sum[i];
//         i += 1;
//     }
//     return sum;
// }


const itog = {};
function dobavlenie(){
    const cena_vetok = document.querySelector('#cena_vetka').value;
    const kolichestvo_vetok = document.querySelector('#vetka').value;
    const obsh_stoimost_vetok = cena_vetok * kolichestvo_vetok;
    itog.vet = obsh_stoimost_vetok;
    document.querySelector('#itogo').innerHTML = itogo(all_sum); 

}