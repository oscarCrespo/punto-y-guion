smoothScroll.init({
	"speed": 700,
	"easing": "easeInOutCubic"
});
(function(){
	var tituloHome={
		objTitulos:[
			{"t1": "Combining", "t2": "technology and design", "t3": "with passion"},
			{"t1": "Developing", "t2": "custom web solutions focused", "t3": "on the user"},
			{"t1": "Experimenting", "t2": "with astonishing VR experiences ", "t3": "for fun"}
		],
		tituloActual: 0,
		tl: new TimelineMax(),
		centraVertical: function() {
			var container=document.getElementById("mssBienvenida");
			var winH=$("#home").height();
			container.style.top=(winH/2)-(container.offsetHeight/2)+40+"px";
		},
		cacheaItems: function () {
			this.$t1=$("#a1");
			this.$t2=$("#a2");
			this.$t3=$("#a3");
			this.$wrapper=$("#mssBienvenida");
			this.$show=$("#home");
			this.grupo=[this.$t1, this.$t2, this.$t3];
		},
		pintaTitulo: function () {
			//console.log(this.objTitulos[this.tituloActual].t1))
			this.$t1.html(this.objTitulos[this.tituloActual].t1).attr("style","");
			this.$t2.html(this.objTitulos[this.tituloActual].t2).attr("style","");
			this.$t3.html(this.objTitulos[this.tituloActual].t3).attr("style","");
			this.anima();
		},
		anima: function (){	
			    this.tl.set(this.$wrapper, {transformStyle:"preserve-3d", perspective:400, scale:0.9,  transformOrigin:"50% 0%" })
				.set(this.grupo, {transformStyle:"preserve-3d", opacity:0,  z:-1000,  transformOrigin:"50% 0%"})
				.staggerTo(this.grupo,0.7, {css:{ opacity: 1,  z:0,  transformOrigin:"50% 0%"}, ease:Expo.easeOut}, 0.1, "+=0.5")
				.to(this.$wrapper, 4, {css:{scale:1,  transformOrigin:"50% 0%"}}, "-=0.5")
				.staggerTo(this.grupo,0.7, {css:{ opacity: 0,  z:-1000,  transformOrigin:"50% 0%"}, ease:Expo.easeInOut}, 0.05)
				// .set(this.grupo, {opacity:0, y:0})
				// .to(this.$show ,1.3,{css:{"background-position-x":(this.$show.width())+"px"}, ease:Expo.easeOut},"-=0.2")
				// .set(this.$show, {"background-position-x":-(this.$show.width())+"px"})
				// .to(this.$show ,1,{css:{transformOrigin:"0% 0%", "background-position-x":0}, ease:Expo.easeIn},"+=0.1")
				.set(this.$wrapper, {transformStyle:"preserve-3d", perspective:200, scale:0.9,})
				.call(this.evalua.bind(this))
				.timeScale(1);
		},
		evalua: function (){
			if (this.tituloActual < this.objTitulos.length-1) {
				this.sumaUno();
			}else{
				this.tituloActual=0;
			}
			this.pintaTitulo();
			console.log(this.tituloActual);
		},
		sumaUno: function (){
			this.tituloActual++;
			this.pintaTitulo();
		},
		init: function  () {
			this.centraVertical();
			this.cacheaItems();
			this.pintaTitulo();
		}
	};
	tituloHome.init();
})()


/*************************************************************************
*************************************************************************


---------------------------- LINKS PROJECTS ----------------------------

http://www.ciudaddelasideas.com/acercaDe.php
http://www.ciudaddelasideas.com/giftedcitizen/
http://www.aprendeycrece.com.mx/
https://www.ninshionline.com/
http://taner.com.mx/index.php
http://www.agenciai.mx/index.php
http://www.aramark.com.mx/index.php
http://mabakerandchef.com/index.php#lang=en

---------------------------------- * ----------------------------------


*************************************************************************
*************************************************************************/