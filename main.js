function $(el) {
    return document.querySelector(el);
}

window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {
        var s = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var w = document.body.offsetWidth;
        var h = $('.content').offsetHeight;
        var h_b = $('.parallax').offsetHeight;
        var p = s / h * 100;
        var p_b = s / h_b * 100;
        var o = 1 - 1 / 100 * p_b;

    //console.log(s, w, h, h_b, p, p_b, o)
    

        var z_1 = 1 + (w / 10000 * p_b);
        $('.parallax__fog').style.transform = `scale( ${z_1} )`;
        $('.parallax__fog').style.opacity = o;


        var z_2 = 1 + (w / 5000000 * p)
        $('.parallax__mointen_1').style.transform = `scale( ${z_2} )`;

        var hr = w / 500 * p_b;
        var z_3 = 1 + (w / 5000000 * p_b);
        $('.parallax__mointen_2').style.transform = `translate3d( ${hr}px,0,0) scale( ${z_3})`;

        var hr_2 = w / 1500 * p_b;
        var z_4 = 1 + (w / 100000 * p_b);
        $('.parallax__mointen_3').style.transform = `translate3d(${hr_2}px,0,0) scale(${z_4})`;

        var o_text = 1 / 80 * p_b;
        $('.header-inner-wrap').style.opacity =  o_text;
    })

    //Поворачивающиеся карточки
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const cards = document.querySelectorAll('.card');
        cards.forEach(item => {
            item.addEventListener('click', (evt) => {
                evt.preventDefault();

                let currentCard = evt.target.parentNode.parentNode;

                //перевести во фронт или бэк
                if (currentCard.className == "ekoSystem__list-item") {
                    currentCard = evt.target;
                } else if (evt.target.tagName == "P") {
                    currentCard = evt.target.parentNode;
                } else if (evt.target.tagName == "IMG") {
                    currentCard = evt.target.parentNode.parentNode;
                } else if (evt.target.className == "back") {
                    currentCard = evt.target;
                }

                if (currentCard.childNodes[1].className == "front") {
                    currentCard.childNodes[1].style.transform = 'rotateY(180deg)';
                    currentCard.childNodes[3].style.transform = 'rotateY(360deg)';
                } else if (currentCard.className == "back") {
                    currentCard.parentNode.childNodes[1].style.transform = 'rotateY(360deg)';
                    currentCard.style.transform = 'rotateY(180deg)';
                } else {
                    console.log('ошибка')
                    console.log(evt.target)
                }
            })
        })
    }
})
