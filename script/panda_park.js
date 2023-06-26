function proverka_rosta(){
    const rost = document.querySelector('#input').value;

    if (rost > 180){
        document.querySelector('#trassa').value = 'Зачем Вам тут кататься? идите в бар!';
    }
    else if (rost <= 180 && rost >= 170){
        document.querySelector('#trassa').value = 'Вам доступна чёрная трасса';
    }
    else if (rost < 170 && rost >= 155){
        document.querySelector('#trassa').value = 'Вам доступна красная трасса';
    }
    else if (rost < 155 && rost >= 140){
        document.querySelector('#trassa').value = 'Вам доступна синяя трасса';
    }
    else{
        document.querySelector('#trassa').value = 'Для самых маленьких - зелёная трасса (с родителями)';
    }
}