
function tryAgain(e) 
  {
    setTimeout(reloadImg,1, e);
  }

  function reloadImg(e)
  {
    var source = e.src;

    e.src = 'https://res.cloudinary.com/ddcdyhfjc/image/upload/v1628401396/KEKUL/kekul-avatar.webp';
	
  }
  
 
  function tryAgainLogo(e) 
  {
    setTimeout(reloadImgLogo,1, e);
  }

  function reloadImgLogo(e)
  {
    var source = e.src;
    e.src = '/images/logo_kekul.gif';
  }
 
  function tryAgainLogin(e) 
  {
    setTimeout(reloadImgLogin,1, e);
  }

  function reloadImgLogin(e)
  {
    var source = e.src;
    e.src = '/images/iconos_kekul_Artboard_10.png';
  }

  function tryAgainLogoK(e) 
  {
    setTimeout(reloadImgLogoK,1, e);
  }

  function reloadImgLogoK(e)
  {
    var source = e.src;
    e.src = '/images/logo_kekul.jpg';
  }
 
  function tryAgainPortada(e) 
  {
    setTimeout(reloadImgPortada,1, e);
  }

  function reloadImgPortada(e)
  {
    var source = e.src;
    e.src = '/images/kekul.webp';
  }


var availWidth = screen.availWidth; 
document.cookie = 'index=ScreenWidthB='+availWidth+'; expires=Mon, 31 Dec 2029 04:00:00 GMT'

function cc()
{if (document.cookie == "") 
  {alert("Es necesario que habilite las COOKIES en su navegador!");
  document.Form1.cookieexists.value ="false"  
  } else {document.Form1.cookieexists.value ="true"
  }}
document.cookie = "aprobado=si; max-age = 3153600000"


	window.onresize = function (event) {
  applyOrientation();
}
function applyOrientation() {
  if (window.innerHeight < window.innerWidth) {
	document.cookie = "orientation=1"
  }
}
$("[data-fancybox]").fancybox({
		arrows: false,
	infobar: false,
	buttons : [
		'close'
	],
	protect : true,
	loop: false,
	scrolling: 'no',
autoscale: true,
	});
	
				
				$(function(){ // document ready
 
  if (!!$('.sticky').offset()) { // make sure ".sticky" element exists
 
    var stickyTop = $('.sticky').offset().top; // returns number 
 
    $(window).scroll(function(){ // scroll event
 
      var windowTop = $(window).scrollTop(); // returns number 
 
      if (stickyTop < windowTop){
        $('.sticky').css({ position: 'fixed', top: 0 });
      }
      else {
        $('.sticky').css('position','static');
      }
 
    });
 
  }
 
});

 

				

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}		

		if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


	function ajaxFunctionRecordatorio() {
function handleForm(event) { event.preventDefault(); } 
var form = document.getElementById("recordatorio");
form.addEventListener('submit', handleForm);


	var ajaxRequest; 
    var xmlhttp;
  
        xmlhttp = new XMLHttpRequest();
   
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        		document.getElementById("loading2").innerHTML = ''; // Hide the image after the response from the server
            document.getElementById("ajaxRecordatorio").innerHTML = xmlhttp.responseText;
		
        }
    }
    document.getElementById("loading2").innerHTML = '<img src="images/loading.gif" />'; // Set here the image before sending request
 
var email = document.getElementById("mail_recordatorio").value;
var queryString = "?mail=" + email;
	xmlhttp.open("GET", "includes/recordatorio.asp" + queryString, true);
    xmlhttp.send();
}


 
  {
  icons: [
    {
      src: "https://res.cloudinary.com/ddcdyhfjc/image/upload/v1497309910/android-icon-192x192.png",
      sizes: "32x32",
      type: "image/png",
      purpose: "any maskable"
    }
  ]
}

function disableF5(e) {
    if ((e.which || e.keyCode) == 116 || ((e.ctrlKey || e.metaKey) && (e.which || e.keyCode) == 82) || (window.event.ctrlKey && e.keyCode == 82)) {
        fetchPage(originalURL);
        e.preventDefault();
    }
}
function fetchPage(originalURL) {
    jQuery.get( originalURL, function( data ) {
        jQuery( "body" ).html( data );
    });}
	
	   
function ajaxFunctionRecomendacion() {
function handleForm(event) { event.preventDefault(); } 
var form = document.getElementById("contactForm");
form.addEventListener('submit', handleForm);
var ajaxRequest; 
    var xmlhttp;
xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        		document.getElementById("loading").innerHTML = ''; // Hide the image after the response from the server
            document.getElementById("ajaxDiv").innerHTML = xmlhttp.responseText;
        }
    }
    document.getElementById("loading").innerHTML = '<img src="images/loading.gif" />'; // Set here the image before sending request
var email = document.getElementById("email_recomienda").value;
var queryString = "?email_recomienda=" + email;
	xmlhttp.open("GET", "includes/recomendacion.asp" + queryString, true);
    xmlhttp.send();
}
	
	function ajaxFunction() {
function handleForm(event) { event.preventDefault(); } 
var form = document.getElementById("contactForm");
form.addEventListener('submit', handleForm);
var ajaxRequest; 
    var xmlhttp;
xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        		document.getElementById("loading").innerHTML = ''; // Hide the image after the response from the server
            document.getElementById("ajaxDiv").innerHTML = xmlhttp.responseText;		
        }
    }
    document.getElementById("loading").innerHTML = '<img src="images/loading.gif" />'; // Set here the image before sending request
var email = document.getElementById("email_suscribe").value;
var queryString = "?email_suscribe=" + email;
	xmlhttp.open("GET", "includes/suscripcion.asp" + queryString, true);
    xmlhttp.send();
}

	
