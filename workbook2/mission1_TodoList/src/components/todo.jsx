// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import '../App.css';
import "../App.jsx"

// eslint-disable-next-line react/prop-types
const TodoSection = ({ todos, completeTodo }) => {
    return (
        <div className="todo-div">
            <p id="sub-title">해야 할 일</p>
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <div id="todo" key={index}>
                        <span>{todo}</span>
                        <button onClick={() => completeTodo(index)}>완료</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoSection;
