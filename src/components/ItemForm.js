import React from 'react'

const ItemForm = ({dispatch, onSubmit}) => {
  let input
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSubmit(input.value)
      input.value = ''
    }}>
      <input type='text' placeholder='タスク名' ref={(node) => {
        input = node
      }} />
      <button>追加</button>
    </form>
  )
}

export default ItemForm
