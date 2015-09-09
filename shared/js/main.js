// //funcion que cambie los bg´s
// function cambiaBg (){	
// 	if (document.getElementById('body').className == "bg1"){
// 			document.getElementById('body').className = "bg2";

// 		}
// 	else if (document.getElementById('body').className == "bg2"){
// 		document.getElementById('body').className="bg3";
// 	}
// 	else if (document.getElementById('body').className == "bg3"){
// 		document.getElementById('body').className="bg1";
// 	}
// };
// preload(['shared/img/bg01.jpg','shared/img/bg02.jpg','shared/img/bg03.jpg']);
// function preload(arrayOfImages) {
//      $(arrayOfImages).each(function(){
//          $('<img/>')[0].src = this;
       
//      });
//       console.log("done preload completo");
//  }
// //funcion que maneje el tiempo de cambio de Bgs
// var interval;

// function empiezaCambio (segundos, veces) {
// 	var t = segundos*1000;
// 	interval = setInterval(function(){cambiaBg()}, t);

// }

// function detenCambio() {
//     clearInterval(interval);
// }

// // verticalAlign
// function vertAlign (objeto) {
// 	objeto = document.getElementById(objeto);
// 	objeto.style.top=(winH/2)-(objeto.offsetHeight/2)+40+"px";
// }

// //anima Showcaser item
// function animaIn (contenedor, modo) {
// 	// if (modo)== "iDi"{

// 	// }
// 	var nullObj= "";
// 	var a1=$(contenedor+" div")[0];
// 	var a2=$(contenedor+" div")[1];
// 	var a3=$(contenedor+" div")[2];

// 	a1.style.visibility="visible";
// 	a2.style.visibility="visible";
// 	a3.style.visibility="visible";

// 	var arrItems=[nullObj,a1, a2, a3];

// 	var tl=new TimelineMax({});
// 		tl.staggerFrom(arrItems,1,{css:{opacity:0, left:-10,}, ease:Expo.easeOut},.5);
// }
// function animaOut (contenedor, modo) {
// 	// if (modo)== "iDi"{

// 	// }
// 	var nullObj= "";
// 	var a1=$(contenedor+" div")[0];
// 	var a2=$(contenedor+" div")[1];
// 	var a3=$(contenedor+" div")[2];

// 	var arrItems=[nullObj,a1, a2, a3];

// 	var tl=new TimelineMax({});
// 		tl.staggerTo(arrItems,1,{css:{opacity:0, right:-10,}, ease:Expo.easeOut},.5);
// }

// // function initAnima () {
// // 			var tl = new TimelineMax();
// // 			tl.to(xspID("circulo"), 2, {css:{left:100}, ease:Expo.easeOut},1.5),
// // 			tl.to(xspID("txt_1"), 2, {css:{left:220}, ease:Expo.easeOut},2),
// // 			tl.to(xspID("txt_2"), 2, {css:{left:350}, ease:Expo.easeOut},2.5),
// // 			tl.to(xspID("txt_3"), 2, {css:{left:93}, ease:Expo.easeOut},3)
// // 			tl.to(xspID("txt_4"), 2, {css:{left:360}, ease:Expo.easeOut},3.5),
// // 			tl.to(xspID("txt_5"), 2, {css:{left:226}, ease:Expo.easeOut},4),
// // 			tl.timeScale(1.5);
// // 		}


// function initAnima () {
	
// 	}

// // Behance Api Key
// // puntoyguion
// // ou7brZchU1j4Ig5gvkl2rsz8e2r5hX72

