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
      
   
}

