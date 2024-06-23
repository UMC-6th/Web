import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos, toggleTodos } from "./redux/reducer";

import styled from "styled-components";



// eslint-disable-next-line react/prop-types
const TodoItem = ({ todo, onToggleHandler, onRemoveHandler }) => {
  return (
    // eslint-disable-next-line react/prop-types
    <TodoItemContainer done={todo.done}>
      <Todolist
        type="checkbox"
        onClick={() => onToggleHandler()}
        // eslint-disable-next-line react/prop-types
        checked={todo.done}
        readOnly={true}
      />
      {/* eslint-disable-next-line react/prop-types */}
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {/* eslint-disable-next-line react/prop-types */}
        {todo.text}
      </span>
      <Delbtn onClick={() => onRemoveHandler()}>➖</Delbtn>
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
    <Contanier>
      <Todotext>Todo List</Todotext>
      <Line />
      <Todoform onSubmit={onSubmitHandler}>
        <Todoinput
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Submitbtn type="submit">➕</Submitbtn>
      </Todoform>

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
    </Contanier>
  );
}



const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  width: 70vw;
  height: 100vh;
  background-color: lightblue;
  border-radius: 30px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  overflow-y: auto;
  scrollbar-width: none;

`;

const Todotext = styled.h1`
  margin-bottom: 10px;
`;

const Line = styled.hr`
  width: 80%;
  margin-bottom: 20px;
  color: white;
  //점선
  border: 2px dashed white;

`;

const Todoform = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 80%;
  height: 50px;
  border-radius: 10px;
`;

const Todoinput = styled.input`
  width: 70%;
  height: 40px;
  border: none;
  background-color: white;
  border-radius: 100px;
`;

const Submitbtn = styled.button`

  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  border-radius: 100px;
  margin-left: 10px;
`

const Todolist = styled.input`
  margin-right: 10px;
  background-color: skyblue;

`;

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => (props.done ? "lightgray" : "white")};
  margin-bottom: 10px;
  padding: 10px;
`;

const Delbtn = styled.button`
  margin-left: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
  margin-left: auto;
`;

export default App;

