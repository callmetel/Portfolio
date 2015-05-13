$(document).ready(function(){

// Body Animation

	$('body').fadeIn(500);


// Nav Toggle Animation

	$('.toggle-menu').click(function(){
		$('.nav-toggle').slideToggle(600);
	});

	$('.toggle-dropdown').click(function(){
		$('.dropdown').slideToggle(600);
		$('.toggle-dropdown').toggleClass('dropdown-active');
	});
	


// Home Page Fade On Scroll Anmiation
	
	$(window).scroll(function(e) {

    var pos = $(window).scrollTop(),
    	$heading = $('#heading'),
    	$about = $('#about'),
    	$contact = $('#contact'),
    	headHeight = $heading.height(),
    	aboutHeight = ($about.height()) + ($heading.outerHeight( false )),
    	headAboutHeightTotal = ($about.outerHeight( true )) + ($heading.outerHeight( true )),
    	contactHeight = (headAboutHeightTotal) - (($about.outerHeight( false ))/2);

    // About Animation
    if (pos > headHeight && pos < aboutHeight) {
        $about.addClass('is-visible');
        $about.addClass('fadeIn-scaleUp');

    }
    else{
    	$about.addClass('is-hidden');
    	$about.removeClass('is-visible');
    	$about.removeClass('fadeIn-scaleUp');
    }

    // Contact Animation
    if (pos > contactHeight) {
    	$contact.addClass('is-visible');
        $contact.addClass('fadeIn-scaleUp');

    }
    else{
    	$contact.addClass('is-hidden');
    	$contact.removeClass('is-visible');
    	$contact.removeClass('fadeIn-scaleUp');
    }

	});
	//Ease Scrolling

	$(function() {
  	$('a[href*=#]:not([href=#])').on('click', (function() { //get the 'a' anchor with a # but not ones with only a #
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) { //is the location of the pathname & hostname = to this pathname & hostname?
      var target = $(this.hash); //get the link; section id
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); //is the target length = to target? if not slice the target length down to 1
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  }));
});

	// Draw SVG Animation

var $twitter = $('#tw'),
	$drawTwitter = $('.drawTw'),
	$facebook = $('#fb'),
	$drawFacebook = $('.drawFb'),
	$youtube = $('#yt'),
	$drawYoutube = $('.drawYt'),
	$mail = $('#ml'),
	$drawMail = $('.drawMl'),
	$arrow = $('.drawThis');


});