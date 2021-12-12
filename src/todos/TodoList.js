import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markTodoAsCompleted } from './actions';
import { displayAlert } from './thunks'
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading}) => {
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
    isLoading: state.isLoading;
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    // onDisplayAlertClicked: text => dispatch (displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);