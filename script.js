function showMessage(){
    console.log("Скрипт загружен");
}
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        
        if (element.style.display !== 'none') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    }
}

function h(){
    const url = new URLSearchParams(window.location.search);
    const utmTerm = url.get('utm_term');
    const o = document.getElementById('h1');

    if (utmTerm !== null){
        o.innerHTML = utmTerm;
    } 
}

function logCurrentTime(){
    const time = new Date();
    const now = time.toTimeString().split(' ')[0];
    console.log(now);
}

function clickH1(){
    const h1 = document.querySelector('h1');
    if (h1){
        h1.addEventListener('click', () =>{
            alert("Вы кликнули на заголовок - так держать!");
        });
    }
}

function secondSem(){
    const practices = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений"
    ];

    const table = document.querySelector('#table-pract tbody');
    if (table){
        table.innerHTML = '';
        practices.forEach((practice, index) => {
            const row = document.createElement('tr');
            const number = document.createElement('td');
            number.textContent = index + 1;
            row.appendChild(number);

            const practiceName = document.createElement('td');
            practiceName.textContent = practice;
            row.appendChild(practiceName);

            const visiting = document.createElement('td');
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            visiting.appendChild(checkBox);
            row.appendChild(visiting);

            const completion = document.createElement('td');
            const checkBox2 = document.createElement('input');
            checkBox2.type = 'checkbox';
            completion.appendChild(checkBox2);
            row.appendChild(completion);

            table.appendChild(row);
        });
    }
}


function photo(){
    const photo = document.getElementById('girl');
    if (photo){
        photo.addEventListener('mouseover', () => {
            photo.style.transform = 'rotate(180deg)';
            photo.style.transition = 'transform 1s ease';
        })

        photo.addEventListener('mouseout', () => {
            photo.style.transform = 'rotate(0deg)';
        })

        photo.addEventListener('click', () => {
            photo.src = 'i.webp';
        })
        photo.addEventListener('dblclick', () =>{
            alert('Не налегай, у меня не так много любимых преподавателей');
        })
    }
}

showMessage();
logCurrentTime();
document.addEventListener('DOMContentLoaded', () => {
    toggleVisibility('.content');
    h();
    clickH1();
    photo();
    const pract_button = document.getElementById('second');
    if (pract_button){
        pract_button.addEventListener('click', secondSem);
    }
    const h1 = document.getElementById("h1");
    h1.addEventListener('mouseover', () => {
        h1.style.transform = 'scale(1.1)';
        h1.style.transition = 'transform 0.3s ease';
    })
    h1.addEventListener('mouseout', () => {
        h1.style.transform = 'scale(1)';
        h1.style.transition = 'transform 0.3s ease';
    })
    const an = document.getElementById("animated");
    an.addEventListener('click', () =>{
        an.style.backgroundColor = '#dee9f8';
        an.style.transition = 'background-color 0.3s ease';
    })
});




