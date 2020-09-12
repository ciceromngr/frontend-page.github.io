(() => {
    let email = document.querySelector('#email');
    let whatsapp = document.querySelector('#whatsapp');
    let enviar = document.querySelector('#enviar');


    enviar.addEventListener('click', (e) => {
        e.preventDefault();
        let regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
        let regexWhatsapp = /(\(?\d{2}\)?\s)?(\d{5}\-\d{4})/g;
        if (!email.value || !whatsapp.value) {
            $.toast({
                text: "Por favor preencha os campos obrigatórios", // Text that is to be shown in the toast
                heading: 'Há um ou mais campos vazio', // Optional heading to be shown on the toast
                icon: 'warning', // Type of toast icon
                showHideTransition: 'fade', // fade, slide or plain
                allowToastClose: true, // Boolean value true or false
                hideAfter: 2000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values


                textAlign: 'left', // Text alignment i.e. left, right or center
                loader: false, // Whether to show loader or not. True by default
                loaderBg: '#9EC600', // Background color of the toast loader
                beforeShow: function () {}, // will be triggered before the toast is shown
                afterShown: function () {}, // will be triggered after the toat has been shown
                beforeHide: function () {}, // will be triggered before the toast gets hidden
                afterHidden: function () {} // will be triggered after the toast has been hidden
            });
            return;
        }
        if (!regexEmail.test(email.value.toLowerCase())) {
            email.classList.remove('is-valid');
            email.classList.add('is-invalid');
            return;
        }
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');

        if (!regexWhatsapp.test(whatsapp.value)) {
            whatsapp.classList.remove('is-valid');
            whatsapp.classList.add('is-invalid');
            return;
        }
        whatsapp.classList.remove('is-invalid');
        whatsapp.classList.add('is-valid');
    })
})();