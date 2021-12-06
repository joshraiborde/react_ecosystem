import React, { useState } from 'react';
import { connect } from 'react-redux';
import './NewTodoForm.css'

const NewTodoForm= () => {
    const [inputValue, setInputValue] = useState('');

    return (
    <div className="new-todo-form" >
        <input
            className="new-todo-input"
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value) } />
        <button className="new-todo-button" >Create Todo</button>
    </div>
)
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);