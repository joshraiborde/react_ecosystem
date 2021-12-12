import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
    
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:8080/todoos');
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos))
}

export const displayAlert = text => () => {
    alert(`You clicked on: ${text}`);
};