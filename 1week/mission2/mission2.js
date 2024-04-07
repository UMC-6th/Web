const work = document.getElementById('work');
const todoOutput = document.getElementById('output');
const doneOutput = document.getElementById('doneBox');

work.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        const value = work.value; 
        const box = document.createElement('div');
        const done = document.createElement('button');
        box.innerText = value;
        done.innerText ='완료';
        
        box.setAttribute('class', 'box');
        done.setAttribute('class', 'done');
        todoOutput.appendChild(box);
        box.appendChild(done);
        work.value = ''; 

        done.addEventListener('click', () => {
            const boxParent = done.parentElement;
            done.innerText = '삭제'; // '완료' 버튼 텍스트를 '삭제'로 변경
            done.classList.remove('done'); // 기존의 'done' 클래스 제거
            done.classList.add('delete'); // 'delete' 클래스 추가
            
            done.addEventListener('click', () => {
                boxParent.remove(); // 해당 요소를 삭제합니다.
            });
            
            doneOutput.appendChild(boxParent);
        });
    }
});

/*ex*/
