
function validate()
{
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var firstname = document.getElementById("firstname");
  var secondname = document.getElementById("secondname");
  var pwd1 = document.getElementById("pwd1"); 
  var pwd2 = document.getElementById("pwd2")
  var emailvalid = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
// regexpression for phone numbers which accept XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX//
  var phonenum1 = /^\d{10}$/;
  var phonenum2 = /^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$/;
  var phonenum3 = /^([0-9]{3})[.]([0-9]{3})[.]([0-9]{4})$/;
  var phonenum4 = /^([0-9]{3})[ ]([0-9]{3})[ ]([0-9]{4})$/;

  
  var pwdvalidate = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
  //check for empty value, email check and password check//
  
  if(firstname.value.trim()=="")
    {
      reseterr();
      document.getElementById("frstnmerr").removeAttribute("hidden");
      document.getElementById("frstnmerr").innerText=("Name cannot be blank");
      document.getElementById("firstname").style.borderColor="red";
      return false;
    }
    else if(secondname.value.trim()=="")
    {
      reseterr();
      document.getElementById("sndnmerr").removeAttribute("hidden");
      document.getElementById("sndnmerr").innerText=("Name cannot be blank");
      document.getElementById("secondname").style.borderColor="red";
      return false;
    }
    else if(email.value.trim()=="")
    {
      reseterr();
      document.getElementById("emailerr").removeAttribute("hidden");
      document.getElementById("emailerr").innerText=("Email cannot be blank");
      document.getElementById("email").style.borderColor="red";
      return false;
    }
    // email validation
    else if(!(emailvalid.test(email.value))){
      reseterr();
      document.getElementById("emailerr").removeAttribute("hidden");
      document.getElementById("emailerr").innerText=("Enter a valid email");
      document.getElementById("email").style.borderColor="red";
      return false;

    }
    else if(phone.value.trim()=="")
    {
      reseterr();
      document.getElementById("phonerr").removeAttribute("hidden");
      document.getElementById("phonerr").innerText=("Phone number cannot be blank");
      document.getElementById("phone").style.borderColor="red";
      return false;
    }
    //check phone number//
    else if (!(phonenum1.test(phone.value)) && !(phonenum2.test(phone.value)) && !(phonenum3.test(phone.value)) && !(phonenum4.test(phone.value)))
    {
      reseterr();
      document.getElementById("phonerr").removeAttribute("hidden");
      document.getElementById("phonerr").innerText=("Enter a valid 10 digit number. eg: XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX");
      document.getElementById("phone").style.borderColor="red";
      return false;
    }
    else if(pwd1.value.trim()=="")
    {
      reseterr();
      document.getElementById("pwd1err").removeAttribute("hidden");
      document.getElementById("pwd1err").innerText=("Password cannot be blank");
      document.getElementById("pwd1").style.borderColor="red";
      return false;
    }
    //password validation
    else if(!pwdvalidate.test(pwd1.value))
    {
      reseterr();
      document.getElementById("pwd1err").removeAttribute("hidden");
      document.getElementById("pwd1err").innerText=("invalid password");
      document.getElementById("pwd1").style.borderColor="red";
      return false;
    }
    else if(pwd2.value.trim()=="")
    {
      reseterr();
      document.getElementById("pwd2err").removeAttribute("hidden");
      document.getElementById("pwd2err").innerText=("Re-confirm password");
      document.getElementById("pwd2").style.borderColor="red";
      return false;
    }
    //password validation
    else if(pwd1.value!=pwd2.value){
      reseterr();
      document.getElementById("pwd2err").removeAttribute("hidden");
      document.getElementById("pwd2err").innerText=("Passwords doesnot match");
      document.getElementById("pwd2").style.borderColor="red";
      document.getElementById("pwd1").style.borderColor="red";
      return false;
    }
  


     //Clear errors when form resubmit//
  function reseterr()
  {
    var p = document.getElementsByTagName("p");
    var f = document.getElementsByTagName("input");
    for(i=0; i<5;i++){
      p[i].setAttribute("hidden", "true");
      f[i].style.borderColor="#ced4da";
    }
  }

}




