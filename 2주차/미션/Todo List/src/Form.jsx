import React, { useState } from 'react';
import './Form.css'

function Form({ addActiveList }) {
  const [todoValue, setTodoValue] = useState('');

  const handleInputChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addActiveList(todoValue);
    setTodoValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="addToDo">
      <input
        type="text"
        value={todoValue}
        onChange={handleInputChange}
        placeholder="스터디 계획을 작성해보세요!"
      />
      
    </form>
  );
}

export default Form;
