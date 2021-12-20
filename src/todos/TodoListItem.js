import React from 'react';
import styled from 'styled-components';
import './TodoListItem.css';

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const CompletedButton = styled.div`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <TodoItemContainer>
        <h3>{todo.text}</h3>
        <ButtonsContainer>
        {todo.isCompleted
        ? null
        :<CompletedButton 
            onClick={() => onCompletedPressed(todo.id)}
            className="completed-button">Mark As Completed</CompletedButton>
        }
            <button
                onClick={() => onRemovePressed(todo.id)}
                className="remove-button">Remove</button>
        </ButtonsContainer>
    </TodoItemContainer>
);

export default TodoListItem;