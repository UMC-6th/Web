import React from "react";
import { useState } from "react";


export default function AddList(){
    const [todos, setTodos] = useState([
        { id: 1, content: "Send E-mail", isDone: false },
        { id: 2, content: "Make Work-Books", isDone: false },
        { id: 3, content: "Sleeping", isDone: true },
        { id: 4, content: "Watching You-Tube", isDone: true },
      ]);
    
      const [todoInput, setTodoInput] = useState("");
    
      const addList = () => {
        if (!todoInput.trim()) return;
        const newTodo = {
          id: todos.length + 1,
          content: todoInput,
          isDone: false,
        };
        setTodos([...todos, newTodo]); //기존 todos에 newTodo 추가
        setTodoInput("");
      };
    
      const moveItemToDoneList = (id) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: true } : todo
        );
        setTodos(updatedTodos);
      };
    
      const deleteItem = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      };
    

      return (
        <div>
          <h1>UMC Study Plan</h1>
          <hr />
    
          <form
            className="todo"
            onSubmit={(e) => {
              e.preventDefault();
              addList();
            }}
          >
            <input
              type="text"
              id="todo"
              placeholder="스터디 계획을 작성해보세요!"
              className="account"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
          </form>
    
          <div className="list">
            <div className="todoListBox">
              <div className="activeTitle">해야할 일</div>
              <ul type="none" className="todoList">
                {todos
                  .filter((todo) => !todo.isDone)
                  .map((todo) => (
                    <li  key={todo.id}>
                      {todo.content}
                      <button className="CompleteBtn" onClick={() => moveItemToDoneList(todo.id)}>
                        완료
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
    
            <div className="doneListBox">
              <div className="doneTitle">끝난 일</div>
              <ul type="none" className="deleteList">
                {todos
                  .filter((todo) => todo.isDone)
                  .map((todo) => (
                    <li key={todo.id}>
                      {todo.content}
                      <button className="deleteBtn" onClick={() => deleteItem(todo.id)}>삭제</button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      );
    
    }



        