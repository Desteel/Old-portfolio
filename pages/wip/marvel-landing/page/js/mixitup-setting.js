$(function(){
	$('.js-mix-filter').click(function(event){
		event.preventDefault();
	});
	
	
	$('.js-content-filter').mixItUp({
		selectors: {
            target:'.js-mix-target',
            filter:'.js-mix-filter',
        },
		controls: {
			activeClass:'b-button_row-e_active'
		},
	});
});