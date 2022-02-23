function login()
  {
    var mailId = document.getElementById("mailid").value;
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    var password = document.getElementById("pass");
    var passformat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

   if (!mailformat.test(mailId))
   {
    alert("Invalid Credintials, please try again");
   }
   else if(!passformat.test(password)){
    alert("Invalid Credintials, please try again");
   }
   else{
       document.getElementById("change").innerHTML = "Successful Login";
       alert("Successful Login");
   }
  }