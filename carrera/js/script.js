$(document).ready(function(){

	$('.slider').slick({
		draggable: true,
		arrows: true,
		prevArrow: '.prev',
		nextArrow: '.next',
		dots: false,
		fade: true,
		speed: 900,
		infinite: true,
		responsive: [
		{
			breakpoint: 425,
			settings: {
				fade: false,
				arrows: false
			}
		}
		]
	});

	$('.partners-slider').slick({
		dots: false,
		infinite: true,
		arrows: true,
		prevArrow: '.partners .prev',
		nextArrow: '.partners .next',
		speed: 400,
		autoplay: false,
		autoplaySpeed: 2000,
		slidesToShow: 4,
		slidesToScroll: 1,

		responsive: [
		{
			breakpoint: 425,
			settings: {
				slidesToShow: 2,
				arrows: false
			}
		}
		]
	});

	redrawDotNav();
	$(window).bind('scroll',function(e){redrawDotNav();});
	$('.n_1').click(function(){$('html, body').animate({scrollTop:0}, 1000);return false;});
	$('.n_2').click(function(){$('html, body').animate({scrollTop:$('#b_2').offset().top}, 1000);return false;});
	$('.n_3').click(function(){$('html, body').animate({scrollTop:$('#b_3').offset().top}, 1000);return false;});
	$('.n_4').click(function(){$('html, body').animate({scrollTop:$('#b_4').offset().top}, 1000);return false;});

	$('#fix_nv a').hover(
		function(){$(this).prev('span').show();},
		function(){$(this).prev('span').hide();});

	function redrawDotNav(){
		var section1Top =  0;
		var section2Top =  $('#b_2').offset().top - (($('#b_3').offset().top - $('#b_2').offset().top) / 2);
		var section3Top =  $('#b_3').offset().top - (($('#b_4').offset().top - $('#b_3').offset().top) / 2);
		var section4Top =  $('#b_4').offset().top - (($(document).height() - $('#b_4').offset().top) / 2);
		$('#fix_nv a').removeClass('actv_b');
		if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
			$('#fix_nv a.n_1').addClass('actv_b');
		} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
			$('#fix_nv .n_2').addClass('actv_b');
		} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
			$('#fix_nv .n_3').addClass('actv_b');
		} else if ($(document).scrollTop() >= section4Top){
			$('#fix_nv .n_4').addClass('actv_b');}	
		}

/*

	[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
		img.setAttribute('src', img.getAttribute('data-src'));
		img.onload = function() {
			img.removeAttribute('data-src');
		};
	});

	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 400);
		return false;
	});*/
	
});


