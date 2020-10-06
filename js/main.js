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

// Calculator
$('.input-range').slider({
    animate:"slow",
    orientation: "horizontal",
    create: function(event, ui) {
        $(this).slider('option', 'min', $(this).data('min'));
        $(this).slider('option', 'max', $(this).data('max'));
        $(this).slider('option', 'value', $(this).data('default'));
    },
    slide: function( event, ui ) {
        $($(this).data('input-value')).val(ui.value).trigger('change');
    }
});

function updateProfit(){
    $('.calc-profit span').each(function(i, c){
        $(this).html(
            ($('#gross-profit').val() -
            ($('#gross-profit').val() *
            ($(this).parent().data('commission')/100)))
            .toLocaleString('en-us', {maximumFractionDigits: 0})
        );
    });

    $('.calculator .ui-slider-handle span span').html(parseFloat($('#gross-profit').val()).toLocaleString('en-us', {maximumFractionDigits: 0}));

    var difference = parseFloat($('.your-profit .calc-profit span').html().replace(',', '') - $('.other-profit .calc-profit span').html().replace(',', '')).toLocaleString('en-us', {maximumFractionDigits: 0});

    $('.calculator .difference-circle>div>span>span').html(difference);
}
$('.calculator .ui-slider-handle').append('<span>&#163; <span></span></span>');
updateProfit();

$('#gross-profit').on('change', function(){
    updateProfit();
});

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
$('input.hero-form-box').focus(function() {
    var a ='';
    sessionStorage.setItem("place",  $(this).attr('placeholder'));
   $(this).attr('placeholder',a);

 // alert( "Handler for .focus() called." );

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
   $(this).prev().hide();

});
$( ".hero-form input" ).blur(function() {
    $(this).attr('placeholder' , 'Enter your mobile phone number');

 // alert( "Handler for .focus() called." );
});

$('.hero-form-button-submit').click(function(e){
    var numEl = $(this).closest("form").find("input.format-phone");
	var num = numEl.val();
	//check for minimum length of 14
    if (num.length > 13) {
        sessionStorage.setItem("num", num);
    } else {
        numEl.addClass('error');
		if ( !numEl.prev().hasClass('num-error') ) {
            
        	numEl.before('<span class="num-error">Please enter a valid number</span>');

		}
        numEl.prev().show();
        return false;
    }
});

});