// Request key
//http://www.behance.net/v2/users/puntoyguion/projects?api_key=ou7brZchU1j4Ig5gvkl2rsz8e2r5hX72
// var objProjects = {"projects":[{"id":7108451,"name":"Promo Grand Summer Sale \u00b412","published_on":1360620780,"created_on":1360619811,"modified_on":1360620780,"url":"https:\/\/www.behance.net\/gallery\/7108451\/Promo-Grand-Summer-Sale-12","privacy":"public","fields":["Branding","Creative Direction","Motion Graphics"],"covers":{"404":"https:\/\/m1.behance.net\/rendition\/projects\/7108451\/404\/f55573de75126136c840db8d827a3dde.jpg","202":"https:\/\/m1.behance.net\/rendition\/projects\/7108451\/orig\/f55573de75126136c840db8d827a3dde.jpg","230":"https:\/\/m1.behance.net\/rendition\/projects\/7108451\/230\/f55573de75126136c840db8d827a3dde.jpg","115":"https:\/\/m1.behance.net\/rendition\/projects\/7108451\/115\/f55573de75126136c840db8d827a3dde.jpg"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":116,"appreciations":3,"comments":0},"for_sale":0},{"id":7097753,"name":"Renders Colecci\u00f3n \u00b413 Habana Home","published_on":1360614969,"created_on":1360575199,"modified_on":1360614969,"url":"https:\/\/www.behance.net\/gallery\/7097753\/Renders-Coleccion-13-Habana-Home","privacy":"public","fields":["Art Direction","Editorial Design","Sculpting"],"covers":{"404":"https:\/\/m1.behance.net\/rendition\/projects\/7097753\/404\/dd630624f5e0264ee039642be50f4543.jpg","202":"https:\/\/m1.behance.net\/rendition\/projects\/7097753\/orig\/dd630624f5e0264ee039642be50f4543.jpg","230":"https:\/\/m1.behance.net\/rendition\/projects\/7097753\/230\/dd630624f5e0264ee039642be50f4543.jpg","115":"https:\/\/m1.behance.net\/rendition\/projects\/7097753\/115\/dd630624f5e0264ee039642be50f4543.jpg"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":144,"appreciations":12,"comments":0},"for_sale":0},{"id":2959259,"name":"Converse Logo","published_on":1327342114,"created_on":1327341438,"modified_on":1353472874,"url":"https:\/\/www.behance.net\/gallery\/2959259\/Converse-Logo","privacy":"public","fields":["Branding"],"covers":{"202":"https:\/\/m1.behance.net\/rendition\/projects\/2959259\/orig\/f9cb2e129c05209eaa4e393dfce1469e.png","115":"https:\/\/m1.behance.net\/rendition\/projects\/2959259\/115\/f9cb2e129c05209eaa4e393dfce1469e.png"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":708,"appreciations":20,"comments":0},"for_sale":0},{"id":3012749,"name":"White Cherry","published_on":1327896963,"created_on":1327896433,"modified_on":1353475950,"url":"https:\/\/www.behance.net\/gallery\/3012749\/White-Cherry","privacy":"public","fields":["Illustration","Photo Illustration"],"covers":{"202":"https:\/\/m1.behance.net\/rendition\/projects\/3012749\/orig\/0866cb193a1cfe9ad125432197dec687.png","115":"https:\/\/m1.behance.net\/rendition\/projects\/3012749\/115\/0866cb193a1cfe9ad125432197dec687.png"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":180,"appreciations":16,"comments":0},"for_sale":0},{"id":3930759,"name":"Area Creativa - Brochure","published_on":1337050482,"created_on":1337050168,"modified_on":1354659204,"url":"https:\/\/www.behance.net\/gallery\/3930759\/Area-Creativa-Brochure","privacy":"public","fields":["Advertising","Branding"],"covers":{"202":"https:\/\/m1.behance.net\/rendition\/projects\/3930759\/orig\/613a9c2a244f33144b4c6f03066e9db5.png","115":"https:\/\/m1.behance.net\/rendition\/projects\/3930759\/115\/613a9c2a244f33144b4c6f03066e9db5.png"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":291,"appreciations":13,"comments":0},"for_sale":0},{"id":3929993,"name":"Habana Home - Campa\u00f1a Integral Mayo","published_on":1337044603,"created_on":1337043816,"modified_on":1354659206,"url":"https:\/\/www.behance.net\/gallery\/3929993\/Habana-Home-Campana-Integral-Mayo","privacy":"public","fields":["Branding","Motion Graphics","Print Design"],"covers":{"202":"https:\/\/m1.behance.net\/rendition\/projects\/3929993\/orig\/42b04c398f6ac0901615f7c6f0836c91.png","115":"https:\/\/m1.behance.net\/rendition\/projects\/3929993\/115\/42b04c398f6ac0901615f7c6f0836c91.png"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":239,"appreciations":14,"comments":0},"for_sale":0},{"id":3930809,"name":"Infografia Instructiva","published_on":1337050746,"created_on":1337050649,"modified_on":1353529386,"url":"https:\/\/www.behance.net\/gallery\/3930809\/Infografia-Instructiva","privacy":"public","fields":["Motion Graphics"],"covers":{"202":"https:\/\/m1.behance.net\/rendition\/projects\/3930809\/orig\/9574ec24e11a46aa8e6b33c6e60b3757.png","115":"https:\/\/m1.behance.net\/rendition\/projects\/3930809\/115\/9574ec24e11a46aa8e6b33c6e60b3757.png"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":115,"appreciations":5,"comments":0},"for_sale":0},{"id":3930429,"name":"Tecnocolor Logo","published_on":1337047906,"created_on":1337047645,"modified_on":1353529345,"url":"https:\/\/www.behance.net\/gallery\/3930429\/Tecnocolor-Logo","privacy":"public","fields":["Branding","Graphic Design"],"covers":{"202":"https:\/\/m1.behance.net\/rendition\/projects\/3930429\/orig\/e2112cf45225a06ee32d304d8e670d1d.jpg","115":"https:\/\/m1.behance.net\/rendition\/projects\/3930429\/115\/e2112cf45225a06ee32d304d8e670d1d.jpg"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":223,"appreciations":11,"comments":0},"for_sale":0},{"id":2959891,"name":"Stand Custom Sony Ericsson","published_on":1327346035,"created_on":1327345727,"modified_on":1353472910,"url":"https:\/\/www.behance.net\/gallery\/2959891\/Stand-Custom-Sony-Ericsson","privacy":"public","fields":["Branding","Industrial Design"],"covers":{"202":"https:\/\/m1.behance.net\/rendition\/projects\/2959891\/orig\/b40bd37df6cd37575f742036541058ac.jpg","115":"https:\/\/m1.behance.net\/rendition\/projects\/2959891\/115\/b40bd37df6cd37575f742036541058ac.jpg"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":197,"appreciations":12,"comments":0},"for_sale":0},{"id":3079377,"name":"Habana Home Info","published_on":1328561694,"created_on":1328560562,"modified_on":1354655623,"url":"https:\/\/www.behance.net\/gallery\/3079377\/Habana-Home-Info","privacy":"public","fields":["Motion Graphics","Branding","Information Architecture"],"covers":{"202":"https:\/\/m1.behance.net\/rendition\/projects\/3079377\/orig\/7bd7f2bcc5ec7ceb5bfba731adfabcd5.png","115":"https:\/\/m1.behance.net\/rendition\/projects\/3079377\/115\/7bd7f2bcc5ec7ceb5bfba731adfabcd5.png"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":112,"appreciations":7,"comments":0},"for_sale":0},{"id":2958945,"name":"Mailing Area Creativa","published_on":1327340785,"created_on":1327339929,"modified_on":1353472860,"url":"https:\/\/www.behance.net\/gallery\/2958945\/Mailing-Area-Creativa","privacy":"public","fields":["Advertising","Marketing","Illustration"],"covers":{"202":"https:\/\/m1.behance.net\/rendition\/projects\/2958945\/orig\/7abd6a8ef5b8ceb02f5a6fa9479d0c40.jpg","115":"https:\/\/m1.behance.net\/rendition\/projects\/2958945\/115\/7abd6a8ef5b8ceb02f5a6fa9479d0c40.jpg"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":180,"appreciations":8,"comments":0},"for_sale":0},{"id":3930273,"name":"Anatomia de un fotomontaje","published_on":1337046931,"created_on":1337046572,"modified_on":1354659206,"url":"https:\/\/www.behance.net\/gallery\/3930273\/Anatomia-de-un-fotomontaje","privacy":"public","fields":["Illustration","Interior Design"],"covers":{"202":"https:\/\/m1.behance.net\/rendition\/projects\/3930273\/orig\/3aa128f420ce76a365ffddef596ee007.png","115":"https:\/\/m1.behance.net\/rendition\/projects\/3930273\/115\/3aa128f420ce76a365ffddef596ee007.png"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":87,"appreciations":8,"comments":2},"for_sale":0}],"http_code":200};

