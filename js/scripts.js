function changecolor(selectedRadio){
    const containers = document.querySelectorAll('.radio');
    for(let i=0; i<containers.length; i++){
        containers[i].classList.remove("active");
    }
    // containers.forEach(radio => radio.classList.remove("active"));
     if (selectedRadio.checked){
        selectedRadio.closest('.radio').classList.add("active");
     }
}
function submitForm(){
   const firstName = document.getElementById("fname").value;
   const lastName = document.getElementById("lname").value;
   const emailv=  document.getElementById("email").value
   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const radioS = document.querySelector('input[name="querytype"]:checked');
   const messageV= document.getElementById('msg').value;
   const consentV = document.querySelector("input[type='checkbox'][name='consent']:checked");
   let isNotValid = false;
   
   document.getElementById('fnameError').innerHTML = "";
   document.getElementById('lnameError').innerHTML = "";
   document.getElementById("fname").classList.remove("error-input");
   document.getElementById("lname").classList.remove("error-input");
   document.getElementById("email").classList.remove("error-input");
   document.getElementById("msg").classList.remove("error-input");

   
    if (firstName == ""){
        document.getElementById('fnameError').innerHTML = "This field is required";
        document.getElementById("fname").classList.add("error-input");
        isNotValid = true;
        
        console.log("This field is required")
    }

    if (lastName == ""){
        document.getElementById('lnameError').innerHTML = "This field is required";
        document.getElementById("lname").classList.add("error-input");
        console.log("This field is required");
        isNotValid = true;
    }

    if (emailv.match(regex)){
        console.log('valid email')
    }else{
        document.getElementById('emailError').innerHTML = "Please enter a valid email";
        document.getElementById("email").classList.add("error-input");
        console.log("Please enter a valid email");
        isNotValid = true;
    }

    if (radioS == null){
        document.getElementById('radioError').innerHTML = "This field is required";
        console.log('Please select a query type');
        isNotValid = true;
    }
    if(messageV == ""){
        document.getElementById('msgError').innerHTML = "This field is required";
        document.getElementById("msg").classList.add("error-input");
        console.log("This field is required");
        isNotValid = true;
    }
    if(consentV == null){
        document.getElementById('cnstError').innerHTML = "To submit this form, please consent to be contacted";
        console.log('To submit this form, please consent to be contacted');
        isNotValid = true;
    }


    console.log("isNotValid value:", isNotValid);

    if (isNotValid) {
        console.log("Form validation failed");
        return false; // Prevent form submission
    }

    document.write("Form submitted successfully");
    return true; // Allow form submission
        
    }

// trigger on submit button
// grab html element input values 
// check if its valid 
// if valid print succeed else print not succeed
// render the results on the screen
// on succeed reset the state of the screen and render a message in a container 