const email = document.getElementById("email-field");
const password = document.getElementById("password-field");
const birthdate = document.getElementById("birthdate");

const correctpassword = "password123" ;
const correctemail = "user@example.com" ;

function checkCredential(){
    // if (email.value===correctemail) {
    //     alert("email yang anda masukan benar")
    // }
    // else {
    //     alert("email yang anda masukan salah")
    // }


    // if (password.value===correctpassword) {
    //     alert("password yang anda masukan benar")
    // }
    // else {
    //     alert("password yang anda masukan salah")
    // }

    if ((email.value===correctemail) && (password.value===correctpassword)) {
        alert("Login successful")
    }
    else {
        alert("Login failed")
    }
}

