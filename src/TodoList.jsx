import Add from '../components/Add';
import Filed from '../components/Filed';

import './App.css'

import { useTodoContext } from './TodoContext';

function TodoList() {
  const { state, dispatch } = useTodoContext();

  const updateData = (newTodo) => {
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    });
  };

  return (
    <>
      <h1>Todo App</h1>
      <Add updateData={updateData} />
      <Filed list={state.todos} />
    </>
  )
}

export default TodoList
