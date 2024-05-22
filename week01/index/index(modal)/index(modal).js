
const open = document.getElementById('open');
const close=document.getElementById('close');
const modal=document.querySelector('.modal-wrap');

//open 누르면 모달창이 나타나게 하기
open.addEventListener('click', function(){
    modal.style.display='block';
});
//close 누르면 모달창이 사라지게 하기
close.addEventListener('click', function(){
    modal.style.display='none';
});