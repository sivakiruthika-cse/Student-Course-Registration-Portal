// Select Form

const form = document.getElementById("studentForm");

const table = document.getElementById("studentTable");

// Submit Event

form.addEventListener("submit", function(event){

    event.preventDefault();

    // Get Values

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let mobile = document.getElementById("mobile").value.trim();

    let department = document.getElementById("department").value.trim();

    let course = document.getElementById("course").value;

    let dob = document.getElementById("dob").value;

    let address = document.getElementById("address").value.trim();

    // Gender

    let gender = "";

    let genders = document.getElementsByName("gender");

    for(let i=0;i<genders.length;i++){

        if(genders[i].checked){

            gender = genders[i].value;

        }

    }

    // Skills

    let skills = [];

    let checkboxes = document.querySelectorAll(".checkbox-group input:checked");

    checkboxes.forEach(function(skill){

        skills.push(skill.value);

    });

    // Mandatory Validation

    if(name=="" || email=="" || mobile=="" || gender=="" || department=="" || course=="" || dob=="" || address==""){

        alert("Please fill all the fields.");

        return;

    }

    if(skills.length==0){

        alert("Please select at least one skill.");

        return;

    }

    // Email Validation

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){

        alert("Enter a valid Email Address.");

        return;

    }

    // Mobile Validation

    let mobilePattern = /^[0-9]{10}$/;

    if(!mobile.match(mobilePattern)){

        alert("Mobile Number must contain exactly 10 digits.");

        return;

    }

    // Age Validation

    let birthDate = new Date(dob);

    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let month = today.getMonth() - birthDate.getMonth();

    if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){

        age--;

    }

    if(age < 18){

        alert("Age must be greater than 18.");

        return;

    }

    // Add Row

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;

    row.insertCell(1).innerHTML = course;

    row.insertCell(2).innerHTML = department;

    // Success Message

Swal.fire({
    title: "Success!",
    text: "Student Registered Successfully",
    icon: "success",
    confirmButtonColor: "#8e44ad"
});

    // Reset Form

    form.reset();

});
