$(function () {

	$('.excursions-slider__inner').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 300000,
		variableWidth: true,
		cssEase: 'linear',
		infinite: true,
		dots: true,
		dotsClass: 'slick-dots slider__dots',
		prevArrow: '<svg class="slider-arrows slider-arrows__right" width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0.999998L2.49433 20.2655C1.16332 21.4579 1.16333 23.5421 2.49433 24.7345L24 44" stroke="#D4D4D4" stroke-width="2"/></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__left" width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.999998L22.5057 20.2655C23.8367 21.4579 23.8367 23.5421 22.5057 24.7345L0.999998 44" stroke="#D4D4D4" stroke-width="2"/></svg>',
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				}
			}
		]
	});

	$('.slider-review').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		infinite: true,
		dots: true,
		dotsClass: 'slick-dots slider__dots',
		prevArrow: '<svg class="slider-arrows slider-arrows__right" width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0.999998L2.49433 20.2655C1.16332 21.4579 1.16333 23.5421 2.49433 24.7345L24 44" stroke="#D4D4D4" stroke-width="2"/></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__left" width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.999998L22.5057 20.2655C23.8367 21.4579 23.8367 23.5421 22.5057 24.7345L0.999998 44" stroke="#D4D4D4" stroke-width="2"/></svg>',
		responsive: [
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				}
			},
		]
	});


	$('.tour-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		cssEase: 'linear',
		infinite: true,
		fade: false,
		dots: true,
		dotsClass: 'slick-dots slider__dots slick-dots__tour',
		prevArrow: '<svg class="slider-arrows slider-arrows__right" width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0.999998L2.49433 20.2655C1.16332 21.4579 1.16333 23.5421 2.49433 24.7345L24 44" stroke="#D4D4D4" stroke-width="2"/></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__left" width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.999998L22.5057 20.2655C23.8367 21.4579 23.8367 23.5421 22.5057 24.7345L0.999998 44" stroke="#D4D4D4" stroke-width="2"/></svg>',
		responsive: [
			{
				breakpoint: 1321,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 630,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				}
			},
		]
	});


	var btnb = $('.btnb');

	btnb.on('click', function () {
		$(this).toggleClass('active');
		$(this).toggleClass('not-active');
	});

	$('.box-menu').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});

});



$(function () {

	$(".filters-column").slider({
		min: 0,
		max: 5000,
		values: [1600, 4000],
		range: true,
		animate: "fast",
		slide: function (_event, ui) {
			$(".slidercontainerbox-left").val(ui.values[0]);
			$(".slidercontainerbox-right").val(ui.values[1]);
		}
	});
	$(".slidercontainerbox-left").val($(".filters-column").slider("values", 0));
	$(".slidercontainerbox-right").val($(".filters-column").slider("values", 1));
	$(".slidercontainerbox input").change(function () {
		var input_left = $(".slidercontainerbox-left").val().replace(/[^0-9]/g, ''),
			opt_left = $(".filters-column").slider("option", "min"),
			where_right = $(".filters-column").slider("values", 1),
			input_right = $(".slidercontainerbox-right").val().replace(/[^0-9]/g, ''),
			opt_right = $(".filters-column").slider("option", "max"),
			where_left = $(".filters-column").slider("values", 0);
		if (input_left > where_right) {
			input_left = where_right;
		}
		if (input_left < opt_left) {
			input_left = opt_left;
		}
		if (input_left == "") {
			input_left = 0;
		}
		if (input_right < where_left) {
			input_right = where_left;
		}
		if (input_right > opt_right) {
			input_right = opt_right;
		}
		if (input_right == "") {
			input_right = 0;
		}
		$(".slidercontainerbox-left").val(input_left);
		$(".slidercontainerbox-right").val(input_right);
		if (input_left != where_left) {
			$(".filters-column").slider("values", 0, input_left);
		}
		if (input_right != where_right) {
			$(".filters-column").slider("values", 1, input_right);
		}
	});

});














