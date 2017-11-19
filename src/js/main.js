$(document).ready(function() {
    
//    OPEN MODAL
    
    $('.dialog').click(function(e) {
        e.preventDefault();
        $('.overlay').fadeIn(300, function() {
            $('#modal-form').css({
                'display': 'block' 
            }).animate({
                'opacity': 1 
            }, 300);
        });
    });
    
    
//    CLOSE MODAL
    
    $('.modal-form__close').click(function() {
        $('#modal-form').animate({
            'opacity': 0
        },300, function() {
            $('#modal-form').css({'display':'none'});
            $('.overlay').fadeOut(300);
        });
    });
    
//    OPEN FEEDBACK
    
    $('.feedback').click(function(e) {
        e.preventDefault();
        $('.overlay').fadeIn(300, function() {
            $('#feedback').css({
                'display': 'block' 
            }).animate({
                'opacity': 1 
            }, 300);
        });
    });
    
//    CLOSE FEEDBACK
    
    $('.modal-form__close').click(function() {
        $('#feedback').animate({
            'opacity': 0
        },300, function() {
            $('#feedback').css({'display':'none'});
            $('.overlay').fadeOut(300);
        });
    });
    
});