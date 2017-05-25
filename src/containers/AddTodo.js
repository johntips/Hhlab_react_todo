import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import ItemForm from '../components/ItemForm'

let AddTodo = ({dispatch}) => {
  return (
    <ItemForm onSubmit={(item) => { dispatch(addTodo(item)) }} />
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
