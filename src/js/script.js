// $(document).ready(function(){
// 	$('.carousel__inner').slick({
// 		speed: 1200,
// 		adaptiveHeight: true,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_1.svg"></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="icons/right_1.svg"></button>',
// 		responsive: [
// 			{
// 				breakpoint: 992,
// 				settings: {
// 				  dots: true,
// 				  arrows: false
// 				}
// 			}
// 		]
// 	});
//   }); 


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
	autoplay: false,
	controls: false,
	responsive: {
		640: {
			nav: true
		},
		900: {
			nav: false
		}
	  }
  });

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
  });

$(document).ready(function(){
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
	
	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	//Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});
	$('.button_mini').each(function(i){
		$(this).on('click', function(){
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});
});

$(document).ready(function initMap() {
    var coordinates = {lat: 55.768738, lng: 37.643155},

        map = new google.maps.Map(document.getElementById('footer__map'), {
            center: coordinates
        }),
    
        marker = new google.maps.Marker({
            position: {lat:55.768445, lng: 37.646978},
            map: map
        });
});
