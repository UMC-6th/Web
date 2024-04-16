import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import './App.css'

function App() {
 
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);
  
 const [activeList, setActiveList] = useState([]);
 const [doneList, setDoneList] = useState([]);

  const addActiveList = (todoValue) => {
    setActiveList([...activeList, todoValue]);
  };

  const doneActive = (index) => {
    const content = activeList[index];
    setActiveList(activeList.filter((_, i) => i !== index));
    setDoneList([...doneList, content]);
  };

  const deleteDone = (index) => {
    setDoneList(doneList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="mainTitle">UMC Study Plan</div>
      <Form addActiveList={addActiveList} />
      <TodoList
        todos={todos}
        activeList={activeList}
        doneList={doneList}
        doneActive={doneActive}
        deleteDone={deleteDone}
      />
    </div>
  );
}

export default App;
