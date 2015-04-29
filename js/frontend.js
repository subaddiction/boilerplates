function scrollto(selector, seconds){
	
	if(!seconds){
		var seconds = 1
	}
	TweenLite.to(window, seconds, {scrollTo:{y: $(selector).offset().top}})
	
}



$(document).ready(function(){
	
	// General vars
	var screenHeight = $(window).height();
	var halfScreenHeight = Math.floor(screenHeight/2);
	
	
	// Scrolling elems
	$('[data-scrollto]').on({
		
		'click': function(){
			var seconds = $(this).attr('data-scrollto-seconds');
	
			if(seconds == ""){
				seconds = 1;
			}
			scrollto($(this).attr('data-scrollto'), seconds);
		}
	});
	

	var p_controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});
	
	//var slides_controller = new ScrollMagic.Controller();
	
	var slides = document.querySelectorAll("section.panel");
	
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
			.setPin(slides[i])
			.addTo(p_controller);
	}
	
	
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter',
			duration: screenHeight
		}
	});
	
	new ScrollMagic.Scene({
			triggerElement: '#animate'
		})
		//.setPin('#pin'),
		.setTween("#pin", 0.5, {top: "5%"})
		.addTo(controller);
		
	new ScrollMagic.Scene({
			triggerElement: '#animate'
		})
		//.setPin('#pin'),
		.setTween("#otherpin", 0.5, {top: "10%"})
		.addTo(controller);
		
	new ScrollMagic.Scene({
		triggerElement: "#animate"
	})
	.setTween("#animate", 0.5, {backgroundColor: "#000000"}) // trigger a TweenMax.to tween
	.addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: "#animate2"
	})
	.setTween("#animate2", 0.5, {fontSize: "2em"}) // trigger a TweenMax.to tween
	.addTo(controller);

	
	
	
	

	/***
	var pcontroller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});
	
	var parallaxes = document.querySelectorAll("div.parallax");

		
		for (var i=1; i<=parallaxes.length; i++) {
		
			var tween = [
				TweenMax.to("#parallax"+i+" > .ptitle", 1, {backgroundPosition: "center -240px", ease: Linear.easeNone}),
				//TweenMax.to("#parallax"+i+" > .ptitle > h2", 1, {marginTop: "145px", ease: Linear.easeNone}),
			];
			
			new ScrollMagic.Scene({
				triggerElement: "#parallax"+i,
				//duration:240
				duration:screenHeight
				}
			)
			.setTween(tween)
			.addTo(pcontroller);
		
		}
	***/
	
});


/***
var controller = new ScrollMagic.Controller();

***/
