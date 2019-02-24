$(document).ready(function(){
	//slider
	$('.js-slick-slider').slick({
		dots: true,
		arrows: false,	
		infinite: true,
		
		autoplay: true,
		autoplaySpeed: 1000,
		
		speed: 500,
		fade: true,
		cssEase: 'linear',
		dotsClass: 'b-slick-nav-dot',
	});
	
	
	
	
	//old
	//news
	$('.js-slider-static__side').slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		prevArrow: '<div class="b-slick-nav b-slick-nav_news b-slick-nav_left-arrow b-slick-nav_news-left-arrow"></div>',
		nextArrow: '<div class="b-slick-nav b-slick-nav_news b-slick-nav_right-arrow b-slick-nav_news-right-arrow"></div>',
		
		responsive: [
			{
                breakpoint: 940,
                settings: {
                    dots: false,
					arrows: false,
                }
						},
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
					dots: false,
					arrows: false,
                }
                        },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
					dots: false,
					arrows: false,
                }
         }],
	});
});