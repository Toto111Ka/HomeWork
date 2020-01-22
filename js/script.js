let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    p = document.getElementById('prompt');

menu.insertBefore(menuItem[2], menuItem[1]);
document.body.style.background = "url('/img/apple_true.jpg')";

li.innerHTML = '<li>Пятый пункт</li>';

li.classList.add('menu-item');
menu.appendChild(li);

title.textContent = 'Мы продаем подлинную только технику Apple';

adv.remove();

// function question () {
//     let a = prompt("Как вы относитесь к технике apple? ", '');
//         if (typeof(a)=== 'string' && typeof(a) !=null && a != '' && a.length < 50){
//         return "Коментарий от пользователя: " + a; 
//         } else {
//     let c = "Пользователь пока что не дал ответа";
//     return c;
//     }
// }
// p.innerText = question(); 