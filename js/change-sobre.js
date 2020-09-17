(() => {
    let lerMais11 = document.getElementById('need1');
    let lerMais12 = document.getElementById('need2');
    let lerMais13 = document.getElementById('need3');

    lerMais11.addEventListener('click', () => {
        if(lerMais11.text == "Ler mais") {
            lerMais11.text = "Ler menos";
        } else {
            lerMais11.text = "Ler mais";
        }
    })

    lerMais12.addEventListener('click', () => {
        if(lerMais12.text == "Ler mais") {
            lerMais12.text = "Ler menos";
        } else {
            lerMais12.text = "Ler mais";
        }
    })

    lerMais13.addEventListener('click', () => {
        if(lerMais13.text == "Ler mais") {
            lerMais13.text = "Ler menos";
        } else {
            lerMais13.text = "Ler mais";
        }
    })

})()