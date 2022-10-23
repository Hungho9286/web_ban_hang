let index=0;
Show(index);
setInterval(NextSlide,5000);
function Show(k){
  let a=document.getElementsByClassName("Slide");
  a[k].style.display="block";
}
function HideSlide(k){
  let b=document.getElementsByClassName("Slide");
  b[k].style.display="none";
}
function NextSlide(){
  HideSlide(index);
  index++;
  if(index==4) index=0;
  Show(index);
}
function PrevSlide(){
  HideSlide(index);
  index--;
  if(index==-1) index=3;
  Show(index);
}
let indexsp=0;
ShowSanPham(indexsp); 
function ShowSanPham(k){
  let sp=document.getElementsByClassName("css-57");
  sp[k].style.display="block";
}
function HideSanPham(k){
  let sp=document.getElementsByClassName("css-57");
  sp[k].style.display="none";
}
function NextSlideSP(){
  if(indexsp<=1){
    HideSanPham(indexsp);
    indexsp++;
    ShowSanPham(indexsp);
  }
}
function PrevSanPham(){
  if(indexsp>0)
  {
    HideSanPham(indexsp);
  indexsp--;
  }
  if(indexsp<3)
  ShowSanPham(indexsp);
}

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
let indexDM=0;
ShowSanPhamDM(indexDM); 
function ShowSanPhamDM(k){
  let spdm=document.getElementsByClassName("SlideDienMay");
  spdm[k].style.display="block";
}
function HideSanPhamDM(k){
  let spdm=document.getElementsByClassName("SlideDienMay");
  spdm[k].style.display="none";
}
function NextSlideSPDM(){
  if(indexDM<=1){
    HideSanPhamDM(indexDM);
    indexDM++;
    ShowSanPhamDM(indexDM);
  }
}
function PrevSanPhamDM(){
  if(indexDM>0)
  {
    HideSanPhamDM(indexDM);
  indexDM--;
  }
  if(indexDM<3)
  ShowSanPhamDM(indexDM);
}

let indexTN=0;
ShowSanPhamTN(indexTN); 
function ShowSanPhamTN(k){
  let spTN=document.getElementsByClassName("SlideTanNhiet");
  spTN[k].style.display="block";
}
function HideSanPhamTN(k){
  let spTN=document.getElementsByClassName("SlideTanNhiet");
  spTN[k].style.display="none";
}
function NextSlideSPTN(){
  if(indexTN==0){
    HideSanPhamTN(indexTN);
    indexTN++;
    ShowSanPhamTN(indexTN);
  }
}
function PrevSanPhamTN(){
  if(indexTN>0)
  {
    HideSanPhamTN(indexTN);
  indexTN--;
  }
  if(indexTN<2)
  ShowSanPhamTN(indexTN);
}

let indexGD=0;
ShowSanPhamGD(indexGD); 
function ShowSanPhamGD(k){
  let spGD=document.getElementsByClassName("SlideGiaDung");
  spGD[k].style.display="block";
}
function HideSanPhamGD(k){
  let spGD=document.getElementsByClassName("SlideGiaDung");
  spGD[k].style.display="none";
}
function NextSlideSPGD(){
  if(indexGD==0){
    HideSanPhamGD(indexGD);
    indexGD++;
    ShowSanPhamGD(indexGD);
  }
}
function PrevSanPhamGD(){
  if(indexGD>0)
  {
    HideSanPhamGD(indexGD);
  indexGD--;
  }
  if(indexGD<2)
  ShowSanPhamGD(indexGD);
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

