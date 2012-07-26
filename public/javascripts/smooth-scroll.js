$(function() {
    $('.scroll').bind('click', function(event){
        var $anchor = $(this);
 
        $('body, html').stop().animate({
            scrollTop: $anchor.attr('href').offset().top
        }, 1500,'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        event.preventDefault();
    });
});