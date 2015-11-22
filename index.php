<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Punto & Guion</title>
	<link rel="icon" type="image/ico" href="favicon.ico">
	<link href='http://fonts.googleapis.com/css?family=Lato:100,400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="shared/css/main.css">

	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
	<script src="shared/js/xspMin-1.2.js"></script>
	<script src="shared/js/smooth-scroll.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
	<script src="shared/js/portfolio.js"></script>
</head>
<body id="body" >
	<div id="home" >
		<div id="mssBienvenida">
				<div id="a1">Punto & Guion</div>
				<div id="a2">Estudio</div>
				<div id="a3">Creativo</div>
		</div>
	</div>
	<header>
		<a data-scroll href="#home"><h1 id="logo"></h1></a>

		<nav>
			<!-- <a href=""><div class="btn"><span>About</span></div></a> -->
			<a data-scroll href="#projects"><div class="btn"><span>Projects</span></div></a>
			<a href="http://www.behance.net/puntoyguion" target="_blank"><div class="btn" ><span>Behance</span> <img src="shared/img/behance.png" width="17" alt=""></div></a>
			<a data-scroll href="#contacto"><div class="btn" ><span>Contact</span></div></a>
		</nav>

	</header>
	<section id="video">
		<video autoplay loop muted id="bgvid" width="100%">
		    <source src="shared/video/videoMiddle.mp4" type="video/mp4">
		</video>
	</section>
	<section id="projects">
		<div id="itemsWrapper">
			<div class="item">
				<img src="" alt="">
			</div>
		</div>
	</section>
	<section id="contacto">
		<div class="contactoWrapper">
			<h2>Contacto</h2>
			<a href="tel:+525538807201"><div class="campo"><span>T. </span><strong> 55 3880 7201</strong></div></a>
			<a href="mailto:hola@puntoyguion.com"><div class="campo"><span>M. </span><strong> hola@puntoyguion.com</strong></div></a>
		</div>

	</section>
	
	<script src="shared/js/main.js"></script>
</body>
</html>	