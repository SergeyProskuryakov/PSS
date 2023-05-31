function zapolnenie () {
    let tbl = document.querySelector('#my_table');
    let user_name = document.querySelector('#imya').value;
    let user_surname = document.querySelector('#familia').value;
    let user_secondname = document.querySelector('#otche').value;
    var user_age = new Date().getFullYear() - document.querySelector('#god').value;
    function status () {
        if (user_age <= 14) {
            return 'ребёнок';
        } else if (14 < user_age && user_age <= 17) {
            return 'подросток';
        } else {
            return 'взрослый';
        }
    }
    tbl.innerHTML += '<tr><td>' + user_surname + ' ' + user_name + ' ' + user_secondname + '</td><td>' + user_age + '</td><td>' + status() + '</td></tr>';
}

// velo
var distance = [];
var times = [];
function velo() {
    let dist = document.getElementById('dist').value;
    let vremya = document.getElementById('vremya').value;
    let table_velo = document.getElementById('table_velo');
    let new_time = new Date();
    table_velo.innerHTML += '<tr><td>' + new_time +'</td><td>' + dist + '</td><td>' + vremya + '</td></tr>';
    distance.push(dist);
    times.push(vremya);
    document.getElementById('avgs').innerHTML = avg(distance, times);
}

function avg(rasst, vrem){
    let sum = 0;
 	let sum_t = 0;
 	let i = 0;
 	while (i < rasst.length) {
 		sum += rasst[i];
 		sum_t += vrem[i];
 		i += 1;
 	}
 	return sum / sum_t;
}