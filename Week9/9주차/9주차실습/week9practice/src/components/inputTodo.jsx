import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/todoSlice';
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextBar = styled.input`
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
`;

const SubmitButton = styled.input`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export default function InputTodo() {
    const dispatch = useDispatch();

    const [todolist, setTodolist] = useState({
        id: 0,
        text: "",
    });

    function handleText(e) {
        setTodolist({ text: e.target.value });
    }

    function onReset() {
        setTodolist({ text: "" });
    }

    return (
        <InputContainer>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (todolist.text !== "") {
                        dispatch(add(todolist.text));
                    } else {
                        alert("할 일을 입력해주세요!");
                    }
                    onReset();
                }}
            >
                <TextBar
                    type="text"
                    value={todolist.text}
                    onChange={handleText}
                />
                <SubmitButton
                    type="submit"
                    value="+"
                />
            </Form>
        </InputContainer>
    );
}