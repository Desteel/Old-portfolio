
$(document).ready(function(){
	
//content button hover

	$(".js-block-info").hover(
		function() {
			$(this).find(".js-img-opacity").animate({opacity: 0.2}, 0);
		}, function() {
			$(this).find(".js-img-opacity").animate({opacity: 1}, 0);
	});
	
    $(".js-block-info").hover(
		function() {
			$(this).find(".js-text-fade").fadeIn(0);
		}, function() {
			$(this).find(".js-text-fade").fadeOut(0);
	});


//adaptive menu

	var touch 	= $('.js-toggle-menu');
	var menu 	= $('.js-toggle-menu_panel');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 704 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
		
	
});














