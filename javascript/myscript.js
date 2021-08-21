$(function(){
    

new WOW().init();//intializing wow animation


// starting scrolling to custom id
$(".navbar-nav li a").on("click", function (e) {
    e.preventDefault();
    $('body, html').animate({
        scrollTop : $("#" + $(this).data('scroll')).offset().top - 30
    }, 1000);
});

$(document).ready(function(){
    if($(this).scrollTop()>=300)
    {
        my_top_button.show();
    }
    else{
        my_top_button.hide();

    }
});

//starting my-top-button
var my_top_button=$("#top_button");
$(window).scroll(function(){
    if($(this).scrollTop()>=300)
    {
        my_top_button.show();
    }
    else{
        my_top_button.hide();

    }
});

my_top_button.click(function(){
    $('html,body').animate({scrollTop:0},2000)
})
});