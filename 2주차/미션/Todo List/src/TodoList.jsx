import React from 'react';
import './TodoList.css';

function TodoList({todos, activeList, doneList, doneActive, deleteDone }) {
  return (
    <div className='list'>
      <div className="listActive">
        <h2 className="listh2">해야 할 일</h2>
      <div>
      
      <div>
        <ul>
          {activeList.map((todo, index) => (
            <li key={index}>
              {todo}
              <button className={`doneBtn${index}`} onClick={() => doneActive(index)}>완료</button>
            </li>
          ))}
        </ul>
      </div>
      </div>
      </div>

      <div className="listDone">
        <h2 className="listh2">해낸 일</h2>
      <div>
        
      <div>
      <ul>
          {doneList.map((todo, index) => (
            <li key={index}>
              {todo}
              <button className={`deleteBtn${index}`} onClick={() => deleteDone(index)}>삭제</button>
            </li>
          ))}
        </ul>    
      </div>
        
    </div>
  </div>


    </div>
  );
}

export default TodoList;
