$(document).ready(function() {
    $('select').niceSelect();
});

/*card-photos*/
$(function() {
    $('.mini-card-photo').on('click', function() {
        let src = $(this).find("img").attr("src")

        $('.mini-card-photo').removeClass('active-card')
        $(this).addClass('active-card')

        $('.main-card img').attr("src", src) 
    })
})

/*email*/

$(function() {
    $('.send-to-button').on('click', function() {
        function validateEmail() {
            let href = $('.email-input').val()
            let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if( !emailReg.test( href ) ) {
                $('.send-to-button').attr("href", '')
                alert("Enter correct email")
            } else {
                let mailto = "mailto:" + href
                $('.send-to-button').attr("href", mailto)
            }
        }
        validateEmail()
    })
})

    