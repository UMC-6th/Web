
const submit = document.getElementById("submit");
const reg = /^(?=.*[!@#$%^*+=-])$/

submit.onclick =()=> {
    // 이름
    if(typeof signupcontent.name.value === "string" && signupcontent.name.value != "") {
        name_ok.style.display = "flex";
        name_error.style.display = "none";
    } else{
        name_ok.style.display = "none";
        name_error.style.display = "flex";
    }

    // 이메일
    if(typeof signupcontent.email.value === "string" && signupcontent.name.value != "" && signupcontent.email.value.indexOf('@') != -1) {
        email_ok.style.display = "flex";
        email_error.style.display = "none";
    } else {
        email_ok.style.display = "none";
        email_error.style.display = "flex";
    }
    
    // 나이
    if(signupcontent.age.value == "") {
        age_error.textContent = "나이를 입력해주세요!";
        age_ok.style.display = "none";
        age_error.style.display = "flex";
    } else if (signupcontent.age.value < 0){
        age_error.textContent = "나이는 음수가 될 수 없습니다.";
        age_ok.style.display = "none";
        age_error.style.display = "flex";
    } else if (!Number.isInteger(Number(signupcontent.age.value))){
        age_error.textContent = "나이는 소수가 될 수 없습니다.";
        age_ok.style.display = "none";
        age_error.style.display = "flex";
    }  else if (signupcontent.age.value <= 19){
        age_error.textContent = "우리 영화 사이트는 19살 이상만 가입이 가능합니다.";
        age_ok.style.display = "none";
        age_error.style.display = "flex";
    } else {
        age_ok.style.display = "flex";
        age_error.style.display = "none";
    }

    // 비밀번호
    if(signupcontent.password.value.length < 4 | signupcontent.password.value == "") {
        password_error.textContent = "비밀번호는 최소 4자리 이상이어야 가능합니다.";
        password_ok.style.display = "none";
        password_error.style.display = "flex";
    } else if (signupcontent.password.value.length > 12){
        password_error.textContent = "비밀번호는 최대 12자리까지 가능합니다.";
        password_ok.style.display = "none";
        password_error.style.display = "flex";
    } else if(signupcontent.password.value.search(/[0-9]/g) < 0 || signupcontent.password.value.search(/[a-zA-Z]/g) < 0 ){
        password_error.textContent = "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
        password_ok.style.display = "none";
        password_error.style.display = "flex";
    } else if(!/[!@#$%^*+=-]+/.test(signupcontent.password.value)) {
        password_error.textContent = "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
        password_ok.style.display = "none";
        password_error.style.display = "flex";
    }
    else {
        password_ok.style.display = "flex";
        password_error.style.display = "none";
    }
    // console.log(/[!@#$%^*+=-]+/.test(signupcontent.password.value));

    // 비밀번호 확인
    if(signupcontent.password_check.value == "" || signupcontent.password_check.value != signupcontent.password.value) {
        password_check_ok.style.display = "none";
        password_check_error.style.display = "flex";
    } else {
        password_check_ok.style.display = "flex";
        password_check_error.style.display = "none";
    }
    return false;
 
}

