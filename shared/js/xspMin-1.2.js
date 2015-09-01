///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     Documentación Framework de webXSP --- xspMin-1.2.js 
//     
//     winW --> ancho de la ventana del navegador
//     
//     winH --> alto de la ventana del navegador
//     
//     xspID(ID) --> obtener el objeto mediante su ID  -- xspID('idObjeto');
//     
//     xspClass(elClass) --> obtener los objetos con una clase  -- xspClass('laClase');
//     
//     xspTrackGA(tipoE, categoria, accion, etiqueta, url) --> push para las estadisticas de GA
//         - tipoE -- tipo de evento -- 0 = '_trackEvent' || 1 = '_trackPageview';
//         - categoría -- 'Facebook' || 'Twitter' (la categoría que nos manden en la relación);
//         - acción -- 'click' (la acción que nos manden en la relación);
//         - etiqueta -- 'botonAlgo' (la etiqueta que nos manden en la relación);
//         - url -- ruta del archivo al que se le hace el '_trackPageView'
//             ejemplos:
//                 si el tipoE es 0 se ejecuta la función así ::  xspTrackGA(0,'Twitter','click','LinkTwitter','');
//                 si el tipoE es 1 se ejecuta la función así ::  xspTrackGA(1,'','','','procardio/archivo.php');
//     
//     
//     xspInIE --> booleano que si regresa true, es que si estamos en explorer
//     
//     xspIEVersion --> nos regresa en un string la versión de explorer -- '7.0'
//     
//     xspBrowserType --> nos regresa el tipo de navegador :: 'webkit', 'firefox', 'Internet Explorer';
//     
//     xspInMobile --> booleano que si es true, es que están en móvil
//     
//     xspMobileType --> nos dice en que tipo de móvil están visualizando :: 'Android' , 'iPhone' , 'webOS' , 'iPad' , 'BlackBerry', 'Windows Phone'
//     
//     
//     document.getScroll()[1] --> obtener posición del scroll en vertical
//     
//     document.getScroll()[0] --> obtener posición del scroll en horizontal
//     
//     formateaCifra(cifra) --> nos regresa la cifra que le mandemos dividido por comas (se envía como string)) :: "1000" --> "1,000";
//     
//     xspFlashDetect --> si nos regresa true es que si tiene instalado flash ese navegador;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones del FrameWork interno de wXSP

//__________________________________________________Función para obtener el tamaño de la ventana


var winW, winH;

function getWindowSize(){
     if (self.innerWidth) { 
        winW = self.innerWidth; 
        winH = self.innerHeight; 
    } else if (document.documentElement && document.documentElement.clientWidth) {
        winW = document.documentElement.clientWidth; 
        winH = document.documentElement.clientHeight; 
    } else if (document.body) { 
        winW = document.body.clientWidth; 
        winH = document.body.clientHeight; 
    }

}

getWindowSize();


window.onresize=getWindowSize;

//____________________________________________________________Funciones para obtener objetos

function xspID(ID){
    return document.getElementById(ID);
}

function xspClass(elClass){
    return $("."+elClass);
}

//__________________________________________________ Función de google analytics

/*function xspTrackGA(categoria,accion,etiqueta) {
    //Sólo funciona si está activado el código de analytics try y catch
    try{
        _gaq.push(['_trackEvent', categoria, accion, etiqueta]);
    }
    catch (err){
        console.log('No Analytics!');
    }
}*/

//_____________________________ V2

function xspTrackGA (tipoE, categoria, accion, etiqueta, url) {
    //______________________________________ evento si es 0  == '_trackEvent';
    //______________________________________ evento si es 1 == '_trackPageview';
    //____________ ejemplo de evento 0 || '_trackEvent'    _________________ xspTrackGA(0,'Twitter','click','LinkTwitter','');
    //____________ ejemplo de evento 1 || '_trackPageview' _________________ xspTrackGA(1,'','','','procardio/archivo.php');

    var typeEvent = ['_trackEvent','_trackPageview'];

    try{
        if (tipoE == 0) {
            _gaq.push([typeEvent[0], categoria, accion, etiqueta]); 
        }else if (tipoE == 1) {
            _gaq.push([typeEvent[0], url]); 
        };
    }catch (err){
        //console.log('No Analytics!');
    }
}


