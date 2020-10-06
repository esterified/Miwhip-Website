
//To top
$(window).on("scroll", function(){
    if($(this).scrollTop() > 200){
        $(".to-top").addClass("visible");
    }else{
        $(".to-top").removeClass("visible");
    }
});

$(".to-top").on("click", function(){
    $("body, html").animate({scrollTop: 0}, 1000);
});

//Mask input
$('.format-phone').mask('+44 00000000000');



// Animate scroll
function animateScroll(dest){
    var scrollPosition = $(dest).offset().top - 50;
    $('html,body').animate({
        scrollTop: scrollPosition
    }, 500);
};

// Animate scroll same page links
$(".animate-scroll").on("click", function(e){
    e.preventDefault();
    var dest = $(this).attr('href');
    animateScroll(dest);
});

// Animations
$.fn.shouldAnimate = function(){
    var win = $(window);
    var topOffset = win.innerHeight() / 8;

    var viewport = {
        top : win.scrollTop() - topOffset,
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top /*|| viewport.top > bounds.bottom*/));
};

function runAnimations(){
    $.each($('.animate'), function(index, element){
        if($(this).shouldAnimate()){
            $(this).removeClass('animate');
            $(this).addClass('animated');
            $(this).addClass($(this).data('animation'));
        }
    });
}
runAnimations();

$(document).on('scroll', function(){
    runAnimations();
});

// Tabs on Dashboard Page

$(document).ready(function(){
 var checkboxes = document.getElementsByTagName('input');

for (var i=0; i<checkboxes.length; i++)  {
  if (checkboxes[i].type == 'checkbox')   {
    checkboxes[i].checked = false;
  }
}
$('input[type=tel]').each(function(){
$(this).attr("maxlength","15");
});
$('span.abs').click(function(){

$(this).prev().focus();
$(this).hide();
   }) ;
$('span.abs1').click(function(){

$(this).prev().focus();
$(this).hide();
   }) ;
$('textarea.hero-form-box').focus(function() {
    var a ='';
    sessionStorage.setItem("place",  $(this).attr('placeholder'));
   $(this).attr('placeholder',a);


});
$( "textarea.hero-form-box" ).blur(function() {
 if(sessionStorage.getItem("place")!=undefined){
    $(this).attr('placeholder' , sessionStorage.getItem("place"));
}
 // alert( "Handler for .focus() called." );
});
$('input.hero-form-box').focus(function() {
    var a ='';
    sessionStorage.setItem("place",  $(this).attr('placeholder'));
   $(this).attr('placeholder',a);


});

$( "input.hero-form-box" ).blur(function() {
 if(sessionStorage.getItem("place")!=undefined){
    $(this).attr('placeholder' , sessionStorage.getItem("place"));
}
 // alert( "Handler for .focus() called." );
});
$( ".hero-form input" ).focus(function() {
    var a ='';
   $(this).attr('placeholder',a);
 // alert( "Handler for .focus() called." );
});
$( ".hero-form input" ).blur(function() {
    $(this).attr('placeholder' , 'Enter your mobile phone number');
 // alert( "Handler for .focus() called." );
});
$('.hero-form-button-submit').click(function(e){

var num = $(this).closest("form").find("input.format-phone").val();
sessionStorage.setItem("num", num);
});
});


$(document).ready(function () {
    $(".dashboard-tab-ul>li").on('click touch', function (e) {
        e.preventDefault();
        $(this).siblings('li.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.dashboard-tab-wrapper>div.dashboard-tab-content").removeClass("active");
        $("div.dashboard-tab-wrapper>div.dashboard-tab-content").eq(index).addClass("active");
        console.log(index);

    });
});
