/*  1. HEADER POP-UP MENU
*
* 	1.1 Pop-up menu settings
*					1.1.1 Header content fades when active
*					1.1.2	Theme color of the menu
*					1.1.3	Show-up effect
*					1.1.4	Borders between list items
*					1.1.5	Side position of the menu
*					1.1.6 Menu title content
*		1.2 Button menu behavior...
*					1.2.1 When menu is open
*					1.2.2 When menu is close


		2. SERVICES CAROUSEL



* */


$(function() {

	/* 1.1 Pop-up menu settings */
	$('#my-menu').mmenu({
		extensions: [
			'pagedim-black', /* 1.1.1 Header content fades when active */
			'theme-black', /* 1.1.2	Theme color of the menu */
			'fx-menu-slide',/* 1.1.3	Show-up effect */
			'border-none',/* 1.1.4 Borders between list items */
			'position-right'/* 1.1.5 Side position of the menu */
			],
		/* 1.1.6 Menu title content */
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салот красоты S&Mitler">'
		}
	});

	/* 1.2 Button menu behavior... */
	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() { /* 1.2.1 When menu is open */
		$('.hamburger').addClass('is-active');
	}).bind('close:start', function() { /* 1.2.2 When menu is close */
		$('.hamburger').removeClass('is-active');
	});
	
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(carouselService, 100);
	});
	
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
		smartSpeed: 700,
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});
	
	function carouselService() {
	   $('.carousel-services__item').each(function() {
				var ths       = $(this),
				    thsHeight = ths.find('.carousel-services__content').outerHeight();

			 $('.carousel-services__image').css('min-height', thsHeight);
		 });
	}
	
	/* Перекрашиваем слово в заголовке */
	$('.carousel-services__composition .block__title').each(function() {
	var ths = $(this);
	ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'))
	});
	$('section .block__title').each(function() {
	var ths = $(this);
	ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'))
	});
	
	function onResize() {
		$('.carousel-services__content').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};
	
	
	
	$('.section-gallery').fotorama({
		arrows: true
	});
	
	
	$('select').selectize({
		create: true
	});
	
	
	// //E-mail Ajax Send
	// $("form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			$(th).find('.success').removeClass('active').fadeOut();
	// 			th.trigger("reset");
	// 		}, 3000);
	// 	});
	// 	return false;
	// });
	
	
	$('.comments').owlCarousel({
		loop: true,
		items: 1,
		autoHeight: true,
		smartSpeed: 700,
		nav: false,
		dots: true
	});
	
	
	$('.partners').owlCarousel({
		loop:true,
		items: 4,
		smartSpeed: 700,
		nav: true,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		// autoplay: true,
		autoplaySpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else  {
			$('.top').removeClass('active');
		}
	});
	
	$('.top').click(function() {
	    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	
	
	$(window).on('load', function () {
		$('.preloader').delay(1000).fadeOut('slow');
	})
});
