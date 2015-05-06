$(document).ready(function(){

	$('body').fadeIn(500);

	$('.toggle-menu').click(function(){
		$('.nav-toggle').slideToggle(600);
	});

	$('.toggle-dropdown').click(function(){
		$('.dropdown').slideToggle(600);
		$('.toggle-dropdown').toggleClass('dropdown-active');
	});

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
		var $firstSlide = $('.slide').first();
		var $firstSlideCopy = $('.slide-copy').first();

		var next = $active.is(':last-child') ? ($active.removeClass('is-active'), $firstSlide.addClass('is-active'), $firstSlideCopy.addClass('is-active')) :  $active.removeClass('is-active').next().addClass('is-active');

	}

	function prevSlide(){

		var $active = $('.is-active');
		var $lastSlide = $('.slide').last();
		var $lastSlideCopy = $('.slide-copy').last();

		var prev = $active.is(':first-child') ? ($active.removeClass('is-active'), $lastSlide.addClass('is-active'), $lastSlideCopy.addClass('is-active')) :  $active.removeClass('is-active').prev().addClass('is-active');

	}
});