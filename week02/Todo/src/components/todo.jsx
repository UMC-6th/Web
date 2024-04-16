import React, { useState } from 'react';
import '../todo.css';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');

    const addTodo = () => {
        if (inputText.trim() === '') return;
        setTodos([...todos, inputText]);
        setInputText('');
    };

    
    const moveToMyTodo = (index) => {
        const todo = todos[index];
        setTodos(todos.filter((_, i) => i !== index));
        setMyTodos((prev) => [...prev, todo]);
    };

    const deleteMyTodo = (index) => {
        setMyTodos(myTodos.filter((_, i) => i !== index));
    };

    const [myTodos, setMyTodos] = useState([]);

    // 엔터 키 입력 시 할 일 추가
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div className="box">
            <div className="title">
                <h1>UMC Study Plan</h1>
            </div>
            <hr />
            <div className="input">
                <input
                    type="text"
                    placeholder="스터디 계획을 작성해보세요"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress} 
                />
            </div>
            <div className="list">
                <div className="todo">
                    <span>할 일</span>
                    {todos.map((todo, index) => (
                        <div key={index} className="todo-item">
                            <p>{todo}</p>
                            <button onClick={() => moveToMyTodo(index)}>완료</button>
                        </div>
                    ))}
                </div>
                <div className="clear">
                    <span>내가 해냄</span>
                    {myTodos.map((todo, index) => (
                        <div key={index} className="todo-item">
                            <p>{todo}</p>
                            <button onClick={() => deleteMyTodo(index)}>삭제</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Todo;
