function addTodo() {
    // 입력된 내용 가져오기
    const todoInput = document.getElementById('planInput');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        return;
    }

    // 할 일 리스트에 새로운 할 일과 완료/삭제 버튼 추가
    const todoList = document.getElementById('todo-list');
    const newTodo = document.createElement('p');
    newTodo.textContent = todoText;
    const completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    newTodo.appendChild(completeButton);
    todoList.appendChild(newTodo);
    
    const myTodo = document.getElementById('my-Todo');
    const clearButton = document.createElement('button');
    clearButton.textContent = '삭제';

    // 완료 버튼을 누르면 내가해냄으로 이동
    completeButton.addEventListener('click', function() {
        //newTodo를 myTodo로 옮기기
        myTodo.appendChild(newTodo);
        newTodo.removeChild(completeButton);
        newTodo.appendChild(clearButton);

    });
    // 삭제 버튼을 누르면 할 일 삭제
    clearButton.addEventListener('click', function() {
        myTodo.removeChild(newTodo);
    });

    todoInput.value = '';
}

document.getElementById('planInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
