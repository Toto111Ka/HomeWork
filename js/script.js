window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    
    let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    p = document.getElementById('prompt'),
    btnAccept = document.getElementsByTagName('button')[0],
    btnCancel = document.getElementsByTagName('button')[2],
    btnChange = document.getElementsByTagName('button')[1];

    menu.insertBefore(menuItem[2], menuItem[1]);
    document.body.style.background = "url('/img/apple_true.jpg')";

    li.innerHTML = '<button>Пятый пункт</button>';

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

    // Options

    let v1 = document.getElementById('v1'),
        v2 = document.getElementById('v2'),
        v3 = document.getElementById('v3'),
        v4 = document.getElementById('v4'),
        v5 = document.getElementById('v5'),
        v6 = document.getElementById('v6');    

    class Options {
        constructor(width, height, bg, text, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            this.text = text;
            }
        div() {
            let div = document.createElement('div');
            p.appendChild(div);
            div.textContent = this.text;
            let param = `height:${this.height}px; 
                width:${this.width}px; 
                background-color:${this.bg}; 
                font-size:${this.fontSize}px;
                text-align:${this.textAlign};`
            ;
            div.style.cssText = param;
            btnCancel.addEventListener('click', function() {
                div.remove();
            });
        }
    }
    
    btnAccept.addEventListener('click', function() {
        var options = new Options(v1.value, v2.value, v3.value, v4.value, v5.value, v6.value);
        options.div();
    });

   
    //(width = '200', height = ' ', bg = 'red', text = 'Text', fontSize = '14', color = 'red', textAlign = 'left');
});

