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
function showphone() {
var a = document.getElementById("sign");
a.style.display="block";
}
function hidephone() {
  var a = document.getElementById("sign");
  a.style.display="none";
  }
  let flag = true ;
  function show_and_hide() {
    if(flag == true)
    {
      showphone();
      flag = false ;
      return;
    }
    else {
      hidephone();
      flag = true ;
    }
  }
  function CheckPhone(){
    var phone=document.getElementById("phone").value;
    let a=document.getElementById("error");
    console.log(Check(phone));
    if(Check(phone)==false){
      a.style.display="block";
    }
    if(Check(phone)==true){
      a.style.display="none";
    }
  }
  function Check(phone){
    if(isNaN(phone)){
      return false;
    }else{
      if(phone.length>10)
      return false;
      if(phone.length==10)
      {
        if(phone[0]=='0')
        return true;
        else
        return false;
      }
      return false;
    }
    }

