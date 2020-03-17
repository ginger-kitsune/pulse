$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_1.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right_1.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
				  dots: true,
				  arrows: false
				}
			}
		]
	});
  }); 