$.material.init();
function send_e(e,t){
	var n=$(e).find('[name=name]').val(),
		tel=$(e).find('[name=tel]').val();
		email=$(e).find('[name=email]').val();
		message=$(e).find('[name=message]').val();
	$.post('/email.php',
			{n:n,t:t,tel:tel,email:email,message:message, key:'SMs1aK4M2dIzgHYLddY1HDK3xf5nvXPi'},function(data){if (!(data)){alert('Ошибка отправки данных.');}}
		).done(function(data) {
			$('#modal-ok').fadeIn().delay(1000).fadeOut();
		}).fail(function() {
			alert('Ошибка подключения.');
		});
}

$(function() {
	$('#images > div').each(function() {
		var $cfs = $(this);
		$cfs.carouFredSel({
			direction: 'up',
			circular: false,
			infinite: false,
			auto: false,
			scroll: {queue: 'last'},
			items: {visible: 1,width: 292,height: 292}
		});
		$cfs.hover(
			function() {$cfs.trigger('next');},
			function() {$cfs.trigger('prev');}
		);
	});
});

$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		showNavArrows : 'true',
		helpers	: {
			title	: {type: 'outside'},
			thumbs	: {width: 50,height: 50}
		}
	});

	//$('ul.nav li.dropdown').hover(function() {$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(400);}, 
	//	function() {$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(400);});

	$("[name=tel]").inputmask("+7 (999) 999-9999");
	$("[name=email]").inputmask("*{1,20}@*{1,20}[.*{1,4}]");
	$('.send_btn').click(function () {
		if($(this).parent().parent().find("[name=tel]").inputmask("isComplete")){send_e($(this).parent().parent(),'Обратная связь')}
		else{$(this).parent().parent().find("[name=tel]").addClass('error');}
	});
	$('[name=tel]').focus(function (){$(this).removeClass('error');});
	$("#manager").on("hidden.bs.modal", function(){
		$(this).find("textarea, input").show().val('');
	});
//Back To Top	
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {$back_to_top.addClass('cd-fade-out');}
	});
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({scrollTop: 0 ,}, scroll_top_duration);
	});
});



//back to top
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

//Slippry
jQuery('#news-demo').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box news-slider" />', // wrapper to wrap everything, including pager
  elements: 'article', // elments cointaining slide content

  // options
  adaptiveHeight: false, // height of the sliders adapts to current 
  captions: false,

  // pager
  pager: false,

  // transitions
  transition: 'horizontal', // fade, horizontal, kenburns, false
  speed: 1200,
  pause: 8000,

  // slideshow
  autoDirection: 'prev',

  controls:false
});

//Slippry

