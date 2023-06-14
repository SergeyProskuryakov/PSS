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

// ВЫЧИСЛЯЕМ ВОЗРАСТ
class Human {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
        this.age = this.calculate_age();
    }
    calculate_age(){
        const date_now = new Date();
        const year_now = date_now.getFullYear();
        const month_now = date_now.getMonth() + 1;
        const day_now = date_now.getDay();
        let calculate = year_now - this.year;
        
        if (this.month > month_now){
            calculate -= 1;
        } else if (this.month == month_now){
            if (this.day >= day_now){
                calculate -= 1;
            }
        }
        return calculate;
    }
}

const some_people = [
    new Human('Vasya', 2000, 1, 1),
    new Human('Petya', 1989, 4, 17),
    new Human('Masha', 1766, 11, 28),
    new Human('Dasha', 2017, 3, 24),
    new Human('Sasha', 1976, 11, 7)
]
console.log(some_people[0].calculate_age());
console.log(some_people[1].calculate_age());
console.log(some_people[2].calculate_age());
console.log(some_people[3].calculate_age());
console.log(some_people[4].calculate_age());


