$(document).ready(function() {
    
//    OPEN MODAL
    
    $('.dialog').click(function() {
        $('.overlay').fadeIn(300, function() {
            $('.modal-form').css({
                'display': 'block' 
            }).animate({
                'opacity': 1 
            }, 300);
        });
    });
    
    
//    CLOSE MODAL
    
    $('.modal-form__close').click(function() {
        $('.modal-form').animate({
            'opacity': 0
        },300, function() {
            $('.modal-form').css({'display':'none'});
            $('.overlay').fadeOut(300);
        });
    });
    
//    VALIDATION
    
//    $('.registration').validate({
//        
//        rules: {
//            name: {
//                required: true,
//            }, // end name
//            email: {
//                required: true,
//                email: true
//            }, // end email
//            phone: {
//                required: true
//            }
//        }, // end rules
//        messages: {
//            name: {
//                required: 'х'
//            }, // end name
//            email: {
//                required: 'Введите адрес электронной почты',
//                email: 'Это некорректный адрес электронной почты'
//            }, // end email
//            phone: 'Введите свой номер телефона'
//        } // end messages
//    }); // end validate
});