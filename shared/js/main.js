smoothScroll.init({
	"speed": 700,
	"easing": "easeInOutCubic"
});

var $img = $("#bgSequence");
var $win = $(window);

function documentDimensions() {
	globalVars.$winWidth = $win.width();
	globalVars.$winHeight = $win.height();
}
documentDimensions();

window.onresize = function(){
	documentDimensions();
}

function mouseMoveOn(){
	$(document).on( 'mousemove', mouseListener );
}
//mouseMoveOn();

function mouseMoveOff(){
	$(document).unbind('mousemove', mouseListener);
}

function mouseListener() {
	var xPercent = (event.pageX / globalVars.$winWidth) * 100;
	var yPercent = (event.pageY / globalVars.$winHeight) * 100;

	mouseMoveFunctions( xPercent, yPercent );
}

function mouseMoveFunctions( x, y ) {
	var floorX = Math.floor(x * 0.80);
	var floorY = Math.floor(y * 0.1);
	console.log(x, y);

	globalVars.counter = floorX ;

	updateImg()
}

function updateImg() {
	var newNumber;
	if( globalVars.counter <= globalVars.frames-1 && globalVars.forward){
		newNumber = pad(globalVars.counter++, 4);
		if (globalVars.counter == globalVars.frames-1) globalVars.forward = false;
	}else if(globalVars.counter <= globalVars.frames && !globalVars.forward ) {
		newNumber = pad(globalVars.counter--, 4);
		if ( globalVars.reverseOnce && globalVars.counter == 0) {
			clearInterval(interval);
			globalVars.reverseOnce = false;
		}
		if (globalVars.counter == 0) globalVars.forward = true;
	}
	//console.log( globalVars.counter );
	var newImg = globalVars.prefix + newNumber + ".jpg";
	$img.attr("src", newImg);
}
function frameUpdate(forward, stop) {
	var newFrame;
	if ( globalVars.counter == stop) { 
		clearInterval(interval);
		return
	}
	if (forward) {
		newFrame = pad(globalVars.counter++, 4);
	}else{
		newFrame = pad(globalVars.counter--, 4);
	}
	var newImg = globalVars.prefix + newFrame + ".jpg";
	$img.attr("src", newImg);
}
var interval;
function goDesign(){
	mouseMoveOff();
	globalVars.forward = false;
	globalVars.reverseOnce = true;
	interval = setInterval( updateImg, 30);
}
function animate(to, speed){
	interval = setInterval( function(){ frameUpdate(false, to) }, speed || 30);
}
function goInteraction(){
	globalVars.reverseOnce = false;
	animate(70, 15);
	mouseMoveOn();
}

$('#designBtn').click( goDesign );
$('#interactionBtn').click( goInteraction );

animate(0)


/*************************************************************************
*************************************************************************




*************************************************************************
*************************************************************************/