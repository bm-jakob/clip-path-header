$(window).scroll(function() {
    if ($(this).scrollTop() > 250){
       $('.header').addClass("small");
    } else {
       $('.header').removeClass("small");
    }
 });