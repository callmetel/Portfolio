$(document).ready(function(){

	$('body').fadeIn(500);

	$('.toggle-menu').click(function(){
		$('.nav-toggle').slideToggle(600);
	});

	$('.toggle-dropdown').click(function(){
		$('.dropdown').slideToggle(600);
		$('.toggle-dropdown').toggleClass('dropdown-active');
	});

	var speed = 500;		//fade speed
	var autoswitch = true;		//autoslide option
	var autoswitch_speed =5000; //auto slide speed 
	//add intiial active class

	$('.slide').first().addClass('active-slide');
	$('.slide-copy').first().addClass('active-slide');
	$('.slide').hide();
	$('.slide-copy').hide();
	$('.active-slide').show();

	$('#next').on('click', nextSlide);

	$('#prev').on('click', prevSlide);

	// if(autoswitch === true){
	// 	setInterval(nextSlide, autoswitch_speed)
	// }

	// Switch to next slide

	function nextSlide(){
		$('.active-slide')
			.removeClass('active-slide')
			.addClass('oldactive');

		// Look into ternary operator
		// Look into reasons to use three equal sign
		var nextSlide = $('.active').next().length ? $('.active').next() : $('.active').get(0);




		if($('.oldactive').is(':last-child')){
			$('.oldactive').next().addClass('active-slide');
			$('.slide').first().addClass('active-slide');
			$('.slide-copy').first().addClass('active-slide');

		} else {
			$('.oldactive').next().addClass('active-slide');

		
		}
			$('.oldactive').removeClass('oldactive');
			$('.slide').fadeOut(700);
			$('.slide-copy').fadeOut(500);
			$('.active-slide').fadeIn(500);
	}

	function prevSlide(){
		$('.active-slide').removeClass('active-slide').addClass('oldactive');
		if($('.oldactive').is(':first-child')){
			$('.slide').last().addClass('active-slide');
			$('.slide-copy').last().addClass('active-slide');
		} else {
			$('.oldactive').prev().addClass('active-slide');
			}
			$('.oldactive').removeClass('oldactive');
			$('.slide').fadeOut(speed);
			$('.slide-copy').fadeOut(speed);
			$('.active-slide').fadeIn(600);
	}

});