// toggle eye / show and hide password

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    
    this.classList.toggle('bi-eye');


});


function toggler(togglePassword) {
    if( togglePassword.innerHTML == 'Show' ) {
        togglePassword.innerHTML = 'Hide'
    } else {
        togglePassword.innerHTML = 'Show'
    }
  }

// toggle eye / show and hide password

//validate Password

function validatePassword(p) {
        errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters"); 
    }
    if (p.search(/[a-z]/) < 0) {
        errors.push("Your password must contain at least lower character.");
    }
    if ((p.search(/[0-9]/) < 0) && (p.search(/[!@#$%^&*()]/) <0)) {
        errors.push("Your password must contain at least one digit or special character."); 
    }

    if(p.search(/[A-Z]/) <0){
        errors.push("Your password must contain at least one upper character")
    }

   

    if (errors.length > 0) {


        alert(errors.join("\n"));
        return false;
    }
    return true;
}

//validate password

//validate Email


    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


//validate Email

//validate NAME

function validateName(name){
    if(name.length < 5){
        alert("Please enter your full name")
    }
}

document.getElementById("submit").addEventListener("click", ()=>{
    
    //validating name
    let name = document.getElementById("name").value;
    validateName(name)

    //validating email
    let email = document.getElementById("email").value;
    if(validateEmail(email) == false){
        alert("Enter correct Email Id")
    }

    //validating password
    let password = document.getElementById("password").value;
    validatePassword(password);


    if (localStorage.getItem("myUsers") === null){
      
        localStorage.setItem("myUsers", "[]");
    }
    
    let myUsers = localStorage.getItem("myUsers");
    
    myUsers = JSON.parse(myUsers);

    const user = {
        username: name,
        useremail: email,
        userpassword: password
    }

    for(key in user){
      
        if(key == "useremail" ){
            for(let i = 0; i < myUsers.length; i++){
                if(myUsers[i].useremail == user[key]){
                    alert("user email already exists!")
                }
            }
        }
    }

    myUsers.push(user);
    const userdetails_json = JSON.stringify(myUsers);
    localStorage.setItem("myUsers", userdetails_json);

})