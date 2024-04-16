
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import TodoSection from './components/todo';
import CompletedSection from './components/complete';
import './App.css';

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    };

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const completeTodo = (index) => {
        const completedTodo = todos[index];
        setCompleted([...completed, completedTodo]);
        setTodos(todos.filter((_, i) => i !== index));
    };

    const deleteTodo = (index) => {
        setCompleted(completed.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1 id="title">UMC Study Plan</h1>
            <hr id="hr" />
            <div id='plan-div'>
                <input id="plan"
                    type="text"
                    className="input"
                    placeholder="스터디 계획을 작성해보세요!"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleEnter}
                />
            </div>
            <div className="content">
                <TodoSection todos={todos} completeTodo={completeTodo} />
                <CompletedSection completed={completed} deleteTodo={deleteTodo} />
            </div>
        </div>
    );
};

export default TodoList;
