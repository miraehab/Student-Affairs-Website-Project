function calcAge(){
    var userinput = document.getElementById("date-button").value;
    var dob = new Date(userinput);  
      //calculate month difference from current date in time  
      var month_diff = Date.now() - dob.getTime();  
      
      //convert the calculated difference in date format  
      var age_dt = new Date(month_diff);   
        
      //extract year from date      
      var year = age_dt.getUTCFullYear();  
        
      //now calculate the age of the user  
      var age = Math.abs(year - 1970);  
      return age;  
}

function validateForm() {
    var name = document.getElementById("NAME").value;
    var id = document.getElementById("IDs").value;
    var gpa = document.getElementById("GPA").value;
    var email = document.getElementById("EMAIL").value;
    var level = document.getElementById("LEVEL").value;
    var department = document.getElementById("DEPARTMENT").value;
    //const date = document.getElementById("date-button").value;
    var gender = document.getElementById("GENDER").value;
    var phone = document.getElementById("PHONE").value;
    var form = document.getElementById("form").value;

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(name)){
        document.getElementById("Pname").innerHTML = "Please enter your full name (firstname & lastname)";
        }

    if(gpa < '0' || gpa > '4'){
        document.getElementById("Pgpa").innerHTML = "Invalid gpa (please enter gpa from 0 to 4)";
    }
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!(regEmail.test(email))){
        document.getElementById("Pemail").innerHTML = "You have entered an invalid email address!";
    }
   
  /*  if((level == "1" || level== "2" && department != "General"))
    {
        document.getElementById("Pdepart").innerHTML = "Check your level and department, if you are in level 1 or 2 choose department 'General'";
    }*/
    document.getElementById(level);
console.log(level);
console.log(department);
console.log(gender);

    
    let age = calcAge();
    if(age < 16){
        document.getElementById("Pbirth").innerHTML = "Age must be more than 16";
    }
    

   
   if(phone.length < 11){
        document.getElementById("Pphone").innerHTML = "Invalid phone number";
    }
  
}

function ConfirmDeletion(){
    window.location.href='./DeleteConfirmation.html';
}