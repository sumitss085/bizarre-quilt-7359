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


let myUsers = localStorage.getItem("myUsers");

myUsers = JSON.parse(myUsers);




document.getElementById("submit1").addEventListener("click",()=>{
    document.getElementById('messagemain').innerHTML = null;
    let loginemail = document.getElementById("email").value;
    console.log('loginemail:', loginemail)
    let loginpassword = document.getElementById("password").value;
    console.log('loginpassword:', loginpassword)
    myUsers.forEach((user)=>{
        if(user.useremail == loginemail && user.userpassword == loginpassword){
            localStorage.setItem("login", "login");
            let goto = localStorage.getItem("location")
            window.location.href ="home.html";
        }
    })

    setTimeout(()=>{
        document.getElementById('messagemain').innerHTML = "Enter correct email or password"
    },2000)
})