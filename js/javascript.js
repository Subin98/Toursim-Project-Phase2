///signup////

var email = document.getElementById("email");
var phone = document.getElementById("phone");
var firstname = document.getElementById("firstname");
var secondname = document.getElementById("secondname");
var pwd1 = document.getElementById("pwd1"); 
var pwd2 = document.getElementById("pwd2")
var emailvalid = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z])?$/;
////regexpression for phone numbers which accept XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX//////
var phonenum1 = /^\d{10}$/;
var phonenum2 = /^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$/;
var phonenum3 = /^([0-9]{3})[.]([0-9]{3})[.]([0-9]{4})$/;
var phonenum4 = /^([0-9]{3})[ ]([0-9]{3})[ ]([0-9]{4})$/;
/////////// regexpression for passwords //////////
var pwdvalidate = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
var bar = document.getElementById("custombar");


document.getElementById("email").addEventListener("input",emailcheck);
document.getElementById("firstname").addEventListener("input",firstnamecheck);
document.getElementById("secondname").addEventListener("input",secondnamecheck);
document.getElementById("phone").addEventListener("input",phonecheck);
document.getElementById("pwd1").addEventListener("input",password1check);
document.getElementById("pwd2").addEventListener("input",password2check);
document.getElementById("Myform").addEventListener("submit",validate);

function validate(event)
{
  firstcheck = firstnamecheck();
  secondcheck = secondnamecheck();
  mailcheck = emailcheck();
  phcheck = phonecheck();
  pwd1check = password1check();
  pwd2check = password2check();
  if(firstcheck==true && secondcheck==true && mailcheck==true && phcheck==true && pwd1check==true && pwd2check==true)
  {
    return true;
  }
  else
  {   
  event.preventDefault();
  }
  
 
}

//////////checking first name if blank///////////////
  function firstnamecheck()
  {
    if(firstname.value.trim()=="")
      {
        document.getElementById("frstnmerr").removeAttribute("hidden");
        document.getElementById("frstnmerr").innerText=("Name cannot be blank");
        document.getElementById("firstname").style.borderColor="red";
      }
      else
      {
        reseterr("frstnmerr","firstname");
        return true;
      }
  }
 //////////checking second name if blank /////////////////
  function secondnamecheck()
  {
    if(secondname.value.trim()=="")
      {
        document.getElementById("sndnmerr").removeAttribute("hidden");
        document.getElementById("sndnmerr").innerText=("Name cannot be blank");
        document.getElementById("secondname").style.borderColor="red";
        return false;
      }
      else
    {
      reseterr("sndnmerr","secondname");
      return true;
    }
    
  }

 ///////////Email validation//////////////////
  function emailcheck()
  {
    if(email.value.trim()=="")
    {
      document.getElementById("emailerr").removeAttribute("hidden");
      document.getElementById("emailerr").innerText=("Email cannot be blank");
      document.getElementById("email").style.borderColor="red";
    }
    else if(!(emailvalid.test(email.value)))
    {
      document.getElementById("emailerr").removeAttribute("hidden");
      document.getElementById("emailerr").innerText=("Enter a valid email");
      document.getElementById("email").style.borderColor="red";
    }
    else
    {
      reseterr("emailerr","email");
      return true;
    }
  }

 ///////////////////phone number validation/////////////////////// 
  function phonecheck()
  {
    if(phone.value.trim()=="")
    {
      document.getElementById("phonerr").removeAttribute("hidden");
      document.getElementById("phonerr").innerText=("Phone number cannot be blank");
      document.getElementById("phone").style.borderColor="red";
    }
    //check phone number//
    else if (!(phonenum1.test(phone.value)) && !(phonenum2.test(phone.value)) && !(phonenum3.test(phone.value)) && !(phonenum4.test(phone.value)))
    {
      document.getElementById("phonerr").removeAttribute("hidden");
      document.getElementById("phonerr").innerText=("Enter a valid 10 digit number. eg: XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX");
      document.getElementById("phone").style.borderColor="red";
    }
    else
    {
      reseterr("phonerr","phone");
      return true;
    }
  }

//////////////////////////password validation///////////////////////////////
  function password1check()
  {
    if(pwd1.value.trim()==""||((pwd1.value).trim()).length<8)
    {
      document.getElementById("pwd1err").removeAttribute("hidden");
      document.getElementById("pwd1err").innerText=("Password cannot be blank");
      document.getElementById("pwd1").style.borderColor="red";
      document.getElementById("pwdguide").style.display="block";
      document.getElementById("pwd1strngt").removeAttribute("hidden");
      bar.style.width = "25%";
      bar.innerHTML ="Poor Password";
      bar.setAttribute("class", "bg-danger progress-bar-striped progress-bar progress-bar-animated");
    }
    else if(!pwdvalidate.test(pwd1.value))
    {
      document.getElementById("pwd1err").removeAttribute("hidden");
      document.getElementById("pwd1err").innerText=("invalid password");
      document.getElementById("pwd1").style.borderColor="red";
      document.getElementById("pwdguide").style.display="block";
      document.getElementById("pwd1strngt").removeAttribute("hidden");
      bar.style.width = "50%";
      bar.innerHTML ="Medium Password";
      bar.setAttribute("class", "bg-warning progress-bar-striped progress-bar progress-bar-animated"); 
    }
    else
    {
      reseterr("pwd1err","pwd1");
      document.getElementById("pwdguide").style.display="none";
      document.getElementById("pwd1strngt").removeAttribute("hidden");
      bar.style.width = "100%";
      bar.innerHTML ="Strong Password";
      bar.setAttribute("class", "bg-success progress-bar-striped progress-bar progress-bar-animated");
      if((pwd1.value)==(pwd2.value))
      {
        reseterr("pwd2err","pwd2");
      }
      return true; 
    }
  }

  /////////////////reconfirm password validation/////////////////////////
  function password2check()
  {
    if(pwd2.value.trim()=="")
    {
      document.getElementById("pwd2err").removeAttribute("hidden");
      document.getElementById("pwd2err").innerText=("Re-confirm password");
      document.getElementById("pwd2").style.borderColor="red";
    }
    else if((pwd1.value)!=pwd2.value)
    {  
      document.getElementById("pwd2err").removeAttribute("hidden");
      document.getElementById("pwd2err").innerText=("Passwords doesnot match");
      document.getElementById("pwd2").style.borderColor="red";
    }
    else
    {
      reseterr("pwd2err","pwd2");
      return true;
    }
  }
  


///Reset form error messages////
  function reseterr(ID1, ID2)
  { 
    id1 = ID1;
    id2 = ID2;
    document.getElementById(id1).setAttribute("hidden", "true");
    document.getElementById(id2).style.borderColor="#ced4da";
    
  }

  //////end of signup/////