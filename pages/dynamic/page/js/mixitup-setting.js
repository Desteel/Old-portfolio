$(function(){
	$('.js-content-filter').mixItUp({
		selectors: {
            target:'.js-mix-target',
            filter:'.js-mix-filter',
        },
		controls: {
			activeClass:'js-mix-filter_active'
		},
	});
});