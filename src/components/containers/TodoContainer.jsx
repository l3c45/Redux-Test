import React from 'react'
import { connect } from 'react-redux'


import { toggleTodo } from '../../store/actions/actions'

import TodoList from '../pure/TodoList';



const mapStateToProps = (state) => {
    return {
        todos: state.todosState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}


const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;
