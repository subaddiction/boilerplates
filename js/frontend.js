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
	
	
	
	// SETUP PANELS WITH WIPING
	
	var slides = document.querySelectorAll("section.panel");
	
	var p_controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});
	
	
	
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
	
	/*****
	// TWEENING ELEMENT
	new ScrollMagic.Scene({
			//triggerElement: '#animate',
			triggerElement: slides[1],
		})
		//.setPin('#pin'),
		.setTween("#pin", 1, {top: "5%"})
		.addTo(controller);
	*****/	
	

	// TWEENING MORE ELEMENTS
	var pintween = [
		TweenMax.to("#pin", 1, {top: "5%", ease: Linear.easeNone}),
		TweenMax.to("#otherpin", 1, {top: "10%", ease: Linear.easeNone}),
	];
	
	new ScrollMagic.Scene({
			triggerElement: slides[1],
		})
		.setTween(pintween)
		.addTo(controller);
	
	

	
	
	// SOME ANIMATION ON PANELS
	new ScrollMagic.Scene({
		triggerElement: slides[1],
	})
	.setTween(slides[1], 1, {backgroundColor: "#0000aa"})
	.addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: slides[2],
	})
	.setTween(slides[2], 1, {backgroundColor: "#00aa00"})
	.addTo(controller);

	
	
	// OTHER ANIMATIONS ON ELEMENTS
	new ScrollMagic.Scene({
		triggerElement: "#animate",
	})
	.setTween("#animate", 1, {fontSize:"2em", color:"#ffffff"}) // trigger a TweenMax.to tween
	.addTo(controller);
	
	
	new ScrollMagic.Scene({
		triggerElement: "#animate2",
	})
	.setTween("#animate2", 1, {fontSize:"2em", color:"#ffffff"}) // trigger a TweenMax.to tween
	.addTo(controller);
	
	

	/***
	
	// PARALLAXES
	var px_controller = new ScrollMagic.Controller({
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
				duration:screenHeight
				}
			)
			.setTween(tween)
			.addTo(px_controller);
		
		}
	***/
	
});
