import React from 'react';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <InputTodo />
            <TodoList />
        </div>
    );
}

export default App;
