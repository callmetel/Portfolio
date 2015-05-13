$(document).ready(function() {
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