import { createTodo, loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
    try {

        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todoos');
        const todos = await response.json();
    
        dispatch(loadTodosSuccess(todos))
    } catch (e) {

        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}

export const addTodoRequest = text => async dispatch => {
    const body = JSON.stringify({ text });
    const response = await fetch('http://localhose:8080/todos', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'post',
        body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
}

export const displayAlert = text => () => {
    alert(text);
};