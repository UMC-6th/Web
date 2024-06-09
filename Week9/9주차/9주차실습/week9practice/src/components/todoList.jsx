
import { useSelector, useDispatch } from 'react-redux';
import { remove, complete } from '../redux/todoSlice';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const TodoText = styled.div`
    flex-grow: 1;
`;

const DeleteButton = styled.button`
    background-color: transparent;
    border: none;
    color: #ff4d4d;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        color: #ff1a1a;
    }
`;

export default function TodoList() {
    const todolist = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const trash = <FontAwesomeIcon icon={faTrashCan} />;

    const todolistView = todolist.map((todo, idx) => (
        <ListItem key={todolist[idx].id}>
            <Checkbox
                type="checkbox"
                onChange={() => dispatch(complete(todolist[idx].id))}
            />
            <TodoText>
                {todo.complete === false ? (
                    <>{todo.text}</>
                ) : (
                    <del>{todo.text}</del>
                )}
            </TodoText>
            <DeleteButton onClick={() => dispatch(remove(todolist[idx].id))}>
                {trash}
            </DeleteButton>
        </ListItem>
    ));

    return <List>{todolistView}</List>;
}