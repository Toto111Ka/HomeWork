window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    
    let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    p = document.getElementById('prompt'),
    btnAccept = document.getElementsByTagName('button')[0];

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
            let param = `
                height:${this.height}px; 
                width:${this.width}px; 
                background-color:${this.bg}; 
                text-align:${this.textAlign};
                font-size:${this.fontSize}px;`
            ;
            div.style.cssText = param;

        }
    }
    
    btnAccept.addEventListener('onclick', function() {
        let options = new Options(v1.value);
        options.div();
    });
    //(width = '200', height = ' ', bg = 'red', text = 'Text', fontSize = '14', color = 'red', textAlign = 'left');
});

