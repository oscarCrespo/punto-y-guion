smoothScroll.init({
	"speed": 700,
	"easing": "easeInOutCubic"
});


(function($){

	var $img = $("#bgSequence");

	function updateImg() {
		var newNumber;
		if( counter <= frames-1 && forward){
			newNumber = pad(counter++, 4);
			if (counter == frames-1) forward=false;
		}else if(counter < frames && !forward ) {
			newNumber = pad(counter--, 4);
			if (counter == 0) forward=true;
		}
		console.log( counter );
		var newImg = prefix + newNumber + ".jpg";
		$img.attr("src", newImg);
	}

	$(document).mousemove(function(event){
	  var xPercent = (event.pageX / $(document).width()) * 100;
	  var normalizedNum = Math.floor(xPercent * 0.79);
	  //console.log(normalizedNum);
	  counter = normalizedNum ;
	  updateImg()
	})


})(jQuery)



// document.addEventListener('DOMContentLoaded', function(){
//     var img = document.getElementById('bgSequence');
//     var canvas = document.getElementById('c');
//     var context = canvas.getContext('2d');
//     var btn = getElementById("cambiar");

//     var cw = 1280;
//     var ch = 720;
//     canvas.width = cw;
//     canvas.height = ch;

//     btn.addEventListener('click', function(){
//         draw(img,context,cw,ch);
//     },false);

// },false);

// function draw(img,c,w,h) {
//     //if(v.paused || v.ended) return false;
//     c.drawImage(v,0,0,w,h);
//     setTimeout(draw,20,v,c,w,h);
// }


/*************************************************************************
*************************************************************************




*************************************************************************
*************************************************************************/