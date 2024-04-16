// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../App.css';
// eslint-disable-next-line react/prop-types
const CompletedSection = ({ completed, deleteTodo }) => {
    return (
        <div className="completed-div">
            <p id="sub-title">해낸 일</p>
            <div className="completed-list">
                {completed.map((todo, index) => (
                    <div id="completed-todo" key={index}>
                        <span>{todo}</span>
                        <button onClick={() => deleteTodo(index)}>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompletedSection;
