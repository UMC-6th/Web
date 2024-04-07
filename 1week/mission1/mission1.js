const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');

const confirm = document.getElementById('confirm');

function checkInput() {
    checkName();
    checkEmail();
    checkage();
    checkpassword();
    checkpasswordtoo();
}


function checkName() {
    let nameValue = document.getElementById('name').value;

    // 값이 비어 있는지 확인
    if (nameValue.trim() === "") {
        document.getElementById('nametext').innerText = '필수입력항목입니다.'
        document.getElementById('nametext').style.color = 'red'
        return;
    }
    if (typeof nameValue === 'string' || nameValue instanceof String) {
        document.getElementById('nametext').innerText = '멋진이름이네요!'
        document.getElementById('nametext').style.color = 'green'
    }
}

function checkEmail() {
    let emailValue = document.getElementById('email').value;

    if (emailValue.trim() === "") {
        document.getElementById('emailtext').innerText = '필수입력항목입니다.'
        document.getElementById('emailtext').style.color = 'red'
        return;
    }

    if (typeof emailValue === 'string' || emailValue instanceof String) {
        for (var i = 0; i < emailValue.length; i++) {
            if (emailValue[i] === '@') {
                document.getElementById('emailtext').innerText = '올바른 형식입니다!'
                document.getElementById('emailtext').style.color = 'green'
                return;
            }
            else {
                document.getElementById('emailtext').innerText = '올바른 형식이 아닙니다!'
                document.getElementById('emailtext').style.color = 'red'
            }
        }
    }
}

function checkage() {
    let ageValue = parseInt(document.getElementById('age').value);
    
    if (toString(ageValue).trim() === "") {
        document.getElementById('agetext').innerText = '필수입력항목입니다.'
        document.getElementById('agetext').style.color = 'red'
        return;
    }

    if (isNaN(ageValue) || ageValue <= 0) {
        document.getElementById('agetext').innerText = '양수를 입력해주세요.'
        document.getElementById('agetext').style.color = 'red'
        return;
    }

    if (ageValue < 20) {
        document.getElementById('agetext').innerText = '20세 이상이어야 합니다.'
        document.getElementById('agetext').style.color = 'red'
        return;
    }

    if (!Number.isInteger(ageValue)) {
        document.getElementById('agetext').innerText = '정수를 입력해주세요.'
        document.getElementById('agetext').style.color = 'red'
        return;
    }

    document.getElementById('agetext').innerText = '올바른 형식입니다.'
    document.getElementById('agetext').style.color = 'green'
}



function checkpassword() {
    let passwordValue = document.getElementById("password").value;
    let passwordText = document.getElementById('passwordtext');


    if (passwordValue.trim() === "") {
        passwordText.innerText = '비밀번호를 입력해주세요.';
        passwordText.style.color = 'red';
        return;
    }

    if (passwordValue.length < 4) {
        passwordText.innerText = '비밀번호는 최소 4자리 이상이어야 합니다.';
        passwordText.style.color = 'red';
        return;
    }

    if (passwordValue.length > 12) {
        passwordText.innerText = '비밀번호는 최대 12자리이어야 합니다.';
        passwordText.style.color = 'red';
        return;
    }

    if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])/.test(passwordValue)) {
        passwordText.innerText = '특수문자, 숫자, 영어를 하나씩은 포함해야합니다.';
        passwordText.style.color = 'red';
        return;
    }

    passwordText.innerText = '올바른 형식입니다.';
    passwordText.style.color = 'green';
}

function checkpasswordtoo() {
    function comparePasswords(password1, password2) {
        return password1 === password2;
    }
    

    let passwordValue = document.getElementById("password").value;
    let passwordCheckValue = document.getElementById("passwordCheck").value;


    if (passwordCheckValue.trim() === "") {
        document.getElementById('checktext').innerText = '값을 입력해주세요.'
        document.getElementById('checktext').style.color = 'red'
        return;
    }

    if (comparePasswords(passwordValue, passwordCheckValue)) {
        document.getElementById('checktext').innerText = '올바른 형식입니다.'
        document.getElementById('checktext').style.color = 'green'
    } else {
        document.getElementById('checktext').innerText = '올바르지 않은 형식입니다.'
        document.getElementById('checktext').style.color = 'red'
    }

}


