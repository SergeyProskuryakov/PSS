// goroda
var vse_goroda = ['москва', 'ялта', 'алушта'];
function find_city(pred_city){
    let last_letter = pred_city[pred_city.length - 1];
    for (let i = 0; i < vse_goroda.length; i += 1){
        if (last_letter === vse_goroda[i][0]){
            return vse_goroda[i];
        }
    }
    return '';
}
function chtenie(){
    // let gorod = document.querySelector('#bambam');
    let nazvanie = bambam.value;
    goroda(nazvanie);
    let next_city = find_city(nazvanie);
    goroda(next_city);
}
function goroda(name){
    let cities = document.querySelector('#cities');
    let li = document.createElement('li');
    let txt = document.createTextNode(name);
    li.appendChild(txt);
    cities.appendChild(li);
}

// avto
class Car {
    constructor(marka, model, nomer, color, god){
        this.marka = marka;
        this.model = model;
        this.nomer = nomer;
        this.color = color;
        this.god = god;
    }
}

var lada = new Car('Lada', 'Kalina', 'x666xx78', 'red', 2015);
console.log(lada);
var niva = new Car('Niva', '4x4', 'x777xx78', 'blue', 1978);
console.log(niva);

function dobav(){
    document.body.innerHTML += '<table><tr><td>' + lada.marka + '</td><td>' + lada.model + '</td><td>' + lada.nomer + '</td><td>' + lada.color + '</td><td>' + lada.god + '</td></tr></table>';
    document.body.innerHTML += '<table><tr><td>' + niva.marka + '</td><td>' + niva.model + '</td><td>' + niva.nomer + '</td><td>' + niva.color + '</td><td>' + niva.god + '</td></tr></table>';
}