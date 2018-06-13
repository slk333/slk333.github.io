var hamburger = document.querySelector(".hamburger");
var rightHeader = document.querySelector(".rightHeader");
var article = document.querySelector("article");
var footer = document.querySelector("footer");
var mobileMenuIsDisplayed = false



hamburger.onclick = function(){
	
if (mobileMenuIsDisplayed === false){
	hamburger.classList.toggle("is-active");
rightHeader.style.display = "grid"  // afficher les liens
  //rightHeader.classList.add('mobile-rightHeader');
  //rightHeader.classList.remove('rightHeader');
 //rightHeader.classList.remove('display-none');
article.style.visibility = "hidden";
footer.style.visibility = "hidden";
mobileMenuIsDisplayed = true
	
}

else {
	  //rightHeader.classList.add('display-none');
 //rightHeader.classList.remove('rightHeader');
 //rightHeader.classList.remove('mobile-rightHeader');
	hamburger.classList.toggle("is-active");
rightHeader.style.display = "none" // masquer les liens
article.style.visibility = "initial";
footer.style.visibility = "initial";	
mobileMenuIsDisplayed = false
}
}



// media query event handler
if (matchMedia) {
  // const mq = window.matchMedia("(min-width: 700px)");
  // mq.addListener(WidthChange);
  // WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {

	 //   rightHeader.classList.add('rightHeader');
	  //rightHeader.classList.remove('mobile-rightHeader');

   // window width is > 700px
    
  } else {
	// window width is < 700px
	      
	      

  }

}