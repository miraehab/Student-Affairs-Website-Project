function calcAge(date){
    //calculate month difference from current date in time  
    var month_diff = Date.now() - date.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970); 

    return age;
}

function validateForm() {
    const name = document.getElementById("NAME");
    const id = document.getElementById("IDs");
    const gpa = document.getElementById("GPA");
    const email = document.getElementById("EMAIL");
    const level = document.getElementById("LEVEL");
    const department = document.getElementById("DEPARTMENT");
    const date = document.getElementById("date-button");
    const gender = document.getElementById("GENDER");
    const phone = document.getElementById("PHONE");
    const form = document.getElementById("form");


    if(!(/^[A-Za-z\s]+$/.test(name.value))){
        document.getElementById("Pname").innerHTML = "Please enter your full name (firstname & lastname)";
    }

    if(!(gpa.value > 0 || gpa.value < 4)){
        document.getElementById("Pgpa").innerHTML = "Invalid gpa (please enter gpa from 0 to 4)";
    }
    
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
        document.getElementById("Pemail").innerHTML = "You have entered an invalid email address!";
    }
   
    if(level.value == "1" || level.value == "2" && department.value != "General"){
        document.getElementById("Pdepart").innerHTML = "Check your level and department, if you are in level 1 or 2 choose department 'General'";
    }

    let d = date.value;
    let age = calcAge(d);
    if(age < 16){
        document.getElementById("Pbirth").innerHTML = "Age must be more than 16";
    }

    let p = phone.value ;
    if(p.length < 11){
        document.getElementById("Pphone").innerHTML = "Invalid phone number";
    }
}

function ConfirmDeletion(){
    window.location.href='./DeleteConfirmation.html';
}