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


		var	next = $active.is(':last-child') ? (
			$active.removeClass('is-active'), $firstSlide.addClass('is-active'), 
			$firstSlideCopy.addClass('is-active')) :  $active.removeClass('is-active').next().addClass('is-active');
	}

	function prevSlide(){

		var $active = $('.is-active'),
			$lastSlide = $('.slide').last(),
			$lastSlideCopy = $('.slide-copy').last(),
			prev = $active.is(':first-child') ? ($active.removeClass('is-active'), $lastSlide.addClass('is-active'), $lastSlideCopy.addClass('is-active')) :  $active.removeClass('is-active').prev().addClass('is-active');
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

    // About Scroll Animation
    if (pos > headHeight && pos < aboutHeight) {
        $about.addClass('is-visible');
        $about.addClass('fadeIn-scaleUp');

    }
    else{
    	$about.addClass('is-hidden');
    	$about.removeClass('is-visible');
    	$about.removeClass('fadeIn-scaleUp');
    }

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
});