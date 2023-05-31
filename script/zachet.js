function new_rab() {
    let tbl = document.getElementById('table');
    let fio = document.getElementById('input_1').value;
    let god = document.getElementById('input_2').value;
    let prof = document.getElementById('input_3').value;
    tbl.innerHTML += '<tr><td>' + fio + '</td>' + '<td>' + god + '</td><td>' + prof + '</td></tr>';
}
// function vozrast() {
//     let new_time = new Date();
//     let new_year = new_time.getFullYear();
//     let god = document.getElementsByClassName('god_roj').value;
//     return new_year - god;
// }
function opis() {
    let opisanie = document.getElementById('opisanie');
    opisanie.style.display = 'block';
}
function del_opis() {
    document.getElementById('opisanie').style.display = 'none';
}
