(() => {
    let lermais1 = document.querySelector('.btn-ler-mais1');
    let lermais2 = document.querySelector('.btn-ler-mais2');
    let lermais3 = document.querySelector('.btn-ler-mais3');
    let lermais4 = document.querySelector('.btn-ler-mais4');

    lermais1.addEventListener('click', () => {
        if (lermais1.textContent == "Ler mais") {
            lermais1.textContent = "Ler menos"
        } else {
            lermais1.textContent = "Ler mais"
        }
    })

    lermais2.addEventListener('click', () => {
        if (lermais2.textContent == "Ler mais") {
            lermais2.textContent = "Ler menos"
        } else {
            lermais2.textContent = "Ler mais"
        }
    })

    lermais3.addEventListener('click', () => {
        if (lermais3.textContent == "Ler mais") {
            lermais3.textContent = "Ler menos"
        } else {
            lermais3.textContent = "Ler mais"
        }
    })

    lermais4.addEventListener('click', () => {
        if (lermais4.textContent == "Ler mais") {
            lermais4.textContent = "Ler menos"
        } else {
            lermais4.textContent = "Ler mais"
        }
    })




    let lerMais11 = document.getElementById('need1');
    let lerMais12 = document.getElementById('need2');
    let lerMais13 = document.getElementById('need3');

    lerMais11.addEventListener('click', ()=> {
        if (lerMais11.text == "Ler mais") {
            lerMais11.text = "ler menos";
        } else {
            lerMais11.text = "ler mais";
        }
    })

})()