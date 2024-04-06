
function saveName() {
    
    var name = document.getElementById("nameInput").value;

    
    if (name.trim() === "") {
        document.getElementById("warning_name").style.display = "none";
        document.getElementById("warning1").style.display = "block";
        document.getElementById("correct1").style.display = "none";
    } 
    
    else {
        document.getElementById("warning_name").style.display = "none";
        document.getElementById("warning1").style.display = "none";
        document.getElementById("correct1").style.display = "block";
    }

    
    localStorage.setItem("username", name);

    
}


function saveEmail() {
    var email = document.getElementById("emailInput").value;

    
    if (email.trim() === "") {
        document.getElementById("warning_email").style.display = "none";
        document.getElementById("warning2").style.display = "block";
        document.getElementById("correct2").style.display = "none";
              
    }

    else if (email.includes('@') == false) {
        document.getElementById("warning2").style.display = "block";
        document.getElementById("warning_email").style.display = "none";
        document.getElementById("correct2").style.display = "none";
           
    }

    else {
        document.getElementById("correct2").style.display = "block";
        document.getElementById("warning_email").style.display = "none";
        document.getElementById("warning2").style.display = "none";
    
    }
    
    localStorage.setItem("useremail", email);

}

function saveage() {
    var age = document.getElementById("ageInput").value;
    
    
    if (age.trim() === "") {
        document.getElementById("warning_age").style.display = "none";
        document.getElementById("warning3").style.display = "block";
        document.getElementById("warning3_1").style.display = "none";
        document.getElementById("warning3_2").style.display = "none";
        document.getElementById("warning3_3").style.display = "none";
        document.getElementById("warning3_4").style.display = "none";
        document.getElementById("correct3").style.display = "none";
    } 
    
    else if (isNaN(age) === true) {
        document.getElementById("warning_age").style.display = "none";
        document.getElementById("warning3").style.display = "none";
        document.getElementById("warning3_1").style.display = "block";
        document.getElementById("warning3_2").style.display = "none";
        document.getElementById("warning3_3").style.display = "none";
        document.getElementById("warning3_4").style.display = "none";
        document.getElementById("correct3").style.display = "none";
    }

    else if (age < 0) {
        document.getElementById("warning_age").style.display = "none";
        document.getElementById("warning3").style.display = "none";
        document.getElementById("warning3_1").style.display = "none";
        document.getElementById("warning3_2").style.display = "block";
        document.getElementById("warning3_3").style.display = "none";
        document.getElementById("warning3_4").style.display = "none";
        document.getElementById("correct3").style.display = "none";
    }

    else if (age % 1 !== 0){
        document.getElementById("warning_age").style.display = "none";
        document.getElementById("warning3").style.display = "none";
        document.getElementById("warning3_1").style.display = "none";
        document.getElementById("warning3_2").style.display = "none";
        document.getElementById("warning3_3").style.display = "block";
        document.getElementById("warning3_4").style.display = "none";
        document.getElementById("correct3").style.display = "none";
    }
    else if (age < 19) {
        document.getElementById("warning_age").style.display = "none";
        document.getElementById("warning3").style.display = "none";
        document.getElementById("warning3_1").style.display = "none";
        document.getElementById("warning3_2").style.display = "none";
        document.getElementById("warning3_3").style.display = "none";
        document.getElementById("warning3_4").style.display = "block";
        document.getElementById("correct3").style.display = "none";
    }

    else {
        document.getElementById("warning_age").style.display = "none";
        document.getElementById("warning3").style.display = "none";
        document.getElementById("warning3_1").style.display = "none";
        document.getElementById("warning3_2").style.display = "none";
        document.getElementById("warning3_3").style.display = "none";
        document.getElementById("warning3_4").style.display = "none";
        document.getElementById("correct3").style.display = "block";}
    
    localStorage.setItem("userage", age);
    

}

function savepassword() {
    var password = document.getElementById("passwordInput").value;
    var regex = /[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    
   

    if (password.trim() === "" || password.length < 4) {
        document.getElementById("warning_password").style.display = "none";
        document.getElementById("warning4").style.display = "block";
        document.getElementById("warning4_1").style.display = "none";
        document.getElementById("warning4_2").style.display = "none";
        document.getElementById("correct4").style.display = "none";
            } 

    else if (password.length > 12) {
        document.getElementById("warning_password").style.display = "none";
        document.getElementById("warning4").style.display = "none";
        document.getElementById("warning4_1").style.display = "block";
        document.getElementById("warning4_2").style.display = "none";
        document.getElementById("correct4").style.display = "none";
    }

    else if (regex.test(password) == false) {

        document.getElementById("warning_password").style.display = "none";
        document.getElementById("warning4").style.display = "none";
        document.getElementById("warning4_1").style.display = "none";
        document.getElementById("warning4_2").style.display = "block";
        document.getElementById("correct4").style.display = "none";
    }

    else {
        document.getElementById("warning_password").style.display = "none";
        document.getElementById("warning4").style.display = "none";
        document.getElementById("warning4_1").style.display = "none";
        document.getElementById("warning4_2").style.display = "none";
        document.getElementById("correct4").style.display = "block";
    }

    localStorage.setItem("userpassword", password);
    
}


function savepassword2() {
    var password2 = document.getElementById("password2Input").value;

    
    if (password2.trim() === "") {
        document.getElementById("warning_password2").style.display = "none";
        document.getElementById("warning5").style.display = "block";
            } 
    else if (password2 !== localStorage.getItem("userpassword")) {
        document.getElementById("warning_password2").style.display = "none";
        document.getElementById("warning5").style.display = "block";
    }

    else {
        document.getElementById("warning_password2").style.display = "none";
        document.getElementById("warning5").style.display = "none";
        login();
    }
    
    localStorage.setItem("userpassword2", password2);
    
}

function login() {
    const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};
}

