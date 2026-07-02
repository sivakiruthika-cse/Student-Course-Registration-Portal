document.getElementById("studentForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let department = document.getElementById("department").value.trim();
    let course = document.getElementById("course").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value.trim();

    if(name=="" || email=="" || mobile=="" || department=="" || course=="" || dob=="" || address==""){
        alert("Please fill all fields.");
        return;
    }

    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Invalid Email.");
        return;
    }

    let mobilePattern=/^[0-9]{10}$/;

    if(!mobilePattern.test(mobile)){
        alert("Mobile number must contain 10 digits.");
        return;
    }

    let birthDate=new Date(dob);
    let today=new Date();

    let age=today.getFullYear()-birthDate.getFullYear();

    if(age<18){
        alert("Age must be greater than 18.");
        return;
    }

    let table=document.getElementById("studentTable");

    let row=table.insertRow();

    row.insertCell(0).innerHTML=name;
    row.insertCell(1).innerHTML=course;
    row.insertCell(2).innerHTML=department;

    alert("Registration Successful!");

    document.getElementById("studentForm").reset();

});