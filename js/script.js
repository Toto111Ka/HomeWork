window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    
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

    // Options

    let v1 = document.getElementById('v1'),
        v2 = document.getElementById('v2'),
        v3 = document.getElementById('v3'),
        v4 = document.getElementById('v4'),
        v5 = document.getElementById('v5');    

    class Options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            }
        div() { 
            let div = document.createElement('div');
            p.appendChild(div);
            v1.addEventListener('input', function(){
                div.style.cssText = this.height;
            });
            v2.addEventListener('input', function(){
                div.style.cssText = this.width;
            });
            v3.addEventListener('input', function(){
                div.style.cssText = this.bg;
            });
            v4.addEventListener('input', function(){
                div.style.cssText = this.frontSize;
            });
            v5.addEventListener('input', function(){
                div.style.cssText = this.textAlign;
            });
        }
    }
    var options = new Options();
    options.div();

});


}

createDiv() {
    let elem = document.createElement('div');
    document.body.appendChild(elem);
    let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    elem.style.cssText = param;
}
}

const item = new Options(300, 350, "red", 14, "center");

item.createDiv();