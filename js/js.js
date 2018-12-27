
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}







var nav1 = document.getElementById("nav_1");
var nav2 = document.getElementById("nav_2");
var nav3 = document.getElementById("nav_3");
var nav4 = document.getElementById("nav_4");

				
var navi_con1 = document.getElementById("navi_con1");
var navi_con2 = document.getElementById("navi_con2");
var navi_con3 = document.getElementById("navi_con3");

function over1(){

    document.getElementById("navi_con1").style.display = "block";
	
   
}


function out1(){

    document.getElementById("navi_con1").style.display = "none";
    
   
}

function over2(){

    document.getElementById("navi_con2").style.display = "block";
	
   
}


function out2(){

    document.getElementById("navi_con2").style.display = "none";
    
   
}

function over3(){

    document.getElementById("navi_con3").style.display = "block";
	
}


function out3(){

    document.getElementById("navi_con3").style.display = "none";
    
   
}



// document.getElementById("nav_1").addEventListener("click", function () {

    // document.getElementById("navi_con1").style.display = "none";
   
// });






// document.getElementById("result-button-2").addEventListener("click", function () {

    // document.getElementById("result-button-2-drop").style.display = "block";
    // document.getElementById("result-button-2").style.display = "none";
    // document.getElementById("result-button-22").style.display = "block";
	
	
	// document.getElementById("result-button-22").addEventListener("click", function () {

	// document.getElementById("result-button-2-drop").style.display = "none";
	// document.getElementById("result-button-22").style.display = "none";
	// document.getElementById("result-button-2").style.display = "block";
	// });
// });






// document.getElementById("result-button-3").addEventListener("click", function () {

    // document.getElementById("result-button-3-drop").style.display = "block";
    // document.getElementById("result-button-3").style.display = "none";
    // document.getElementById("result-button-33").style.display = "block";
	
	
	// document.getElementById("result-button-33").addEventListener("click", function () {

	// document.getElementById("result-button-3-drop").style.display = "none";
	// document.getElementById("result-button-33").style.display = "none";
	// document.getElementById("result-button-3").style.display = "block";
	// });
// });












$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});
























