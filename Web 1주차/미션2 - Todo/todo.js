let userTodo = document.getElementById('todo_input');
let btnTodoComplete = document.getElementById('todo_complete');
let btnTodoDelete = document.getElementById('todo_delete');

let todoBox = document.querySelector('.todoBox:first-child.todoBox');
let todoListContainer = todoBox.querySelector('.oneTodo');
let completedBox = document.querySelector('.todoBox:nth-child(2).todoBox');
let completedListContainer = completedBox.querySelector('.oneTodo');

let todoList = [];
let completedList = [];

userTodo.addEventListener("keydown", function(event) { // input 엔터 -> TodoList 추가
    if (event.key === 'Enter') {
        if (userTodo.value.trim() !== '') {
            todoList.push(userTodo.value);
            userTodo.value = ''; // 초기화
            displayTodoList();
        }
    }
})

function displayTodoList() { // 목록 보여주기 (업데이트 포함)
    todoListContainer.innerHTML = ''; // 기존 목록 삭제
    todoList.forEach(todo => {
        let todoItem = document.createElement('div');
        todoItem.classList.add('oneTodo');
        let spanTodo = document.createElement('div');
        spanTodo.classList.add('spanTodo'); 
        let todoText = document.createElement('h4');
        todoText.textContent = todo;
        let completeButton = document.createElement('button');
        completeButton.textContent = "완료";
        completeButton.classList.add('todo_complete');
        completeButton.addEventListener('click', function() {
            moveItemToCompletedList(todoItem, todoText);
        });
        let hrMiddle = document.createElement('hr');
        hrMiddle.classList.add('hr_middle');
        
        spanTodo.appendChild(todoText);
        spanTodo.appendChild(completeButton);
        todoItem.appendChild(spanTodo);
        todoItem.appendChild(hrMiddle);
        todoListContainer.appendChild(todoItem);
    });
}

function moveItemToCompletedList(todoItem, todoText) {
    let index = todoList.indexOf(todoText); // 인덱스 찾기
    if (index !== -1) {
        todoList.splice(index, 1); // 인덱스 요소를 제거
    }
    completedList.push(todoText);
    completedListContainer.appendChild(todoItem);

    // '완료' 버튼을 '삭제' 버튼으로 바꾸는 과정
    let completeButton = todoItem.querySelector('.todo_complete');
    completeButton.textContent = "삭제";
    completeButton.classList.remove('todo_complete');
    completeButton.classList.add('todo_delete');
    completeButton.removeEventListener('click', moveItemToCompletedList);
    completeButton.addEventListener('click', function() {
        removeItemFromCompletedList(todoItem, todoText);
    });
}

function removeItemFromCompletedList(todoItem, todoText) {
    let index = completedList.indexOf(todoText); // 완료된 목록에서의 인덱스 찾기
    if (index !== -1) {
        completedList.splice(index, 1); // 완료된 목록에서 제거
    }
    todoItem.remove(); // 화면에서도 제거
}

displayTodoList();