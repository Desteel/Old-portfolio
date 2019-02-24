$(document).ready(function(){
	
//contact block

	//block open
	$('.js-call-button').click(function(event) {
		$('.js-block-visible').toggleClass('b-block_visible');
		event.preventDefault();		
	});	
	
	//body-click block close
	$('body').on('click', function(event){
		if (!$(event.target).closest('.js-contact-block,.js-call-button,.js-send-button').length) {
			$('.js-block-visible').removeClass('b-block_visible')
		}
	});		

	//close button
	$('.js-close-button').click(function(event){
		$('.js-block-visible').removeClass('b-block_visible');
	});	
	
//end	
});