// //objProjects.projects[0].id

// var objProject1 = {"project":{"id":7108451,"name":"Promo Grand Summer Sale \u00b412","published_on":1360620780,"created_on":1360619811,"modified_on":1360620780,"url":"https:\/\/www.behance.net\/gallery\/7108451\/Promo-Grand-Summer-Sale-12","privacy":"public","fields":["Branding","Creative Direction","Motion Graphics"],"covers":{"404":"https:\/\/m1.behance.net\/rendition\/projects\/7108451\/404\/f55573de75126136c840db8d827a3dde.jpg","202":"https:\/\/m1.behance.net\/rendition\/projects\/7108451\/orig\/f55573de75126136c840db8d827a3dde.jpg","230":"https:\/\/m1.behance.net\/rendition\/projects\/7108451\/230\/f55573de75126136c840db8d827a3dde.jpg","115":"https:\/\/m1.behance.net\/rendition\/projects\/7108451\/115\/f55573de75126136c840db8d827a3dde.jpg"},"mature_content":0,"mature_access":"allowed","owners":[{"id":863177,"first_name":"Oscar","last_name":"Crespo","username":"puntoyguion","city":"Mexico City","state":"","country":"Mexico","location":"Mexico City, Mexico","company":"Punto & Guion","occupation":"Creative Director","created_on":1326689035,"url":"https:\/\/www.behance.net\/puntoyguion","images":{"50":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/50\/863177.53b137abb4100.jpg","100":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/100\/863177.53b137abb4100.jpg","115":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/115\/863177.53b137abb4100.jpg","230":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/230\/863177.53b137abb4100.jpg","138":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/138\/863177.53b137abb4100.jpg","276":"https:\/\/mir-cdn.behance.net\/v1\/rendition\/user\/276\/863177.53b137abb4100.jpg"},"display_name":"Oscar Crespo","fields":["Branding","Motion Graphics","Illustration"]}],"stats":{"views":116,"appreciations":3,"comments":0},"for_sale":0,"tags":["video"],"description":"Video para la campa\u00f1a de fin de temporada, publicada en tiendas Sears y Redes  sociales. Habana Home","modules":[{"id":54551735,"type":"text","text":"<div><span style=\"font-size:19px;\"><span style=\"font-family:trebuchet ms,helvetica,sans-serif;\">Video Promocional | Grand Summer Sale &acute;12&nbsp;<\/span><\/span><\/div>\n\n<div>Direcci&oacute;n, Producci&oacute;n, Animaci&oacute;n y Audio.&nbsp;<\/div>\n\n<div>&nbsp;<\/div>\n\n<div>Campa&ntilde;a de fin de Temporada para la marca Habana Home publicada en tiendas Sears y Redes Sociales.<\/div>\n","text_plain":"Video Promocional | Grand Summer Sale &acute;12&nbsp;\n\nDirecci&oacute;n, Producci&oacute;n, Animaci&oacute;n y Audio.&nbsp;\n\n&nbsp;\n\nCampa&ntilde;a de fin de Temporada para la marca Habana Home publicada en tiendas Sears y Redes Sociales.\n"},{"id":54551733,"type":"embed","width":600,"height":309,"original_width":"1200","original_height":"617","embed":"<iframe src=\"https:\/\/player.vimeo.com\/video\/59385230?byline=0\" width=\"600\" height=\"309\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" style=\"z-index: 0; margin: 0px auto; display: block; height: 309px; width: 600px;\"><\/iframe>"},{"id":54551737,"type":"image","src":"https:\/\/m1.behance.net\/rendition\/modules\/54551737\/disp\/16024b88087facf6cc13457b66ed5646.png","width":600,"height":309,"sizes":{"original":"https:\/\/m1.behance.net\/rendition\/modules\/54551737\/orig\/16024b88087facf6cc13457b66ed5646.png","max_1240":"https:\/\/m1.behance.net\/rendition\/modules\/54551737\/hd\/16024b88087facf6cc13457b66ed5646.png","max_1920":"https:\/\/m1.behance.net\/rendition\/modules\/54551737\/fs\/16024b88087facf6cc13457b66ed5646.png"}},{"id":54551743,"type":"image","src":"https:\/\/m1.behance.net\/rendition\/modules\/54551743\/disp\/4bee63381e5351a51543dc93295ec5a8.jpg","width":600,"height":309,"sizes":{"original":"https:\/\/m1.behance.net\/rendition\/modules\/54551743\/orig\/4bee63381e5351a51543dc93295ec5a8.jpg","max_1240":"https:\/\/m1.behance.net\/rendition\/modules\/54551743\/hd\/4bee63381e5351a51543dc93295ec5a8.jpg","max_1920":"https:\/\/m1.behance.net\/rendition\/modules\/54551743\/fs\/4bee63381e5351a51543dc93295ec5a8.jpg"}},{"id":54551739,"type":"image","src":"https:\/\/m1.behance.net\/rendition\/modules\/54551739\/disp\/cb5858ddd573f311adce445ef71b6054.png","width":600,"height":309,"sizes":{"original":"https:\/\/m1.behance.net\/rendition\/modules\/54551739\/orig\/cb5858ddd573f311adce445ef71b6054.png","max_1240":"https:\/\/m1.behance.net\/rendition\/modules\/54551739\/hd\/cb5858ddd573f311adce445ef71b6054.png","max_1920":"https:\/\/m1.behance.net\/rendition\/modules\/54551739\/fs\/cb5858ddd573f311adce445ef71b6054.png"}},{"id":54551741,"type":"image","src":"https:\/\/m1.behance.net\/rendition\/modules\/54551741\/disp\/748d6631466788825050a6c1f35291db.png","width":600,"height":309,"sizes":{"original":"https:\/\/m1.behance.net\/rendition\/modules\/54551741\/orig\/748d6631466788825050a6c1f35291db.png","max_1240":"https:\/\/m1.behance.net\/rendition\/modules\/54551741\/hd\/748d6631466788825050a6c1f35291db.png","max_1920":"https:\/\/m1.behance.net\/rendition\/modules\/54551741\/fs\/748d6631466788825050a6c1f35291db.png"}}],"short_url":"http:\/\/bit.ly\/Y5mKdf","copyright":{"license":"cc by-nc-nd","description":"Attribution-NonCommercial-NoDerivs","license_id":1},"styles":{"text":{"title":{"font_family":"arial,helvetica,sans-serif","font_weight":"bold","color":"#3B3B3B","text_align":"left","line_height":"1.4em","font_size":"16px","text_decoration":"none","font_style":"normal","display":"inline"},"subtitle":{"font_family":"arial,helvetica,sans-serif","font_weight":"normal","color":"#3B3B3B","text_align":"left","line_height":"1.4em","font_size":"14px","text_decoration":"none","font_style":"normal","display":"inline"},"paragraph":{"font_family":"arial,helvetica,sans-serif","font_weight":"normal","color":"#3B3B3B","text_align":"left","line_height":"1.4em","font_size":"12px","text_decoration":"none","font_style":"normal","display":"inline"},"caption":{"font_family":"arial,helvetica,sans-serif","font_weight":"normal","color":"#3B3B3B","text_align":"left","line_height":"1.4em","font_size":"11px","text_decoration":"none","font_style":"italic","display":"block"},"link":{"font_family":"arial,helvetica,sans-serif","font_weight":"normal","color":"#1769FF","text_align":"left","line_height":"1.4em","font_size":"12px","text_decoration":"none","font_style":"normal","display":"inline"}},"background":{"color":"FFFFFF"},"spacing":{"project":{"top_margin":38},"modules":{"bottom_margin":43}},"dividers":{"font_size":"1px","line_height":"1px","height":"1px","border_color":"#9F9F9F","margin":"-1px auto 0","position":"relative","top":"50%","border_width":"1px 0px 0px 0px","border_style":"dashed"}}},"http_code":200};

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}
var tituloHome=(function(){
	var objTitulos=[
		{"t1": "Combinando", "t2": "tecnologia y diseño", "t3": "con pasion"},
		{"t1": "Desarrollando", "t2": "sitios web", "t3": "increibles"},
		{"t1": "Creando", "t2": "experiencias", "t3": "memorables"},
		{"t1": "Produciendo", "t2": "proyectos", "t3": "enfocados al usuario"},
		{"t1": "Experimentando", "t2": "y aprendiendo", "t3": "en todo momento"}
	]
	var tituloActual=0;
	function cacheaItems () {
		var $t1= $(".a1");
		var $t2= $(".a2");
		var $t3= $(".a3");
		pintaTitulo();
	}
	function pintaTitulo () {
		$t1.html(objTitulos[tituloActual].t1);
		$t2.html(objTitulos[tituloActual].t2);
		$t3.html(objTitulos[tituloActual].t3);
		anima();
	}
	function anima(){
		// var tl=new TimelineMax({});
		// 		tl.staggerFrom(arrItems,1,{css:{opacity:0, left:-10,}, ease:Expo.easeOut},.5);
		// }
	}
	function evalua(){
		if (tituloActual>=objTitulos.length) {
			sumaUno();
		}else{
			tituloActual=0;
		}
		pintaTitulo();
	}
	function sumaUno(){
		tituloActual++;
	}
	return {
		suma:sumaUno
	}
	
})();

// blur en background
// backdrop-filter: blur(10px)
var scrollPercentage;
$(window).scroll(function(){

	var scrollTop=$(this).scrollTop();
	var altoTotal=$(window).height();
	scrollPercentage=100*(scrollTop/altoTotal);
	//console.log( scrollPercentage );
	// if (scrollTop<=800) {
	// 	scrollDown();
	// };
	//mueveSombra();
});
function mueveSombra(){
	var operador=(7*(scrollPercentage*0.01)*2)+1;
	var contador=Math.round(operador * 10) / 10
	
	var sombra="inset 0 "+contador+"px "+contador+"px rgba(0,0,0,0.7)";
	$("#index").css("box-shadow",sombra)
	console.log( sombra);

}


// SCROLL disable

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

function scrollDown(){
	disableScroll();
	$(window).scrollTop($(window).height());
	enableScroll();
}