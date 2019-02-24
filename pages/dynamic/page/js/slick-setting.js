$(document).ready(function(){
	//slider
	$('.js-slider-fast').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		dots: true,
		dotsClass: 'b-slick-nav-dot',
		prevArrow: '<div class="b-slick-nav b-slick-nav_slider b-slick-nav_left-arrow b-slick-nav_slider-left-arrow"></div>',
		nextArrow: '<div class="b-slick-nav b-slick-nav_slider b-slick-nav_right-arrow b-slick-nav_slider-right-arrow"></div>',
		responsive: [            
            {
                breakpoint: 940,
                settings: {
                    dots: false,
					arrows: false,
                }
            }],
	});
	
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