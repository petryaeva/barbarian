(function($) {
  //slick slider
  //documentation http://kenwheeler.github.io/slick/
  $('.slider--full-screen').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		autoplay: true,
		infinite: true,
		prevArrow: '<button type="button" class="slider__arrow--prev"></button>',
		nextArrow: '<button type="button" class="slider__arrow--next"></button>',
    responsive: [
  	{
  		breakpoint: 1024,
  		settings: {
  			arrows: false
  		}
  	}
  	]
	});

	$('.slider--sales').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		//autoplay: true,
		infinite: true,
		prevArrow: '<button type="button" class="slider__arrow--prev"></button>',
		nextArrow: '<button type="button" class="slider__arrow--next"></button>',
    responsive: [
  	{
  		breakpoint: 1024,
  		settings: {
  			arrows: false
  		}
  	}
  	]
	});

	$('.slider--liders').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		//autoplay: true,
		infinite: true,
		prevArrow: '<button type="button" class="slider__arrow--prev"></button>',
		nextArrow: '<button type="button" class="slider__arrow--next"></button>',
		responsive: [
  	{
  		breakpoint: 768,
  		settings: {
  			slidesToShow: 2,
  			slidesToScroll: 1
  		}
  	},
    {
  		breakpoint: 580,
  		settings: {
  			slidesToShow: 1,
  			slidesToScroll: 1
  		}
  	}
  	]
	});

  $('.menu-responsive').click(function () {
    $('.header__bottom-wrap').toggleClass('opened');
  });

}(jQuery));
