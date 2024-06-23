import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos, toggleTodos } from "./todoSlice";
import styled from 'styled-components';

const TodoItem = ({ todo, onToggleHandler, onRemoveHandler }) => {
  return (
    <TodoItemContainer>
      <input
        type="checkbox"
        onClick={() => onToggleHandler()}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onRemoveHandler()}>삭제</button>
    </TodoItemContainer>
  );
};

function App() {
  const { todos } = useSelector((state) => state.todos);

  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodos(inputText));
    setInputText("");
  };

  console.log(todos);

  return (
    <Container>
      <Todo>
        <h2>Todo-List</h2>  
        <form onSubmit={onSubmitHandler}>
          <input
            style={{marginRight: '5px'}}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">추가</button>
        </form>

        <hr />

        {todos?.map((data, idx) => {
          return (
            <TodoItem
              key={idx}
              todo={data}
              onToggleHandler={() => {
                dispatch(toggleTodos(idx));
              }}
              onRemoveHandler={() => dispatch(removeTodos(idx))}
            />
          );
        })}
      </Todo>
    </Container>
  );
}

const Container = styled.div `
  background-color: #f0f0f0;
  width: 100vw; height: calc(100vh - 20px);
  display: flex;
  justify-content: center;
  padding-top: 20px;
  overflow-y: hidden;

  scroll {
  overflow: hidden;
  }
`;
const Todo = styled.div `
  text-align: center;
  align-items: center;
  position: relative;
`;
const TodoItemContainer = styled.div`
  display: flex;
  padding: 3px 2px;
  justify-content: space-between;
  align-items: center;

  span {
  padding-left: 2px;
  }

  div {
  display: flex;
  align-items: center;
  }
`;

export default App;