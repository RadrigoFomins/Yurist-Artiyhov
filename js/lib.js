// Плавный скроллинг к якорю
$(document).ready(function () {
	$('a.main').click(function () {
		clickHeader = $(this).attr('href')
		scrlHeader = $(clickHeader).offset().top - 0;
		$('html:not(:animated),body:not(:animated)').animate({ scrollTop: scrlHeader }, 600);
		return false;
	});
});
$(document).ready(function () {
	$('.owl-vragi').click(function () {
		var scrlVragi = $('.keisi').offset().top - 0;
		$('html:not(:animated),body:not(:animated)').animate({ scrollTop: scrlVragi }, 600);
		return false;
	});
});
// Карусель поверженных врагов
$(document).ready(function () {
	$('.owl-vragi').owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		dotsEach: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			800: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
	$(function () {
		var column = 0;
		$('.vr-text').each(function () {
			h = $(this).height();
			if (h > column) {
				column = h;
			}
		}).height(column);
	});
});
// Карусель отзывов
$(document).ready(function () {
	$('.owl-otzivi').owlCarousel({
		loop: true,
		margin: 5,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		items: 1,
	});
});
// Карусель кейсов
$(document).ready(function () {
	$('.owl-keisi').owlCarousel({
		loop: true,
		nav: true,
		dotsEach: true,
		items: 1,
		responsive: {
			0: {
				stagePadding: 40,
				margin: 5,
			},
			800: {
				stagePadding: 70,
				margin: 10,
			}
		}
	});
});
// Модальное окно
$(document).ready(function () {
	var overlay = $('.modal-overlay');
	var open_modal = $('.open-modal');
	var close = $('.modal-close, .modal-overlay');
	var modal = $('.modal');

	open_modal.click(function (event) {
		event.preventDefault();
		var div = $(this).attr('href');
		overlay.fadeIn(100,
			function () {
				$(div)
					.css('display', 'block')
					.animate({ opacity: 1, top: '50%' }, 200);
			});
	});

	close.click(function () {
		modal
			.animate({ opacity: 0, top: '45%' }, 200,
				function () {
					$(this).css('display', 'none');
					overlay.fadeOut(100);
				}
			);
	});
});

// popover
$(document).ready(function () {
	$("#popvopros").webuiPopover({
		placement: 'top',
		title: '',
		content: 'Ознакомиться с&nbsp;делами, которыми мы&nbsp;гордимся, можно ниже. Все наши дела можно посмотреть на&nbsp;<b><a href="https://ras.arbitr.ru/" target="_blank" rel="nofollow noopener">официальном сайте суда</a></b> по&nbsp;запросу &laquo;артюхов&raquo;.',
		trigger: 'hover',
		width: 300,
		animation: 'pop',
		delay: {
			show: null,
			hide: 1000
		}
	});
});
