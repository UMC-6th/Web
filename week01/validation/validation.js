// id값 받아오기
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('password-confirm');

// 입력태그가 비어있는지 확인하는 함수
function isEmpty(value) {
    return value.trim() === '';
}

// 이름
function validateName(name) {
    if (isEmpty(name)) {
        return '필수 입력 항목입니다.';
    }
    
    document.getElementById('name-error').style.color = 'green';
    return '멋진 이름이네요!';
}

// 이메일 형식 체크
function isEmail(email) {
    // 간단한 이메일 형식 체크
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 이메일
function validateEmail(email) {
    if (isEmpty(email)) {
        return '이메일을 입력해주세요.';
    }
    if (!isEmail(email)) {
        return '이메일 형식이 올바르지 않습니다.';
    }
    document.getElementById('email-error').style.color = 'green';
    return '올바른 이메일 형식입니다.';
}

// 숫자 체크
function isNumber(value) {
    return /^\d+$/.test(value);
}

// 나이 체크
function validateAge(age) {
    if (isEmpty(age)) {
        return '나이를 입력해주세요.';
    }
    if (!isNumber(age)) {
        return '나이는 숫자여야 합니다.';
    }
    if (!isOver19(age)) {
        return '19세 이상만 가입할 수 있습니다.';
    }
    document.getElementById('age-error').style.color = 'green';
    return '올바른 나이입니다.';
}

// 19세 이상 체크
function isOver19(age) {
    return parseInt(age) >= 19;
}

// 비밀번호 길이 체크
function isOver4(value) {
    return value.length >= 4;
}

// 비밀번호 길이가 12 이하인지 체크
function isUnder13(value) {
    return value.length <= 12;
}

// 비밀번호
function validatePassword(password) {
    if (isEmpty(password)) {
        return '비밀번호를 입력해주세요.';
    }
    if (!isOver4(password)) {
        return '비밀번호는 4자리 이상이어야 합니다.';
    }
    if (!isUnder13(password)) {
        return '비밀번호는 12자리 이하여야 합니다.';
    }
    if (!/[0-9]/.test(password) || !/[a-zA-Z]/.test(password) || !/[^0-9a-zA-Z]/.test(password)) {
        return '비밀번호는 숫자, 문자, 특수기호를 모두 포함해야 합니다.';
    }
    
    document.getElementById('password-error').style.color = 'green';
    return '올바른 비밀번호입니다.';
}

// 비밀번호 확인
function validatePasswordConfirm(password, passwordConfirm) {
    if (isEmpty(passwordConfirm)) {
        return '비밀번호 확인을 입력해주세요.';
    }
    if (password !== passwordConfirm) {
        return '비밀번호가 일치하지 않습니다.';
    }
    document.getElementById('password-confirm-error').style.color = 'green';
    return '비밀번호가 일치합니다.';
}

// 입력 필드 검사 함수
function validateFields() {
    const name = nameInput.value;
    const email = emailInput.value;
    const age = ageInput.value;
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;

    return {
        name: validateName(name),
        email: validateEmail(email),
        age: validateAge(age),
        password: validatePassword(password),
        passwordConfirm: validatePasswordConfirm(password, passwordConfirm)
    };
}

// 폼 submit 이벤트 리스너 추가
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); 
    const validationResults = validateFields();
    document.getElementById('name-error').textContent = validationResults.name;
    document.getElementById('email-error').textContent = validationResults.email;
    document.getElementById('age-error').textContent = validationResults.age;
    document.getElementById('password-error').textContent = validationResults.password;
    document.getElementById('password-confirm-error').textContent = validationResults.passwordConfirm;

});

//성공 모달창 띄우기

const close=document.getElementById('close');
const modal=document.querySelector('.modal-wrap');

//가입하기 성공하면 모달창이 나타나게 하기
document.getElementById('submit').addEventListener('click', function(event){
    const validationResults = validateFields();
    if(validationResults.name === '멋진 이름이네요!' && validationResults.email === '올바른 이메일 형식입니다.' && validationResults.age === '올바른 나이입니다.' && validationResults.password === '올바른 비밀번호입니다.' && validationResults.passwordConfirm === '비밀번호가 일치합니다.'){
        modal.style.display='block';
    }
});


//close 누르면 모달창이 사라지게 하기
close.addEventListener('click', function(){
    modal.style.display='none';
});





