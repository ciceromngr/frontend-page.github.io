(() => {
    let root = {
        colorPrimary: '#124EB0',
        colorSecundary: '#0B3270',
        colorFontPrimary: '#E8EBE6',
        sucessAlert: '#1AD937',
        bgDark: '#232423',
        bgLightmode: '#E8EBE6',
        fontColorLightMode: '#000',
        bgDarkMode: '#171716'
    }
    var body = document.querySelector('body');
    let cards = document.querySelectorAll('.card');
    let logos = document.querySelectorAll('.logo');
    let nav = document.querySelector('.navbar');
    var btn = document.querySelector('#switch1');
    var footer = document.querySelector('footer');

    let time = new Date();
    let hora = time.getHours();

    function darkMode() {
        body.style.backgroundColor = root.bgDarkMode;
        nav.style.backgroundColor = root.bgDark;
        body.style.color = root.colorFontPrimary;
        btn.value = 'on';
        for (let card of cards) {
            card.style.backgroundColor = root.bgDark;
            card.style.color = root.colorFontPrimary;

        }
        for (let logo of logos) {
            logo.style.backgroundColor = root.bgDark;
            logo.style.color = root.colorFontPrimary;

        }
    }

    function lightMode() {
        body.style.backgroundColor = root.bgLightmode;
        nav.style.backgroundColor = root.colorSecundary;
        body.style.color = root.fontColorLightMode;
        btn.value = 'off';
        for (let card of cards) {
            card.style.backgroundColor = root.bgLightmode;
            card.style.color = 'black';
        }
        for (let logo of logos) {
            logo.style.backgroundColor = root.colorSecundary;
            logo.style.color = root.colorFontPrimary;

        }
    }

    switch (hora >= 18) {
        case true:
            darkMode();
            btn.setAttribute('checked', 'checked');
            break;
        case false:
            lightMode();
            break;
        default:
            lightMode();
            break;
    }
    btn.addEventListener('change', () => {
        switch (btn.value) {
            case 'on':
                lightMode();

                break;
            case 'off':
                darkMode();

                break;

        }
    })
})();