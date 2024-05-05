const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// 실패 메세지
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// 폼 성공
const showSuccess = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
  const small_s = formControl.querySelector('small_s');
  small_s.innerText = message;
}

// 이메일 입력
const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    showSuccess(email, '올바른 이메일 형식입니다!')
  } else {
    showError(email, '올바른 이메일 형식이 아닙니다!');
  }
}

//나이

const isValidage = (age) => {
  if (!isNaN(parseInt(age.value))) {
    if (parseInt(age.value)==age.value){
      if (parseInt(age.value) >= 0) {
        if (parseInt(age.value) >= 19){
          showSuccess(age, '올바른 나이 형식입니다!');
        }
        else{
          showError(age, '미성년자는 가입할 수 없습니다!');
        }
      } 
      else {
        showError(age, '나이는 음수가 될 수 없습니다!');
      }
    }
    else{
      showError(age, '나이는 소수가 될 수 없습니다!')
    }
  } 
  else {
    showError(age, '나이는 숫자 형식이어야 합니다!');
  }
}

// 필드에 input
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



//필수입력이름
const checkRequired_name = (inputArr) => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `필수 입력 항목입니다!`);
    } else {
      showSuccess(input, '멋진 이름이네요!');
    }
  })
}
//필수입력 나이
const checkRequired_age = (inputArr) => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `나이를 입력해주세요!`);
    } else {
      showSuccess(input);
    }
  })
}



//패스워드 확인안됨
const checkRequired_pw2 = (inputArr) => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `비밀번호가 일치하지 않습니다.`);
    } 
    else {
      //비밀번호 확인
      
      if(password.value !== password2.value) {
          showError(input, '비밀번호가 일치하지 않습니다.');
      }
      else {
         showSuccess(input, '비밀번호가 일치합니다.');
      }
    }

    }
  )
}

var  check_num = /[0-9]/;
var check_eng = /[a-zA-Z]/; //문자
var check_spc = /[-!@#$%^&*()_+|<>?:{}]/;



//비밀번호 길이
const checkLength_pw = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `비밀번호는 최소 ${min}자리 이상이어야 합니다.`)
  } else if (input.value.length > max) {
    showError(input, `비밀번호는 최대 ${max}자리까지 가능합니다.`)
  }
  else {
    if(check_num.test(password.value)&&check_eng.test(password.value)&&check_spc.test(password.value)){
      showSuccess(input, '올바른 비밀번호 입니다!');
    }
    else {
      showError(input, '숫자,영어,특수문자를 모두 입력해주세요.')
    }

  }
  
}





// 이벤트 호출
form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired_name([username])
  checkRequired_age([age])
  checkRequired_pw2([password2]);
  checkLength_pw(password, 4, 12);
  isValidEmail(email);
  isValidage(age);

  
});