//__________________________________________ version de IE

var xspInIE=false;
var xspIEversion = '';
var xspBrowserType = '';
    
function xspIEDetect(){
    //console.log("IE"+navigator.appName=="Microsoft Internet Explorer")
    var myNav = navigator.userAgent.toLowerCase();

    if (navigator.appName=="Microsoft Internet Explorer") {
        xspInIE=true;
        xspIEversion = myNav.substr(30,3);
        xspBrowserType = 'IE'+' '+xspIEversion;
        //console.log(myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
        //console.log(myNav.substr(30,3));
    }else if(navigator.appName=="Netscape"){
        if (navigator.userAgent.toLowerCase().match(/firefox/i) == 'firefox') {
            xspBrowserType = 'Mozilla Firefox';
        }else if(navigator.userAgent.toLowerCase().match(/webkit/i) == 'webkit'){
            xspBrowserType = 'apple webkit';
        }
    }
}

xspIEDetect();

// _________________________________________ Detectar movil

var xspInMobile = false;
var xspMobileType = '';

function xspDetectmob() {
    if( navigator.userAgent.match(/Android/i)){
        xspInMobile = true;
        xspMobileType = 'Android';
        //alert('estas en movil y utilizando ' + xspMobileType);
    }else if(navigator.userAgent.match(/webOS/i)){
        xspInMobile = true;
        xspMobileType = 'webOS';
        //alert('estas en movil y utilizando ' + xspMobileType);
    }else if(navigator.userAgent.match(/iPhone/i)){
        xspInMobile = true;
        xspMobileType = 'iPhone';
        //alert('estas en movil y utilizando ' + xspMobileType);
    }else if(navigator.userAgent.match(/iPad/i)){  //___________________________________________________ ver manera de buscar la version de iPad
        xspInMobile = true;
        xspMobileType = 'iPad';
        //alert('estas en movil y utilizando ' + xspMobileType);
    }else if(navigator.userAgent.match(/iPod/i)){
        xspInMobile = true;
        xspMobileType = 'iPod';
        //alert('estas en movil y utilizando ' + xspMobileType);
    }else if(navigator.userAgent.match(/BlackBerry/i)){
        xspInMobile = true;
        xspMobileType = 'BlackBerry';
        //alert('estas en movil y utilizando ' + xspMobileType);
    }else if(navigator.userAgent.match(/Windows Phone/i)){
        xspInMobile = true;
        xspMobileType = 'Windows Phone';
        //alert('estas en movil y utilizando ' + xspMobileType);
    }else{
        xspInMobile = false;
    }
}

xspDetectmob();

//______________________________________________________________________________________________________________ obtener posición del scroll
//__________________________________________________ obtener posición del scroll en vertical = document.xspGetScroll()[1];
//__________________________________________________ obtener posición del scroll en horizontal = document.xspGetScroll()[0];

document.getScroll= function(){
    if(window.pageYOffset!= undefined){
        return [pageXOffset, pageYOffset];
    }else{
        var sx, sy, d= document, r= d.documentElement, b= d.body;
        sx= r.scrollLeft || b.scrollLeft || 0;
        sy= r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}


//_____________________________________________formateo de cifras en string ejmplo formateaCifra("1000") : regresa --> "1,000"

function formateaCifra (cifra) {
        var cuenta3 = 0;
        var nuevaCifra="";
        var localArr=[];
        var coma=0;

        for (var i = cifra.length - 1; i >= 0; i--) {
            cuenta3++;
            localArr.push(cifra.substr(i,1));
            if (cuenta3 == 3) {
                coma++;
                var revisa=cifra.length-(3 * coma);
                if (revisa!=0) {
                localArr.push(',');
                cuenta3=0;
                };
            };    
        };
        
        for (var j = localArr.length - 1; j >= 0; j--) {
            nuevaCifra+=localArr[j];
        };
        return nuevaCifra;  
}

// _______________________________________________________________ detecta flash en xspBrowserType

function xspDetectFlash () {
    for (var i = 0; i < navigator.plugins.length; i++) {
        if(navigator.plugins[i].description.match('Flash')){
            return true;
        }else{
            return false;
        }
    };
}

var xspFlashDetect = xspDetectFlash();