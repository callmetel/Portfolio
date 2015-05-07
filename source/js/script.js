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

// Carousel Functionality

	var autoswitch = true;		//autoslide option
	var autoswitch_speed =8000; //auto slide speed 

	$('.slide').first().addClass('is-active');
	$('.slide-copy').first().addClass('is-active');
	$('.slide-copy').addClass('is-inactive');

	$('#next').on('click', nextSlide);

	$('#prev').on('click', prevSlide);

	if(autoswitch === true){
		setInterval(nextSlide, autoswitch_speed)
	}

	function nextSlide(){

		var $active = $('.is-active');
		var	$firstSlide = $('.slide').first();
		var $firstSlideCopy = $('.slide-copy').first();


		if ($active.is(':last-child')) {
			$active.removeClass('is-active'); 
			$firstSlide.addClass('is-active');
			$firstSlideCopy.addClass('is-active');
		}
		else{
			$active.removeClass('is-active').next().addClass('is-active');
		}
	}

	function prevSlide(){

		var $active = $('.is-active'),
			$lastSlide = $('.slide').last(),
			$lastSlideCopy = $('.slide-copy').last();

			if ($active.is(':first-child')){
				$active.removeClass('is-active');
				$lastSlide.addClass('is-active'); 
				$lastSlideCopy.addClass('is-active');

			}
			else{
				$active.removeClass('is-active').prev().addClass('is-active');
			}  
	}

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



	  // Draw Logo
	  TweenMax.from('.grow', 5, {drawSVG:0, rotation: 560, delay:0.8});

	  // Draw Arrow
 	  $arrow.mouseover(function (e){    
          TweenMax.from($(this), 1, {drawSVG:0});
      });
      $arrow.mouseout(function (e){    
          TweenMax.to($(this), 1, {drawSVG:100});
      });

      // Draw Icons
      $twitter.mouseover(function (e){    
          TweenMax.to($drawTwitter, 1, {drawSVG:0});
      });
      $twitter.mouseout(function (e){    
          TweenMax.to($drawTwitter, 1, {drawSVG:130});
      });
      $facebook.mouseover(function (e){    
          TweenMax.to($drawFacebook, 1, {drawSVG:0});
      });
      $facebook.mouseout(function (e){    
          TweenMax.to($drawFacebook, 1, {drawSVG:100});
      });
      $youtube.mouseover(function (e){    
          TweenMax.to($drawYoutube, 1, {drawSVG:0});
      });
      $youtube.mouseout(function (e){    
          TweenMax.to($drawYoutube, 1, {drawSVG:100});
      });
      $mail.mouseover(function (e){    
          TweenMax.to($drawMail, 1, {drawSVG:0});
      });
      $mail.mouseout(function (e){    
          TweenMax.to($drawMail, 1, {drawSVG:130});
      });



});