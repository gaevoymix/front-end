//when click on the icon//
$( document ).ready(function() {
	$('.hamburger').on('click', function () {
		if($('.navigation').hasClass('open')) {
			$('.navigation').removeClass('open');
		} else {
			$('.navigation').addClass('open');
		}
	});
	$('a[href^="#"]').click(function () { 
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		if($.browser.safari){
			$('body').animate( { scrollTop: destination }, 1000 );
		} else {
			$('html').animate( { scrollTop: destination }, 1000 );
		}
		return false;
	});
});
//Плавный скролл по якорям
