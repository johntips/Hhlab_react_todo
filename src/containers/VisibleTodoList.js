import { connect } from 'react-redux'
import Todo from '../components/Todo'

import { deleteTodo } from '../actions'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoDeleteClick: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default VisibleTodoList
