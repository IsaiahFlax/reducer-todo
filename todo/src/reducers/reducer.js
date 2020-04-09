export const initialState =   { todos: [
    {
item: 'Learn about reducers',
completed: false,
id: 3892987589
}
]}

export const reducerFunction = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {todos: [  
                ...state.todos, {             
                    item: action.payload,
                    completed: false,
                    id: Date.now()                    
            }]}

        case 'TOGGLE_COMPLETED':
                return {
                    todos: [...state.todos.map( todo => {
                        if(todo.id === action.id ) {
                            return {
                                ...todo,
                                completed: !todo.completed
                            }
                        }
                        return todo;
                    })]
                }
        case "REMOVE_ITEM":
            return {todos: [...state.todos.filter(item => !item.completed)]}

        default: 
            return state
    }
}