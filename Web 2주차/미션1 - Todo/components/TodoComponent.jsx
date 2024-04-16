import '../styles/Todo.css'

function TodoComponent({text, onComplete}) {
    return (
        <div class="oneTodo">
            <div class="spanTodo">
                <h4 id="text_todo_left">{text}</h4> {/* props로 받은 text */}
                <button id="todo_complete" onClick={onComplete}>완료</button>
            </div>
            <hr class="hr_middle"/>
        </div>
    )
}

export default TodoComponent