const form = document.querySelector('.signupBox');
const modal = document.querySelector('.modalBox');
const btnSignUp = document.getElementById("btn_signup");
const btnCloseModal = document.getElementById("btnCloseModal");

let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userAge = document.getElementById('age');
let userPw = document.getElementById('pw');
let userPwCheck = document.getElementById('pw2');

let nameAlert = document.getElementById('name_alert');
let emailAlert = document.getElementById('email_alert');
let ageAlert = document.getElementById('age_alert');
let pwAlert = document.getElementById('pw_alert');
let pwCheckAlert = document.getElementById('pw2_alert');

btnCloseModal.addEventListener("click", ()=>{ // Modal Close
    modal.classList.add('hidden');
});

let bool_success = false;

btnSignUp.addEventListener("click", (event)=>{ // signup Button
    event.preventDefault(); // 기본 이벤트 동작 방지
    // validation
    let bool1 = nameValidation();
    let bool2 = emailValidation();
    let bool3 = ageValidation();
    let bool4 = pwValidation();
    let bool5 = pwCheckValidation();

    if (bool1 && bool2 && bool3 && bool4 && bool5) {
        bool_success = true;
    } else {
        bool_success = false;
    }

    if (bool_success) {
        modal.classList.remove('hidden');
    }
});

function nameValidation() {
    nameAlert.classList.remove('hidden'); // 수정: remove 대신 classList.add 사용
    if (userName.value.trim() !== "") { // 수정: trim()을 이용하여 앞뒤 공백 제거
        nameAlert.textContent = "멋진 이름이네요!"; // 수정: 조건에 맞게 alert 내용 변경
        nameAlert.style.color = "green"; // 추가: 초록색으로 변경
        return true;
    }
    nameAlert.textContent = "필수 입력 항목입니다!"; // 수정: 조건에 맞게 alert 내용 변경
    nameAlert.style.color = "red"; // 추가: 빨간색으로 변경
    return false;
}

function emailValidation() {
    if (userEmail.value.trim()!="" && userEmail.value.includes("@")) {
        emailAlert.textContent = "올바른 이메일 형식입니다!";
        emailAlert.style.color = "green";
        return true;
    } else {
        emailAlert.textContent = "올바른 이메일 형식이 아닙니다!";
        emailAlert.style.color = "red";
        return false;
    }
}

function ageValidation() {
    ageAlert.style.color = "red";
    if (userAge.value === "") {
        ageAlert.textContent = "나이를 입력해주세요!";
        return false;
    } else if (isNaN(userAge.value)) {
        ageAlert.textContent = "나이는 숫자 형식이어야 합니다!";
        return false;
    } else if (userAge.value.includes(".")) {
        ageAlert.textContent = "나이는 소수가 될 수 없습니다!";
        return false;
    } else if (userAge.value < 19) {
        ageAlert.textContent = "미성년자는 가입할 수 없습니다!";
        return false;
    } else if (userAge.value < 0) {
        ageAlert.textContent = "나이는 음수가 될 수 없습니다!";
        return false;
    } else {
        ageAlert.textContent = "올바른 나이 형식입니다!";
        ageAlert.style.color = "green";
        return true;
    }
}

function pwValidation() {
    // 영어, 숫자, 특수문자를 모두 조합했는지 검사하는 정규표현식
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/;

    pwAlert.style.color = "red";
    if (userPw.value.length <= 4) {
        pwAlert.textContent = "비밀번호는 최소 4자리 이상이어야 합니다.";
        return false;
    } else if (userPw.value.length > 12) {
        pwAlert.textContent = "비밀번호는 최대 12자리까지 가능합니다.";
        return false;
    } else if (regex.test(regex)) {
        pwAlert.textContent = "영어, 숫자, 특수문자를 모두 조합해서 입력해주세요.";
        return false;
    } else {
        pwAlert.textContent = "올바른 비밀번호입니다!";
        pwAlert.style.color = "green";
        return true;
    }
}

function pwCheckValidation() {
    pwCheckAlert.style.color = "red";
    if (userPwCheck.value.trim()!="" && userPwCheck.value === userPw.value) {
        pwCheckAlert.textContent = "비밀번호가 일치합니다.";
        pwCheckAlert.style.color = "green";
        return true;
    } else {
        pwCheckAlert.textContent = "비밀번호가 일치하지 않습니다.";
        return false;
    }
}