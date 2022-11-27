// Incremental ID for Todos
let nextTodoID = 0;

// Action Types:
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'



/**
 * 
 * @param {string} text 
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID ++,
            text
        }
    }
}

/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}
