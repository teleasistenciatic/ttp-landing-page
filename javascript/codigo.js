$(document).ready(function() {
 
 // codigo para galeria.
 
    $(".rslides").responsiveSlides({
		auto: true,             // Boolean: Animate automatically, true or false
		speed: 1000,            // Integer: Speed of the transition, in milliseconds
		timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
		pager: true,           // Boolean: Show pager, true or false
		nav: false,             // Boolean: Show navigation, true or false
		random: false,          // Boolean: Randomize the order of the slides, true or false
		pause: false,           // Boolean: Pause on hover, true or false
		pauseControls: true,    // Boolean: Pause when hovering controls, true or false
		prevText: "Previous",   // String: Text for the "previous" button
		nextText: "Next",       // String: Text for the "next" button
		maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
		navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		manualControls: "",     // Selector: Declare custom pager navigation
		namespace: "rslides",   // String: Change the default namespace used
		before: function(){},   // Function: Before callback
		after: function(){}     // Function: After callback
	});
    
    $("ul.rslides_tabs li").append("<span class='cont'><span> </span></span>");

	
	
	
//codigo para texto oculto en funciones de la app.

	$(".image-icon").mouseenter(
		function(){
			var destino = $(this).find(".texto_oculto");
			destino.animate({height: destino.get(0).scrollHeight},400);
	    }
	);
	
	$(".image-icon").mouseleave(
		function(){
			var destino = $(this).find(".texto_oculto");
			destino.animate({height:'0px'},400);
		}
	);
		$(".centros_colaboradores").mouseenter(
		function(){
			var destino_centros = $(this).find(".texto_oculto_centros");
			destino_centros.animate({height: destino_centros.get(0).scrollHeight},400);
	    }
	);
	
	$(".centros_colaboradores").mouseleave(
		function(){
			var destino_centros = $(this).find(".texto_oculto_centros");
			destino_centros.animate({height:'0px'},400);
		}
	);


});
