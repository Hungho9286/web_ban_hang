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
function CheckPhone(){
    var phone=document.getElementById("phone").value;
    let a=document.getElementById("error3");
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
function CheckName(){
    var name=document.getElementById("name").value;
    let a=document.getElementById("error1");
  if(isNaN(name)==true){
      a.style.display="none";
  }
  else{
      a.style.display="block";
  }
}
function CheckMail(){
    var email=document.getElementById("email").value;
    let a=document.getElementById("error2");
    if(CheckEM(email)==true)
    {
        a.style.display="none";
    }
    else{
        a.style.display="block";
    }
}
function CheckEM(email){
    for(let i=0;i<=email.length;i++){
        if(email[i]=="@")
        return true;
    }
    return false;
}
function CheckAll()
{
    var phone=document.getElementById("phone").value;
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    let a=document.getElementById("complete");
    let b=document.getElementById("error_all");
    if(Check(phone)==true && CheckEM(email)==true && isNaN(name)==true){
        a.style.display="block";
        b.style.display="none";
    }
    else{
        a.style.display="none"
        b.style.display="block";
    }
}