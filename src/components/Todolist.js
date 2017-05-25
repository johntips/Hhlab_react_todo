import React from 'react'

const TodoList = ({onTodoDelete, text}) => (
  <li>
    {text}
    <button onClick={onTodoDelete}>
      削除
    </button>
  </li>
)

export default TodoList
