var smoothScroll = require('./smooth-scroll');
var jQuery = require('jquery');

smoothScroll.init({
	"speed": 700,
	"easing": "easeInOutCubic"
});

(function($){
	var $winWidth,
		$winHeight,
		xPercent,
		yPercent;


	var $imgContainer = $("#imgsBG");
	var $images = $imgContainer.find('.bgImg');
	var $win = $(window);
	var $tittles = $('#homeButtons');

	var $design = $imgContainer.find("#bgDesign");
	var $interaction = $imgContainer.find("#bgInteraction");


	function getDimentions() {
		$winWidth = $win.width();
		$winHeight = $win.height();
	}
	getDimentions();

	window.onresize = function(){
		getDimentions();
		switchLandingBg();
	}

	function mouseMoveOn(){
		$(document).on( 'mousemove', mouseListener );
	}


	function mouseMoveOff(){
		$(document).unbind('mousemove', mouseListener);
	}

	function mouseListener() {
		xPercent = (event.pageX / $winWidth) * 100;
		yPercent = (event.pageY / $winHeight) * 100;

		mouseMoveFunctions( xPercent, yPercent );
	}

	function mouseMoveFunctions( x, y ) {
		var floorX = Math.floor(x * 0.80);
		var floorY = Math.floor(y * 0.1);
		//console.log(x, y);

		//counter = floorX ;
		updateField();
	}

	//$imgContainer.find(targetClass).addClass("-top");

	function changeLanding( field ) {
		var $bgActive = field == 'interaction' ? $interaction : $design ;
		$images.removeClass('-top');
		$bgActive.addClass('-top');

	}

	function updateField(){
		var xReduced = Math.floor(xPercent * 0.2) - 20;
		var yReduced = Math.floor(yPercent * -0.2) + 10;
		var zNeg = Math.floor(yPercent * -0.8) ;
		var zPos = Math.floor(yPercent * 0.8) ;
		console.log(zNeg, zPos)
		var scaleReduced = xPercent * 0.0041 + 0.6;
		//console.log(scaleReduced);

		if (xPercent > 50) {
			$tittles.find('#designBtn').removeClass('highlighted');
			$tittles.find('#interactionBtn').addClass('highlighted');
			changeLanding('interaction');
		}else{
			$tittles.find('#interactionBtn').removeClass('highlighted');
			$tittles.find('#designBtn').addClass('highlighted');
			changeLanding();
		}
		$tittles.find('#designBtn').css({
			transform: 'perspective(300px) rotateX('+ yReduced +'deg) translateZ(' + zPos + 'px ) rotateY('+ xReduced +'deg)'
		});
		$tittles.find('#interactionBtn').css({
			transform: 'perspective(300px) rotateX('+ yReduced +'deg) translateZ(' +zNeg + 'px ) rotateY('+ xReduced +'deg)'
		});
		$tittles.find("#plusSign").css({
			transform: 'perspective(300px) rotateX('+ yReduced +'deg) translateZ( 0px ) rotateY('+ xReduced +'deg)'
		});
	}
	function switchLandingBg(){
		if ($win.width()>1024) {
			mouseMoveOn();
		}else{
			mouseMoveOff();
		}
	}
	return{
		switchLandingBg : switchLandingBg()
	}
})(jQuery);

/*************************************************************************
*************************************************************************




*************************************************************************
*************************************************************************/
