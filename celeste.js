var timedShowPage;

function loadPage() {

    timedShowPage = setTimeout(hidePreload, 1500);
    
}

function hidePreload() {
  	document.getElementById("loadBG").style.opacity = 0;
  	document.getElementById("mainContent").style.opacity = 1;
  	document.getElementById("theBody").style.overflowY = 'scroll';
  	document.getElementById("loadBG").style.display = 'none';
}

// function showPage() {
// 	document.getElementById("mainContent").style.display = 'block';
// }

$(document).ready(function(){


	$('body').css('display', 'none');
	$('body').fadeIn(400);

	$('.link').click(function(event){
		event.preventDefault();

		newLocation = this.href;

		$('body').fadeOut(400, newPage);
	});

	function newPage(){
		window.location = newLocation;
	}


	var $animation_elements = $('.animation-element');
	var $window = $(window);

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animation_elements, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			if((element_bottom_position >= window_top_position) && 
			(element_top_position <= window_bottom_position)) {
				$element.addClass('in-view');
			} else {
				$element.removeClass('in-view')
			}
		});
	};

});


