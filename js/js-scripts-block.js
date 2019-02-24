$(document).ready(function(){
	
//add remove class - header menu
	$('.js-container__button').click(function(event){
		$('.js-container__extended').toggleClass('b-sub-info-inner_visible');
		event.preventDefault();
	});
	
	$('body').on('click', function(event){
		if (!$(event.target).closest('.js-container').length) {
			$('.js-container__extended').removeClass('b-sub-info-inner_visible')
		}
	});
	

//infoblock	
	//body click close
	$('body').on('click', function(event){
		if (!$(event.target).closest('.js-block, .js-hidden-button').length) {
			$('.js-block__extended').removeClass('b-hidden-box_visible')
		}
	});
	
	//b-hidden-box visible
	$('.js-hidden-button').click(function(event) {
		$('.js-block__extended').toggleClass('b-hidden-box_visible');
		event.preventDefault();		
	});		

	//close button
	$('.js-block-close').click(function(event){
		$('.js-block__extended').removeClass('b-hidden-box_visible');
	});	
	
//end	
});
