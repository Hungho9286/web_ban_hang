let sale=0;
Show(sale);
setInterval(NextSlide,3000);
function NextSlide(){
  HideSlide(sale);
  sale++;
  if(sale==8) sale=0;
  Show(sale);
}
function HideSlide(k){
  let b=document.getElementsByClassName("Slide");
  b[k].style.display="none";
}
function Show(k){
  let a=document.getElementsByClassName("Slide");
  a[k].style.display="block";
}


window.onscroll = function() {myFunction()};
var navbar = document.getElementById("search");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

