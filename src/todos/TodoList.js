import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
    loadTodos,
    removeTodoRequest,
    markTodoAsCompletedRequest,
    } from './thunks';
import {
    getTodos,
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos,
     } from './selectors';

import { displayAlert } from './thunks'
import './TodoList.css';

const TodoList = ({ completedTodos, incompletedTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, [] );

    const loadingMessage = <div>Loading todos...</div>;

    const content =  (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}
                // onCompletedPressed={onDisplayAlertClicked}
                />)}
        </div>
    );
    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompletedTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    // onDisplayAlertClicked: text => dispatch (displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);