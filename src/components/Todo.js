import React from 'react'

import TodoList from './TodoList'

const Todo = ({ onTodoDeleteClick, todos }) => (
  <ul>
    {todos.map((todo) =>
      <TodoList
        key={todo.id}
        {...todo}
        onTodoDelete={() => onTodoDeleteClick(todo.id)}
      />
    )}
  </ul>
)

export default Todo
