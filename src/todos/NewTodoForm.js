import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
import { addTodoRequest } from './thunks';
import styled from 'styled-components';

const FormContainer = styled.div`
    border-radius: 8px;
    padding: 16px; /* spacing between the content and the border */
    text-align: center; /* specifies the horizontal alignment of text in an element */
    box-shadow: 0 4px 8px rgb(114, 111, 111); /* attaches one or more shadows to an element */
`;

const NewTodoInput = styled.input`
    font-size: 20px;
    padding: 8px; /* spacing between the content and the border */
    border: none; /* allow you to specify the style, width, and color of an element's border */
    border-bottom: 2px solid rgb(221, 221, 221);
    border-radius: 8px; /* defines the radius of the element's corners */
    width: 70%; /* sets the width of an element. */
    outline: none; /* a line drawn outside the element's border. */
`;

const NewTodoButton = styled.button`
    font-size: 16px;
    padding: 5px; /* spacing between the content and the border */
    border: none; /* allow you to specify the style, width, and color of an element's border */
    border-radius: 8px; /* defines the radius of the element's corners */
    outline: none; /* a line drawn outside the element's border. */
    cursor: pointer; /* The cursor is a pointer and indicates a link */
    margin-left: 8px; /* sets the left margin of an element */
    width: 20%; /* sets the width of an element. */
    background-color: #22adee; /* Set the background color for a page */
`


const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <FormContainer>
            <NewTodoInput
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <NewTodoButton
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                >
                Create Todo
            </NewTodoButton>
        </FormContainer>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);